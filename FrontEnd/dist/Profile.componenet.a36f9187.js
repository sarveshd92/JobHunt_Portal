// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"9zMKr":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "98d0c422a36f9187";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"fyUz7":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$27e0 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$27e0.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$27e0.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactRedux = require("react-redux");
var _userslice = require("../Utils/Store/userslice");
var _reactToastify = require("react-toastify");
var _axios = require("axios");
var _axiosDefault = parcelHelpers.interopDefault(_axios);
var _appliedJobsNavbarComponentJs = require("./AppliedJobs_navbar.component.js");
var _appliedJobsNavbarComponentJsDefault = parcelHelpers.interopDefault(_appliedJobsNavbarComponentJs);
var _applicationSliceJs = require("../Utils/Store/applicationSlice.js");
var _constantJs = require("../Utils/constant.js");
var _s = $RefreshSig$();
// import { updateProfile } from "./profileSlice"; // Replace with your actual action
const Profile = ()=>{
    _s();
    const fileinputref = (0, _react.useRef)(null);
    const skills1 = [
        "html",
        "css",
        "js"
    ];
    const data = [
        {
            company: "ABC Corp",
            role: "Software Engineer",
            status: "Applied"
        },
        {
            company: "XYZ Inc",
            role: "Frontend Developer",
            status: "Interviewed"
        },
        {
            company: "Tech Solutions",
            role: "Backend Developer",
            status: "Rejected"
        }
    ];
    const { userdata_global } = (0, _reactRedux.useSelector)((store)=>store.userslice);
    const [applidata, setapplidata] = (0, _react.useState)([]);
    const dispatch = (0, _reactRedux.useDispatch)();
    const [uploadfile, setuploadfile] = (0, _react.useState)({});
    // State for popup and form data
    const [popup, setPopup] = (0, _react.useState)(false);
    const [formData, setFormData] = (0, _react.useState)({
        fullname: userdata_global?.data?.fullname || "",
        bio: userdata_global?.data?.Profile?.bio || "",
        email: userdata_global?.data?.email || "",
        phoneno: userdata_global?.data?.phoneno || "",
        resumeUpload: userdata_global?.data?.Profile.resume || "",
        skills: userdata_global?.data?.Profile?.skills || ""
    });
    // Handle input change
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    // Handle form submission
    const handleSubmit = (e)=>{
        e.preventDefault();
        // console.log("going this data to backend",formData)
        fetchdata();
        setPopup(false); // Close popup after submission
    };
    // console.log("profile compoentent->",userdata_global)
    const fetchdata = async ()=>{
        try {
            const data = await (0, _axiosDefault.default).post((0, _constantJs.localhost) + "/api/v1/user/profile/update", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                withCredentials: true
            });
            if (data?.data?.success) {
                (0, _reactToastify.toast).success(data?.data?.message);
                dispatch((0, _userslice.setuserdata_global)(data.data));
            }
        } catch (error) {
            // console.log(error?.response)
            (0, _reactToastify.toast).error(`${error.message}`);
        }
    };
    // Avoid Separate State: Agar tu file ko uploadfile mein set kar raha hai aur uske baad formData mein,
    //  toh state update ka delay issue aayega. Isliye, directly formData mein set kar dena best practice hai.
    // Spelling Mistakes: FormData ki jagah formData use kar, aur uloadfile ki jagah uploadfile use kar.
    const handleinputfile = (e)=>{
        const file = e.target.files[0];
        if (file) {
            // Update the uploadfile state first
            setuploadfile(file);
            // Then update formData after the uploadfile state is updated
            setFormData((prevFormData)=>({
                    ...prevFormData,
                    resumeUpload: file
                }));
        // console.log(formData)
        } else setFormData({
            ...formData,
            resumeUpload: userdata_global?.Profile?.resume
        });
    };
    const fetchjobdata = async ()=>{
        try {
            const data = await (0, _axiosDefault.default).get("http://localhost:7777/api/v1/application/appliedjobs", {
                withCredentials: true
            });
            // console.log("jobdata",data)
            setapplidata(data?.data?.result);
        } catch (error) {}
    };
    (0, _react.useEffect)(()=>{
        fetchjobdata();
    }, [
        setapplidata
    ]);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "flex flex-col mx-auto my-auto w-4/5",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "flex h-[70%] w-[70%] my-auto p-5 mx-auto shadow-lg rounded-lg",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "w-[95%]",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "flex gap-5 mt-4",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                            className: "w-20 h-16 rounded-lg shadow-md",
                                            src: "https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg",
                                            alt: "Company Logo"
                                        }, void 0, false, {
                                            fileName: "Components/Profile.componenet.js",
                                            lineNumber: 122,
                                            columnNumber: 29
                                        }, undefined)
                                    }, void 0, false, {
                                        fileName: "Components/Profile.componenet.js",
                                        lineNumber: 121,
                                        columnNumber: 25
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                className: "text-lg font-bold",
                                                children: userdata_global?.data?.fullname || "Guest"
                                            }, void 0, false, {
                                                fileName: "Components/Profile.componenet.js",
                                                lineNumber: 129,
                                                columnNumber: 29
                                            }, undefined),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                className: "text-gray-500",
                                                children: userdata_global?.data?.Profile?.bio || "Description"
                                            }, void 0, false, {
                                                fileName: "Components/Profile.componenet.js",
                                                lineNumber: 130,
                                                columnNumber: 29
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "Components/Profile.componenet.js",
                                        lineNumber: 128,
                                        columnNumber: 25
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "Components/Profile.componenet.js",
                                lineNumber: 120,
                                columnNumber: 21
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "mt-4",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "flex items-center mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
                                                className: "h-5 w-5 text-gray-400",
                                                width: "24",
                                                height: "24",
                                                viewBox: "0 0 24 24",
                                                strokeWidth: "2",
                                                stroke: "currentColor",
                                                fill: "none",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
                                                        stroke: "none",
                                                        d: "M0 0h24v24H0z"
                                                    }, void 0, false, {
                                                        fileName: "Components/Profile.componenet.js",
                                                        lineNumber: 136,
                                                        columnNumber: 33
                                                    }, undefined),
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("rect", {
                                                        x: "3",
                                                        y: "5",
                                                        width: "18",
                                                        height: "14",
                                                        rx: "2"
                                                    }, void 0, false, {
                                                        fileName: "Components/Profile.componenet.js",
                                                        lineNumber: 137,
                                                        columnNumber: 33
                                                    }, undefined),
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("polyline", {
                                                        points: "3 7 12 13 21 7"
                                                    }, void 0, false, {
                                                        fileName: "Components/Profile.componenet.js",
                                                        lineNumber: 138,
                                                        columnNumber: 33
                                                    }, undefined)
                                                ]
                                            }, void 0, true, {
                                                fileName: "Components/Profile.componenet.js",
                                                lineNumber: 135,
                                                columnNumber: 29
                                            }, undefined),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                                href: "mailto:dummy@gmail.com",
                                                className: "ml-2 font-medium hover:underline text-sm",
                                                children: userdata_global?.data?.email
                                            }, void 0, false, {
                                                fileName: "Components/Profile.componenet.js",
                                                lineNumber: 140,
                                                columnNumber: 29
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "Components/Profile.componenet.js",
                                        lineNumber: 134,
                                        columnNumber: 25
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
                                                className: "h-5 w-5 text-gray-400",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2",
                                                    d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                }, void 0, false, {
                                                    fileName: "Components/Profile.componenet.js",
                                                    lineNumber: 144,
                                                    columnNumber: 33
                                                }, undefined)
                                            }, void 0, false, {
                                                fileName: "Components/Profile.componenet.js",
                                                lineNumber: 143,
                                                columnNumber: 29
                                            }, undefined),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                                href: "tel:1234567890",
                                                className: "ml-2 font-medium hover:underline text-sm",
                                                children: userdata_global?.data?.phoneno
                                            }, void 0, false, {
                                                fileName: "Components/Profile.componenet.js",
                                                lineNumber: 146,
                                                columnNumber: 29
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "Components/Profile.componenet.js",
                                        lineNumber: 142,
                                        columnNumber: 25
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "Components/Profile.componenet.js",
                                lineNumber: 133,
                                columnNumber: 21
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "mt-4",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                                        className: "font-medium",
                                        children: "Skills"
                                    }, void 0, false, {
                                        fileName: "Components/Profile.componenet.js",
                                        lineNumber: 150,
                                        columnNumber: 25
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "flex flex-wrap mt-2",
                                        children: userdata_global?.data?.Profile?.skills.map((sk, idx)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                className: "bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500",
                                                children: sk
                                            }, idx, false, {
                                                fileName: "Components/Profile.componenet.js",
                                                lineNumber: 154,
                                                columnNumber: 33
                                            }, undefined))
                                    }, void 0, false, {
                                        fileName: "Components/Profile.componenet.js",
                                        lineNumber: 151,
                                        columnNumber: 25
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "Components/Profile.componenet.js",
                                lineNumber: 149,
                                columnNumber: 21
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "mt-4 flex justify-between w-[100%] items-center ",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                                                className: "font-medium",
                                                children: "Resume"
                                            }, void 0, false, {
                                                fileName: "Components/Profile.componenet.js",
                                                lineNumber: 162,
                                                columnNumber: 25
                                            }, undefined),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                                                className: "font-normal",
                                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                                    href: `${userdata_global?.data?.Profile?.resume || "#"}`,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "text-blue-500 hover:underline",
                                                    children: `${userdata_global?.data?.fullname || "Resume"}`
                                                }, void 0, false, {
                                                    fileName: "Components/Profile.componenet.js",
                                                    lineNumber: 164,
                                                    columnNumber: 29
                                                }, undefined)
                                            }, void 0, false, {
                                                fileName: "Components/Profile.componenet.js",
                                                lineNumber: 163,
                                                columnNumber: 25
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "Components/Profile.componenet.js",
                                        lineNumber: 161,
                                        columnNumber: 25
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "h-[70%] w-15  flex gap-2  ",
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 384 512",
                                            className: "h-7  w-[50%] ",
                                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
                                                d: "M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z"
                                            }, void 0, false, {
                                                fileName: "Components/Profile.componenet.js",
                                                lineNumber: 171,
                                                columnNumber: 114
                                            }, undefined)
                                        }, void 0, false, {
                                            fileName: "Components/Profile.componenet.js",
                                            lineNumber: 171,
                                            columnNumber: 25
                                        }, undefined)
                                    }, void 0, false, {
                                        fileName: "Components/Profile.componenet.js",
                                        lineNumber: 169,
                                        columnNumber: 25
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "Components/Profile.componenet.js",
                                lineNumber: 160,
                                columnNumber: 21
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "Components/Profile.componenet.js",
                        lineNumber: 119,
                        columnNumber: 17
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "w-[5%] max-h-6",
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                            onClick: ()=>setPopup(true),
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 512 512",
                                width: "20",
                                height: "20",
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
                                    d: "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"
                                }, void 0, false, {
                                    fileName: "Components/Profile.componenet.js",
                                    lineNumber: 178,
                                    columnNumber: 29
                                }, undefined)
                            }, void 0, false, {
                                fileName: "Components/Profile.componenet.js",
                                lineNumber: 177,
                                columnNumber: 25
                            }, undefined)
                        }, void 0, false, {
                            fileName: "Components/Profile.componenet.js",
                            lineNumber: 176,
                            columnNumber: 21
                        }, undefined)
                    }, void 0, false, {
                        fileName: "Components/Profile.componenet.js",
                        lineNumber: 175,
                        columnNumber: 17
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "Components/Profile.componenet.js",
                lineNumber: 118,
                columnNumber: 13
            }, undefined),
            popup && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto w-full h-3/4 overflow-y-auto scrollable-popup font-mono",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                            className: "text-xl font-semibold mb-4 text-center",
                            children: "Update Profile"
                        }, void 0, false, {
                            fileName: "Components/Profile.componenet.js",
                            lineNumber: 187,
                            columnNumber: 25
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("form", {
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "mb-4 ",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                                            className: "block text-sm font-medium mb-1",
                                            htmlFor: "fullname",
                                            children: "Full Name"
                                        }, void 0, false, {
                                            fileName: "Components/Profile.componenet.js",
                                            lineNumber: 193,
                                            columnNumber: 33
                                        }, undefined),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                                            id: "fullname",
                                            name: "fullname",
                                            type: "text",
                                            value: formData.fullname,
                                            onChange: handleChange,
                                            className: "border border-gray-300 p-2 rounded w-full"
                                        }, void 0, false, {
                                            fileName: "Components/Profile.componenet.js",
                                            lineNumber: 194,
                                            columnNumber: 33
                                        }, undefined)
                                    ]
                                }, void 0, true, {
                                    fileName: "Components/Profile.componenet.js",
                                    lineNumber: 192,
                                    columnNumber: 29
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                                            className: "block text-sm font-medium mb-1",
                                            htmlFor: "bio",
                                            children: "Bio"
                                        }, void 0, false, {
                                            fileName: "Components/Profile.componenet.js",
                                            lineNumber: 205,
                                            columnNumber: 33
                                        }, undefined),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("textarea", {
                                            id: "bio",
                                            name: "bio",
                                            value: formData.bio,
                                            onChange: handleChange,
                                            className: "border border-gray-300 p-2 rounded w-full",
                                            rows: "3"
                                        }, void 0, false, {
                                            fileName: "Components/Profile.componenet.js",
                                            lineNumber: 206,
                                            columnNumber: 33
                                        }, undefined)
                                    ]
                                }, void 0, true, {
                                    fileName: "Components/Profile.componenet.js",
                                    lineNumber: 204,
                                    columnNumber: 29
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                                            className: "block text-sm font-medium mb-1",
                                            htmlFor: "email",
                                            children: "Email"
                                        }, void 0, false, {
                                            fileName: "Components/Profile.componenet.js",
                                            lineNumber: 216,
                                            columnNumber: 33
                                        }, undefined),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                                            id: "email",
                                            name: "email",
                                            type: "email",
                                            value: formData.email,
                                            onChange: handleChange,
                                            className: "border border-gray-300 p-2 rounded w-full"
                                        }, void 0, false, {
                                            fileName: "Components/Profile.componenet.js",
                                            lineNumber: 217,
                                            columnNumber: 33
                                        }, undefined)
                                    ]
                                }, void 0, true, {
                                    fileName: "Components/Profile.componenet.js",
                                    lineNumber: 215,
                                    columnNumber: 29
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                                            className: "block text-sm font-medium mb-1",
                                            htmlFor: "phoneno",
                                            children: "Phone Number"
                                        }, void 0, false, {
                                            fileName: "Components/Profile.componenet.js",
                                            lineNumber: 227,
                                            columnNumber: 33
                                        }, undefined),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                                            id: "phoneno",
                                            name: "phoneno",
                                            type: "tel",
                                            value: formData.phoneno,
                                            onChange: handleChange,
                                            className: "border border-gray-300 p-2 rounded w-full"
                                        }, void 0, false, {
                                            fileName: "Components/Profile.componenet.js",
                                            lineNumber: 228,
                                            columnNumber: 33
                                        }, undefined)
                                    ]
                                }, void 0, true, {
                                    fileName: "Components/Profile.componenet.js",
                                    lineNumber: 226,
                                    columnNumber: 29
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "mb-4 ",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                                            className: "block text-sm font-medium mb-1",
                                            htmlFor: "skills",
                                            children: [
                                                "Skills ",
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                    className: "text-gray-600",
                                                    children: `(separate your skils by ",")`
                                                }, void 0, false, {
                                                    fileName: "Components/Profile.componenet.js",
                                                    lineNumber: 238,
                                                    columnNumber: 107
                                                }, undefined)
                                            ]
                                        }, void 0, true, {
                                            fileName: "Components/Profile.componenet.js",
                                            lineNumber: 238,
                                            columnNumber: 33
                                        }, undefined),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                                            id: "skills",
                                            name: "skills",
                                            type: "text",
                                            value: formData.skills,
                                            onChange: handleChange,
                                            className: "border border-gray-300 p-2 rounded w-full"
                                        }, void 0, false, {
                                            fileName: "Components/Profile.componenet.js",
                                            lineNumber: 239,
                                            columnNumber: 33
                                        }, undefined)
                                    ]
                                }, void 0, true, {
                                    fileName: "Components/Profile.componenet.js",
                                    lineNumber: 237,
                                    columnNumber: 29
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "flex justify-between h-[10%] ",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                                                    class: "block mb-2 text-sm font-normal text-gray-900 dark:text-white",
                                                    for: "file_input",
                                                    children: "Upload file"
                                                }, void 0, false, {
                                                    fileName: "Components/Profile.componenet.js",
                                                    lineNumber: 253,
                                                    columnNumber: 1
                                                }, undefined),
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                                                    class: "block w-full text-sm px-1 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400",
                                                    "aria-describedby": "file_input_help",
                                                    id: "resumeUpload",
                                                    name: "resumeUpload",
                                                    type: "file",
                                                    onChange: handleinputfile
                                                }, void 0, false, {
                                                    fileName: "Components/Profile.componenet.js",
                                                    lineNumber: 254,
                                                    columnNumber: 1
                                                }, undefined),
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                                    class: "mt-1 text-sm text-gray-500 dark:text-gray-300",
                                                    id: "file_input_help"
                                                }, void 0, false, {
                                                    fileName: "Components/Profile.componenet.js",
                                                    lineNumber: 255,
                                                    columnNumber: 1
                                                }, undefined)
                                            ]
                                        }, void 0, true, {
                                            fileName: "Components/Profile.componenet.js",
                                            lineNumber: 251,
                                            columnNumber: 28
                                        }, undefined),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            className: "flex  w-[50%] gap-2 justify-end",
                                            children: [
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                                    type: "button",
                                                    onClick: ()=>setPopup(false),
                                                    className: "bg-gray-300 text-gray-800 h-10 py-2 px-2 rounded",
                                                    children: "Cancel"
                                                }, void 0, false, {
                                                    fileName: "Components/Profile.componenet.js",
                                                    lineNumber: 261,
                                                    columnNumber: 37
                                                }, undefined),
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                                    type: "submit",
                                                    className: "bg-blue-500 text-white h-10 py-2 px-2 rounded",
                                                    children: "Save"
                                                }, void 0, false, {
                                                    fileName: "Components/Profile.componenet.js",
                                                    lineNumber: 268,
                                                    columnNumber: 33
                                                }, undefined)
                                            ]
                                        }, void 0, true, {
                                            fileName: "Components/Profile.componenet.js",
                                            lineNumber: 260,
                                            columnNumber: 33
                                        }, undefined)
                                    ]
                                }, void 0, true, {
                                    fileName: "Components/Profile.componenet.js",
                                    lineNumber: 250,
                                    columnNumber: 29
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "Components/Profile.componenet.js",
                            lineNumber: 188,
                            columnNumber: 25
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "Components/Profile.componenet.js",
                    lineNumber: 186,
                    columnNumber: 22
                }, undefined)
            }, void 0, false, {
                fileName: "Components/Profile.componenet.js",
                lineNumber: 185,
                columnNumber: 17
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _appliedJobsNavbarComponentJsDefault.default), {
                applications: applidata
            }, void 0, false, {
                fileName: "Components/Profile.componenet.js",
                lineNumber: 304,
                columnNumber: 1
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "Components/Profile.componenet.js",
        lineNumber: 117,
        columnNumber: 9
    }, undefined);
};
_s(Profile, "HS/YqCE/G6ot1t8vBbNdiFVILSM=", false, function() {
    return [
        (0, _reactRedux.useSelector),
        (0, _reactRedux.useDispatch)
    ];
});
_c = Profile;
exports.default = Profile;
var _c;
$RefreshReg$(_c, "Profile");

  $parcel$ReactRefreshHelpers$27e0.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"dVPUn","react":"jMk1U","react-redux":"hbNxT","../Utils/Store/userslice":"PcA9h","react-toastify":"2rAbP","axios":"kooH4","./AppliedJobs_navbar.component.js":"2mW8q","../Utils/Store/applicationSlice.js":"6Rs3f","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"7h6Pi","../Utils/constant.js":"25sJh"}],"25sJh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "localhost", ()=>localhost);
const localhost = "http://localhost:7777"; // /

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["9zMKr"], null, "parcelRequire10c2", {})

//# sourceMappingURL=Profile.componenet.a36f9187.js.map
