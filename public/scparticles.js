particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ff4da6"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.6012795228245711,"random":false,"anim":{"enable":false,"speed":0.48724632738080703,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"bottom-right","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":316.71011279752463,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});

(function () {
	function applyGlow() {
		var canvas = document.querySelector('#particles-js canvas');
		if (canvas) {
			canvas.style.filter = [
				'drop-shadow(0 0 4px #ff4da6)',
				'drop-shadow(0 0 10px #ff4da6)',
				'drop-shadow(0 0 20px rgba(255,77,166,0.5))'
			].join(' ');
		} else {
			setTimeout(applyGlow, 50);
		}
	}
	applyGlow();
})();
