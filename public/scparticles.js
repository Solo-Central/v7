(function () {
	var BORDERS = {
		def: '#e6398d', blue: '#3b82f6', purple: '#7c3aed', green: '#16a34a',
		red: '#dc2626', orange: '#ea580c', cyan: '#0891b2', white: '#b1b1b3',
	};
	var ACCENTS = {
		def: '#ff4da6', blue: '#60a5fa', purple: '#a78bfa', green: '#4ade80',
		red: '#f87171', orange: '#fb923c', cyan: '#22d3ee', white: '#f9f9fa',
	};

	function getAccent() {
		return getComputedStyle(document.documentElement).getPropertyValue('--accent-main').trim() || '#ff4da6';
	}

	function applyGlow(color) {
		var canvas = document.querySelector('#particles-js canvas');
		if (!canvas) { setTimeout(function () { applyGlow(color); }, 50); return; }
		canvas.style.filter = [
			'drop-shadow(0 0 4px ' + color + ')',
			'drop-shadow(0 0 10px ' + color + ')',
			'drop-shadow(0 0 20px ' + color + ')',
		].join(' ');
	}

	function init() {
		var color = getAccent();
		if (window.pJSDom && window.pJSDom.length) {
			try { window.pJSDom[0].pJS.fn.vendors.destroypJS(); } catch (e) {}
			window.pJSDom = [];
		}
		particlesJS('particles-js', {
			particles: {
				number: { value: 80, density: { enable: true, value_area: 800 } },
				color: { value: color },
				shape: { type: 'circle', stroke: { width: 0, color: '#000000' }, polygon: { nb_sides: 5 } },
				opacity: { value: 0.6, random: false, anim: { enable: false, speed: 0.49, opacity_min: 0.1, sync: false } },
				size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
				line_linked: { enable: false },
				move: { enable: true, speed: 6, direction: 'bottom-right', random: false, straight: false, out_mode: 'out', bounce: false },
			},
			interactivity: {
				detect_on: 'canvas',
				events: { onhover: { enable: true, mode: 'bubble' }, onclick: { enable: false }, resize: true },
				modes: { bubble: { distance: 317, size: 0, duration: 2, opacity: 0, speed: 3 } },
			},
			retina_detect: true,
		});
		applyGlow(color);
	}

	init();

	window.addEventListener('message', function (e) {
		if (!e.data || e.data.type !== 'set-theme') return;
		var accent = ACCENTS[e.data.value];
		var border = BORDERS[e.data.value];
		if (!accent) return;
		document.documentElement.style.setProperty('--accent-main', accent);
		document.documentElement.style.setProperty('--border-main', border);
		init();
	});
})();
