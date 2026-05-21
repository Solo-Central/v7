(function () {
  var DATA_FILE = 'baldis-basics.data.unityweb';
  var PART_URLS = [
    'Build/baldis-basics.data.unityweb.part1',
    'Build/baldis-basics.data.unityweb.part2',
    'Build/baldis-basics.data.unityweb.part3',
    'Build/baldis-basics.data.unityweb.part4'
  ];

  function fetchBuf(url) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.responseType = 'arraybuffer';
      xhr.onload = function () {
        xhr.status >= 200 && xhr.status < 300
          ? resolve(xhr.response)
          : reject(new Error('HTTP ' + xhr.status + ' ' + url));
      };
      xhr.onerror = function () { reject(new Error('Network error: ' + url)); };
      xhr.send();
    });
  }

  Promise.all(PART_URLS.map(fetchBuf)).then(function (bufs) {
    var total = bufs.reduce(function (s, b) { return s + b.byteLength; }, 0);
    var out = new Uint8Array(total);
    var off = 0;
    bufs.forEach(function (b) { out.set(new Uint8Array(b), off); off += b.byteLength; });

    var blobUrl = URL.createObjectURL(new Blob([out]));

    var _open = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function (method, url, async, user, pass) {
      if (typeof url === 'string' && url.indexOf(DATA_FILE) !== -1) url = blobUrl;
      return _open.call(this, method, url, async !== false, user, pass);
    };

    window.gameInstance = UnityLoader.instantiate('gameContainer', 'Build/baldis-basics.json');
  }).catch(function (err) {
    console.error('[unitylauncher] part load failed:', err);
  });
})();
