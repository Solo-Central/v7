(function () {
	const urlBar = document.getElementById('url-bar');
	const navForm = document.getElementById('nav-form');
	const navBtns = document.querySelectorAll('.nav-icon[data-page]');
	const contentArea = document.querySelector('.content-area');
	const tabsEl = document.getElementById('tabs');

	const PAGES = {
		home: '/home.html',
		docs: '/docs.html',
		books: '/books.html',
		credits: '/credits.html',
		partners: '/partners.html',
		privacy: '/privacy.html',
		settings: '/settings.html',
	};
	const SOLO_TO_PAGE = { home: 'home', games: 'docs', apps: 'books', credits: 'credits', partners: 'partners', privacy: 'privacy', settings: 'settings' };
	const PAGE_TO_SOLO = { home: 'home', docs: 'games', books: 'apps', credits: 'credits', partners: 'partners', privacy: 'privacy', settings: 'settings' };
	const PAGE_NAMES = { home: 'Home', docs: 'Games', books: 'Apps', credits: 'Credits', partners: 'Partners', privacy: 'Privacy', settings: 'Settings' };

	const { ScramjetController } = $scramjetLoadController();
	const scramjet = new ScramjetController({
		files: {
			wasm: '/scram/scramjet.wasm.wasm',
			all: '/scram/scramjet.all.js',
			sync: '/scram/scramjet.sync.js',
		},
	});
	scramjet.init();
	const conn = new BareMux.BareMuxConnection('/baremux/worker.js');

	(async () => {
		try { await registerSW(); } catch (e) {}
		const wispUrl = (location.protocol === 'https:' ? 'wss' : 'ws') + '://' + location.host + '/wisp/';
		try { await conn.setTransport('/libcurl/index.mjs', [{ websocket: wispUrl }]); } catch (e) {}
	})();

	function getFavicon(url) {
		if (!url) return '/stuff/v7.png';
		try { return 'https://www.google.com/s2/favicons?domain=' + new URL(url).hostname + '&sz=16'; }
		catch (e) { return '/stuff/v7.png'; }
	}

	const initialFrame = document.getElementById('content-frame');

	let tabs = [{ id: 1, title: 'Home', pageKey: 'home', proxyUrl: null, localPath: null, favicon: '/stuff/v7.png', frame: initialFrame, sjInst: null }];
	let activeTabId = 1;
	let nextTabId = 2;

	function getActiveTab() { return tabs.find(t => t.id === activeTabId); }

	function updateActiveTab(patch) {
		const tab = getActiveTab();
		if (tab) Object.assign(tab, patch);
		renderTabs();
	}

	function setActive(page) {
		navBtns.forEach(el => el.classList.toggle('active', el.dataset.page === page));
	}

	function setUrlDisplay(text) {
		if (document.activeElement !== urlBar) urlBar.value = text;
	}

	function soloUrl(page) { return 'solo://' + (PAGE_TO_SOLO[page] || page); }

	function hideAllFrames() {
		contentArea.querySelectorAll('iframe').forEach(f => { f.style.display = 'none'; });
	}

	function addLocalLoadListener(f) {
		f.addEventListener('load', function () {
			const tab = tabs.find(t => t.frame === f);
			if (!tab || tab.id !== activeTabId) return;
			if (tab.pageKey) {
				setUrlDisplay(soloUrl(tab.pageKey));
			} else {
				try { setUrlDisplay(f.contentWindow.location.href); }
				catch (e) { setUrlDisplay(f.src); }
			}
		});
	}

	function makeLocalFrame(src) {
		const f = document.createElement('iframe');
		f.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;border:none;background:#000;display:none;';
		f.src = src;
		contentArea.appendChild(f);
		addLocalLoadListener(f);
		return f;
	}

	function makeProxyFrame(url) {
		const sj = scramjet.createFrame();
		sj.frame.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;border:none;display:none;';
		sj.frame.addEventListener('load', function () {
			const tab = tabs.find(t => t.frame === sj.frame);
			if (!tab || tab.id !== activeTabId) return;
			try {
				const href = sj.frame.contentWindow.location.href;
				const pfx = location.origin + '/scramjet/';
				const real = href.startsWith(pfx) ? decodeURIComponent(href.slice(pfx.length)) : href;
				setUrlDisplay(real);
				updateActiveTab({ proxyUrl: real, title: real, favicon: getFavicon(real) });
			} catch (e) {}
		});
		contentArea.appendChild(sj.frame);
		sj.go(url);
		return sj;
	}

	addLocalLoadListener(initialFrame);

	function renderTabs() {
		tabsEl.innerHTML = '';
		tabs.forEach(function (tab) {
			const li = document.createElement('li');
			li.className = 'tab' + (tab.id === activeTabId ? ' active' : '');

			const fav = document.createElement('img');
			fav.className = 'tab-favicon';
			fav.src = tab.favicon || '/stuff/v7.png';
			fav.onerror = function () { this.style.display = 'none'; };

			const title = document.createElement('span');
			title.className = 'tab-title';
			title.textContent = tab.title || 'New Tab';

			const close = document.createElement('span');
			close.className = 'tab-close';
			const closeIcon = document.createElement('i');
			closeIcon.className = 'sci sci-x';
			close.appendChild(closeIcon);
			close.addEventListener('click', function (e) { e.stopPropagation(); closeTab(tab.id); });

			li.appendChild(fav);
			li.appendChild(title);
			li.appendChild(close);
			li.addEventListener('click', function () { switchTab(tab.id); });
			tabsEl.appendChild(li);
		});

		const newTabBtn = document.createElement('button');
		newTabBtn.className = 'new-tab-btn';
		newTabBtn.textContent = '+';
		newTabBtn.title = 'New tab';
		newTabBtn.addEventListener('click', newTab);
		tabsEl.appendChild(newTabBtn);
	}

	function switchTab(id) {
		if (id === activeTabId) return;
		activeTabId = id;
		const tab = getActiveTab();
		if (!tab) return;

		hideAllFrames();
		if (tab.frame) tab.frame.style.display = '';

		setActive(tab.pageKey || null);
		if (tab.proxyUrl) setUrlDisplay(tab.proxyUrl);
		else if (tab.localPath) setUrlDisplay(location.origin + tab.localPath);
		else if (tab.pageKey) setUrlDisplay(soloUrl(tab.pageKey));

		renderTabs();
	}

	function closeTab(id) {
		if (tabs.length === 1) {
			const tab = tabs[0];
			if (tab.sjInst) {
				tab.frame.remove();
				tab.frame = makeLocalFrame(PAGES.home);
				tab.sjInst = null;
			} else {
				tab.frame.src = PAGES.home;
			}
			Object.assign(tab, { title: 'Home', pageKey: 'home', proxyUrl: null, localPath: null, favicon: '/stuff/v7.png' });
			hideAllFrames();
			tab.frame.style.display = '';
			setActive('home');
			setUrlDisplay(soloUrl('home'));
			renderTabs();
			return;
		}
		const idx = tabs.findIndex(t => t.id === id);
		const closing = tabs[idx];
		if (closing.frame) closing.frame.remove();
		tabs = tabs.filter(t => t.id !== id);

		if (activeTabId === id) {
			activeTabId = tabs[Math.min(idx, tabs.length - 1)].id;
			const next = getActiveTab();
			hideAllFrames();
			if (next && next.frame) next.frame.style.display = '';
			setActive(next ? next.pageKey || null : null);
			if (next) {
				if (next.proxyUrl) setUrlDisplay(next.proxyUrl);
				else if (next.localPath) setUrlDisplay(location.origin + next.localPath);
				else if (next.pageKey) setUrlDisplay(soloUrl(next.pageKey));
			}
		}
		renderTabs();
	}

	function newTab() {
		const id = nextTabId++;
		const f = makeLocalFrame(PAGES.home);
		tabs.push({ id, title: 'Home', pageKey: 'home', proxyUrl: null, localPath: null, favicon: '/stuff/v7.png', frame: f, sjInst: null });
		activeTabId = id;
		hideAllFrames();
		f.style.display = '';
		setActive('home');
		setUrlDisplay(soloUrl('home'));
		renderTabs();
	}

	function goToPage(page) {
		if (!PAGES[page]) page = 'home';
		const tab = getActiveTab();
		if (tab.sjInst) {
			tab.frame.remove();
			tab.frame = makeLocalFrame(PAGES[page]);
			tab.sjInst = null;
		} else {
			tab.frame.src = PAGES[page];
		}
		hideAllFrames();
		tab.frame.style.display = '';
		setActive(page);
		setUrlDisplay(soloUrl(page));
		updateActiveTab({ pageKey: page, proxyUrl: null, localPath: null, title: PAGE_NAMES[page] || page, favicon: '/stuff/v7.png' });
	}

	function navigateLocal(path) {
		const tab = getActiveTab();
		if (tab.sjInst) {
			tab.frame.remove();
			tab.frame = makeLocalFrame(path);
			tab.sjInst = null;
		} else {
			tab.frame.src = path;
		}
		hideAllFrames();
		tab.frame.style.display = '';
		setActive(null);
		setUrlDisplay(location.origin + path);
	}

	async function goProxy(input) {
		if (input.startsWith('/')) {
			navigateLocal(input);
			updateActiveTab({ pageKey: null, proxyUrl: null, localPath: input, title: input.split('/').pop() || input, favicon: '/stuff/v7.png' });
			return;
		}
		const url = search(input, 'https://www.google.com/search?q=%s');
		const tab = getActiveTab();
		if (tab.sjInst) {
			tab.sjInst.go(url);
		} else {
			if (tab.frame) tab.frame.remove();
			const sj = makeProxyFrame(url);
			tab.frame = sj.frame;
			tab.sjInst = sj;
		}
		hideAllFrames();
		tab.frame.style.display = '';
		setActive(null);
		setUrlDisplay(url);
		updateActiveTab({ pageKey: null, proxyUrl: url, localPath: null, title: url, favicon: getFavicon(url) });
	}

	navBtns.forEach(el => el.addEventListener('click', () => goToPage(el.dataset.page)));

	navForm.addEventListener('submit', async (e) => {
		e.preventDefault();
		const val = urlBar.value.trim();
		if (!val) return;
		if (val.startsWith('solo://')) {
			const path = val.slice(7).toLowerCase().replace(/\/$/, '');
			const pageKey = SOLO_TO_PAGE[path];
			if (pageKey) { goToPage(pageKey); return; }
		}
		await goProxy(val);
	});

	document.getElementById('btn-back').addEventListener('click', () => {
		const tab = getActiveTab();
		if (!tab || !tab.frame) return;
		try { tab.frame.contentWindow.history.back(); } catch (e) {}
	});

	document.getElementById('btn-fwd').addEventListener('click', () => {
		const tab = getActiveTab();
		if (!tab || !tab.frame) return;
		try { tab.frame.contentWindow.history.forward(); } catch (e) {}
	});

	document.getElementById('btn-refresh').addEventListener('click', () => {
		const tab = getActiveTab();
		if (!tab || !tab.frame) return;
		try { tab.frame.contentWindow.location.reload(); } catch (e) {}
	});

	window.addEventListener('message', (e) => {
		if (!e.data) return;
		if (e.data.type === 'navigate') {
			const url = e.data.url;
			if (url.startsWith('/')) {
				navigateLocal(url);
				updateActiveTab({ pageKey: null, proxyUrl: null, localPath: url, title: url.split('/').pop() || url, favicon: '/stuff/v7.png' });
			} else {
				urlBar.value = url;
				goProxy(url);
			}
		}
		if (e.data.type === 'title') {
			updateActiveTab({ title: e.data.value });
		}
		if (e.data.type === 'set-theme') {
			var THEMES = {
				def:    { accent: '#ff4da6', border: '#e6398d' },
				blue:   { accent: '#60a5fa', border: '#3b82f6' },
				purple: { accent: '#a78bfa', border: '#7c3aed' },
				green:  { accent: '#4ade80', border: '#16a34a' },
				red:    { accent: '#f87171', border: '#dc2626' },
				orange: { accent: '#fb923c', border: '#ea580c' },
				cyan:   { accent: '#22d3ee', border: '#0891b2' },
				white:  { accent: '#f9f9fa', border: '#b1b1b3' },
			};
			var t = THEMES[e.data.value] || THEMES.def;
			document.documentElement.style.setProperty('--accent-main', t.accent);
			document.documentElement.style.setProperty('--border-main', t.border);
			const active = getActiveTab();
			if (active && active.frame) {
				try { active.frame.contentWindow.postMessage({ type: 'set-theme', value: e.data.value }, '*'); } catch (ex) {}
			}
		}
		if (e.data.type === 'set-cloak') {
			if (e.data.title) document.title = e.data.title;
			if (e.data.favicon) {
				var link = document.querySelector('link[rel="icon"]');
				if (link) link.href = e.data.favicon;
			}
		}
	});

	renderTabs();
	setUrlDisplay(soloUrl('home'));
})();
