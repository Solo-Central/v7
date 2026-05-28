(function () {
	const urlBar = document.getElementById('url-bar');
	const navForm = document.getElementById('nav-form');
	const contentFrame = document.getElementById('content-frame');
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

	let sjFrame = null;
	let proxyActive = false;
	let currentPage = 'home';

	function getFavicon(url) {
		if (!url) return '/stuff/v7.png';
		try {
			var host = new URL(url).hostname;
			return 'https://www.google.com/s2/favicons?domain=' + host + '&sz=16';
		} catch (e) {
			return '/stuff/v7.png';
		}
	}

	let tabs = [{ id: 1, title: 'Home', pageKey: 'home', proxyUrl: null, localPath: null, favicon: '/stuff/v7.png' }];
	let activeTabId = 1;
	let nextTabId = 2;

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

	function setActive(page) {
		navBtns.forEach(el => el.classList.toggle('active', el.dataset.page === page));
	}

	function setUrlDisplay(text) {
		if (document.activeElement !== urlBar) urlBar.value = text;
	}

	function soloUrl(page) {
		return 'solo://' + (PAGE_TO_SOLO[page] || page);
	}

	function getActiveTab() {
		return tabs.find(t => t.id === activeTabId);
	}

	function updateActiveTab(patch) {
		const tab = getActiveTab();
		if (tab) Object.assign(tab, patch);
		renderTabs();
	}

	function renderTabs() {
		tabsEl.innerHTML = '';
		tabs.forEach(function (tab) {
			const li = document.createElement('li');
			li.className = 'tab' + (tab.id === activeTabId ? ' active' : '');

			const close = document.createElement('span');
			close.className = 'tab-close';
			const closeIcon = document.createElement('i');
			closeIcon.className = 'sci sci-x';
			close.appendChild(closeIcon);
			close.addEventListener('click', function (e) {
				e.stopPropagation();
				closeTab(tab.id);
			});

			const favicon = document.createElement('img');
			favicon.className = 'tab-favicon';
			favicon.src = tab.favicon || '/stuff/v7.png';
			favicon.onerror = function () { this.style.display = 'none'; };

			const title = document.createElement('span');
			title.className = 'tab-title';
			title.textContent = tab.title || 'New Tab';

			li.appendChild(favicon);
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
		if (tab.proxyUrl) {
			goProxy(tab.proxyUrl);
		} else if (tab.localPath) {
			navigateLocal(tab.localPath);
		} else {
			goToPage(tab.pageKey || 'home');
		}
	}

	function closeTab(id) {
		if (tabs.length === 1) {
			const tab = tabs[0];
			Object.assign(tab, { title: 'Home', pageKey: 'home', proxyUrl: null, localPath: null, favicon: '/stuff/v7.png' });
			goToPage('home');
			return;
		}
		const idx = tabs.findIndex(t => t.id === id);
		tabs = tabs.filter(t => t.id !== id);
		if (activeTabId === id) {
			activeTabId = tabs[Math.min(idx, tabs.length - 1)].id;
			switchTab(activeTabId);
		} else {
			renderTabs();
		}
	}

	function newTab() {
		const id = nextTabId++;
		tabs.push({ id, title: 'Home', pageKey: 'home', proxyUrl: null, localPath: null, favicon: '/stuff/v7.png' });
		activeTabId = id;
		goToPage('home');
	}

	function activateProxy() {
		if (!sjFrame) {
			sjFrame = scramjet.createFrame();
			sjFrame.frame.id = 'sj-frame';
			sjFrame.frame.addEventListener('load', () => {
				if (!proxyActive) return;
				try {
					const href = sjFrame.frame.contentWindow.location.href;
					const scramPrefix = location.origin + '/scramjet/';
					const real = href.startsWith(scramPrefix) ? decodeURIComponent(href.slice(scramPrefix.length)) : href;
					setUrlDisplay(real);
					updateActiveTab({ proxyUrl: real, title: real, favicon: getFavicon(real) });
				} catch (e) {}
			});
			contentArea.appendChild(sjFrame.frame);
		}
		sjFrame.frame.style.display = '';
		contentFrame.style.display = 'none';
		proxyActive = true;
		setActive(null);
	}

	function navigateLocal(path) {
		if (sjFrame) sjFrame.frame.style.display = 'none';
		contentFrame.style.display = '';
		contentFrame.src = path;
		proxyActive = false;
		currentPage = null;
		setActive(null);
		setUrlDisplay(location.origin + path);
	}

	function goToPage(page) {
		if (!PAGES[page]) page = 'home';
		if (sjFrame) sjFrame.frame.style.display = 'none';
		contentFrame.style.display = '';
		contentFrame.src = PAGES[page];
		proxyActive = false;
		currentPage = page;
		setActive(page);
		setUrlDisplay(soloUrl(page));
		updateActiveTab({ pageKey: page, proxyUrl: null, localPath: null, title: PAGE_NAMES[page] || page, favicon: '/stuff/v7.png' });
	}

	async function goProxy(input) {
		if (input.startsWith('/')) {
			navigateLocal(input);
			updateActiveTab({ pageKey: null, proxyUrl: null, localPath: input, title: input.split('/').pop() || input, favicon: '/stuff/v7.png' });
			return;
		}
		const url = search(input, 'https://www.google.com/search?q=%s');
		activateProxy();
		setUrlDisplay(url);
		sjFrame.go(url);
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
		try {
			if (proxyActive) sjFrame.frame.contentWindow.history.back();
			else contentFrame.contentWindow.history.back();
		} catch (e) {}
	});

	document.getElementById('btn-fwd').addEventListener('click', () => {
		try {
			if (proxyActive) sjFrame.frame.contentWindow.history.forward();
			else contentFrame.contentWindow.history.forward();
		} catch (e) {}
	});

	document.getElementById('btn-refresh').addEventListener('click', () => {
		try {
			if (proxyActive) sjFrame.frame.contentWindow.location.reload();
			else contentFrame.contentWindow.location.reload();
		} catch (e) {}
	});

	contentFrame.addEventListener('load', () => {
		if (proxyActive) return;
		if (currentPage) {
			setUrlDisplay(soloUrl(currentPage));
		} else {
			try {
				setUrlDisplay(contentFrame.contentWindow.location.href);
			} catch (e) {
				setUrlDisplay(contentFrame.src);
			}
		}
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
			try { contentFrame.contentWindow.postMessage({ type: 'set-theme', value: e.data.value }, '*'); } catch (ex) {}
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
