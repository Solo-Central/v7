(async function () {
	if (navigator.serviceWorker) {
		try { await navigator.serviceWorker.register('/sw.js'); } catch (e) {}
		await navigator.serviceWorker.ready;
	}
	const conn = new BareMux.BareMuxConnection('/baremux/worker.js');
	const wispUrl = (location.protocol === 'https:' ? 'wss' : 'ws') + '://' + location.host + '/wisp/';
	try { await conn.setTransport('/libcurl/index.mjs', [{ websocket: wispUrl }]); } catch (e) {}

	const deferred = document.querySelectorAll('iframe[data-src]');
	deferred.forEach(function (f) { f.src = f.dataset.src; });
})();
