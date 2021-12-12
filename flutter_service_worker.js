'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/62/dd61e5d0033f726c86fd74b00c7a1eb4a715c5": "b09ccd2e4879a9e9c3b859c34db42d2a",
".git/objects/f8/27cc63714dbad3ca80067e33dc415c345766e3": "b510f931e610a6fdd9eb24074c597cb1",
".git/objects/db/fe22d81073d78312b4ed6db7c5155daf94c36c": "5b826b314c981ed58dc152c949cb2cb5",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c2/ee00e64c3ea763fcb11299897db3886ffa5ef6": "84c2d21805b0108e682f6e2c9dae5542",
".git/objects/e3/1c7b962ace26f29ddad5e050632494f9b8e6a4": "e1c193f0e7d5d5f338dbbb8164fcc7b4",
".git/objects/ec/f879f5d2f774a640d0ccb909d5854f6a23cc86": "00b6a07da8f8cfa89f094d6d1726e400",
".git/objects/27/42c5f4cf309b41e7f70284089f64cb0646d79b": "146b65160782544f3308666f8b21183d",
".git/objects/7f/e31289ce91cbc8e94d23e5b01413dce22f682d": "95fdec51b9cb1ed62ede0a2e7ab23cce",
".git/objects/7f/ec4d90d5dd24e89f5cfbbf4011baa08791a3ed": "0e0945cf527a4c37a0cd27652a55774b",
".git/objects/12/216d678ec3b5c45727705eaad8e79d10ff4116": "de6baf1010c9a04eb81aa792e2b67b01",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/40/bc29dd5212bffe734ecde1338d650b7eb17621": "a6e0b5b876559c706f08306e8ed21514",
".git/objects/45/158dc89a412fe9305827fd48fab86cff91305f": "6e963dfab984b7397d398e8f7615631c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/f5/9f6aadae79ba87a8473f06a6e64ecf3a046081": "fa81b02a557efbea31993ec36522cee4",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/da/b13363a86e4c5eb304f767ce393c3163dac366": "b2a30dadb301f4298c61d6994dfbe845",
".git/objects/1f/62703fc2cfec948ca57c4da2ec88a7a059ec54": "165f0129695acf016fa8c014da359449",
".git/objects/f7/3cdb1033054da2cbeae69aab1a60e16bbb0782": "4804aeb9ab1e465d0b6c820f55d29a3e",
".git/objects/75/b52484ea471f882c29e02693b4f02dba175b5e": "abde8da409a47de8393ecd2e34a93779",
".git/objects/11/5900cffce6f8539fdba8185c1edf2f1a03e67c": "9f7c71170a7964a587b62708c505bdb9",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/9a/8b5b5042a7c8dc906a732b26a01761c9329d92": "05e206e0ad21a30cb8bf9a49bc2d0bd3",
".git/objects/39/668e99fde3463e027637017edaccd8b0aedd33": "3f51981e991dfd279ad3f0d34fd42afa",
".git/objects/21/c54c72cc045f30c28cfd762be75b7b4e49a258": "782c47c23aa6381c60ff788c24df928c",
".git/objects/79/35a44a97f74b1ba9e667b91e537041a462b03f": "a5cf1452641db34a4716ef27e5b9588d",
".git/objects/99/d491b9810d692f4e04a3a7db88e2bb5f956e92": "19d4ddca02c14ecbf44452a5a57e7734",
".git/objects/7a/3d2d9b03fca8824b7100f34461860545ad6e07": "5a35954e49f5a1249ccf2143ee3b7ea5",
".git/objects/d7/eac6581223d93c3cc66680473a1daca76f26a4": "6acf01345d188d723792949da6fc608d",
".git/objects/5c/409c6ec72c633c1d40b319f38aae45ac96e2b5": "ad80f2cb19001f90167ec65fefd0baba",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/0c/961fe718017a6708aaca8be6c5b9485b2f6837": "6ba5515f94b3ccd1ca6fdae151c8eedd",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/43/dd8f42bec90404439cdd5fe49f4acf8de920d7": "3a07b0e7314c67c43390e7bd61a6930e",
".git/objects/18/eef8b6915c404e194c1bee848ae8f0b17fdd2d": "8b60399d4030479f58f5ed312468ab13",
".git/objects/cb/2da163b0ed5f3d6fdbd0c2ce799a9e78783f80": "9b75537376e83b1dd5470c317c76c172",
".git/objects/06/c4ed9c5b98467a61365174cf334955ced40bed": "c12ba5ef6c5362dceb0ae60559d11e95",
".git/objects/06/8e0b7eeff00847fd762f6620b54711b9db7b27": "1f911ad7f1be7f666ad4d2b1dea4b191",
".git/objects/c0/f47d8afd6be724e1562a59b982789561d56218": "ad1a859c166fdd0f37762bcadd8648a7",
".git/objects/07/56a85332263fff76afe7c3a7637284251abe3b": "3785a3d3f237ebd3924edd79c59970ca",
".git/objects/4e/cf3f9116e8dbcda49ac3a748e7adb3a474a9eb": "b9175fe97404054cf003eb2660c4694b",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/e1/c87ae5545bf3ad4c6a0ec7e6d66ebe1cdb786f": "323ea42e6fc2b62e8d79e953e70cdd73",
".git/objects/6c/83e716ef13fd6b29846001ab6bc6b5800ec13c": "13eb989da1902fafb6e601a85e59efc8",
".git/objects/de/8f248c2380f0d08dfb7850968d573cbf929c3d": "7ffae0bf94d3faca9fcc88974acf1ac2",
".git/objects/52/ef6f37aa6ca1398d27aeea012ac649b7423844": "e6c36f4c3048789d0693bb21be88e2d1",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/cf/c964e4dc970a86c7c21845c46d37bb9ae6cf75": "c6cc3f45b7061c853418aad387b8eb6c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/index": "feb3a8742e47440094daadd92900326b",
".git/COMMIT_EDITMSG": "cd906842802d25e429aa69c87a25b57e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/refs/remotes/origin/main": "2af2b13e4e83ac3b949d22eeb228363e",
".git/refs/heads/main": "2af2b13e4e83ac3b949d22eeb228363e",
".git/logs/HEAD": "c2f28a6192b657784965f3a9cfc97299",
".git/logs/refs/remotes/origin/main": "9a44c203e6270918c2a6e45d9b998a03",
".git/logs/refs/heads/main": "26d19e0df4276fca342cbcd1be923308",
".git/config": "8506a34955f53564be613285edc21124",
"manifest.json": "ee1d07322059100caf82fa93e1b2b664",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/AssetManifest.json": "dae86bef7c4540a931501f16c2e9c2e7",
"assets/NOTICES": "ae1c992d0745c7858857fdaee66a1c0d",
"assets/fonts/RobotoCondensed-Bold.ttf": "cbd4e701269338259ee0b39a0b768167",
"assets/fonts/RobotoCondensed-BoldItalic.ttf": "c783051f11a8f369e8acc7adfcb5478d",
"assets/fonts/RobotoCondensed-Regular.ttf": "52ee8b598488b1ffbaa93e50cbd6a2f4",
"assets/fonts/RobotoCondensed-LightItalic.ttf": "f0177f3fd234ac8664509f19aef620fb",
"assets/fonts/LICENSE.txt": "d273d63619c9aeaf15cdaf76422c4f87",
"assets/fonts/RobotoCondensed-Light.ttf": "885e5558c90864ddb72ad486f36470cc",
"assets/fonts/RobotoCondensed-Italic.ttf": "d6fc5ec5403ec65bdaecfe44b7b84402",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/assets/images/layout_old.png": "58372299d49db569804ca19dc9188241",
"assets/assets/images/two_player_normal.png": "3d344af36c3d0f5352b5b2f1b46f11f0",
"assets/assets/images/layout_rotated.png": "1b9d525760f65fcb17329561f62cc30b",
"assets/assets/images/infect_mana.png": "625e992693bc45d1b0f05d5c26bedfad",
"assets/assets/images/two_player_counters.png": "2c7a13e26198c8109a2a1bb62934b410",
"assets/assets/images/layout_new.png": "9e1cb70c4766c3679d2cfcb9437e351e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"index.html": "c8fe66ecf6640b9f950778465615bffe",
"/": "c8fe66ecf6640b9f950778465615bffe",
"version.json": "28628175794a495e500afdb484542389",
"main.dart.js": "47d444899f0c57b1880e382556b6f3bd"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
