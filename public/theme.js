(function () {
	var THEMES = {
		def:   { accent: '#ff4da6', border: '#e6398d' },
		blue:   { accent: '#60a5fa', border: '#3b82f6' },
		purple: { accent: '#a78bfa', border: '#7c3aed' },
		green:  { accent: '#4ade80', border: '#16a34a' },
		red:    { accent: '#f87171', border: '#dc2626' },
		orange: { accent: '#fb923c', border: '#ea580c' },
		cyan:   { accent: '#22d3ee', border: '#0891b2' },
		white:  { accent: '#f9f9fa', border: '#b1b1b3' },
	};
	var saved = localStorage.getItem('sc-theme') || 'def';
	var t = THEMES[saved] || THEMES.def;
	var root = document.documentElement;
	root.style.setProperty('--accent-main', t.accent);
	root.style.setProperty('--border-main', t.border);
})();
