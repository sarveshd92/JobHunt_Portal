// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
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
        this
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
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

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

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"bKD5j":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "a83b9af6d7403a3d";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
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
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
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
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
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
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
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
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
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
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
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
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
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
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
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
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1xC6H":[function(require,module,exports) {
var Refresh = require("6d18d6bd340e7473");
var ErrorOverlay = require("74ad5ea14201648c");
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};
ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
    let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
    fetch(`/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
});
ErrorOverlay.startReportingRuntimeErrors({
    onError: function() {}
});
window.addEventListener("parcelhmraccept", ()=>{
    ErrorOverlay.dismissRuntimeErrors();
});

},{"6d18d6bd340e7473":"786KC","74ad5ea14201648c":"1dldy"}],"kw80a":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$a512 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$a512.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactRedux = require("react-redux");
var _axios = require("axios");
var _axiosDefault = parcelHelpers.interopDefault(_axios);
var _homeInfoComponentJs = require("./Home_info.component.js");
var _homeInfoComponentJsDefault = parcelHelpers.interopDefault(_homeInfoComponentJs);
var _homeCategoryCarouselComponentJs = require("./Home_Category_carousel.component.js");
var _homeCategoryCarouselComponentJsDefault = parcelHelpers.interopDefault(_homeCategoryCarouselComponentJs);
var _homeLatestJobsComponentJs = require("./Home_Latest_jobs.component.js");
var _homeLatestJobsComponentJsDefault = parcelHelpers.interopDefault(_homeLatestJobsComponentJs);
var _homeFooterComponentJs = require("./Home_Footer.component.js");
var _homeFooterComponentJsDefault = parcelHelpers.interopDefault(_homeFooterComponentJs);
var _jobSliceJs = require("../Utils/Store/jobSlice.js");
var _applicationSliceJs = require("../Utils/Store/applicationSlice.js");
var _reactRouterDom = require("react-router-dom");
var _s = $RefreshSig$();
const Home = ()=>{
    _s();
    const dispatch = (0, _reactRedux.useDispatch)();
    const { getalljobs } = (0, _reactRedux.useSelector)((store)=>store.jobSlice);
    const { userdata_global } = (0, _reactRedux.useSelector)((store)=>store.userslice);
    const { applications } = (0, _reactRedux.useSelector)((store)=>store.applicationSlice);
    const [jobs, setjobs] = (0, _react.useState)([]);
    const navigate = (0, _reactRouterDom.useNavigate)();
    // console.log("home->>",applications)
    const fetchData = async ()=>{
        try {
            const result = await (0, _axiosDefault.default).get("http://localhost:8000/api/v1/job//getalljobs", {
                withCredentials: true
            });
            if (result) {
                dispatch((0, _jobSliceJs.setgetalljobs)(result?.data));
                setjobs(result?.data);
                console.log("jobs", getalljobs);
            }
        } catch (error) {
            console.error("Error fetching jobs:", error);
        }
    };
    (0, _react.useEffect)(()=>{
        fetchData();
        if (userdata_global?.data?.role === "Recruiter") navigate("/admin/companies");
    }, [
        setjobs
    ]);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _homeInfoComponentJsDefault.default), {}, void 0, false, {
                fileName: "Components/Home.component.js",
                lineNumber: 49,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _homeCategoryCarouselComponentJsDefault.default), {}, void 0, false, {
                fileName: "Components/Home.component.js",
                lineNumber: 50,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _homeLatestJobsComponentJsDefault.default), {}, void 0, false, {
                fileName: "Components/Home.component.js",
                lineNumber: 51,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _homeFooterComponentJsDefault.default), {}, void 0, false, {
                fileName: "Components/Home.component.js",
                lineNumber: 52,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true);
};
_s(Home, "sjwyVweW83juNMactcNVvoqlRc0=", false, function() {
    return [
        (0, _reactRedux.useDispatch),
        (0, _reactRedux.useSelector),
        (0, _reactRedux.useSelector),
        (0, _reactRedux.useSelector),
        (0, _reactRouterDom.useNavigate)
    ];
});
_c = Home;
exports.default = Home;
var _c;
$RefreshReg$(_c, "Home");

  $parcel$ReactRefreshHelpers$a512.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","react-redux":"62sf7","axios":"jo6P5","./Home_info.component.js":"iLTNH","./Home_Category_carousel.component.js":"1Vslz","./Home_Latest_jobs.component.js":"i9bB4","./Home_Footer.component.js":"8hIpG","../Utils/Store/jobSlice.js":"hR7Z7","../Utils/Store/applicationSlice.js":"2HeLC","react-router-dom":"9xmpe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"iLTNH":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$8d31 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$8d31.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _reactRedux = require("react-redux");
var _jobSlice = require("../Utils/Store/jobSlice");
var _react = require("react");
var _reactRouterDom = require("react-router-dom");
var _s = $RefreshSig$();
const Home_info = ()=>{
    _s();
    const [value, setvalue] = (0, _react.useState)("");
    const dispatch = (0, _reactRedux.useDispatch)();
    const navigate = (0, _reactRouterDom.useNavigate)();
    const handleclick = ()=>{
        dispatch((0, _jobSlice.setsearch)(value));
        navigate("/SearchResults");
    };
    const handlechange = (e)=>{
        setvalue(e.target.value);
    };
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "text-center my-4 px-4",
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
            className: "flex flex-col gap-2 justify-center items-center",
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                    className: "font-medium text-l rounded-full border-black text-[#f83002] bg-gray-100 py-2 px-4",
                    children: "No. 1 Job Hunt Website"
                }, void 0, false, {
                    fileName: "Components/Home_info.component.js",
                    lineNumber: 25,
                    columnNumber: 9
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                    className: "text-3xl sm:text-4xl font-bold",
                    children: [
                        "Search, Apply &",
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                            fileName: "Components/Home_info.component.js",
                            lineNumber: 29,
                            columnNumber: 26
                        }, undefined),
                        " Get your ",
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                            className: "text-[#6a38c2]",
                            children: "Dream Job"
                        }, void 0, false, {
                            fileName: "Components/Home_info.component.js",
                            lineNumber: 29,
                            columnNumber: 42
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "Components/Home_info.component.js",
                    lineNumber: 28,
                    columnNumber: 9
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                    className: "text-gray-400 max-w-xl  mx-auto",
                    children: [
                        "Find and apply to your dream job effortlessly. ",
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                            fileName: "Components/Home_info.component.js",
                            lineNumber: 32,
                            columnNumber: 56
                        }, undefined),
                        "Start your journey towards success with us."
                    ]
                }, void 0, true, {
                    fileName: "Components/Home_info.component.js",
                    lineNumber: 31,
                    columnNumber: 9
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "flex w-full sm:w-[40%] items-center mx-auto rounded-full shadow-lg border-2 border-gray-200 ",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                            placeholder: "Find Your Dream Jobs",
                            name: "Job",
                            className: "pl-3 outline-none w-full rounded-full font-mono ",
                            onChange: handlechange
                        }, void 0, false, {
                            fileName: "Components/Home_info.component.js",
                            lineNumber: 36,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                            className: "rounded-r-full px-2 py-2 bg-[#6A38C2]",
                            onClick: ()=>{
                                handleclick();
                            },
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "20",
                                height: "20",
                                viewBox: "0 0 64 64",
                                fill: "#FFFFFF",
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
                                    d: "M 24 2.8886719 C 12.365714 2.8886719 2.8886719 12.365723 2.8886719 24 C 2.8886719 35.634277 12.365714 45.111328 24 45.111328 C 29.036552 45.111328 33.664698 43.331333 37.298828 40.373047 L 52.130859 58.953125 C 52.130859 58.953125 55.379484 59.435984 57.396484 57.333984 C 59.427484 55.215984 58.951172 52.134766 58.951172 52.134766 L 40.373047 37.298828 C 43.331332 33.664697 45.111328 29.036548 45.111328 24 C 45.111328 12.365723 35.634286 2.8886719 24 2.8886719 z M 24 7.1113281 C 33.352549 7.1113281 40.888672 14.647457 40.888672 24 C 40.888672 33.352543 33.352549 40.888672 24 40.888672 C 14.647451 40.888672 7.1113281 33.352543 7.1113281 24 C 7.1113281 14.647457 14.647451 7.1113281 24 7.1113281 z"
                                }, void 0, false, {
                                    fileName: "Components/Home_info.component.js",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, undefined)
                            }, void 0, false, {
                                fileName: "Components/Home_info.component.js",
                                lineNumber: 43,
                                columnNumber: 13
                            }, undefined)
                        }, void 0, false, {
                            fileName: "Components/Home_info.component.js",
                            lineNumber: 42,
                            columnNumber: 11
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "Components/Home_info.component.js",
                    lineNumber: 35,
                    columnNumber: 9
                }, undefined)
            ]
        }, void 0, true, {
            fileName: "Components/Home_info.component.js",
            lineNumber: 24,
            columnNumber: 7
        }, undefined)
    }, void 0, false, {
        fileName: "Components/Home_info.component.js",
        lineNumber: 23,
        columnNumber: 9
    }, undefined);
};
_s(Home_info, "A0e5owAv0KbBS20E4PazIsKc8Yc=", false, function() {
    return [
        (0, _reactRedux.useDispatch),
        (0, _reactRouterDom.useNavigate)
    ];
});
_c = Home_info;
exports.default = Home_info;
var _c;
$RefreshReg$(_c, "Home_info");

  $parcel$ReactRefreshHelpers$8d31.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react-redux":"62sf7","../Utils/Store/jobSlice":"hR7Z7","react":"21dqq","react-router-dom":"9xmpe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"1Vslz":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$69b4 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$69b4.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactRedux = require("react-redux");
var _jobSlice = require("../Utils/Store/jobSlice");
var _reactRouterDom = require("react-router-dom");
var _s = $RefreshSig$();
const Home_CategoryCarousel = ()=>{
    _s();
    const categories = [
        "Fullstack Developer",
        "Backend Developer",
        "Frontend Developer",
        "Graphic Designer",
        "Data Scientist"
    ];
    const dispatch = (0, _reactRedux.useDispatch)();
    const navigate = (0, _reactRouterDom.useNavigate)();
    const handleclick = (ct)=>{
        console.log("from function", ct);
        dispatch((0, _jobSlice.setsearch)(ct));
        navigate("/SearchResults");
    };
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "w-full flex justify-center",
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
            className: "flex h-1/6 w-[50%] rounded-full overflow-x-auto px-2 py-1 space-x-4 scrollbar-hide",
            children: categories.map((ct, idx)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "text-xl  font-medium whitespace-nowrap",
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                        className: "w-full text-lg font-normal border-2 rounded-full px-2 border-gray-100",
                        onClick: ()=>{
                            console.log("button clicked", ct);
                            handleclick(ct);
                        },
                        children: ct
                    }, void 0, false, {
                        fileName: "Components/Home_Category_carousel.component.js",
                        lineNumber: 27,
                        columnNumber: 11
                    }, undefined)
                }, idx, false, {
                    fileName: "Components/Home_Category_carousel.component.js",
                    lineNumber: 26,
                    columnNumber: 9
                }, undefined))
        }, void 0, false, {
            fileName: "Components/Home_Category_carousel.component.js",
            lineNumber: 24,
            columnNumber: 5
        }, undefined)
    }, void 0, false, {
        fileName: "Components/Home_Category_carousel.component.js",
        lineNumber: 23,
        columnNumber: 5
    }, undefined);
};
_s(Home_CategoryCarousel, "R1L93MxeLXzQXESpmjjjQSuQgvM=", false, function() {
    return [
        (0, _reactRedux.useDispatch),
        (0, _reactRouterDom.useNavigate)
    ];
});
_c = Home_CategoryCarousel;
exports.default = Home_CategoryCarousel;
var _c;
$RefreshReg$(_c, "Home_CategoryCarousel");

  $parcel$ReactRefreshHelpers$69b4.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","react-redux":"62sf7","../Utils/Store/jobSlice":"hR7Z7","react-router-dom":"9xmpe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"i9bB4":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$3da3 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$3da3.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _reactRedux = require("react-redux");
var _homeLatestJobCardComponentJs = require("./Home_Latest_Job_Card.component.js");
var _homeLatestJobCardComponentJsDefault = parcelHelpers.interopDefault(_homeLatestJobCardComponentJs);
var _s = $RefreshSig$();
const Home_Latest_jobs = ()=>{
    _s();
    const jobs = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8
    ];
    const { getalljobs } = (0, _reactRedux.useSelector)((store)=>store.jobSlice);
    // console.log("from component",getalljobs)
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "w-full m-0 mt-2 p-0  flex flex-col",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "ml-6 ",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                    className: "text-4xl font-bold",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                            className: "text-[#6a38c2]",
                            children: "Latest & Top "
                        }, void 0, false, {
                            fileName: "Components/Home_Latest_jobs.component.js",
                            lineNumber: 13,
                            columnNumber: 48
                        }, undefined),
                        "Job Openings"
                    ]
                }, void 0, true, {
                    fileName: "Components/Home_Latest_jobs.component.js",
                    lineNumber: 13,
                    columnNumber: 13
                }, undefined)
            }, void 0, false, {
                fileName: "Components/Home_Latest_jobs.component.js",
                lineNumber: 12,
                columnNumber: 9
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "flex flex-wrap mt-3 w-full justify-evenly ",
                children: !getalljobs ? jobs.slice(0, 6).map((jb, idx)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _homeLatestJobCardComponentJsDefault.default), {}, idx, false, {
                        fileName: "Components/Home_Latest_jobs.component.js",
                        lineNumber: 18,
                        columnNumber: 16
                    }, undefined)) : getalljobs?.result?.map((jb, idx)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _homeLatestJobCardComponentJsDefault.default), {
                        data: jb
                    }, idx, false, {
                        fileName: "Components/Home_Latest_jobs.component.js",
                        lineNumber: 22,
                        columnNumber: 17
                    }, undefined))
            }, void 0, false, {
                fileName: "Components/Home_Latest_jobs.component.js",
                lineNumber: 15,
                columnNumber: 9
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "Components/Home_Latest_jobs.component.js",
        lineNumber: 10,
        columnNumber: 5
    }, undefined);
};
_s(Home_Latest_jobs, "kUkBeClK84E4i5533Wm1HYDbmkM=", false, function() {
    return [
        (0, _reactRedux.useSelector)
    ];
});
_c = Home_Latest_jobs;
exports.default = Home_Latest_jobs;
var _c;
$RefreshReg$(_c, "Home_Latest_jobs");

  $parcel$ReactRefreshHelpers$3da3.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react-redux":"62sf7","./Home_Latest_Job_Card.component.js":"cOJGG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"cOJGG":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$30a0 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$30a0.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _reactRouterDom = require("react-router-dom");
var _s = $RefreshSig$();
const Home_Latest_Job_Card = ({ data })=>{
    _s();
    const navigate = (0, _reactRouterDom.useNavigate)();
    const handleclick = ()=>{
        navigate(`/Details/${data?._id}`);
    };
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "h-56 w-80 shadow-lg border border-gray-200 rounded-lg p-4 m-4 flex flex-col justify-between transition-transform transform hover:scale-105",
        onClick: handleclick,
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "text-xl font-semibold text-gray-800",
                children: data?.company?.name
            }, void 0, false, {
                fileName: "Components/Home_Latest_Job_Card.component.js",
                lineNumber: 10,
                columnNumber: 13
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "text-sm text-gray-500 mb-2",
                children: "India"
            }, void 0, false, {
                fileName: "Components/Home_Latest_Job_Card.component.js",
                lineNumber: 11,
                columnNumber: 13
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "text-lg font-bold text-gray-700 mb-4",
                children: data?.title
            }, void 0, false, {
                fileName: "Components/Home_Latest_Job_Card.component.js",
                lineNumber: 12,
                columnNumber: 13
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "text-sm text-gray-600 overflow-hidden overflow-ellipsis",
                style: {
                    maxHeight: "3rem"
                },
                children: data?.description.length > 70 ? `${data?.description.substr(0, 70)}...` : data?.description
            }, void 0, false, {
                fileName: "Components/Home_Latest_Job_Card.component.js",
                lineNumber: 13,
                columnNumber: 13
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "flex justify-between mt-4",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                        className: "bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded",
                        children: [
                            data.noofposition,
                            " Positions"
                        ]
                    }, void 0, true, {
                        fileName: "Components/Home_Latest_Job_Card.component.js",
                        lineNumber: 17,
                        columnNumber: 17
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                        className: "bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded",
                        children: data.jobType
                    }, void 0, false, {
                        fileName: "Components/Home_Latest_Job_Card.component.js",
                        lineNumber: 18,
                        columnNumber: 17
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                        className: "bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded",
                        children: [
                            data.salary,
                            " LPA"
                        ]
                    }, void 0, true, {
                        fileName: "Components/Home_Latest_Job_Card.component.js",
                        lineNumber: 19,
                        columnNumber: 17
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "Components/Home_Latest_Job_Card.component.js",
                lineNumber: 16,
                columnNumber: 13
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "Components/Home_Latest_Job_Card.component.js",
        lineNumber: 9,
        columnNumber: 9
    }, undefined);
};
_s(Home_Latest_Job_Card, "CzcTeTziyjMsSrAVmHuCCb6+Bfg=", false, function() {
    return [
        (0, _reactRouterDom.useNavigate)
    ];
});
_c = Home_Latest_Job_Card;
exports.default = Home_Latest_Job_Card;
var _c;
$RefreshReg$(_c, "Home_Latest_Job_Card");

  $parcel$ReactRefreshHelpers$30a0.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react-router-dom":"9xmpe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"8hIpG":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$9d9d = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$9d9d.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _reactRouterDom = require("react-router-dom");
const Home_Footer = ()=>{
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("footer", {
        class: "bg-white rounded-lg shadow m-4 dark:bg-gray-800",
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
            class: "w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between",
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                    class: "text-sm text-gray-500 sm:text-center dark:text-gray-400",
                    children: [
                        "\xa9 2023 ",
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Link), {
                            to: "/",
                            class: "hover:underline",
                            children: "JobHunt\u2122"
                        }, void 0, false, {
                            fileName: "Components/Home_Footer.component.js",
                            lineNumber: 10,
                            columnNumber: 84
                        }, undefined),
                        ". All Rights Reserved."
                    ]
                }, void 0, true, {
                    fileName: "Components/Home_Footer.component.js",
                    lineNumber: 10,
                    columnNumber: 7
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("ul", {
                    class: "flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                href: "#",
                                class: "hover:underline me-4 md:me-6",
                                children: "About"
                            }, void 0, false, {
                                fileName: "Components/Home_Footer.component.js",
                                lineNumber: 14,
                                columnNumber: 13
                            }, undefined)
                        }, void 0, false, {
                            fileName: "Components/Home_Footer.component.js",
                            lineNumber: 13,
                            columnNumber: 9
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                href: "#",
                                class: "hover:underline me-4 md:me-6",
                                children: "Privacy Policy"
                            }, void 0, false, {
                                fileName: "Components/Home_Footer.component.js",
                                lineNumber: 17,
                                columnNumber: 13
                            }, undefined)
                        }, void 0, false, {
                            fileName: "Components/Home_Footer.component.js",
                            lineNumber: 16,
                            columnNumber: 9
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                href: "#",
                                class: "hover:underline me-4 md:me-6",
                                children: "Licensing"
                            }, void 0, false, {
                                fileName: "Components/Home_Footer.component.js",
                                lineNumber: 20,
                                columnNumber: 13
                            }, undefined)
                        }, void 0, false, {
                            fileName: "Components/Home_Footer.component.js",
                            lineNumber: 19,
                            columnNumber: 9
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                href: "#",
                                class: "hover:underline",
                                children: "Contact"
                            }, void 0, false, {
                                fileName: "Components/Home_Footer.component.js",
                                lineNumber: 23,
                                columnNumber: 13
                            }, undefined)
                        }, void 0, false, {
                            fileName: "Components/Home_Footer.component.js",
                            lineNumber: 22,
                            columnNumber: 9
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "Components/Home_Footer.component.js",
                    lineNumber: 12,
                    columnNumber: 5
                }, undefined)
            ]
        }, void 0, true, {
            fileName: "Components/Home_Footer.component.js",
            lineNumber: 9,
            columnNumber: 5
        }, undefined)
    }, void 0, false, {
        fileName: "Components/Home_Footer.component.js",
        lineNumber: 8,
        columnNumber: 1
    }, undefined);
};
_c = Home_Footer;
exports.default = Home_Footer;
var _c;
$RefreshReg$(_c, "Home_Footer");

  $parcel$ReactRefreshHelpers$9d9d.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react-router-dom":"9xmpe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}]},["bKD5j","1xC6H"], null, "parcelRequire10c2")

//# sourceMappingURL=Home.component.d7403a3d.js.map
