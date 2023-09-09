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
})({"kmSpe":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "04c3a0646690e0da";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
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
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
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
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
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
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
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

},{}],"2OpUZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _renderJs = require("./render.js");
var _renderJsDefault = parcelHelpers.interopDefault(_renderJs);
var _formValidationJs = require("./formValidation.js");
var _formValidationJsDefault = parcelHelpers.interopDefault(_formValidationJs);
const init = ()=>{
    const cardElements = (0, _renderJsDefault.default)();
    (0, _formValidationJsDefault.default)(cardElements);
};
init();

},{"./render.js":"ae1R1","./formValidation.js":"asNgC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ae1R1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _redom = require("redom");
var _createElementsJs = require("./createElements.js");
const renderPage = ()=>{
    const title = (0, _createElementsJs.createTitle)();
    const { cardСontainer, creditCard, cardNumber, cardName, cardExpire, cardSecurity, nameBack } = (0, _createElementsJs.createCard)();
    const { formContainer, inputName, inputCardNumber, inputExpirationDate, inputSecurityCode } = (0, _createElementsJs.createForm)();
    (0, _redom.setChildren)(document.body, [
        title,
        cardСontainer,
        formContainer
    ]);
    return {
        cardСontainer,
        creditCard,
        formContainer,
        inputName,
        inputCardNumber,
        inputExpirationDate,
        inputSecurityCode,
        cardNumber,
        cardName,
        cardExpire,
        cardSecurity,
        nameBack
    };
};
exports.default = renderPage;

},{"redom":"iahd6","./createElements.js":"93936","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iahd6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "List", ()=>List);
parcelHelpers.export(exports, "ListPool", ()=>ListPool);
parcelHelpers.export(exports, "Place", ()=>Place);
parcelHelpers.export(exports, "Router", ()=>Router);
parcelHelpers.export(exports, "el", ()=>el);
parcelHelpers.export(exports, "h", ()=>h);
parcelHelpers.export(exports, "html", ()=>html);
parcelHelpers.export(exports, "list", ()=>list);
parcelHelpers.export(exports, "listPool", ()=>listPool);
parcelHelpers.export(exports, "mount", ()=>mount);
parcelHelpers.export(exports, "place", ()=>place);
parcelHelpers.export(exports, "router", ()=>router);
parcelHelpers.export(exports, "s", ()=>s);
parcelHelpers.export(exports, "setAttr", ()=>setAttr);
parcelHelpers.export(exports, "setChildren", ()=>setChildren);
parcelHelpers.export(exports, "setData", ()=>setData);
parcelHelpers.export(exports, "setStyle", ()=>setStyle);
parcelHelpers.export(exports, "setXlink", ()=>setXlink);
parcelHelpers.export(exports, "svg", ()=>svg);
parcelHelpers.export(exports, "text", ()=>text);
parcelHelpers.export(exports, "unmount", ()=>unmount);
function createElement(query, ns) {
    var ref = parse(query);
    var tag = ref.tag;
    var id = ref.id;
    var className = ref.className;
    var element = ns ? document.createElementNS(ns, tag) : document.createElement(tag);
    if (id) element.id = id;
    if (className) {
        if (ns) element.setAttribute("class", className);
        else element.className = className;
    }
    return element;
}
function parse(query) {
    var chunks = query.split(/([.#])/);
    var className = "";
    var id = "";
    for(var i = 1; i < chunks.length; i += 2)switch(chunks[i]){
        case ".":
            className += " " + chunks[i + 1];
            break;
        case "#":
            id = chunks[i + 1];
    }
    return {
        className: className.trim(),
        tag: chunks[0] || "div",
        id: id
    };
}
function unmount(parent, child) {
    var parentEl = getEl(parent);
    var childEl = getEl(child);
    if (child === childEl && childEl.__redom_view) // try to look up the view if not provided
    child = childEl.__redom_view;
    if (childEl.parentNode) {
        doUnmount(child, childEl, parentEl);
        parentEl.removeChild(childEl);
    }
    return child;
}
function doUnmount(child, childEl, parentEl) {
    var hooks = childEl.__redom_lifecycle;
    if (hooksAreEmpty(hooks)) {
        childEl.__redom_lifecycle = {};
        return;
    }
    var traverse = parentEl;
    if (childEl.__redom_mounted) trigger(childEl, "onunmount");
    while(traverse){
        var parentHooks = traverse.__redom_lifecycle || {};
        for(var hook in hooks)if (parentHooks[hook]) parentHooks[hook] -= hooks[hook];
        if (hooksAreEmpty(parentHooks)) traverse.__redom_lifecycle = null;
        traverse = traverse.parentNode;
    }
}
function hooksAreEmpty(hooks) {
    if (hooks == null) return true;
    for(var key in hooks){
        if (hooks[key]) return false;
    }
    return true;
}
/* global Node, ShadowRoot */ var hookNames = [
    "onmount",
    "onremount",
    "onunmount"
];
var shadowRootAvailable = typeof window !== "undefined" && "ShadowRoot" in window;
function mount(parent, child, before, replace) {
    var parentEl = getEl(parent);
    var childEl = getEl(child);
    if (child === childEl && childEl.__redom_view) // try to look up the view if not provided
    child = childEl.__redom_view;
    if (child !== childEl) childEl.__redom_view = child;
    var wasMounted = childEl.__redom_mounted;
    var oldParent = childEl.parentNode;
    if (wasMounted && oldParent !== parentEl) doUnmount(child, childEl, oldParent);
    if (before != null) {
        if (replace) {
            var beforeEl = getEl(before);
            if (beforeEl.__redom_mounted) trigger(beforeEl, "onunmount");
            parentEl.replaceChild(childEl, beforeEl);
        } else parentEl.insertBefore(childEl, getEl(before));
    } else parentEl.appendChild(childEl);
    doMount(child, childEl, parentEl, oldParent);
    return child;
}
function trigger(el, eventName) {
    if (eventName === "onmount" || eventName === "onremount") el.__redom_mounted = true;
    else if (eventName === "onunmount") el.__redom_mounted = false;
    var hooks = el.__redom_lifecycle;
    if (!hooks) return;
    var view = el.__redom_view;
    var hookCount = 0;
    view && view[eventName] && view[eventName]();
    for(var hook in hooks)if (hook) hookCount++;
    if (hookCount) {
        var traverse = el.firstChild;
        while(traverse){
            var next = traverse.nextSibling;
            trigger(traverse, eventName);
            traverse = next;
        }
    }
}
function doMount(child, childEl, parentEl, oldParent) {
    var hooks = childEl.__redom_lifecycle || (childEl.__redom_lifecycle = {});
    var remount = parentEl === oldParent;
    var hooksFound = false;
    for(var i = 0, list = hookNames; i < list.length; i += 1){
        var hookName = list[i];
        if (!remount) {
            if (child !== childEl) {
                if (hookName in child) hooks[hookName] = (hooks[hookName] || 0) + 1;
            }
        }
        if (hooks[hookName]) hooksFound = true;
    }
    if (!hooksFound) {
        childEl.__redom_lifecycle = {};
        return;
    }
    var traverse = parentEl;
    var triggered = false;
    if (remount || traverse && traverse.__redom_mounted) {
        trigger(childEl, remount ? "onremount" : "onmount");
        triggered = true;
    }
    while(traverse){
        var parent = traverse.parentNode;
        var parentHooks = traverse.__redom_lifecycle || (traverse.__redom_lifecycle = {});
        for(var hook in hooks)parentHooks[hook] = (parentHooks[hook] || 0) + hooks[hook];
        if (triggered) break;
        else {
            if (traverse.nodeType === Node.DOCUMENT_NODE || shadowRootAvailable && traverse instanceof ShadowRoot || parent && parent.__redom_mounted) {
                trigger(traverse, remount ? "onremount" : "onmount");
                triggered = true;
            }
            traverse = parent;
        }
    }
}
function setStyle(view, arg1, arg2) {
    var el = getEl(view);
    if (typeof arg1 === "object") for(var key in arg1)setStyleValue(el, key, arg1[key]);
    else setStyleValue(el, arg1, arg2);
}
function setStyleValue(el, key, value) {
    el.style[key] = value == null ? "" : value;
}
/* global SVGElement */ var xlinkns = "http://www.w3.org/1999/xlink";
function setAttr(view, arg1, arg2) {
    setAttrInternal(view, arg1, arg2);
}
function setAttrInternal(view, arg1, arg2, initial) {
    var el = getEl(view);
    var isObj = typeof arg1 === "object";
    if (isObj) for(var key in arg1)setAttrInternal(el, key, arg1[key], initial);
    else {
        var isSVG = el instanceof SVGElement;
        var isFunc = typeof arg2 === "function";
        if (arg1 === "style" && typeof arg2 === "object") setStyle(el, arg2);
        else if (isSVG && isFunc) el[arg1] = arg2;
        else if (arg1 === "dataset") setData(el, arg2);
        else if (!isSVG && (arg1 in el || isFunc) && arg1 !== "list") el[arg1] = arg2;
        else {
            if (isSVG && arg1 === "xlink") {
                setXlink(el, arg2);
                return;
            }
            if (initial && arg1 === "class") arg2 = el.className + " " + arg2;
            if (arg2 == null) el.removeAttribute(arg1);
            else el.setAttribute(arg1, arg2);
        }
    }
}
function setXlink(el, arg1, arg2) {
    if (typeof arg1 === "object") for(var key in arg1)setXlink(el, key, arg1[key]);
    else if (arg2 != null) el.setAttributeNS(xlinkns, arg1, arg2);
    else el.removeAttributeNS(xlinkns, arg1, arg2);
}
function setData(el, arg1, arg2) {
    if (typeof arg1 === "object") for(var key in arg1)setData(el, key, arg1[key]);
    else if (arg2 != null) el.dataset[arg1] = arg2;
    else delete el.dataset[arg1];
}
function text(str) {
    return document.createTextNode(str != null ? str : "");
}
function parseArgumentsInternal(element, args, initial) {
    for(var i = 0, list = args; i < list.length; i += 1){
        var arg = list[i];
        if (arg !== 0 && !arg) continue;
        var type = typeof arg;
        if (type === "function") arg(element);
        else if (type === "string" || type === "number") element.appendChild(text(arg));
        else if (isNode(getEl(arg))) mount(element, arg);
        else if (arg.length) parseArgumentsInternal(element, arg, initial);
        else if (type === "object") setAttrInternal(element, arg, null, initial);
    }
}
function ensureEl(parent) {
    return typeof parent === "string" ? html(parent) : getEl(parent);
}
function getEl(parent) {
    return parent.nodeType && parent || !parent.el && parent || getEl(parent.el);
}
function isNode(arg) {
    return arg && arg.nodeType;
}
function html(query) {
    var args = [], len = arguments.length - 1;
    while(len-- > 0)args[len] = arguments[len + 1];
    var element;
    var type = typeof query;
    if (type === "string") element = createElement(query);
    else if (type === "function") {
        var Query = query;
        element = new (Function.prototype.bind.apply(Query, [
            null
        ].concat(args)));
    } else throw new Error("At least one argument required");
    parseArgumentsInternal(getEl(element), args, true);
    return element;
}
var el = html;
var h = html;
html.extend = function extendHtml() {
    var args = [], len = arguments.length;
    while(len--)args[len] = arguments[len];
    return html.bind.apply(html, [
        this
    ].concat(args));
};
function setChildren(parent) {
    var children = [], len = arguments.length - 1;
    while(len-- > 0)children[len] = arguments[len + 1];
    var parentEl = getEl(parent);
    var current = traverse(parent, children, parentEl.firstChild);
    while(current){
        var next = current.nextSibling;
        unmount(parent, current);
        current = next;
    }
}
function traverse(parent, children, _current) {
    var current = _current;
    var childEls = Array(children.length);
    for(var i = 0; i < children.length; i++)childEls[i] = children[i] && getEl(children[i]);
    for(var i$1 = 0; i$1 < children.length; i$1++){
        var child = children[i$1];
        if (!child) continue;
        var childEl = childEls[i$1];
        if (childEl === current) {
            current = current.nextSibling;
            continue;
        }
        if (isNode(childEl)) {
            var next = current && current.nextSibling;
            var exists = child.__redom_index != null;
            var replace = exists && next === childEls[i$1 + 1];
            mount(parent, child, current, replace);
            if (replace) current = next;
            continue;
        }
        if (child.length != null) current = traverse(parent, child, current);
    }
    return current;
}
function listPool(View, key, initData) {
    return new ListPool(View, key, initData);
}
var ListPool = function ListPool(View, key, initData) {
    this.View = View;
    this.initData = initData;
    this.oldLookup = {};
    this.lookup = {};
    this.oldViews = [];
    this.views = [];
    if (key != null) this.key = typeof key === "function" ? key : propKey(key);
};
ListPool.prototype.update = function update(data, context) {
    var ref = this;
    var View = ref.View;
    var key = ref.key;
    var initData = ref.initData;
    var keySet = key != null;
    var oldLookup = this.lookup;
    var newLookup = {};
    var newViews = Array(data.length);
    var oldViews = this.views;
    for(var i = 0; i < data.length; i++){
        var item = data[i];
        var view = void 0;
        if (keySet) {
            var id = key(item);
            view = oldLookup[id] || new View(initData, item, i, data);
            newLookup[id] = view;
            view.__redom_id = id;
        } else view = oldViews[i] || new View(initData, item, i, data);
        view.update && view.update(item, i, data, context);
        var el = getEl(view.el);
        el.__redom_view = view;
        newViews[i] = view;
    }
    this.oldViews = oldViews;
    this.views = newViews;
    this.oldLookup = oldLookup;
    this.lookup = newLookup;
};
function propKey(key) {
    return function(item) {
        return item[key];
    };
}
function list(parent, View, key, initData) {
    return new List(parent, View, key, initData);
}
var List = function List(parent, View, key, initData) {
    this.View = View;
    this.initData = initData;
    this.views = [];
    this.pool = new ListPool(View, key, initData);
    this.el = ensureEl(parent);
    this.keySet = key != null;
};
List.prototype.update = function update(data, context) {
    if (data === void 0) data = [];
    var ref = this;
    var keySet = ref.keySet;
    var oldViews = this.views;
    this.pool.update(data, context);
    var ref$1 = this.pool;
    var views = ref$1.views;
    var lookup = ref$1.lookup;
    if (keySet) for(var i = 0; i < oldViews.length; i++){
        var oldView = oldViews[i];
        var id = oldView.__redom_id;
        if (lookup[id] == null) {
            oldView.__redom_index = null;
            unmount(this, oldView);
        }
    }
    for(var i$1 = 0; i$1 < views.length; i$1++){
        var view = views[i$1];
        view.__redom_index = i$1;
    }
    setChildren(this, views);
    if (keySet) this.lookup = lookup;
    this.views = views;
};
List.extend = function extendList(parent, View, key, initData) {
    return List.bind(List, parent, View, key, initData);
};
list.extend = List.extend;
/* global Node */ function place(View, initData) {
    return new Place(View, initData);
}
var Place = function Place(View, initData) {
    this.el = text("");
    this.visible = false;
    this.view = null;
    this._placeholder = this.el;
    if (View instanceof Node) this._el = View;
    else if (View.el instanceof Node) {
        this._el = View;
        this.view = View;
    } else this._View = View;
    this._initData = initData;
};
Place.prototype.update = function update(visible, data) {
    var placeholder = this._placeholder;
    var parentNode = this.el.parentNode;
    if (visible) {
        if (!this.visible) {
            if (this._el) {
                mount(parentNode, this._el, placeholder);
                unmount(parentNode, placeholder);
                this.el = getEl(this._el);
                this.visible = visible;
            } else {
                var View = this._View;
                var view = new View(this._initData);
                this.el = getEl(view);
                this.view = view;
                mount(parentNode, view, placeholder);
                unmount(parentNode, placeholder);
            }
        }
        this.view && this.view.update && this.view.update(data);
    } else if (this.visible) {
        if (this._el) {
            mount(parentNode, placeholder, this._el);
            unmount(parentNode, this._el);
            this.el = placeholder;
            this.visible = visible;
            return;
        }
        mount(parentNode, placeholder, this.view);
        unmount(parentNode, this.view);
        this.el = placeholder;
        this.view = null;
    }
    this.visible = visible;
};
/* global Node */ function router(parent, Views, initData) {
    return new Router(parent, Views, initData);
}
var Router = function Router(parent, Views, initData) {
    this.el = ensureEl(parent);
    this.Views = Views;
    this.initData = initData;
};
Router.prototype.update = function update(route, data) {
    if (route !== this.route) {
        var Views = this.Views;
        var View = Views[route];
        this.route = route;
        if (View && (View instanceof Node || View.el instanceof Node)) this.view = View;
        else this.view = View && new View(this.initData, data);
        setChildren(this.el, [
            this.view
        ]);
    }
    this.view && this.view.update && this.view.update(data, route);
};
var ns = "http://www.w3.org/2000/svg";
function svg(query) {
    var args = [], len = arguments.length - 1;
    while(len-- > 0)args[len] = arguments[len + 1];
    var element;
    var type = typeof query;
    if (type === "string") element = createElement(query, ns);
    else if (type === "function") {
        var Query = query;
        element = new (Function.prototype.bind.apply(Query, [
            null
        ].concat(args)));
    } else throw new Error("At least one argument required");
    parseArgumentsInternal(getEl(element), args, true);
    return element;
}
var s = svg;
svg.extend = function extendSvg() {
    var args = [], len = arguments.length;
    while(len--)args[len] = arguments[len];
    return svg.bind.apply(svg, [
        this
    ].concat(args));
};
svg.ns = ns;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"93936":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createTitle", ()=>createTitle);
parcelHelpers.export(exports, "createCard", ()=>createCard);
parcelHelpers.export(exports, "createForm", ()=>createForm);
parcelHelpers.export(exports, "createBlockWithError", ()=>createBlockWithError);
var _redom = require("redom");
const createTitle = ()=>{
    const title = (0, _redom.el)("div", {
        className: "payment-title"
    }, [
        (0, _redom.el)("h1", "Payment Information")
    ]);
    return title;
};
const createCard = ()=>{
    const cardСontainer = (0, _redom.el)("div", {
        className: "container card__container"
    });
    const creditCard = (0, _redom.el)("div", {
        className: "creditcard"
    });
    const cardNumber = (0, _redom.svg)("text", "XXXX XXXX XXXX XXXX", {
        transform: "matrix(1 0 0 1 60.106 295.0121)",
        id: "svgnumber",
        class: "st2 st3 st4"
    });
    const cardName = (0, _redom.svg)("text", "FULL NAME", {
        transform: "matrix(1 0 0 1 54.1064 428.1723)",
        id: "svgname",
        class: "st2 st5 st6"
    });
    const cardExpire = (0, _redom.svg)("text", "••/••", {
        transform: "matrix(1 0 0 1 574.4219 433.8095)",
        id: "svgexpire",
        class: "st2 st5 st9"
    });
    const front = (0, _redom.el)("div", {
        className: "front"
    }, [
        (0, _redom.el)("div#ccsingle"),
        (0, _redom.svg)("svg", {
            "version": "1.1",
            "id": "cardfront",
            "xmlns": "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            "x": "0px",
            "y": "0px",
            "viewBox": "0 0 750 471",
            "style": "enable-background:new 0 0 750 471;",
            "xml:space": "preserve"
        }, [
            (0, _redom.svg)("g#Front", [
                (0, _redom.svg)("g#CardBackground", (0, _redom.svg)("g#Page-1_1_", (0, _redom.svg)("g#amex_1_", (0, _redom.svg)("path#Rectangle-1_1_", {
                    class: "lightcolor",
                    d: `M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,
                  40H40c-22.1,0-40-17.9-40-40V40C0,17.9,17.9,0,40,0z`,
                    fill: "#bdbdbd"
                }))), (0, _redom.svg)("path", {
                    class: "darkcolor",
                    d: `M750,431V193.2c-217.6-57.5-556.4-13.5-750,24.9V431c0,
              22.1,17.9,40,40,40h670C732.1,471,750,453.1,750,431z`,
                    fill: "#616161"
                })),
                cardNumber,
                cardName,
                (0, _redom.svg)("text", "cardholder name", {
                    transform: "matrix(1 0 0 1 54.1074 389.8793)",
                    class: "st7 st5 st8"
                }),
                (0, _redom.svg)("text", "expiration", {
                    transform: "matrix(1 0 0 1 479.7754 388.8793)",
                    class: "st7 st5 st8"
                }),
                (0, _redom.svg)("text", "card number", {
                    transform: "matrix(1 0 0 1 65.1054 241.5)",
                    class: "st7 st5 st8"
                }),
                (0, _redom.svg)("g", [
                    cardExpire,
                    (0, _redom.svg)("text", "VALID", {
                        transform: "matrix(1 0 0 1 479.3848 417.0097)",
                        class: "st2 st10 st11"
                    }),
                    (0, _redom.svg)("text", "THRU", {
                        transform: "matrix(1 0 0 1 479.3848 435.6762)",
                        class: "st2 st10 st11"
                    }),
                    (0, _redom.svg)("polygon", {
                        class: "st2",
                        points: "554.5,421 540.4,414.2 540.4,427.9"
                    })
                ]),
                (0, _redom.svg)("g#cchip", [
                    (0, _redom.svg)("g", (0, _redom.svg)("path", {
                        class: "st2",
                        d: `M168.1,143.6H82.9c-10.2,0-18.5-8.3-18.5-18.5V74.9c0-10.2,
                8.3-18.5,18.5-18.5h85.3c10.2,0,18.5,8.3,18.5,18.5v50.2C186.6,
                135.3,178.3,143.6,168.1,143.6z`
                    })),
                    (0, _redom.svg)("g", [
                        (0, _redom.svg)("g", (0, _redom.svg)("rect", {
                            x: "82",
                            y: "70",
                            class: "st12",
                            width: "1.5",
                            height: "60"
                        })),
                        (0, _redom.svg)("g", (0, _redom.svg)("rect", {
                            x: "167.4",
                            y: "70",
                            class: "st12",
                            width: "1.5",
                            height: "60"
                        })),
                        (0, _redom.svg)("g", (0, _redom.svg)("path", {
                            class: "st12",
                            d: `M125.5,130.8c-10.2,0-18.5-8.3-18.5-18.5c0-4.6,1.7-8.9,
                4.7-12.3c-3-3.4-4.7-7.7-4.7-12.3c0-10.2,8.3-18.5,18.5-18.5s18.5,8.3,
                18.5,18.5c0,4.6-1.7,8.9-4.7,12.3c3,3.4,4.7,7.7,4.7,12.3C143.9,
                122.5,135.7,130.8,125.5,130.8z M125.5,70.8c-9.3,0-16.9,7.6-16.9,
                16.9c0,4.4,1.7,8.6,4.8,11.8l0.5,0.5l-0.5,0.5c-3.1,3.2-4.8,
                7.4-4.8,11.8c0,9.3,7.6,16.9,16.9,16.9s16.9-7.6,
                16.9-16.9c0-4.4-1.7-8.6-4.8-11.8l-0.5-0.5l0.5-0.5c3.1-3.2,
                4.8-7.4,4.8-11.8C142.4,78.4,134.8,70.8,125.5,70.8z`
                        })),
                        (0, _redom.svg)("g", (0, _redom.svg)("rect", {
                            x: "82.8",
                            y: "82.1",
                            class: "st12",
                            width: "25.8",
                            height: "1.5"
                        })),
                        (0, _redom.svg)("g", (0, _redom.svg)("rect", {
                            x: "82.8",
                            y: "117.9",
                            class: "st12",
                            width: "26.1",
                            height: "1.5"
                        })),
                        (0, _redom.svg)("g", (0, _redom.svg)("rect", {
                            x: "142.4",
                            y: "82.1",
                            class: "st12",
                            width: "25.8",
                            height: "1.5"
                        })),
                        (0, _redom.svg)("g", (0, _redom.svg)("rect", {
                            x: "142",
                            y: "117.9",
                            class: "st12",
                            width: "26.2",
                            height: "1.5"
                        }))
                    ])
                ])
            ]),
            (0, _redom.svg)("g#Back")
        ])
    ]);
    const cardSecurity = (0, _redom.svg)("text", {
        transform: "matrix(1 0 0 1 621.999 227.2734)",
        id: "svgsecurity",
        class: "st6 st7"
    });
    const nameBack = (0, _redom.svg)("text", {
        transform: "matrix(1 0 0 1 59.5073 228.6099)",
        id: "svgnameback",
        class: "st12 st13"
    });
    const back = (0, _redom.el)("div", {
        className: "back"
    }, [
        (0, _redom.svg)("svg", {
            "version": "1.1",
            "id": "cardback",
            "xmlns": "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            "x": "0px",
            "y": "0px",
            "viewBox": "0 0 750 471",
            "style": "enable-background: new 0 0 750 471;",
            "xml:space": "preserve"
        }, [
            (0, _redom.svg)("g#Front", [
                (0, _redom.svg)("line", {
                    class: "st0",
                    x1: "35.3",
                    y1: "10.4",
                    x2: "36.7",
                    y2: "11"
                })
            ]),
            (0, _redom.svg)("g#Back", [
                (0, _redom.svg)("g", {
                    id: "Page-1_2_"
                }, [
                    (0, _redom.svg)("g", {
                        id: "amex_2_"
                    }, [
                        (0, _redom.svg)("path", {
                            id: "Rectangle-1_2_",
                            class: "darkcolor",
                            d: `M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,
                40H40c-22.1,0-40-17.9-40-40V40C0,17.9,17.9,0,40,0z`,
                            fill: "#616161"
                        })
                    ])
                ]),
                (0, _redom.svg)("rect", {
                    y: "61.6",
                    class: "st2",
                    width: "750",
                    height: "78"
                }),
                (0, _redom.svg)("g", [
                    (0, _redom.svg)("path", {
                        class: "st3",
                        d: `M701.1,249.1H48.9c-3.3,0-6-2.7-6-6v-52.5c0-3.3,2.7-6,6-6h652.1c3.3,
              0,6,2.7,6,6v52.5C707.1,246.4,704.4,249.1,701.1,249.1z`
                    }),
                    (0, _redom.svg)("rect", {
                        x: "42.9",
                        y: "198.6",
                        class: "st4",
                        width: "664.1",
                        height: "10.5"
                    }),
                    (0, _redom.svg)("rect", {
                        x: "42.9",
                        y: "224.5",
                        class: "st4",
                        width: "664.1",
                        height: "10.5"
                    }),
                    (0, _redom.svg)("path", {
                        class: "st5",
                        d: `M701.1,184.6H618h-8h-10v64.5h10h8h83.1c3.3,0,
              6-2.7,6-6v-52.5C707.1,187.3,704.4,184.6,701.1,184.6z`
                    })
                ]),
                cardSecurity,
                (0, _redom.svg)("g", {
                    className: "st8"
                }, [
                    (0, _redom.svg)("text", "security code", {
                        transform: "matrix(1 0 0 1 518.083 280.0879)",
                        class: "st9 st6 st10"
                    })
                ]),
                (0, _redom.svg)("rect", {
                    x: "58.1",
                    y: "378.6",
                    class: "st11",
                    width: "375.5",
                    height: "13.5"
                }),
                (0, _redom.svg)("rect", {
                    x: "58.1",
                    y: "405.6",
                    class: "st11",
                    width: "421.7",
                    height: "13.5"
                }),
                nameBack
            ])
        ])
    ]);
    (0, _redom.setChildren)(creditCard, [
        front,
        back
    ]);
    (0, _redom.setChildren)(cardСontainer, [
        creditCard
    ]);
    return {
        cardСontainer,
        creditCard,
        cardNumber,
        cardName,
        cardExpire,
        cardSecurity,
        nameBack
    };
};
const createForm = ()=>{
    const formContainer = (0, _redom.el)("div", {
        className: "form-container"
    });
    const inputName = (0, _redom.el)("input#name", {
        maxlength: "20",
        type: "text"
    });
    const inputCardNumber = (0, _redom.el)("input#cardnumber", {
        type: "text",
        inputmode: "numeric"
    });
    const inputExpirationDate = (0, _redom.el)("input#expirationdate", {
        type: "text",
        inputmode: "numeric"
    });
    const inputSecurityCode = (0, _redom.el)("input#securitycode", {
        type: "text",
        inputmode: "numeric"
    });
    const form = [
        (0, _redom.el)("div.field-container", (0, _redom.el)("label", "Full Name", {
            for: "fullname"
        }), inputName),
        (0, _redom.el)("div.field-container", (0, _redom.el)("label", "Card Number", {
            for: "cardnumber"
        }), inputCardNumber, (0, _redom.el)("div#ccicon.ccicon")),
        (0, _redom.el)("div.field-container", (0, _redom.el)("label", "Expiration (mm/yy)", {
            for: "expirationdate"
        }), inputExpirationDate),
        (0, _redom.el)("div.field-container", (0, _redom.el)("label", "Security Code", {
            for: "securitycode"
        }), inputSecurityCode)
    ];
    (0, _redom.setChildren)(formContainer, form);
    return {
        formContainer,
        inputName,
        inputCardNumber,
        inputExpirationDate,
        inputSecurityCode
    };
};
const createBlockWithError = (text)=>{
    const blockWithError = (0, _redom.el)("span.error-message-block", text);
    return blockWithError;
};

},{"redom":"iahd6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"asNgC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _inputmask = require("inputmask");
var _inputmaskDefault = parcelHelpers.interopDefault(_inputmask);
var _createElementsJs = require("./createElements.js");
var _bankIdentifierJs = require("./bankIdentifier.js");
const isValidDate = (inputExpirationDateValue)=>{
    const datePattern = /^(0[1-9]|1[0-2])\/[0-9]{2}$/;
    if (datePattern.test(inputExpirationDateValue)) {
        const [month, year] = inputExpirationDateValue.split("/");
        if (month >= 1 && month <= 12 && year >= new Date().getFullYear() % 100 && year <= 99) return true;
    }
    return false;
};
const isValidInputDate = (inputExpirationDate)=>{
    const isValidExpirationDate = isValidDate(inputExpirationDate.value);
    const errorMessageBlockFromDom = document.querySelector(".error-message-block");
    if (!isValidExpirationDate) {
        const blockWithError = (0, _createElementsJs.createBlockWithError)("Введите корректную дату");
        inputExpirationDate.after(blockWithError);
    }
    if (errorMessageBlockFromDom) errorMessageBlockFromDom.remove();
};
const namePattern = /^([A-Za-z]{2,}\s){1,}([A-Za-z]{2,}){1}$/;
const isValidInputName = (inputName)=>{
    const isValidName = namePattern.test(inputName.value);
    const errorMessageBlockFromDom = document.querySelector(".error-message-block");
    if (!isValidName) {
        const blockWithError = (0, _createElementsJs.createBlockWithError)("Введите корректное полное имя");
        inputName.after(blockWithError);
    }
    if (errorMessageBlockFromDom) errorMessageBlockFromDom.remove();
};
const controlInputValue = ({ cardСontainer, creditCard, formContainer, inputName, inputCardNumber, inputExpirationDate, inputSecurityCode, cardNumber, cardName, cardExpire, cardSecurity, nameBack })=>{
    inputName.addEventListener("input", ()=>{
        inputName.value = inputName.value.replace(/[^A-Za-z\s]/g, "");
        cardName.textContent = inputName.value;
        nameBack.textContent = inputName.value;
    });
    formContainer.addEventListener("input", ({ target })=>{
        const existingBankLogo = document.querySelector("#bank-logo");
        const existingBrandLogo = document.querySelector("#brand-logo");
        const pathLightColor = document.querySelector(".lightcolor");
        const pathDarkColor = document.querySelector(".darkcolor");
        const rectangle2 = document.querySelector("#Rectangle-1_2_");
        if (target.tagName === "INPUT" && target.getAttribute("inputmode") === "numeric") target.value = target.value.replace(/[^0-9]/g, "");
        if (target.id === "cardnumber") {
            cardNumber.textContent = target.value;
            const numberWithoutSpaces = target.value.replace(/\s/g, "");
            if (numberWithoutSpaces.length === 0) cardNumber.textContent = "XXXX XXXX XXXX XXXX";
            if (numberWithoutSpaces.length > 0) (0, _bankIdentifierJs.getBrandInfo)(numberWithoutSpaces);
            if (numberWithoutSpaces.length < 2 && existingBrandLogo) existingBrandLogo.remove();
            if (numberWithoutSpaces.length >= 6) (0, _bankIdentifierJs.getBankInfo)(numberWithoutSpaces);
            if (numberWithoutSpaces.length < 6) {
                pathLightColor.setAttribute("fill", "#bdbdbd");
                pathDarkColor.setAttribute("fill", "#616161");
                rectangle2.setAttribute("fill", "#616161");
                if (existingBankLogo) {
                    existingBankLogo.remove();
                    (0, _bankIdentifierJs.getBrandInfo)(numberWithoutSpaces);
                }
            }
        }
        if (target.id === "expirationdate") cardExpire.textContent = target.value;
        if (target.id === "securitycode") {
            creditCard.classList.add("flipped");
            cardSecurity.textContent = target.value;
        }
    });
    cardСontainer.addEventListener("click", ()=>{
        creditCard.classList.toggle("flipped");
    });
    inputName.addEventListener("blur", ()=>isValidInputName(inputName));
    inputExpirationDate.addEventListener("blur", ()=>isValidInputDate(inputExpirationDate));
    const maskCardNumber = new (0, _inputmaskDefault.default)("9999 9999 9999 9999", {
        placeholder: " ",
        clearMaskOnLostFocus: false
    });
    maskCardNumber.mask(inputCardNumber);
    const maskExpiration = new (0, _inputmaskDefault.default)("99/99", {
        placeholder: " ",
        clearMaskOnLostFocus: false
    });
    maskExpiration.mask(inputExpirationDate);
    const maskSecurity = new (0, _inputmaskDefault.default)("999", {
        placeholder: " ",
        clearMaskOnLostFocus: false
    });
    maskSecurity.mask(inputSecurityCode);
};
exports.default = controlInputValue;

},{"inputmask":"gyYno","./createElements.js":"93936","./bankIdentifier.js":"cVNJ7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gyYno":[function(require,module,exports) {
/*!
 * dist/inputmask
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2023 Robin Herbots
 * Licensed under the MIT license
 * Version: 5.0.8
 */ !function(e, t) {
    var i, n;
    module.exports = t();
}("undefined" != typeof self ? self : this, function() {
    return function() {
        "use strict";
        var e = {
            8741: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var i = !("undefined" == typeof window || !window.document || !window.document.createElement);
                t.default = i;
            },
            3976: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var n = i(2839), a = {
                    _maxTestPos: 500,
                    placeholder: "_",
                    optionalmarker: [
                        "[",
                        "]"
                    ],
                    quantifiermarker: [
                        "{",
                        "}"
                    ],
                    groupmarker: [
                        "(",
                        ")"
                    ],
                    alternatormarker: "|",
                    escapeChar: "\\",
                    mask: null,
                    regex: null,
                    oncomplete: function() {},
                    onincomplete: function() {},
                    oncleared: function() {},
                    repeat: 0,
                    greedy: !1,
                    autoUnmask: !1,
                    removeMaskOnSubmit: !1,
                    clearMaskOnLostFocus: !0,
                    insertMode: !0,
                    insertModeVisual: !0,
                    clearIncomplete: !1,
                    alias: null,
                    onKeyDown: function() {},
                    onBeforeMask: null,
                    onBeforePaste: function(e, t) {
                        return "function" == typeof t.onBeforeMask ? t.onBeforeMask.call(this, e, t) : e;
                    },
                    onBeforeWrite: null,
                    onUnMask: null,
                    showMaskOnFocus: !0,
                    showMaskOnHover: !0,
                    onKeyValidation: function() {},
                    skipOptionalPartCharacter: " ",
                    numericInput: !1,
                    rightAlign: !1,
                    undoOnEscape: !0,
                    radixPoint: "",
                    _radixDance: !1,
                    groupSeparator: "",
                    keepStatic: null,
                    positionCaretOnTab: !0,
                    tabThrough: !1,
                    supportsInputType: [
                        "text",
                        "tel",
                        "url",
                        "password",
                        "search"
                    ],
                    ignorables: [
                        n.keys.Backspace,
                        n.keys.Tab,
                        n.keys.Pause,
                        n.keys.Escape,
                        n.keys.PageUp,
                        n.keys.PageDown,
                        n.keys.End,
                        n.keys.Home,
                        n.keys.ArrowLeft,
                        n.keys.ArrowUp,
                        n.keys.ArrowRight,
                        n.keys.ArrowDown,
                        n.keys.Insert,
                        n.keys.Delete,
                        n.keys.ContextMenu,
                        n.keys.F1,
                        n.keys.F2,
                        n.keys.F3,
                        n.keys.F4,
                        n.keys.F5,
                        n.keys.F6,
                        n.keys.F7,
                        n.keys.F8,
                        n.keys.F9,
                        n.keys.F10,
                        n.keys.F11,
                        n.keys.F12,
                        n.keys.Process,
                        n.keys.Unidentified,
                        n.keys.Shift,
                        n.keys.Control,
                        n.keys.Alt,
                        n.keys.Tab,
                        n.keys.AltGraph,
                        n.keys.CapsLock
                    ],
                    isComplete: null,
                    preValidation: null,
                    postValidation: null,
                    staticDefinitionSymbol: void 0,
                    jitMasking: !1,
                    nullable: !0,
                    inputEventOnly: !1,
                    noValuePatching: !1,
                    positionCaretOnClick: "lvp",
                    casing: null,
                    inputmode: "text",
                    importDataAttributes: !0,
                    shiftPositions: !0,
                    usePrototypeDefinitions: !0,
                    validationEventTimeOut: 3e3,
                    substitutes: {}
                };
                t.default = a;
            },
            7392: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                t.default = {
                    9: {
                        validator: "[0-9０-９]",
                        definitionSymbol: "*"
                    },
                    a: {
                        validator: "[A-Za-zА-яЁё\xc0-\xff\xb5]",
                        definitionSymbol: "*"
                    },
                    "*": {
                        validator: "[0-9０-９A-Za-zА-яЁё\xc0-\xff\xb5]"
                    }
                };
            },
            253: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e, t, i) {
                    if (void 0 === i) return e.__data ? e.__data[t] : null;
                    e.__data = e.__data || {}, e.__data[t] = i;
                };
            },
            3776: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Event = void 0, t.off = function(e, t) {
                    var i, n;
                    f(this[0]) && e && (i = this[0].eventRegistry, n = this[0], e.split(" ").forEach(function(e) {
                        var a = l(e.split("."), 2);
                        (function(e, n) {
                            var a, r, o = [];
                            if (e.length > 0) {
                                if (void 0 === t) for(a = 0, r = i[e][n].length; a < r; a++)o.push({
                                    ev: e,
                                    namespace: n && n.length > 0 ? n : "global",
                                    handler: i[e][n][a]
                                });
                                else o.push({
                                    ev: e,
                                    namespace: n && n.length > 0 ? n : "global",
                                    handler: t
                                });
                            } else if (n.length > 0) {
                                for(var s in i)for(var l in i[s])if (l === n) {
                                    if (void 0 === t) for(a = 0, r = i[s][l].length; a < r; a++)o.push({
                                        ev: s,
                                        namespace: l,
                                        handler: i[s][l][a]
                                    });
                                    else o.push({
                                        ev: s,
                                        namespace: l,
                                        handler: t
                                    });
                                }
                            }
                            return o;
                        })(a[0], a[1]).forEach(function(e) {
                            var t = e.ev, a = e.handler;
                            !function(e, t, a) {
                                if (e in i == 1) {
                                    if (n.removeEventListener ? n.removeEventListener(e, a, !1) : n.detachEvent && n.detachEvent("on".concat(e), a), "global" === t) for(var r in i[e])i[e][r].splice(i[e][r].indexOf(a), 1);
                                    else i[e][t].splice(i[e][t].indexOf(a), 1);
                                }
                            }(t, e.namespace, a);
                        });
                    }));
                    return this;
                }, t.on = function(e, t) {
                    if (f(this[0])) {
                        var i = this[0].eventRegistry, n = this[0];
                        e.split(" ").forEach(function(e) {
                            var a = l(e.split("."), 2), r = a[0], o = a[1];
                            !function(e, a) {
                                n.addEventListener ? n.addEventListener(e, t, !1) : n.attachEvent && n.attachEvent("on".concat(e), t), i[e] = i[e] || {}, i[e][a] = i[e][a] || [], i[e][a].push(t);
                            }(r, void 0 === o ? "global" : o);
                        });
                    }
                    return this;
                }, t.trigger = function(e) {
                    var t = arguments;
                    if (f(this[0])) for(var i = this[0].eventRegistry, n = this[0], r = "string" == typeof e ? e.split(" ") : [
                        e.type
                    ], s = 0; s < r.length; s++){
                        var l = r[s].split("."), c = l[0], u = l[1] || "global";
                        if (void 0 !== document && "global" === u) {
                            var d, p = {
                                bubbles: !0,
                                cancelable: !0,
                                composed: !0,
                                detail: arguments[1]
                            };
                            if (document.createEvent) {
                                try {
                                    if ("input" === c) p.inputType = "insertText", d = new InputEvent(c, p);
                                    else d = new CustomEvent(c, p);
                                } catch (e) {
                                    (d = document.createEvent("CustomEvent")).initCustomEvent(c, p.bubbles, p.cancelable, p.detail);
                                }
                                e.type && (0, a.default)(d, e), n.dispatchEvent(d);
                            } else (d = document.createEventObject()).eventType = c, d.detail = arguments[1], e.type && (0, a.default)(d, e), n.fireEvent("on" + d.eventType, d);
                        } else if (void 0 !== i[c]) {
                            arguments[0] = arguments[0].type ? arguments[0] : o.default.Event(arguments[0]), arguments[0].detail = arguments.slice(1);
                            var h = i[c];
                            ("global" === u ? Object.values(h).flat() : h[u]).forEach(function(e) {
                                return e.apply(n, t);
                            });
                        }
                    }
                    return this;
                };
                var n, a = u(i(600)), r = u(i(9380)), o = u(i(4963)), s = u(i(8741));
                function l(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e;
                    }(e) || function(e, t) {
                        var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != i) {
                            var n, a, r, o, s = [], l = !0, c = !1;
                            try {
                                if (r = (i = i.call(e)).next, 0 === t) {
                                    if (Object(i) !== i) return;
                                    l = !1;
                                } else for(; !(l = (n = r.call(i)).done) && (s.push(n.value), s.length !== t); l = !0);
                            } catch (e) {
                                c = !0, a = e;
                            } finally{
                                try {
                                    if (!l && null != i.return && (o = i.return(), Object(o) !== o)) return;
                                } finally{
                                    if (c) throw a;
                                }
                            }
                            return s;
                        }
                    }(e, t) || function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return c(e, t);
                        var i = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === i && e.constructor && (i = e.constructor.name);
                        if ("Map" === i || "Set" === i) return Array.from(e);
                        if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return c(e, t);
                    }(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }();
                }
                function c(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for(var i = 0, n = new Array(t); i < t; i++)n[i] = e[i];
                    return n;
                }
                function u(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                function f(e) {
                    return e instanceof Element;
                }
                t.Event = n, "function" == typeof r.default.CustomEvent ? t.Event = n = r.default.CustomEvent : s.default && (t.Event = n = function(e, t) {
                    t = t || {
                        bubbles: !1,
                        cancelable: !1,
                        composed: !0,
                        detail: void 0
                    };
                    var i = document.createEvent("CustomEvent");
                    return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i;
                }, n.prototype = r.default.Event.prototype);
            },
            600: function(e, t) {
                function i(e) {
                    return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, i(e);
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function e() {
                    var t, n, a, r, o, s, l = arguments[0] || {}, c = 1, u = arguments.length, f = !1;
                    "boolean" == typeof l && (f = l, l = arguments[c] || {}, c++);
                    "object" !== i(l) && "function" != typeof l && (l = {});
                    for(; c < u; c++)if (null != (t = arguments[c])) for(n in t)a = l[n], l !== (r = t[n]) && (f && r && ("[object Object]" === Object.prototype.toString.call(r) || (o = Array.isArray(r))) ? (o ? (o = !1, s = a && Array.isArray(a) ? a : []) : s = a && "[object Object]" === Object.prototype.toString.call(a) ? a : {}, l[n] = e(f, s, r)) : void 0 !== r && (l[n] = r));
                    return l;
                };
            },
            4963: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var n = s(i(600)), a = s(i(9380)), r = s(i(253)), o = i(3776);
                function s(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var l = a.default.document;
                function c(e) {
                    return e instanceof c ? e : this instanceof c ? void (null != e && e !== a.default && (this[0] = e.nodeName ? e : void 0 !== e[0] && e[0].nodeName ? e[0] : l.querySelector(e), void 0 !== this[0] && null !== this[0] && (this[0].eventRegistry = this[0].eventRegistry || {}))) : new c(e);
                }
                c.prototype = {
                    on: o.on,
                    off: o.off,
                    trigger: o.trigger
                }, c.extend = n.default, c.data = r.default, c.Event = o.Event;
                var u = c;
                t.default = u;
            },
            9845: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.mobile = t.iphone = t.ie = void 0;
                var n, a = (n = i(9380)) && n.__esModule ? n : {
                    default: n
                };
                var r = a.default.navigator && a.default.navigator.userAgent || "", o = r.indexOf("MSIE ") > 0 || r.indexOf("Trident/") > 0, s = navigator.userAgentData && navigator.userAgentData.mobile || a.default.navigator && a.default.navigator.maxTouchPoints || "ontouchstart" in a.default, l = /iphone/i.test(r);
                t.iphone = l, t.mobile = s, t.ie = o;
            },
            7184: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e) {
                    return e.replace(i, "\\$1");
                };
                var i = new RegExp("(\\" + [
                    "/",
                    ".",
                    "*",
                    "+",
                    "?",
                    "|",
                    "(",
                    ")",
                    "[",
                    "]",
                    "{",
                    "}",
                    "\\",
                    "$",
                    "^"
                ].join("|\\") + ")", "gim");
            },
            6030: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.EventHandlers = void 0;
                var n = i(8711), a = i(2839), r = i(9845), o = i(7215), s = i(7760), l = i(4713);
                function c(e, t) {
                    var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (!i) {
                        if (Array.isArray(e) || (i = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return u(e, t);
                            var i = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === i && e.constructor && (i = e.constructor.name);
                            if ("Map" === i || "Set" === i) return Array.from(e);
                            if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return u(e, t);
                        }(e)) || t && e && "number" == typeof e.length) {
                            i && (e = i);
                            var n = 0, a = function() {};
                            return {
                                s: a,
                                n: function() {
                                    return n >= e.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: e[n++]
                                    };
                                },
                                e: function(e) {
                                    throw e;
                                },
                                f: a
                            };
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }
                    var r, o = !0, s = !1;
                    return {
                        s: function() {
                            i = i.call(e);
                        },
                        n: function() {
                            var e = i.next();
                            return o = e.done, e;
                        },
                        e: function(e) {
                            s = !0, r = e;
                        },
                        f: function() {
                            try {
                                o || null == i.return || i.return();
                            } finally{
                                if (s) throw r;
                            }
                        }
                    };
                }
                function u(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for(var i = 0, n = new Array(t); i < t; i++)n[i] = e[i];
                    return n;
                }
                var f = {
                    keyEvent: function(e, t, i, c, u) {
                        var d = this.inputmask, p = d.opts, h = d.dependencyLib, v = d.maskset, m = this, g = h(m), y = e.key, k = n.caret.call(d, m), b = p.onKeyDown.call(this, e, n.getBuffer.call(d), k, p);
                        if (void 0 !== b) return b;
                        if (y === a.keys.Backspace || y === a.keys.Delete || r.iphone && y === a.keys.BACKSPACE_SAFARI || e.ctrlKey && y === a.keys.x && !("oncut" in m)) e.preventDefault(), o.handleRemove.call(d, m, y, k), (0, s.writeBuffer)(m, n.getBuffer.call(d, !0), v.p, e, m.inputmask._valueGet() !== n.getBuffer.call(d).join(""));
                        else if (y === a.keys.End || y === a.keys.PageDown) {
                            e.preventDefault();
                            var x = n.seekNext.call(d, n.getLastValidPosition.call(d));
                            n.caret.call(d, m, e.shiftKey ? k.begin : x, x, !0);
                        } else y === a.keys.Home && !e.shiftKey || y === a.keys.PageUp ? (e.preventDefault(), n.caret.call(d, m, 0, e.shiftKey ? k.begin : 0, !0)) : p.undoOnEscape && y === a.keys.Escape && !0 !== e.altKey ? ((0, s.checkVal)(m, !0, !1, d.undoValue.split("")), g.trigger("click")) : y !== a.keys.Insert || e.shiftKey || e.ctrlKey || void 0 !== d.userOptions.insertMode ? !0 === p.tabThrough && y === a.keys.Tab ? !0 === e.shiftKey ? (k.end = n.seekPrevious.call(d, k.end, !0), !0 === l.getTest.call(d, k.end - 1).match.static && k.end--, k.begin = n.seekPrevious.call(d, k.end, !0), k.begin >= 0 && k.end > 0 && (e.preventDefault(), n.caret.call(d, m, k.begin, k.end))) : (k.begin = n.seekNext.call(d, k.begin, !0), k.end = n.seekNext.call(d, k.begin, !0), k.end < v.maskLength && k.end--, k.begin <= v.maskLength && (e.preventDefault(), n.caret.call(d, m, k.begin, k.end))) : e.shiftKey || p.insertModeVisual && !1 === p.insertMode && (y === a.keys.ArrowRight ? setTimeout(function() {
                            var e = n.caret.call(d, m);
                            n.caret.call(d, m, e.begin);
                        }, 0) : y === a.keys.ArrowLeft && setTimeout(function() {
                            var e = n.translatePosition.call(d, m.inputmask.caretPos.begin);
                            n.translatePosition.call(d, m.inputmask.caretPos.end);
                            d.isRTL ? n.caret.call(d, m, e + (e === v.maskLength ? 0 : 1)) : n.caret.call(d, m, e - (0 === e ? 0 : 1));
                        }, 0)) : o.isSelection.call(d, k) ? p.insertMode = !p.insertMode : (p.insertMode = !p.insertMode, n.caret.call(d, m, k.begin, k.begin));
                        return d.isComposing = y == a.keys.Process || y == a.keys.Unidentified, d.ignorable = p.ignorables.includes(y), f.keypressEvent.call(this, e, t, i, c, u);
                    },
                    keypressEvent: function(e, t, i, r, l) {
                        var c = this.inputmask || this, u = c.opts, f = c.dependencyLib, d = c.maskset, p = c.el, h = f(p), v = e.key;
                        if (!0 === t || e.ctrlKey && e.altKey || !(e.ctrlKey || e.metaKey || c.ignorable)) {
                            if (v) {
                                var m, g = t ? {
                                    begin: l,
                                    end: l
                                } : n.caret.call(c, p);
                                v = u.substitutes[v] || v, d.writeOutBuffer = !0;
                                var y = o.isValid.call(c, g, v, r, void 0, void 0, void 0, t);
                                if (!1 !== y && (n.resetMaskSet.call(c, !0), m = void 0 !== y.caret ? y.caret : n.seekNext.call(c, y.pos.begin ? y.pos.begin : y.pos), d.p = m), m = u.numericInput && void 0 === y.caret ? n.seekPrevious.call(c, m) : m, !1 !== i && (setTimeout(function() {
                                    u.onKeyValidation.call(p, v, y);
                                }, 0), d.writeOutBuffer && !1 !== y)) {
                                    var k = n.getBuffer.call(c);
                                    (0, s.writeBuffer)(p, k, m, e, !0 !== t);
                                }
                                if (e.preventDefault(), t) return !1 !== y && (y.forwardPosition = m), y;
                            }
                        } else v === a.keys.Enter && c.undoValue !== c._valueGet(!0) && (c.undoValue = c._valueGet(!0), setTimeout(function() {
                            h.trigger("change");
                        }, 0));
                    },
                    pasteEvent: function(e) {
                        var t, i = this.inputmask, a = i.opts, r = i._valueGet(!0), o = n.caret.call(i, this);
                        i.isRTL && (t = o.end, o.end = n.translatePosition.call(i, o.begin), o.begin = n.translatePosition.call(i, t));
                        var l = r.substr(0, o.begin), u = r.substr(o.end, r.length);
                        if (l == (i.isRTL ? n.getBufferTemplate.call(i).slice().reverse() : n.getBufferTemplate.call(i)).slice(0, o.begin).join("") && (l = ""), u == (i.isRTL ? n.getBufferTemplate.call(i).slice().reverse() : n.getBufferTemplate.call(i)).slice(o.end).join("") && (u = ""), window.clipboardData && window.clipboardData.getData) r = l + window.clipboardData.getData("Text") + u;
                        else {
                            if (!e.clipboardData || !e.clipboardData.getData) return !0;
                            r = l + e.clipboardData.getData("text/plain") + u;
                        }
                        var f = r;
                        if (i.isRTL) {
                            f = f.split("");
                            var d, p = c(n.getBufferTemplate.call(i));
                            try {
                                for(p.s(); !(d = p.n()).done;){
                                    var h = d.value;
                                    f[0] === h && f.shift();
                                }
                            } catch (e) {
                                p.e(e);
                            } finally{
                                p.f();
                            }
                            f = f.join("");
                        }
                        if ("function" == typeof a.onBeforePaste) {
                            if (!1 === (f = a.onBeforePaste.call(i, f, a))) return !1;
                            f || (f = r);
                        }
                        (0, s.checkVal)(this, !0, !1, f.toString().split(""), e), e.preventDefault();
                    },
                    inputFallBackEvent: function(e) {
                        var t = this.inputmask, i = t.opts, o = t.dependencyLib;
                        var c, u = this, d = u.inputmask._valueGet(!0), p = (t.isRTL ? n.getBuffer.call(t).slice().reverse() : n.getBuffer.call(t)).join(""), h = n.caret.call(t, u, void 0, void 0, !0);
                        if (p !== d) {
                            if (c = function(e, a, r) {
                                for(var o, s, c, u = e.substr(0, r.begin).split(""), f = e.substr(r.begin).split(""), d = a.substr(0, r.begin).split(""), p = a.substr(r.begin).split(""), h = u.length >= d.length ? u.length : d.length, v = f.length >= p.length ? f.length : p.length, m = "", g = [], y = "~"; u.length < h;)u.push(y);
                                for(; d.length < h;)d.push(y);
                                for(; f.length < v;)f.unshift(y);
                                for(; p.length < v;)p.unshift(y);
                                var k = u.concat(f), b = d.concat(p);
                                for(s = 0, o = k.length; s < o; s++)switch(c = l.getPlaceholder.call(t, n.translatePosition.call(t, s)), m){
                                    case "insertText":
                                        b[s - 1] === k[s] && r.begin == k.length - 1 && g.push(k[s]), s = o;
                                        break;
                                    case "insertReplacementText":
                                    case "deleteContentBackward":
                                        k[s] === y ? r.end++ : s = o;
                                        break;
                                    default:
                                        k[s] !== b[s] && (k[s + 1] !== y && k[s + 1] !== c && void 0 !== k[s + 1] || (b[s] !== c || b[s + 1] !== y) && b[s] !== y ? b[s + 1] === y && b[s] === k[s + 1] ? (m = "insertText", g.push(k[s]), r.begin--, r.end--) : k[s] !== c && k[s] !== y && (k[s + 1] === y || b[s] !== k[s] && b[s + 1] === k[s + 1]) ? (m = "insertReplacementText", g.push(k[s]), r.begin--) : k[s] === y ? (m = "deleteContentBackward", (n.isMask.call(t, n.translatePosition.call(t, s), !0) || b[s] === i.radixPoint) && r.end++) : s = o : (m = "insertText", g.push(k[s]), r.begin--, r.end--));
                                }
                                return {
                                    action: m,
                                    data: g,
                                    caret: r
                                };
                            }(d, p, h), (u.inputmask.shadowRoot || u.ownerDocument).activeElement !== u && u.focus(), (0, s.writeBuffer)(u, n.getBuffer.call(t)), n.caret.call(t, u, h.begin, h.end, !0), !r.mobile && t.skipNextInsert && "insertText" === e.inputType && "insertText" === c.action && t.isComposing) return !1;
                            switch("insertCompositionText" === e.inputType && "insertText" === c.action && t.isComposing ? t.skipNextInsert = !0 : t.skipNextInsert = !1, c.action){
                                case "insertText":
                                case "insertReplacementText":
                                    c.data.forEach(function(e, i) {
                                        var n = new o.Event("keypress");
                                        n.key = e, t.ignorable = !1, f.keypressEvent.call(u, n);
                                    }), setTimeout(function() {
                                        t.$el.trigger("keyup");
                                    }, 0);
                                    break;
                                case "deleteContentBackward":
                                    var v = new o.Event("keydown");
                                    v.key = a.keys.Backspace, f.keyEvent.call(u, v);
                                    break;
                                default:
                                    (0, s.applyInputValue)(u, d), n.caret.call(t, u, h.begin, h.end, !0);
                            }
                            e.preventDefault();
                        }
                    },
                    setValueEvent: function(e) {
                        var t = this.inputmask, i = this, a = e && e.detail ? e.detail[0] : arguments[1];
                        void 0 === a && (a = i.inputmask._valueGet(!0)), (0, s.applyInputValue)(i, a), (e.detail && void 0 !== e.detail[1] || void 0 !== arguments[2]) && n.caret.call(t, i, e.detail ? e.detail[1] : arguments[2]);
                    },
                    focusEvent: function(e) {
                        var t = this.inputmask, i = t.opts, a = null == t ? void 0 : t._valueGet();
                        i.showMaskOnFocus && a !== n.getBuffer.call(t).join("") && (0, s.writeBuffer)(this, n.getBuffer.call(t), n.seekNext.call(t, n.getLastValidPosition.call(t))), !0 !== i.positionCaretOnTab || !1 !== t.mouseEnter || o.isComplete.call(t, n.getBuffer.call(t)) && -1 !== n.getLastValidPosition.call(t) || f.clickEvent.apply(this, [
                            e,
                            !0
                        ]), t.undoValue = null == t ? void 0 : t._valueGet(!0);
                    },
                    invalidEvent: function(e) {
                        this.inputmask.validationEvent = !0;
                    },
                    mouseleaveEvent: function() {
                        var e = this.inputmask, t = e.opts, i = this;
                        e.mouseEnter = !1, t.clearMaskOnLostFocus && (i.inputmask.shadowRoot || i.ownerDocument).activeElement !== i && (0, s.HandleNativePlaceholder)(i, e.originalPlaceholder);
                    },
                    clickEvent: function(e, t) {
                        var i = this.inputmask;
                        i.clicked++;
                        var a = this;
                        if ((a.inputmask.shadowRoot || a.ownerDocument).activeElement === a) {
                            var r = n.determineNewCaretPosition.call(i, n.caret.call(i, a), t);
                            void 0 !== r && n.caret.call(i, a, r);
                        }
                    },
                    cutEvent: function(e) {
                        var t = this.inputmask, i = t.maskset, r = this, l = n.caret.call(t, r), c = t.isRTL ? n.getBuffer.call(t).slice(l.end, l.begin) : n.getBuffer.call(t).slice(l.begin, l.end), u = t.isRTL ? c.reverse().join("") : c.join("");
                        window.navigator.clipboard ? window.navigator.clipboard.writeText(u) : window.clipboardData && window.clipboardData.getData && window.clipboardData.setData("Text", u), o.handleRemove.call(t, r, a.keys.Delete, l), (0, s.writeBuffer)(r, n.getBuffer.call(t), i.p, e, t.undoValue !== t._valueGet(!0));
                    },
                    blurEvent: function(e) {
                        var t = this.inputmask, i = t.opts, a = t.dependencyLib;
                        t.clicked = 0;
                        var r = a(this), l = this;
                        if (l.inputmask) {
                            (0, s.HandleNativePlaceholder)(l, t.originalPlaceholder);
                            var c = l.inputmask._valueGet(), u = n.getBuffer.call(t).slice();
                            "" !== c && (i.clearMaskOnLostFocus && (-1 === n.getLastValidPosition.call(t) && c === n.getBufferTemplate.call(t).join("") ? u = [] : s.clearOptionalTail.call(t, u)), !1 === o.isComplete.call(t, u) && (setTimeout(function() {
                                r.trigger("incomplete");
                            }, 0), i.clearIncomplete && (n.resetMaskSet.call(t), u = i.clearMaskOnLostFocus ? [] : n.getBufferTemplate.call(t).slice())), (0, s.writeBuffer)(l, u, void 0, e)), t.undoValue !== t._valueGet(!0) && (t.undoValue = t._valueGet(!0), r.trigger("change"));
                        }
                    },
                    mouseenterEvent: function() {
                        var e = this.inputmask, t = e.opts.showMaskOnHover, i = this;
                        if (e.mouseEnter = !0, (i.inputmask.shadowRoot || i.ownerDocument).activeElement !== i) {
                            var a = (e.isRTL ? n.getBufferTemplate.call(e).slice().reverse() : n.getBufferTemplate.call(e)).join("");
                            t && (0, s.HandleNativePlaceholder)(i, a);
                        }
                    },
                    submitEvent: function() {
                        var e = this.inputmask, t = e.opts;
                        e.undoValue !== e._valueGet(!0) && e.$el.trigger("change"), -1 === n.getLastValidPosition.call(e) && e._valueGet && e._valueGet() === n.getBufferTemplate.call(e).join("") && e._valueSet(""), t.clearIncomplete && !1 === o.isComplete.call(e, n.getBuffer.call(e)) && e._valueSet(""), t.removeMaskOnSubmit && (e._valueSet(e.unmaskedvalue(), !0), setTimeout(function() {
                            (0, s.writeBuffer)(e.el, n.getBuffer.call(e));
                        }, 0));
                    },
                    resetEvent: function() {
                        var e = this.inputmask;
                        e.refreshValue = !0, setTimeout(function() {
                            (0, s.applyInputValue)(e.el, e._valueGet(!0));
                        }, 0);
                    }
                };
                t.EventHandlers = f;
            },
            9716: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.EventRuler = void 0;
                var n, a = (n = i(2394)) && n.__esModule ? n : {
                    default: n
                }, r = i(2839), o = i(8711), s = i(7760);
                var l = {
                    on: function(e, t, i) {
                        var n = e.inputmask.dependencyLib, l = function(t) {
                            t.originalEvent && (t = t.originalEvent || t, arguments[0] = t);
                            var l, c = this, u = c.inputmask, f = u ? u.opts : void 0;
                            if (void 0 === u && "FORM" !== this.nodeName) {
                                var d = n.data(c, "_inputmask_opts");
                                n(c).off(), d && new a.default(d).mask(c);
                            } else {
                                if ([
                                    "submit",
                                    "reset",
                                    "setvalue"
                                ].includes(t.type) || "FORM" === this.nodeName || !(c.disabled || c.readOnly && !("keydown" === t.type && t.ctrlKey && t.key === r.keys.c || !1 === f.tabThrough && t.key === r.keys.Tab))) {
                                    switch(t.type){
                                        case "input":
                                            if (!0 === u.skipInputEvent) return u.skipInputEvent = !1, t.preventDefault();
                                            break;
                                        case "click":
                                        case "focus":
                                            return u.validationEvent ? (u.validationEvent = !1, e.blur(), (0, s.HandleNativePlaceholder)(e, (u.isRTL ? o.getBufferTemplate.call(u).slice().reverse() : o.getBufferTemplate.call(u)).join("")), setTimeout(function() {
                                                e.focus();
                                            }, f.validationEventTimeOut), !1) : (l = arguments, void setTimeout(function() {
                                                e.inputmask && i.apply(c, l);
                                            }, 0));
                                    }
                                    var p = i.apply(c, arguments);
                                    return !1 === p && (t.preventDefault(), t.stopPropagation()), p;
                                }
                                t.preventDefault();
                            }
                        };
                        [
                            "submit",
                            "reset"
                        ].includes(t) ? (l = l.bind(e), null !== e.form && n(e.form).on(t, l)) : n(e).on(t, l), e.inputmask.events[t] = e.inputmask.events[t] || [], e.inputmask.events[t].push(l);
                    },
                    off: function(e, t) {
                        if (e.inputmask && e.inputmask.events) {
                            var i = e.inputmask.dependencyLib, n = e.inputmask.events;
                            for(var a in t && ((n = [])[t] = e.inputmask.events[t]), n){
                                for(var r = n[a]; r.length > 0;){
                                    var o = r.pop();
                                    [
                                        "submit",
                                        "reset"
                                    ].includes(a) ? null !== e.form && i(e.form).off(a, o) : i(e).off(a, o);
                                }
                                delete e.inputmask.events[a];
                            }
                        }
                    }
                };
                t.EventRuler = l;
            },
            219: function(e, t, i) {
                var n = d(i(2394)), a = i(2839), r = d(i(7184)), o = i(8711), s = i(4713);
                function l(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e;
                    }(e) || function(e, t) {
                        var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != i) {
                            var n, a, r, o, s = [], l = !0, c = !1;
                            try {
                                if (r = (i = i.call(e)).next, 0 === t) {
                                    if (Object(i) !== i) return;
                                    l = !1;
                                } else for(; !(l = (n = r.call(i)).done) && (s.push(n.value), s.length !== t); l = !0);
                            } catch (e) {
                                c = !0, a = e;
                            } finally{
                                try {
                                    if (!l && null != i.return && (o = i.return(), Object(o) !== o)) return;
                                } finally{
                                    if (c) throw a;
                                }
                            }
                            return s;
                        }
                    }(e, t) || function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return c(e, t);
                        var i = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === i && e.constructor && (i = e.constructor.name);
                        if ("Map" === i || "Set" === i) return Array.from(e);
                        if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return c(e, t);
                    }(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }();
                }
                function c(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for(var i = 0, n = new Array(t); i < t; i++)n[i] = e[i];
                    return n;
                }
                function u(e) {
                    return u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, u(e);
                }
                function f(e, t) {
                    for(var i = 0; i < t.length; i++){
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, (a = n.key, r = void 0, r = function(e, t) {
                            if ("object" !== u(e) || null === e) return e;
                            var i = e[Symbol.toPrimitive];
                            if (void 0 !== i) {
                                var n = i.call(e, t || "default");
                                if ("object" !== u(n)) return n;
                                throw new TypeError("@@toPrimitive must return a primitive value.");
                            }
                            return ("string" === t ? String : Number)(e);
                        }(a, "string"), "symbol" === u(r) ? r : String(r)), n);
                    }
                    var a, r;
                }
                function d(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var p = n.default.dependencyLib, h = function() {
                    function e(t, i, n) {
                        !function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                        }(this, e), this.mask = t, this.format = i, this.opts = n, this._date = new Date(1, 0, 1), this.initDateObject(t, this.opts);
                    }
                    var t, i, n;
                    return t = e, i = [
                        {
                            key: "date",
                            get: function() {
                                return void 0 === this._date && (this._date = new Date(1, 0, 1), this.initDateObject(void 0, this.opts)), this._date;
                            }
                        },
                        {
                            key: "initDateObject",
                            value: function(e, t) {
                                var i;
                                for(P(t).lastIndex = 0; i = P(t).exec(this.format);){
                                    var n = new RegExp("\\d+$").exec(i[0]), a = n ? i[0][0] + "x" : i[0], r = void 0;
                                    if (void 0 !== e) {
                                        if (n) {
                                            var o = P(t).lastIndex, s = E(i.index, t);
                                            P(t).lastIndex = o, r = e.slice(0, e.indexOf(s.nextMatch[0]));
                                        } else r = e.slice(0, g[a] && g[a][4] || a.length);
                                        e = e.slice(r.length);
                                    }
                                    Object.prototype.hasOwnProperty.call(g, a) && this.setValue(this, r, a, g[a][2], g[a][1]);
                                }
                            }
                        },
                        {
                            key: "setValue",
                            value: function(e, t, i, n, a) {
                                if (void 0 !== t && (e[n] = "ampm" === n ? t : t.replace(/[^0-9]/g, "0"), e["raw" + n] = t.replace(/\s/g, "_")), void 0 !== a) {
                                    var r = e[n];
                                    ("day" === n && 29 === parseInt(r) || "month" === n && 2 === parseInt(r)) && (29 !== parseInt(e.day) || 2 !== parseInt(e.month) || "" !== e.year && void 0 !== e.year || e._date.setFullYear(2012, 1, 29)), "day" === n && (m = !0, 0 === parseInt(r) && (r = 1)), "month" === n && (m = !0), "year" === n && (m = !0, r.length < 4 && (r = M(r, 4, !0))), "" === r || isNaN(r) || a.call(e._date, r), "ampm" === n && a.call(e._date, r);
                                }
                            }
                        },
                        {
                            key: "reset",
                            value: function() {
                                this._date = new Date(1, 0, 1);
                            }
                        },
                        {
                            key: "reInit",
                            value: function() {
                                this._date = void 0, this.date;
                            }
                        }
                    ], f(t.prototype, i), n && f(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e;
                }(), v = (new Date).getFullYear(), m = !1, g = {
                    d: [
                        "[1-9]|[12][0-9]|3[01]",
                        Date.prototype.setDate,
                        "day",
                        Date.prototype.getDate
                    ],
                    dd: [
                        "0[1-9]|[12][0-9]|3[01]",
                        Date.prototype.setDate,
                        "day",
                        function() {
                            return M(Date.prototype.getDate.call(this), 2);
                        }
                    ],
                    ddd: [
                        ""
                    ],
                    dddd: [
                        ""
                    ],
                    m: [
                        "[1-9]|1[012]",
                        function(e) {
                            var t = e ? parseInt(e) : 0;
                            return t > 0 && t--, Date.prototype.setMonth.call(this, t);
                        },
                        "month",
                        function() {
                            return Date.prototype.getMonth.call(this) + 1;
                        }
                    ],
                    mm: [
                        "0[1-9]|1[012]",
                        function(e) {
                            var t = e ? parseInt(e) : 0;
                            return t > 0 && t--, Date.prototype.setMonth.call(this, t);
                        },
                        "month",
                        function() {
                            return M(Date.prototype.getMonth.call(this) + 1, 2);
                        }
                    ],
                    mmm: [
                        ""
                    ],
                    mmmm: [
                        ""
                    ],
                    yy: [
                        "[0-9]{2}",
                        Date.prototype.setFullYear,
                        "year",
                        function() {
                            return M(Date.prototype.getFullYear.call(this), 2);
                        }
                    ],
                    yyyy: [
                        "[0-9]{4}",
                        Date.prototype.setFullYear,
                        "year",
                        function() {
                            return M(Date.prototype.getFullYear.call(this), 4);
                        }
                    ],
                    h: [
                        "[1-9]|1[0-2]",
                        Date.prototype.setHours,
                        "hours",
                        Date.prototype.getHours
                    ],
                    hh: [
                        "0[1-9]|1[0-2]",
                        Date.prototype.setHours,
                        "hours",
                        function() {
                            return M(Date.prototype.getHours.call(this), 2);
                        }
                    ],
                    hx: [
                        function(e) {
                            return "[0-9]{".concat(e, "}");
                        },
                        Date.prototype.setHours,
                        "hours",
                        function(e) {
                            return Date.prototype.getHours;
                        }
                    ],
                    H: [
                        "1?[0-9]|2[0-3]",
                        Date.prototype.setHours,
                        "hours",
                        Date.prototype.getHours
                    ],
                    HH: [
                        "0[0-9]|1[0-9]|2[0-3]",
                        Date.prototype.setHours,
                        "hours",
                        function() {
                            return M(Date.prototype.getHours.call(this), 2);
                        }
                    ],
                    Hx: [
                        function(e) {
                            return "[0-9]{".concat(e, "}");
                        },
                        Date.prototype.setHours,
                        "hours",
                        function(e) {
                            return function() {
                                return M(Date.prototype.getHours.call(this), e);
                            };
                        }
                    ],
                    M: [
                        "[1-5]?[0-9]",
                        Date.prototype.setMinutes,
                        "minutes",
                        Date.prototype.getMinutes
                    ],
                    MM: [
                        "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]",
                        Date.prototype.setMinutes,
                        "minutes",
                        function() {
                            return M(Date.prototype.getMinutes.call(this), 2);
                        }
                    ],
                    s: [
                        "[1-5]?[0-9]",
                        Date.prototype.setSeconds,
                        "seconds",
                        Date.prototype.getSeconds
                    ],
                    ss: [
                        "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]",
                        Date.prototype.setSeconds,
                        "seconds",
                        function() {
                            return M(Date.prototype.getSeconds.call(this), 2);
                        }
                    ],
                    l: [
                        "[0-9]{3}",
                        Date.prototype.setMilliseconds,
                        "milliseconds",
                        function() {
                            return M(Date.prototype.getMilliseconds.call(this), 3);
                        },
                        3
                    ],
                    L: [
                        "[0-9]{2}",
                        Date.prototype.setMilliseconds,
                        "milliseconds",
                        function() {
                            return M(Date.prototype.getMilliseconds.call(this), 2);
                        },
                        2
                    ],
                    t: [
                        "[ap]",
                        k,
                        "ampm",
                        b,
                        1
                    ],
                    tt: [
                        "[ap]m",
                        k,
                        "ampm",
                        b,
                        2
                    ],
                    T: [
                        "[AP]",
                        k,
                        "ampm",
                        b,
                        1
                    ],
                    TT: [
                        "[AP]M",
                        k,
                        "ampm",
                        b,
                        2
                    ],
                    Z: [
                        ".*",
                        void 0,
                        "Z",
                        function() {
                            var e = this.toString().match(/\((.+)\)/)[1];
                            e.includes(" ") && (e = (e = e.replace("-", " ").toUpperCase()).split(" ").map(function(e) {
                                return l(e, 1)[0];
                            }).join(""));
                            return e;
                        }
                    ],
                    o: [
                        ""
                    ],
                    S: [
                        ""
                    ]
                }, y = {
                    isoDate: "yyyy-mm-dd",
                    isoTime: "HH:MM:ss",
                    isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
                    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
                };
                function k(e) {
                    var t = this.getHours();
                    e.toLowerCase().includes("p") ? this.setHours(t + 12) : e.toLowerCase().includes("a") && t >= 12 && this.setHours(t - 12);
                }
                function b() {
                    var e = this.getHours();
                    return (e = e || 12) >= 12 ? "PM" : "AM";
                }
                function x(e) {
                    var t = new RegExp("\\d+$").exec(e[0]);
                    if (t && void 0 !== t[0]) {
                        var i = g[e[0][0] + "x"].slice("");
                        return i[0] = i[0](t[0]), i[3] = i[3](t[0]), i;
                    }
                    if (g[e[0]]) return g[e[0]];
                }
                function P(e) {
                    if (!e.tokenizer) {
                        var t = [], i = [];
                        for(var n in g)if (/\.*x$/.test(n)) {
                            var a = n[0] + "\\d+";
                            -1 === i.indexOf(a) && i.push(a);
                        } else -1 === t.indexOf(n[0]) && t.push(n[0]);
                        e.tokenizer = "(" + (i.length > 0 ? i.join("|") + "|" : "") + t.join("+|") + ")+?|.", e.tokenizer = new RegExp(e.tokenizer, "g");
                    }
                    return e.tokenizer;
                }
                function w(e, t, i) {
                    if (!m) return !0;
                    if (void 0 === e.rawday || !isFinite(e.rawday) && new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day || "29" == e.day && (!isFinite(e.rawyear) || void 0 === e.rawyear || "" === e.rawyear) || new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day) return t;
                    if ("29" == e.day) {
                        var n = E(t.pos, i);
                        if ("yyyy" === n.targetMatch[0] && t.pos - n.targetMatchIndex == 2) return t.remove = t.pos + 1, t;
                    } else if ("02" == e.month && "30" == e.day && void 0 !== t.c) return e.day = "03", e.date.setDate(3), e.date.setMonth(1), t.insert = [
                        {
                            pos: t.pos,
                            c: "0"
                        },
                        {
                            pos: t.pos + 1,
                            c: t.c
                        }
                    ], t.caret = o.seekNext.call(this, t.pos + 1), t;
                    return !1;
                }
                function S(e, t, i, n) {
                    var a, o, s = "";
                    for(P(i).lastIndex = 0; a = P(i).exec(e);){
                        if (void 0 === t) {
                            if (o = x(a)) s += "(" + o[0] + ")";
                            else switch(a[0]){
                                case "[":
                                    s += "(";
                                    break;
                                case "]":
                                    s += ")?";
                                    break;
                                default:
                                    s += (0, r.default)(a[0]);
                            }
                        } else if (o = x(a)) {
                            if (!0 !== n && o[3]) s += o[3].call(t.date);
                            else o[2] ? s += t["raw" + o[2]] : s += a[0];
                        } else s += a[0];
                    }
                    return s;
                }
                function M(e, t, i) {
                    for(e = String(e), t = t || 2; e.length < t;)e = i ? e + "0" : "0" + e;
                    return e;
                }
                function _(e, t, i) {
                    return "string" == typeof e ? new h(e, t, i) : e && "object" === u(e) && Object.prototype.hasOwnProperty.call(e, "date") ? e : void 0;
                }
                function O(e, t) {
                    return S(t.inputFormat, {
                        date: e
                    }, t);
                }
                function E(e, t) {
                    var i, n, a = 0, r = 0;
                    for(P(t).lastIndex = 0; n = P(t).exec(t.inputFormat);){
                        var o = new RegExp("\\d+$").exec(n[0]);
                        if ((a += r = o ? parseInt(o[0]) : n[0].length) >= e + 1) {
                            i = n, n = P(t).exec(t.inputFormat);
                            break;
                        }
                    }
                    return {
                        targetMatchIndex: a - r,
                        nextMatch: n,
                        targetMatch: i
                    };
                }
                n.default.extendAliases({
                    datetime: {
                        mask: function(e) {
                            return e.numericInput = !1, g.S = e.i18n.ordinalSuffix.join("|"), e.inputFormat = y[e.inputFormat] || e.inputFormat, e.displayFormat = y[e.displayFormat] || e.displayFormat || e.inputFormat, e.outputFormat = y[e.outputFormat] || e.outputFormat || e.inputFormat, e.placeholder = "" !== e.placeholder ? e.placeholder : e.inputFormat.replace(/[[\]]/, ""), e.regex = S(e.inputFormat, void 0, e), e.min = _(e.min, e.inputFormat, e), e.max = _(e.max, e.inputFormat, e), null;
                        },
                        placeholder: "",
                        inputFormat: "isoDateTime",
                        displayFormat: null,
                        outputFormat: null,
                        min: null,
                        max: null,
                        skipOptionalPartCharacter: "",
                        i18n: {
                            dayNames: [
                                "Mon",
                                "Tue",
                                "Wed",
                                "Thu",
                                "Fri",
                                "Sat",
                                "Sun",
                                "Monday",
                                "Tuesday",
                                "Wednesday",
                                "Thursday",
                                "Friday",
                                "Saturday",
                                "Sunday"
                            ],
                            monthNames: [
                                "Jan",
                                "Feb",
                                "Mar",
                                "Apr",
                                "May",
                                "Jun",
                                "Jul",
                                "Aug",
                                "Sep",
                                "Oct",
                                "Nov",
                                "Dec",
                                "January",
                                "February",
                                "March",
                                "April",
                                "May",
                                "June",
                                "July",
                                "August",
                                "September",
                                "October",
                                "November",
                                "December"
                            ],
                            ordinalSuffix: [
                                "st",
                                "nd",
                                "rd",
                                "th"
                            ]
                        },
                        preValidation: function(e, t, i, n, a, r, o, s) {
                            if (s) return !0;
                            if (isNaN(i) && e[t] !== i) {
                                var l = E(t, a);
                                if (l.nextMatch && l.nextMatch[0] === i && l.targetMatch[0].length > 1) {
                                    var c = g[l.targetMatch[0]][0];
                                    if (new RegExp(c).test("0" + e[t - 1])) return e[t] = e[t - 1], e[t - 1] = "0", {
                                        fuzzy: !0,
                                        buffer: e,
                                        refreshFromBuffer: {
                                            start: t - 1,
                                            end: t + 1
                                        },
                                        pos: t + 1
                                    };
                                }
                            }
                            return !0;
                        },
                        postValidation: function(e, t, i, n, a, r, o, l) {
                            var c, u;
                            if (o) return !0;
                            if (!1 === n && (((c = E(t + 1, a)).targetMatch && c.targetMatchIndex === t && c.targetMatch[0].length > 1 && void 0 !== g[c.targetMatch[0]] || (c = E(t + 2, a)).targetMatch && c.targetMatchIndex === t + 1 && c.targetMatch[0].length > 1 && void 0 !== g[c.targetMatch[0]]) && (u = g[c.targetMatch[0]][0]), void 0 !== u && (void 0 !== r.validPositions[t + 1] && new RegExp(u).test(i + "0") ? (e[t] = i, e[t + 1] = "0", n = {
                                pos: t + 2,
                                caret: t
                            }) : new RegExp(u).test("0" + i) && (e[t] = "0", e[t + 1] = i, n = {
                                pos: t + 2
                            })), !1 === n)) return n;
                            if (n.fuzzy && (e = n.buffer, t = n.pos), (c = E(t, a)).targetMatch && c.targetMatch[0] && void 0 !== g[c.targetMatch[0]]) {
                                var f = g[c.targetMatch[0]];
                                u = f[0];
                                var d = e.slice(c.targetMatchIndex, c.targetMatchIndex + c.targetMatch[0].length);
                                if (!1 === new RegExp(u).test(d.join("")) && 2 === c.targetMatch[0].length && r.validPositions[c.targetMatchIndex] && r.validPositions[c.targetMatchIndex + 1] && (r.validPositions[c.targetMatchIndex + 1].input = "0"), "year" == f[2]) for(var p = s.getMaskTemplate.call(this, !1, 1, void 0, !0), h = t + 1; h < e.length; h++)e[h] = p[h], delete r.validPositions[h];
                            }
                            var m = n, y = _(e.join(""), a.inputFormat, a);
                            return m && !isNaN(y.date.getTime()) && (a.prefillYear && (m = function(e, t, i) {
                                if (e.year !== e.rawyear) {
                                    var n = v.toString(), a = e.rawyear.replace(/[^0-9]/g, ""), r = n.slice(0, a.length), o = n.slice(a.length);
                                    if (2 === a.length && a === r) {
                                        var s = new Date(v, e.month - 1, e.day);
                                        e.day == s.getDate() && (!i.max || i.max.date.getTime() >= s.getTime()) && (e.date.setFullYear(v), e.year = n, t.insert = [
                                            {
                                                pos: t.pos + 1,
                                                c: o[0]
                                            },
                                            {
                                                pos: t.pos + 2,
                                                c: o[1]
                                            }
                                        ]);
                                    }
                                }
                                return t;
                            }(y, m, a)), m = function(e, t, i, n, a) {
                                if (!t) return t;
                                if (t && i.min && !isNaN(i.min.date.getTime())) {
                                    var r;
                                    for(e.reset(), P(i).lastIndex = 0; r = P(i).exec(i.inputFormat);){
                                        var o;
                                        if ((o = x(r)) && o[3]) {
                                            for(var s = o[1], l = e[o[2]], c = i.min[o[2]], u = i.max ? i.max[o[2]] : c, f = [], d = !1, p = 0; p < c.length; p++)void 0 !== n.validPositions[p + r.index] || d ? (f[p] = l[p], d = d || l[p] > c[p]) : (f[p] = c[p], "year" === o[2] && l.length - 1 == p && c != u && (f = (parseInt(f.join("")) + 1).toString().split("")), "ampm" === o[2] && c != u && i.min.date.getTime() > e.date.getTime() && (f[p] = u[p]));
                                            s.call(e._date, f.join(""));
                                        }
                                    }
                                    t = i.min.date.getTime() <= e.date.getTime(), e.reInit();
                                }
                                return t && i.max && (isNaN(i.max.date.getTime()) || (t = i.max.date.getTime() >= e.date.getTime())), t;
                            }(y, m = w.call(this, y, m, a), a, r)), void 0 !== t && m && n.pos !== t ? {
                                buffer: S(a.inputFormat, y, a).split(""),
                                refreshFromBuffer: {
                                    start: t,
                                    end: n.pos
                                },
                                pos: n.caret || n.pos
                            } : m;
                        },
                        onKeyDown: function(e, t, i, n) {
                            e.ctrlKey && e.key === a.keys.ArrowRight && (this.inputmask._valueSet(O(new Date, n)), p(this).trigger("setvalue"));
                        },
                        onUnMask: function(e, t, i) {
                            return t ? S(i.outputFormat, _(e, i.inputFormat, i), i, !0) : t;
                        },
                        casing: function(e, t, i, n) {
                            return 0 == t.nativeDef.indexOf("[ap]") ? e.toLowerCase() : 0 == t.nativeDef.indexOf("[AP]") ? e.toUpperCase() : e;
                        },
                        onBeforeMask: function(e, t) {
                            return "[object Date]" === Object.prototype.toString.call(e) && (e = O(e, t)), e;
                        },
                        insertMode: !1,
                        insertModeVisual: !1,
                        shiftPositions: !1,
                        keepStatic: !1,
                        inputmode: "numeric",
                        prefillYear: !0
                    }
                });
            },
            3851: function(e, t, i) {
                var n, a = (n = i(2394)) && n.__esModule ? n : {
                    default: n
                }, r = i(8711), o = i(4713);
                a.default.extendDefinitions({
                    A: {
                        validator: "[A-Za-zА-яЁё\xc0-\xff\xb5]",
                        casing: "upper"
                    },
                    "&": {
                        validator: "[0-9A-Za-zА-яЁё\xc0-\xff\xb5]",
                        casing: "upper"
                    },
                    "#": {
                        validator: "[0-9A-Fa-f]",
                        casing: "upper"
                    }
                });
                var s = new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");
                function l(e, t, i, n, a) {
                    return i - 1 > -1 && "." !== t.buffer[i - 1] ? (e = t.buffer[i - 1] + e, e = i - 2 > -1 && "." !== t.buffer[i - 2] ? t.buffer[i - 2] + e : "0" + e) : e = "00" + e, s.test(e);
                }
                a.default.extendAliases({
                    cssunit: {
                        regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
                    },
                    url: {
                        regex: "(https?|ftp)://.*",
                        autoUnmask: !1,
                        keepStatic: !1,
                        tabThrough: !0
                    },
                    ip: {
                        mask: "i{1,3}.j{1,3}.k{1,3}.l{1,3}",
                        definitions: {
                            i: {
                                validator: l
                            },
                            j: {
                                validator: l
                            },
                            k: {
                                validator: l
                            },
                            l: {
                                validator: l
                            }
                        },
                        onUnMask: function(e, t, i) {
                            return e;
                        },
                        inputmode: "decimal",
                        substitutes: {
                            ",": "."
                        }
                    },
                    email: {
                        mask: function(e) {
                            var t = e.separator, i = e.quantifier, n = "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]", a = n;
                            if (t) for(var r = 0; r < i; r++)a += "[".concat(t).concat(n, "]");
                            return a;
                        },
                        greedy: !1,
                        casing: "lower",
                        separator: null,
                        quantifier: 5,
                        skipOptionalPartCharacter: "",
                        onBeforePaste: function(e, t) {
                            return (e = e.toLowerCase()).replace("mailto:", "");
                        },
                        definitions: {
                            "*": {
                                validator: "[0-9１-９A-Za-zА-яЁё\xc0-\xff\xb5!#$%&'*+/=?^_`{|}~-]"
                            },
                            "-": {
                                validator: "[0-9A-Za-z-]"
                            }
                        },
                        onUnMask: function(e, t, i) {
                            return e;
                        },
                        inputmode: "email"
                    },
                    mac: {
                        mask: "##:##:##:##:##:##"
                    },
                    vin: {
                        mask: "V{13}9{4}",
                        definitions: {
                            V: {
                                validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                                casing: "upper"
                            }
                        },
                        clearIncomplete: !0,
                        autoUnmask: !0
                    },
                    ssn: {
                        mask: "999-99-9999",
                        postValidation: function(e, t, i, n, a, s, l) {
                            var c = o.getMaskTemplate.call(this, !0, r.getLastValidPosition.call(this), !0, !0);
                            return /^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(c.join(""));
                        }
                    }
                });
            },
            207: function(e, t, i) {
                var n = s(i(2394)), a = s(i(7184)), r = i(8711), o = i(2839);
                function s(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var l = n.default.dependencyLib;
                function c(e, t) {
                    for(var i = "", a = 0; a < e.length; a++)n.default.prototype.definitions[e.charAt(a)] || t.definitions[e.charAt(a)] || t.optionalmarker[0] === e.charAt(a) || t.optionalmarker[1] === e.charAt(a) || t.quantifiermarker[0] === e.charAt(a) || t.quantifiermarker[1] === e.charAt(a) || t.groupmarker[0] === e.charAt(a) || t.groupmarker[1] === e.charAt(a) || t.alternatormarker === e.charAt(a) ? i += "\\" + e.charAt(a) : i += e.charAt(a);
                    return i;
                }
                function u(e, t, i, n) {
                    if (e.length > 0 && t > 0 && (!i.digitsOptional || n)) {
                        var a = e.indexOf(i.radixPoint), r = !1;
                        i.negationSymbol.back === e[e.length - 1] && (r = !0, e.length--), -1 === a && (e.push(i.radixPoint), a = e.length - 1);
                        for(var o = 1; o <= t; o++)isFinite(e[a + o]) || (e[a + o] = "0");
                    }
                    return r && e.push(i.negationSymbol.back), e;
                }
                function f(e, t) {
                    var i = 0;
                    for(var n in "+" === e && (i = r.seekNext.call(this, t.validPositions.length - 1)), t.tests)if ((n = parseInt(n)) >= i) {
                        for(var a = 0, o = t.tests[n].length; a < o; a++)if ((void 0 === t.validPositions[n] || "-" === e) && t.tests[n][a].match.def === e) return n + (void 0 !== t.validPositions[n] && "-" !== e ? 1 : 0);
                    }
                    return i;
                }
                function d(e, t) {
                    for(var i = -1, n = 0, a = t.validPositions.length; n < a; n++){
                        var r = t.validPositions[n];
                        if (r && r.match.def === e) {
                            i = n;
                            break;
                        }
                    }
                    return i;
                }
                function p(e, t, i, n, a) {
                    var r = t.buffer ? t.buffer.indexOf(a.radixPoint) : -1, o = (-1 !== r || n && a.jitMasking) && new RegExp(a.definitions[9].validator).test(e);
                    return a._radixDance && -1 !== r && o && null == t.validPositions[r] ? {
                        insert: {
                            pos: r === i ? r + 1 : r,
                            c: a.radixPoint
                        },
                        pos: i
                    } : o;
                }
                n.default.extendAliases({
                    numeric: {
                        mask: function(e) {
                            e.repeat = 0, e.groupSeparator === e.radixPoint && e.digits && "0" !== e.digits && ("." === e.radixPoint ? e.groupSeparator = "," : "," === e.radixPoint ? e.groupSeparator = "." : e.groupSeparator = ""), " " === e.groupSeparator && (e.skipOptionalPartCharacter = void 0), e.placeholder.length > 1 && (e.placeholder = e.placeholder.charAt(0)), "radixFocus" === e.positionCaretOnClick && "" === e.placeholder && (e.positionCaretOnClick = "lvp");
                            var t = "0", i = e.radixPoint;
                            !0 === e.numericInput && void 0 === e.__financeInput ? (t = "1", e.positionCaretOnClick = "radixFocus" === e.positionCaretOnClick ? "lvp" : e.positionCaretOnClick, e.digitsOptional = !1, isNaN(e.digits) && (e.digits = 2), e._radixDance = !1, i = "," === e.radixPoint ? "?" : "!", "" !== e.radixPoint && void 0 === e.definitions[i] && (e.definitions[i] = {}, e.definitions[i].validator = "[" + e.radixPoint + "]", e.definitions[i].placeholder = e.radixPoint, e.definitions[i].static = !0, e.definitions[i].generated = !0)) : (e.__financeInput = !1, e.numericInput = !0);
                            var n, r = "[+]";
                            if (r += c(e.prefix, e), "" !== e.groupSeparator ? (void 0 === e.definitions[e.groupSeparator] && (e.definitions[e.groupSeparator] = {}, e.definitions[e.groupSeparator].validator = "[" + e.groupSeparator + "]", e.definitions[e.groupSeparator].placeholder = e.groupSeparator, e.definitions[e.groupSeparator].static = !0, e.definitions[e.groupSeparator].generated = !0), r += e._mask(e)) : r += "9{+}", void 0 !== e.digits && 0 !== e.digits) {
                                var o = e.digits.toString().split(",");
                                isFinite(o[0]) && o[1] && isFinite(o[1]) ? r += i + t + "{" + e.digits + "}" : (isNaN(e.digits) || parseInt(e.digits) > 0) && (e.digitsOptional || e.jitMasking ? (n = r + i + t + "{0," + e.digits + "}", e.keepStatic = !0) : r += i + t + "{" + e.digits + "}");
                            } else e.inputmode = "numeric";
                            return r += c(e.suffix, e), r += "[-]", n && (r = [
                                n + c(e.suffix, e) + "[-]",
                                r
                            ]), e.greedy = !1, function(e) {
                                void 0 === e.parseMinMaxOptions && (null !== e.min && (e.min = e.min.toString().replace(new RegExp((0, a.default)(e.groupSeparator), "g"), ""), "," === e.radixPoint && (e.min = e.min.replace(e.radixPoint, ".")), e.min = isFinite(e.min) ? parseFloat(e.min) : NaN, isNaN(e.min) && (e.min = Number.MIN_VALUE)), null !== e.max && (e.max = e.max.toString().replace(new RegExp((0, a.default)(e.groupSeparator), "g"), ""), "," === e.radixPoint && (e.max = e.max.replace(e.radixPoint, ".")), e.max = isFinite(e.max) ? parseFloat(e.max) : NaN, isNaN(e.max) && (e.max = Number.MAX_VALUE)), e.parseMinMaxOptions = "done");
                            }(e), "" !== e.radixPoint && e.substituteRadixPoint && (e.substitutes["." == e.radixPoint ? "," : "."] = e.radixPoint), r;
                        },
                        _mask: function(e) {
                            return "(" + e.groupSeparator + "999){+|1}";
                        },
                        digits: "*",
                        digitsOptional: !0,
                        enforceDigitsOnBlur: !1,
                        radixPoint: ".",
                        positionCaretOnClick: "radixFocus",
                        _radixDance: !0,
                        groupSeparator: "",
                        allowMinus: !0,
                        negationSymbol: {
                            front: "-",
                            back: ""
                        },
                        prefix: "",
                        suffix: "",
                        min: null,
                        max: null,
                        SetMaxOnOverflow: !1,
                        step: 1,
                        inputType: "text",
                        unmaskAsNumber: !1,
                        roundingFN: Math.round,
                        inputmode: "decimal",
                        shortcuts: {
                            k: "1000",
                            m: "1000000"
                        },
                        placeholder: "0",
                        greedy: !1,
                        rightAlign: !0,
                        insertMode: !0,
                        autoUnmask: !1,
                        skipOptionalPartCharacter: "",
                        usePrototypeDefinitions: !1,
                        stripLeadingZeroes: !0,
                        substituteRadixPoint: !0,
                        definitions: {
                            0: {
                                validator: p
                            },
                            1: {
                                validator: p,
                                definitionSymbol: "9"
                            },
                            9: {
                                validator: "[0-9０-９٠-٩۰-۹]",
                                definitionSymbol: "*"
                            },
                            "+": {
                                validator: function(e, t, i, n, a) {
                                    return a.allowMinus && ("-" === e || e === a.negationSymbol.front);
                                }
                            },
                            "-": {
                                validator: function(e, t, i, n, a) {
                                    return a.allowMinus && e === a.negationSymbol.back;
                                }
                            }
                        },
                        preValidation: function(e, t, i, n, a, r, o, s) {
                            if (!1 !== a.__financeInput && i === a.radixPoint) return !1;
                            var l = e.indexOf(a.radixPoint), c = t;
                            if (t = function(e, t, i, n, a) {
                                return a._radixDance && a.numericInput && t !== a.negationSymbol.back && e <= i && (i > 0 || t == a.radixPoint) && (void 0 === n.validPositions[e - 1] || n.validPositions[e - 1].input !== a.negationSymbol.back) && (e -= 1), e;
                            }(t, i, l, r, a), "-" === i || i === a.negationSymbol.front) {
                                if (!0 !== a.allowMinus) return !1;
                                var u = !1, p = d("+", r), h = d("-", r);
                                return -1 !== p && (u = [
                                    p,
                                    h
                                ]), !1 !== u ? {
                                    remove: u,
                                    caret: c - a.negationSymbol.back.length
                                } : {
                                    insert: [
                                        {
                                            pos: f.call(this, "+", r),
                                            c: a.negationSymbol.front,
                                            fromIsValid: !0
                                        },
                                        {
                                            pos: f.call(this, "-", r),
                                            c: a.negationSymbol.back,
                                            fromIsValid: void 0
                                        }
                                    ],
                                    caret: c + a.negationSymbol.back.length
                                };
                            }
                            if (i === a.groupSeparator) return {
                                caret: c
                            };
                            if (s) return !0;
                            if (-1 !== l && !0 === a._radixDance && !1 === n && i === a.radixPoint && void 0 !== a.digits && (isNaN(a.digits) || parseInt(a.digits) > 0) && l !== t) return {
                                caret: a._radixDance && t === l - 1 ? l + 1 : l
                            };
                            if (!1 === a.__financeInput) {
                                if (n) {
                                    if (a.digitsOptional) return {
                                        rewritePosition: o.end
                                    };
                                    if (!a.digitsOptional) {
                                        if (o.begin > l && o.end <= l) return i === a.radixPoint ? {
                                            insert: {
                                                pos: l + 1,
                                                c: "0",
                                                fromIsValid: !0
                                            },
                                            rewritePosition: l
                                        } : {
                                            rewritePosition: l + 1
                                        };
                                        if (o.begin < l) return {
                                            rewritePosition: o.begin - 1
                                        };
                                    }
                                } else if (!a.showMaskOnHover && !a.showMaskOnFocus && !a.digitsOptional && a.digits > 0 && "" === this.__valueGet.call(this.el)) return {
                                    rewritePosition: l
                                };
                            }
                            return {
                                rewritePosition: t
                            };
                        },
                        postValidation: function(e, t, i, n, a, r, o) {
                            if (!1 === n) return n;
                            if (o) return !0;
                            if (null !== a.min || null !== a.max) {
                                var s = a.onUnMask(e.slice().reverse().join(""), void 0, l.extend({}, a, {
                                    unmaskAsNumber: !0
                                }));
                                if (null !== a.min && s < a.min && (s.toString().length > a.min.toString().length || s < 0)) return !1;
                                if (null !== a.max && s > a.max) return !!a.SetMaxOnOverflow && {
                                    refreshFromBuffer: !0,
                                    buffer: u(a.max.toString().replace(".", a.radixPoint).split(""), a.digits, a).reverse()
                                };
                            }
                            return n;
                        },
                        onUnMask: function(e, t, i) {
                            if ("" === t && !0 === i.nullable) return t;
                            var n = e.replace(i.prefix, "");
                            return n = (n = n.replace(i.suffix, "")).replace(new RegExp((0, a.default)(i.groupSeparator), "g"), ""), "" !== i.placeholder.charAt(0) && (n = n.replace(new RegExp(i.placeholder.charAt(0), "g"), "0")), i.unmaskAsNumber ? ("" !== i.radixPoint && -1 !== n.indexOf(i.radixPoint) && (n = n.replace(a.default.call(this, i.radixPoint), ".")), n = (n = n.replace(new RegExp("^" + (0, a.default)(i.negationSymbol.front)), "-")).replace(new RegExp((0, a.default)(i.negationSymbol.back) + "$"), ""), Number(n)) : n;
                        },
                        isComplete: function(e, t) {
                            var i = (t.numericInput ? e.slice().reverse() : e).join("");
                            return i = (i = (i = (i = (i = i.replace(new RegExp("^" + (0, a.default)(t.negationSymbol.front)), "-")).replace(new RegExp((0, a.default)(t.negationSymbol.back) + "$"), "")).replace(t.prefix, "")).replace(t.suffix, "")).replace(new RegExp((0, a.default)(t.groupSeparator) + "([0-9]{3})", "g"), "$1"), "," === t.radixPoint && (i = i.replace((0, a.default)(t.radixPoint), ".")), isFinite(i);
                        },
                        onBeforeMask: function(e, t) {
                            var i = t.radixPoint || ",";
                            isFinite(t.digits) && (t.digits = parseInt(t.digits)), "number" != typeof e && "number" !== t.inputType || "" === i || (e = e.toString().replace(".", i));
                            var n = "-" === e.charAt(0) || e.charAt(0) === t.negationSymbol.front, r = e.split(i), o = r[0].replace(/[^\-0-9]/g, ""), s = r.length > 1 ? r[1].replace(/[^0-9]/g, "") : "", l = r.length > 1;
                            e = o + ("" !== s ? i + s : s);
                            var c = 0;
                            if ("" !== i && (c = t.digitsOptional ? t.digits < s.length ? t.digits : s.length : t.digits, "" !== s || !t.digitsOptional)) {
                                var f = Math.pow(10, c || 1);
                                e = e.replace((0, a.default)(i), "."), isNaN(parseFloat(e)) || (e = (t.roundingFN(parseFloat(e) * f) / f).toFixed(c)), e = e.toString().replace(".", i);
                            }
                            if (0 === t.digits && -1 !== e.indexOf(i) && (e = e.substring(0, e.indexOf(i))), null !== t.min || null !== t.max) {
                                var d = e.toString().replace(i, ".");
                                null !== t.min && d < t.min ? e = t.min.toString().replace(".", i) : null !== t.max && d > t.max && (e = t.max.toString().replace(".", i));
                            }
                            return n && "-" !== e.charAt(0) && (e = "-" + e), u(e.toString().split(""), c, t, l).join("");
                        },
                        onBeforeWrite: function(e, t, i, n) {
                            function r(e, t) {
                                if (!1 !== n.__financeInput || t) {
                                    var i = e.indexOf(n.radixPoint);
                                    -1 !== i && e.splice(i, 1);
                                }
                                if ("" !== n.groupSeparator) for(; -1 !== (i = e.indexOf(n.groupSeparator));)e.splice(i, 1);
                                return e;
                            }
                            var o, s;
                            if (n.stripLeadingZeroes && (s = function(e, t) {
                                var i = new RegExp("(^" + ("" !== t.negationSymbol.front ? (0, a.default)(t.negationSymbol.front) + "?" : "") + (0, a.default)(t.prefix) + ")(.*)(" + (0, a.default)(t.suffix) + ("" != t.negationSymbol.back ? (0, a.default)(t.negationSymbol.back) + "?" : "") + "$)").exec(e.slice().reverse().join("")), n = i ? i[2] : "", r = !1;
                                return n && (n = n.split(t.radixPoint.charAt(0))[0], r = new RegExp("^[0" + t.groupSeparator + "]*").exec(n)), !(!r || !(r[0].length > 1 || r[0].length > 0 && r[0].length < n.length)) && r;
                            }(t, n))) for(var c = t.join("").lastIndexOf(s[0].split("").reverse().join("")) - (s[0] == s.input ? 0 : 1), f = s[0] == s.input ? 1 : 0, d = s[0].length - f; d > 0; d--)delete this.maskset.validPositions[c + d], delete t[c + d];
                            if (e) switch(e.type){
                                case "blur":
                                case "checkval":
                                    if (null !== n.min) {
                                        var p = n.onUnMask(t.slice().reverse().join(""), void 0, l.extend({}, n, {
                                            unmaskAsNumber: !0
                                        }));
                                        if (null !== n.min && p < n.min) return {
                                            refreshFromBuffer: !0,
                                            buffer: u(n.min.toString().replace(".", n.radixPoint).split(""), n.digits, n).reverse()
                                        };
                                    }
                                    if (t[t.length - 1] === n.negationSymbol.front) {
                                        var h = new RegExp("(^" + ("" != n.negationSymbol.front ? (0, a.default)(n.negationSymbol.front) + "?" : "") + (0, a.default)(n.prefix) + ")(.*)(" + (0, a.default)(n.suffix) + ("" != n.negationSymbol.back ? (0, a.default)(n.negationSymbol.back) + "?" : "") + "$)").exec(r(t.slice(), !0).reverse().join(""));
                                        0 == (h ? h[2] : "") && (o = {
                                            refreshFromBuffer: !0,
                                            buffer: [
                                                0
                                            ]
                                        });
                                    } else if ("" !== n.radixPoint) t.indexOf(n.radixPoint) === n.suffix.length && (o && o.buffer ? o.buffer.splice(0, 1 + n.suffix.length) : (t.splice(0, 1 + n.suffix.length), o = {
                                        refreshFromBuffer: !0,
                                        buffer: r(t)
                                    }));
                                    if (n.enforceDigitsOnBlur) {
                                        var v = (o = o || {}, o.buffer) || t.slice().reverse();
                                        o.refreshFromBuffer = !0, o.buffer = u(v, n.digits, n, !0).reverse();
                                    }
                            }
                            return o;
                        },
                        onKeyDown: function(e, t, i, n) {
                            var a, r = l(this);
                            if (3 != e.location) {
                                var s, c = e.key;
                                if ((s = n.shortcuts && n.shortcuts[c]) && s.length > 1) return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) * parseInt(s)), r.trigger("setvalue"), !1;
                            }
                            if (e.ctrlKey) switch(e.key){
                                case o.keys.ArrowUp:
                                    return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) + parseInt(n.step)), r.trigger("setvalue"), !1;
                                case o.keys.ArrowDown:
                                    return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) - parseInt(n.step)), r.trigger("setvalue"), !1;
                            }
                            if (!e.shiftKey && (e.key === o.keys.Delete || e.key === o.keys.Backspace || e.key === o.keys.BACKSPACE_SAFARI) && i.begin !== t.length) {
                                if (t[e.key === o.keys.Delete ? i.begin - 1 : i.end] === n.negationSymbol.front) return a = t.slice().reverse(), "" !== n.negationSymbol.front && a.shift(), "" !== n.negationSymbol.back && a.pop(), r.trigger("setvalue", [
                                    a.join(""),
                                    i.begin
                                ]), !1;
                                if (!0 === n._radixDance) {
                                    var f = t.indexOf(n.radixPoint);
                                    if (n.digitsOptional) {
                                        if (0 === f) return (a = t.slice().reverse()).pop(), r.trigger("setvalue", [
                                            a.join(""),
                                            i.begin >= a.length ? a.length : i.begin
                                        ]), !1;
                                    } else if (-1 !== f && (i.begin < f || i.end < f || e.key === o.keys.Delete && (i.begin === f || i.begin - 1 === f))) {
                                        var d = void 0;
                                        return i.begin === i.end && (e.key === o.keys.Backspace || e.key === o.keys.BACKSPACE_SAFARI ? i.begin++ : e.key === o.keys.Delete && i.begin - 1 === f && (d = l.extend({}, i), i.begin--, i.end--)), (a = t.slice().reverse()).splice(a.length - i.begin, i.begin - i.end + 1), a = u(a, n.digits, n).join(""), d && (i = d), r.trigger("setvalue", [
                                            a,
                                            i.begin >= a.length ? f + 1 : i.begin
                                        ]), !1;
                                    }
                                }
                            }
                        }
                    },
                    currency: {
                        prefix: "",
                        groupSeparator: ",",
                        alias: "numeric",
                        digits: 2,
                        digitsOptional: !1
                    },
                    decimal: {
                        alias: "numeric"
                    },
                    integer: {
                        alias: "numeric",
                        inputmode: "numeric",
                        digits: 0
                    },
                    percentage: {
                        alias: "numeric",
                        min: 0,
                        max: 100,
                        suffix: " %",
                        digits: 0,
                        allowMinus: !1
                    },
                    indianns: {
                        alias: "numeric",
                        _mask: function(e) {
                            return "(" + e.groupSeparator + "99){*|1}(" + e.groupSeparator + "999){1|1}";
                        },
                        groupSeparator: ",",
                        radixPoint: ".",
                        placeholder: "0",
                        digits: 2,
                        digitsOptional: !1
                    }
                });
            },
            9380: function(e, t, i) {
                var n;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var a = ((n = i(8741)) && n.__esModule ? n : {
                    default: n
                }).default ? window : {};
                t.default = a;
            },
            7760: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.HandleNativePlaceholder = function(e, t) {
                    var i = e ? e.inputmask : this;
                    if (s.ie) {
                        if (e.inputmask._valueGet() !== t && (e.placeholder !== t || "" === e.placeholder)) {
                            var n = r.getBuffer.call(i).slice(), a = e.inputmask._valueGet();
                            if (a !== t) {
                                var o = r.getLastValidPosition.call(i);
                                -1 === o && a === r.getBufferTemplate.call(i).join("") ? n = [] : -1 !== o && u.call(i, n), d(e, n);
                            }
                        }
                    } else e.placeholder !== t && (e.placeholder = t, "" === e.placeholder && e.removeAttribute("placeholder"));
                }, t.applyInputValue = c, t.checkVal = f, t.clearOptionalTail = u, t.unmaskedvalue = function(e) {
                    var t = e ? e.inputmask : this, i = t.opts, n = t.maskset;
                    if (e) {
                        if (void 0 === e.inputmask) return e.value;
                        e.inputmask && e.inputmask.refreshValue && c(e, e.inputmask._valueGet(!0));
                    }
                    for(var a = [], o = n.validPositions, s = 0, l = o.length; s < l; s++)o[s] && o[s].match && (1 != o[s].match.static || Array.isArray(n.metadata) && !0 !== o[s].generatedInput) && a.push(o[s].input);
                    var u = 0 === a.length ? "" : (t.isRTL ? a.reverse() : a).join("");
                    if ("function" == typeof i.onUnMask) {
                        var f = (t.isRTL ? r.getBuffer.call(t).slice().reverse() : r.getBuffer.call(t)).join("");
                        u = i.onUnMask.call(t, f, u, i);
                    }
                    return u;
                }, t.writeBuffer = d;
                var n = i(2839), a = i(4713), r = i(8711), o = i(7215), s = i(9845), l = i(6030);
                function c(e, t) {
                    var i = e ? e.inputmask : this, n = i.opts;
                    e.inputmask.refreshValue = !1, "function" == typeof n.onBeforeMask && (t = n.onBeforeMask.call(i, t, n) || t), f(e, !0, !1, t = (t || "").toString().split("")), i.undoValue = i._valueGet(!0), (n.clearMaskOnLostFocus || n.clearIncomplete) && e.inputmask._valueGet() === r.getBufferTemplate.call(i).join("") && -1 === r.getLastValidPosition.call(i) && e.inputmask._valueSet("");
                }
                function u(e) {
                    e.length = 0;
                    for(var t, i = a.getMaskTemplate.call(this, !0, 0, !0, void 0, !0); void 0 !== (t = i.shift());)e.push(t);
                    return e;
                }
                function f(e, t, i, n, s) {
                    var c = e ? e.inputmask : this, u = c.maskset, f = c.opts, p = c.dependencyLib, h = n.slice(), v = "", m = -1, g = void 0, y = f.skipOptionalPartCharacter;
                    f.skipOptionalPartCharacter = "", r.resetMaskSet.call(c), u.tests = {}, m = f.radixPoint ? r.determineNewCaretPosition.call(c, {
                        begin: 0,
                        end: 0
                    }, !1, !1 === f.__financeInput ? "radixFocus" : void 0).begin : 0, u.p = m, c.caretPos = {
                        begin: m
                    };
                    var k = [], b = c.caretPos;
                    if (h.forEach(function(e, t) {
                        if (void 0 !== e) {
                            var n = new p.Event("_checkval");
                            n.key = e, v += e;
                            var o = r.getLastValidPosition.call(c, void 0, !0);
                            !function(e, t) {
                                for(var i = a.getMaskTemplate.call(c, !0, 0).slice(e, r.seekNext.call(c, e, !1, !1)).join("").replace(/'/g, ""), n = i.indexOf(t); n > 0 && " " === i[n - 1];)n--;
                                var o = 0 === n && !r.isMask.call(c, e) && (a.getTest.call(c, e).match.nativeDef === t.charAt(0) || !0 === a.getTest.call(c, e).match.static && a.getTest.call(c, e).match.nativeDef === "'" + t.charAt(0) || " " === a.getTest.call(c, e).match.nativeDef && (a.getTest.call(c, e + 1).match.nativeDef === t.charAt(0) || !0 === a.getTest.call(c, e + 1).match.static && a.getTest.call(c, e + 1).match.nativeDef === "'" + t.charAt(0)));
                                if (!o && n > 0 && !r.isMask.call(c, e, !1, !0)) {
                                    var s = r.seekNext.call(c, e);
                                    c.caretPos.begin < s && (c.caretPos = {
                                        begin: s
                                    });
                                }
                                return o;
                            }(m, v) ? (g = l.EventHandlers.keypressEvent.call(c, n, !0, !1, i, c.caretPos.begin)) && (m = c.caretPos.begin + 1, v = "") : g = l.EventHandlers.keypressEvent.call(c, n, !0, !1, i, o + 1), g ? (void 0 !== g.pos && u.validPositions[g.pos] && !0 === u.validPositions[g.pos].match.static && void 0 === u.validPositions[g.pos].alternation && (k.push(g.pos), c.isRTL || (g.forwardPosition = g.pos + 1)), d.call(c, void 0, r.getBuffer.call(c), g.forwardPosition, n, !1), c.caretPos = {
                                begin: g.forwardPosition,
                                end: g.forwardPosition
                            }, b = c.caretPos) : void 0 === u.validPositions[t] && h[t] === a.getPlaceholder.call(c, t) && r.isMask.call(c, t, !0) ? c.caretPos.begin++ : c.caretPos = b;
                        }
                    }), k.length > 0) {
                        var x, P, w = r.seekNext.call(c, -1, void 0, !1);
                        if (!o.isComplete.call(c, r.getBuffer.call(c)) && k.length <= w || o.isComplete.call(c, r.getBuffer.call(c)) && k.length > 0 && k.length !== w && 0 === k[0]) for(var S = w; void 0 !== (x = k.shift());){
                            var M = new p.Event("_checkval");
                            if ((P = u.validPositions[x]).generatedInput = !0, M.key = P.input, (g = l.EventHandlers.keypressEvent.call(c, M, !0, !1, i, S)) && void 0 !== g.pos && g.pos !== x && u.validPositions[g.pos] && !0 === u.validPositions[g.pos].match.static) k.push(g.pos);
                            else if (!g) break;
                            S++;
                        }
                    }
                    t && d.call(c, e, r.getBuffer.call(c), g ? g.forwardPosition : c.caretPos.begin, s || new p.Event("checkval"), s && ("input" === s.type && c.undoValue !== r.getBuffer.call(c).join("") || "paste" === s.type)), f.skipOptionalPartCharacter = y;
                }
                function d(e, t, i, a, s) {
                    var l = e ? e.inputmask : this, c = l.opts, u = l.dependencyLib;
                    if (a && "function" == typeof c.onBeforeWrite) {
                        var f = c.onBeforeWrite.call(l, a, t, i, c);
                        if (f) {
                            if (f.refreshFromBuffer) {
                                var d = f.refreshFromBuffer;
                                o.refreshFromBuffer.call(l, !0 === d ? d : d.start, d.end, f.buffer || t), t = r.getBuffer.call(l, !0);
                            }
                            void 0 !== i && (i = void 0 !== f.caret ? f.caret : i);
                        }
                    }
                    if (void 0 !== e && (e.inputmask._valueSet(t.join("")), void 0 === i || void 0 !== a && "blur" === a.type || r.caret.call(l, e, i, void 0, void 0, void 0 !== a && "keydown" === a.type && (a.key === n.keys.Delete || a.key === n.keys.Backspace)), !0 === s)) {
                        var p = u(e), h = e.inputmask._valueGet();
                        e.inputmask.skipInputEvent = !0, p.trigger("input"), setTimeout(function() {
                            h === r.getBufferTemplate.call(l).join("") ? p.trigger("cleared") : !0 === o.isComplete.call(l, t) && p.trigger("complete");
                        }, 0);
                    }
                }
            },
            2394: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var n = i(157), a = m(i(4963)), r = m(i(9380)), o = i(2391), s = i(4713), l = i(8711), c = i(7215), u = i(7760), f = i(9716), d = m(i(7392)), p = m(i(3976)), h = m(i(8741));
                function v(e) {
                    return v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, v(e);
                }
                function m(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var g = r.default.document, y = "_inputmask_opts";
                function k(e, t, i) {
                    if (h.default) {
                        if (!(this instanceof k)) return new k(e, t, i);
                        this.dependencyLib = a.default, this.el = void 0, this.events = {}, this.maskset = void 0, !0 !== i && ("[object Object]" === Object.prototype.toString.call(e) ? t = e : (t = t || {}, e && (t.alias = e)), this.opts = a.default.extend(!0, {}, this.defaults, t), this.noMasksCache = t && void 0 !== t.definitions, this.userOptions = t || {}, b(this.opts.alias, t, this.opts)), this.refreshValue = !1, this.undoValue = void 0, this.$el = void 0, this.skipInputEvent = !1, this.validationEvent = !1, this.ignorable = !1, this.maxLength, this.mouseEnter = !1, this.clicked = 0, this.originalPlaceholder = void 0, this.isComposing = !1, this.hasAlternator = !1;
                    }
                }
                function b(e, t, i) {
                    var n = k.prototype.aliases[e];
                    return n ? (n.alias && b(n.alias, void 0, i), a.default.extend(!0, i, n), a.default.extend(!0, i, t), !0) : (null === i.mask && (i.mask = e), !1);
                }
                k.prototype = {
                    dataAttribute: "data-inputmask",
                    defaults: p.default,
                    definitions: d.default,
                    aliases: {},
                    masksCache: {},
                    get isRTL () {
                        return this.opts.isRTL || this.opts.numericInput;
                    },
                    mask: function(e) {
                        var t = this;
                        return "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), (e = e.nodeName ? [
                            e
                        ] : Array.isArray(e) ? e : [].slice.call(e)).forEach(function(e, i) {
                            var s = a.default.extend(!0, {}, t.opts);
                            if (function(e, t, i, n) {
                                function o(t, a) {
                                    var o = "" === n ? t : n + "-" + t;
                                    null !== (a = void 0 !== a ? a : e.getAttribute(o)) && ("string" == typeof a && (0 === t.indexOf("on") ? a = r.default[a] : "false" === a ? a = !1 : "true" === a && (a = !0)), i[t] = a);
                                }
                                if (!0 === t.importDataAttributes) {
                                    var s, l, c, u, f = e.getAttribute(n);
                                    if (f && "" !== f && (f = f.replace(/'/g, '"'), l = JSON.parse("{" + f + "}")), l) {
                                        for(u in c = void 0, l)if ("alias" === u.toLowerCase()) {
                                            c = l[u];
                                            break;
                                        }
                                    }
                                    for(s in o("alias", c), i.alias && b(i.alias, i, t), t){
                                        if (l) {
                                            for(u in c = void 0, l)if (u.toLowerCase() === s.toLowerCase()) {
                                                c = l[u];
                                                break;
                                            }
                                        }
                                        o(s, c);
                                    }
                                }
                                a.default.extend(!0, t, i), ("rtl" === e.dir || t.rightAlign) && (e.style.textAlign = "right");
                                ("rtl" === e.dir || t.numericInput) && (e.dir = "ltr", e.removeAttribute("dir"), t.isRTL = !0);
                                return Object.keys(i).length;
                            }(e, s, a.default.extend(!0, {}, t.userOptions), t.dataAttribute)) {
                                var l = (0, o.generateMaskSet)(s, t.noMasksCache);
                                void 0 !== l && (void 0 !== e.inputmask && (e.inputmask.opts.autoUnmask = !0, e.inputmask.remove()), e.inputmask = new k(void 0, void 0, !0), e.inputmask.opts = s, e.inputmask.noMasksCache = t.noMasksCache, e.inputmask.userOptions = a.default.extend(!0, {}, t.userOptions), e.inputmask.el = e, e.inputmask.$el = (0, a.default)(e), e.inputmask.maskset = l, a.default.data(e, y, t.userOptions), n.mask.call(e.inputmask));
                            }
                        }), e && e[0] && e[0].inputmask || this;
                    },
                    option: function(e, t) {
                        return "string" == typeof e ? this.opts[e] : "object" === v(e) ? (a.default.extend(this.userOptions, e), this.el && !0 !== t && this.mask(this.el), this) : void 0;
                    },
                    unmaskedvalue: function(e) {
                        if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), void 0 === this.el || void 0 !== e) {
                            var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                            u.checkVal.call(this, void 0, !1, !1, t), "function" == typeof this.opts.onBeforeWrite && this.opts.onBeforeWrite.call(this, void 0, l.getBuffer.call(this), 0, this.opts);
                        }
                        return u.unmaskedvalue.call(this, this.el);
                    },
                    remove: function() {
                        if (this.el) {
                            a.default.data(this.el, y, null);
                            var e = this.opts.autoUnmask ? (0, u.unmaskedvalue)(this.el) : this._valueGet(this.opts.autoUnmask);
                            e !== l.getBufferTemplate.call(this).join("") ? this._valueSet(e, this.opts.autoUnmask) : this._valueSet(""), f.EventRuler.off(this.el), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el), "value") && this.__valueGet && Object.defineProperty(this.el, "value", {
                                get: this.__valueGet,
                                set: this.__valueSet,
                                configurable: !0
                            }) : g.__lookupGetter__ && this.el.__lookupGetter__("value") && this.__valueGet && (this.el.__defineGetter__("value", this.__valueGet), this.el.__defineSetter__("value", this.__valueSet)), this.el.inputmask = void 0;
                        }
                        return this.el;
                    },
                    getemptymask: function() {
                        return this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), (this.isRTL ? l.getBufferTemplate.call(this).reverse() : l.getBufferTemplate.call(this)).join("");
                    },
                    hasMaskedValue: function() {
                        return !this.opts.autoUnmask;
                    },
                    isComplete: function() {
                        return this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), c.isComplete.call(this, l.getBuffer.call(this));
                    },
                    getmetadata: function() {
                        if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), Array.isArray(this.maskset.metadata)) {
                            var e = s.getMaskTemplate.call(this, !0, 0, !1).join("");
                            return this.maskset.metadata.forEach(function(t) {
                                return t.mask !== e || (e = t, !1);
                            }), e;
                        }
                        return this.maskset.metadata;
                    },
                    isValid: function(e) {
                        if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), e) {
                            var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                            u.checkVal.call(this, void 0, !0, !1, t);
                        } else e = this.isRTL ? l.getBuffer.call(this).slice().reverse().join("") : l.getBuffer.call(this).join("");
                        for(var i = l.getBuffer.call(this), n = l.determineLastRequiredPosition.call(this), a = i.length - 1; a > n && !l.isMask.call(this, a); a--);
                        return i.splice(n, a + 1 - n), c.isComplete.call(this, i) && e === (this.isRTL ? l.getBuffer.call(this).slice().reverse().join("") : l.getBuffer.call(this).join(""));
                    },
                    format: function(e, t) {
                        this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache);
                        var i = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                        u.checkVal.call(this, void 0, !0, !1, i);
                        var n = this.isRTL ? l.getBuffer.call(this).slice().reverse().join("") : l.getBuffer.call(this).join("");
                        return t ? {
                            value: n,
                            metadata: this.getmetadata()
                        } : n;
                    },
                    setValue: function(e) {
                        this.el && (0, a.default)(this.el).trigger("setvalue", [
                            e
                        ]);
                    },
                    analyseMask: o.analyseMask
                }, k.extendDefaults = function(e) {
                    a.default.extend(!0, k.prototype.defaults, e);
                }, k.extendDefinitions = function(e) {
                    a.default.extend(!0, k.prototype.definitions, e);
                }, k.extendAliases = function(e) {
                    a.default.extend(!0, k.prototype.aliases, e);
                }, k.format = function(e, t, i) {
                    return k(t).format(e, i);
                }, k.unmask = function(e, t) {
                    return k(t).unmaskedvalue(e);
                }, k.isValid = function(e, t) {
                    return k(t).isValid(e);
                }, k.remove = function(e) {
                    "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), (e = e.nodeName ? [
                        e
                    ] : e).forEach(function(e) {
                        e.inputmask && e.inputmask.remove();
                    });
                }, k.setValue = function(e, t) {
                    "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), (e = e.nodeName ? [
                        e
                    ] : e).forEach(function(e) {
                        e.inputmask ? e.inputmask.setValue(t) : (0, a.default)(e).trigger("setvalue", [
                            t
                        ]);
                    });
                }, k.dependencyLib = a.default, r.default.Inputmask = k;
                var x = k;
                t.default = x;
            },
            5296: function(e, t, i) {
                function n(e) {
                    return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, n(e);
                }
                var a = h(i(9380)), r = h(i(2394)), o = h(i(8741));
                function s(e, t) {
                    for(var i = 0; i < t.length; i++){
                        var a = t[i];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, (r = a.key, o = void 0, o = function(e, t) {
                            if ("object" !== n(e) || null === e) return e;
                            var i = e[Symbol.toPrimitive];
                            if (void 0 !== i) {
                                var a = i.call(e, t || "default");
                                if ("object" !== n(a)) return a;
                                throw new TypeError("@@toPrimitive must return a primitive value.");
                            }
                            return ("string" === t ? String : Number)(e);
                        }(r, "string"), "symbol" === n(o) ? o : String(o)), a);
                    }
                    var r, o;
                }
                function l(e) {
                    var t = f();
                    return function() {
                        var i, a = p(e);
                        if (t) {
                            var r = p(this).constructor;
                            i = Reflect.construct(a, arguments, r);
                        } else i = a.apply(this, arguments);
                        return function(e, t) {
                            if (t && ("object" === n(t) || "function" == typeof t)) return t;
                            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                            return function(e) {
                                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return e;
                            }(e);
                        }(this, i);
                    };
                }
                function c(e) {
                    var t = "function" == typeof Map ? new Map : void 0;
                    return c = function(e) {
                        if (null === e || (i = e, -1 === Function.toString.call(i).indexOf("[native code]"))) return e;
                        var i;
                        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                        if (void 0 !== t) {
                            if (t.has(e)) return t.get(e);
                            t.set(e, n);
                        }
                        function n() {
                            return u(e, arguments, p(this).constructor);
                        }
                        return n.prototype = Object.create(e.prototype, {
                            constructor: {
                                value: n,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), d(n, e);
                    }, c(e);
                }
                function u(e, t, i) {
                    return u = f() ? Reflect.construct.bind() : function(e, t, i) {
                        var n = [
                            null
                        ];
                        n.push.apply(n, t);
                        var a = new (Function.bind.apply(e, n));
                        return i && d(a, i.prototype), a;
                    }, u.apply(null, arguments);
                }
                function f() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }
                function d(e, t) {
                    return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                        return e.__proto__ = t, e;
                    }, d(e, t);
                }
                function p(e) {
                    return p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e);
                    }, p(e);
                }
                function h(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var v = a.default.document;
                if (o.default && v && v.head && v.head.attachShadow && a.default.customElements && void 0 === a.default.customElements.get("input-mask")) {
                    var m = function(e) {
                        !function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), Object.defineProperty(e, "prototype", {
                                writable: !1
                            }), t && d(e, t);
                        }(o, e);
                        var t, i, n, a = l(o);
                        function o() {
                            var e;
                            !function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                            }(this, o);
                            var t = (e = a.call(this)).getAttributeNames(), i = e.attachShadow({
                                mode: "closed"
                            }), n = v.createElement("input");
                            for(var s in n.type = "text", i.appendChild(n), t)Object.prototype.hasOwnProperty.call(t, s) && n.setAttribute(t[s], e.getAttribute(t[s]));
                            var l = new r.default;
                            return l.dataAttribute = "", l.mask(n), n.inputmask.shadowRoot = i, e;
                        }
                        return t = o, i && s(t.prototype, i), n && s(t, n), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), t;
                    }(c(HTMLElement));
                    a.default.customElements.define("input-mask", m);
                }
            },
            2839: function(e, t) {
                function i(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e;
                    }(e) || function(e, t) {
                        var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != i) {
                            var n, a, r, o, s = [], l = !0, c = !1;
                            try {
                                if (r = (i = i.call(e)).next, 0 === t) {
                                    if (Object(i) !== i) return;
                                    l = !1;
                                } else for(; !(l = (n = r.call(i)).done) && (s.push(n.value), s.length !== t); l = !0);
                            } catch (e) {
                                c = !0, a = e;
                            } finally{
                                try {
                                    if (!l && null != i.return && (o = i.return(), Object(o) !== o)) return;
                                } finally{
                                    if (c) throw a;
                                }
                            }
                            return s;
                        }
                    }(e, t) || function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return n(e, t);
                        var i = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === i && e.constructor && (i = e.constructor.name);
                        if ("Map" === i || "Set" === i) return Array.from(e);
                        if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return n(e, t);
                    }(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }();
                }
                function n(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for(var i = 0, n = new Array(t); i < t; i++)n[i] = e[i];
                    return n;
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.keys = t.keyCode = void 0, t.toKey = function(e, t) {
                    return r[e] || (t ? String.fromCharCode(e) : String.fromCharCode(e).toLowerCase());
                }, t.toKeyCode = function(e) {
                    return a[e];
                };
                var a = {
                    AltGraph: 18,
                    ArrowDown: 40,
                    ArrowLeft: 37,
                    ArrowRight: 39,
                    ArrowUp: 38,
                    Backspace: 8,
                    BACKSPACE_SAFARI: 127,
                    CapsLock: 20,
                    Delete: 46,
                    End: 35,
                    Enter: 13,
                    Escape: 27,
                    Home: 36,
                    Insert: 45,
                    PageDown: 34,
                    PageUp: 33,
                    Space: 32,
                    Tab: 9,
                    c: 67,
                    x: 88,
                    z: 90,
                    Shift: 16,
                    Control: 17,
                    Alt: 18,
                    Pause: 19,
                    Meta_LEFT: 91,
                    Meta_RIGHT: 92,
                    ContextMenu: 93,
                    Process: 229,
                    Unidentified: 229,
                    F1: 112,
                    F2: 113,
                    F3: 114,
                    F4: 115,
                    F5: 116,
                    F6: 117,
                    F7: 118,
                    F8: 119,
                    F9: 120,
                    F10: 121,
                    F11: 122,
                    F12: 123
                };
                t.keyCode = a;
                var r = Object.entries(a).reduce(function(e, t) {
                    var n = i(t, 2), a = n[0], r = n[1];
                    return e[r] = void 0 === e[r] ? a : e[r], e;
                }, {}), o = Object.entries(a).reduce(function(e, t) {
                    var n = i(t, 2), a = n[0];
                    n[1];
                    return e[a] = "Space" === a ? " " : a, e;
                }, {});
                t.keys = o;
            },
            2391: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.analyseMask = function(e, t, i) {
                    var n, o, s, l, c, u, f = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g, d = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g, p = !1, h = new a.default, v = [], m = [], g = !1;
                    function y(e, n, a) {
                        a = void 0 !== a ? a : e.matches.length;
                        var o = e.matches[a - 1];
                        if (t) {
                            if (0 === n.indexOf("[") || p && /\\d|\\s|\\w|\\p/i.test(n) || "." === n) {
                                var s = i.casing ? "i" : "";
                                /^\\p\{.*}$/i.test(n) && (s += "u"), e.matches.splice(a++, 0, {
                                    fn: new RegExp(n, s),
                                    static: !1,
                                    optionality: !1,
                                    newBlockMarker: void 0 === o ? "master" : o.def !== n,
                                    casing: null,
                                    def: n,
                                    placeholder: void 0,
                                    nativeDef: n
                                });
                            } else p && (n = n[n.length - 1]), n.split("").forEach(function(t, n) {
                                o = e.matches[a - 1], e.matches.splice(a++, 0, {
                                    fn: /[a-z]/i.test(i.staticDefinitionSymbol || t) ? new RegExp("[" + (i.staticDefinitionSymbol || t) + "]", i.casing ? "i" : "") : null,
                                    static: !0,
                                    optionality: !1,
                                    newBlockMarker: void 0 === o ? "master" : o.def !== t && !0 !== o.static,
                                    casing: null,
                                    def: i.staticDefinitionSymbol || t,
                                    placeholder: void 0 !== i.staticDefinitionSymbol ? t : void 0,
                                    nativeDef: (p ? "'" : "") + t
                                });
                            });
                            p = !1;
                        } else {
                            var l = i.definitions && i.definitions[n] || i.usePrototypeDefinitions && r.default.prototype.definitions[n];
                            l && !p ? e.matches.splice(a++, 0, {
                                fn: l.validator ? "string" == typeof l.validator ? new RegExp(l.validator, i.casing ? "i" : "") : new function() {
                                    this.test = l.validator;
                                } : new RegExp("."),
                                static: l.static || !1,
                                optionality: l.optional || !1,
                                defOptionality: l.optional || !1,
                                newBlockMarker: void 0 === o || l.optional ? "master" : o.def !== (l.definitionSymbol || n),
                                casing: l.casing,
                                def: l.definitionSymbol || n,
                                placeholder: l.placeholder,
                                nativeDef: n,
                                generated: l.generated
                            }) : (e.matches.splice(a++, 0, {
                                fn: /[a-z]/i.test(i.staticDefinitionSymbol || n) ? new RegExp("[" + (i.staticDefinitionSymbol || n) + "]", i.casing ? "i" : "") : null,
                                static: !0,
                                optionality: !1,
                                newBlockMarker: void 0 === o ? "master" : o.def !== n && !0 !== o.static,
                                casing: null,
                                def: i.staticDefinitionSymbol || n,
                                placeholder: void 0 !== i.staticDefinitionSymbol ? n : void 0,
                                nativeDef: (p ? "'" : "") + n
                            }), p = !1);
                        }
                    }
                    function k() {
                        if (v.length > 0) {
                            if (y(l = v[v.length - 1], o), l.isAlternator) {
                                c = v.pop();
                                for(var e = 0; e < c.matches.length; e++)c.matches[e].isGroup && (c.matches[e].isGroup = !1);
                                v.length > 0 ? (l = v[v.length - 1]).matches.push(c) : h.matches.push(c);
                            }
                        } else y(h, o);
                    }
                    function b(e) {
                        var t = new a.default(!0);
                        return t.openGroup = !1, t.matches = e, t;
                    }
                    function x() {
                        if ((s = v.pop()).openGroup = !1, void 0 !== s) {
                            if (v.length > 0) {
                                if ((l = v[v.length - 1]).matches.push(s), l.isAlternator) {
                                    for(var e = (c = v.pop()).matches[0].matches ? c.matches[0].matches.length : 1, t = 0; t < c.matches.length; t++)c.matches[t].isGroup = !1, c.matches[t].alternatorGroup = !1, null === i.keepStatic && e < (c.matches[t].matches ? c.matches[t].matches.length : 1) && (i.keepStatic = !0), e = c.matches[t].matches ? c.matches[t].matches.length : 1;
                                    v.length > 0 ? (l = v[v.length - 1]).matches.push(c) : h.matches.push(c);
                                }
                            } else h.matches.push(s);
                        } else k();
                    }
                    function P(e) {
                        var t = e.pop();
                        return t.isQuantifier && (t = b([
                            e.pop(),
                            t
                        ])), t;
                    }
                    t && (i.optionalmarker[0] = void 0, i.optionalmarker[1] = void 0);
                    for(; n = t ? d.exec(e) : f.exec(e);){
                        if (o = n[0], t) {
                            switch(o.charAt(0)){
                                case "?":
                                    o = "{0,1}";
                                    break;
                                case "+":
                                case "*":
                                    o = "{" + o + "}";
                                    break;
                                case "|":
                                    if (0 === v.length) {
                                        var w = b(h.matches);
                                        w.openGroup = !0, v.push(w), h.matches = [], g = !0;
                                    }
                            }
                            switch(o){
                                case "\\d":
                                    o = "[0-9]";
                                    break;
                                case "\\p":
                                    o += d.exec(e)[0], o += d.exec(e)[0];
                            }
                        }
                        if (p) k();
                        else switch(o.charAt(0)){
                            case "$":
                            case "^":
                                t || k();
                                break;
                            case i.escapeChar:
                                p = !0, t && k();
                                break;
                            case i.optionalmarker[1]:
                            case i.groupmarker[1]:
                                x();
                                break;
                            case i.optionalmarker[0]:
                                v.push(new a.default(!1, !0));
                                break;
                            case i.groupmarker[0]:
                                v.push(new a.default(!0));
                                break;
                            case i.quantifiermarker[0]:
                                var S = new a.default(!1, !1, !0), M = (o = o.replace(/[{}?]/g, "")).split("|"), _ = M[0].split(","), O = isNaN(_[0]) ? _[0] : parseInt(_[0]), E = 1 === _.length ? O : isNaN(_[1]) ? _[1] : parseInt(_[1]), T = isNaN(M[1]) ? M[1] : parseInt(M[1]);
                                "*" !== O && "+" !== O || (O = "*" === E ? 0 : 1), S.quantifier = {
                                    min: O,
                                    max: E,
                                    jit: T
                                };
                                var j = v.length > 0 ? v[v.length - 1].matches : h.matches;
                                (n = j.pop()).isGroup || (n = b([
                                    n
                                ])), j.push(n), j.push(S);
                                break;
                            case i.alternatormarker:
                                if (v.length > 0) {
                                    var A = (l = v[v.length - 1]).matches[l.matches.length - 1];
                                    u = l.openGroup && (void 0 === A.matches || !1 === A.isGroup && !1 === A.isAlternator) ? v.pop() : P(l.matches);
                                } else u = P(h.matches);
                                if (u.isAlternator) v.push(u);
                                else if (u.alternatorGroup ? (c = v.pop(), u.alternatorGroup = !1) : c = new a.default(!1, !1, !1, !0), c.matches.push(u), v.push(c), u.openGroup) {
                                    u.openGroup = !1;
                                    var D = new a.default(!0);
                                    D.alternatorGroup = !0, v.push(D);
                                }
                                break;
                            default:
                                k();
                        }
                    }
                    g && x();
                    for(; v.length > 0;)s = v.pop(), h.matches.push(s);
                    h.matches.length > 0 && (!function e(n) {
                        n && n.matches && n.matches.forEach(function(a, r) {
                            var o = n.matches[r + 1];
                            (void 0 === o || void 0 === o.matches || !1 === o.isQuantifier) && a && a.isGroup && (a.isGroup = !1, t || (y(a, i.groupmarker[0], 0), !0 !== a.openGroup && y(a, i.groupmarker[1]))), e(a);
                        });
                    }(h), m.push(h));
                    (i.numericInput || i.isRTL) && function e(t) {
                        for(var n in t.matches = t.matches.reverse(), t.matches)if (Object.prototype.hasOwnProperty.call(t.matches, n)) {
                            var a = parseInt(n);
                            if (t.matches[n].isQuantifier && t.matches[a + 1] && t.matches[a + 1].isGroup) {
                                var r = t.matches[n];
                                t.matches.splice(n, 1), t.matches.splice(a + 1, 0, r);
                            }
                            void 0 !== t.matches[n].matches ? t.matches[n] = e(t.matches[n]) : t.matches[n] = ((o = t.matches[n]) === i.optionalmarker[0] ? o = i.optionalmarker[1] : o === i.optionalmarker[1] ? o = i.optionalmarker[0] : o === i.groupmarker[0] ? o = i.groupmarker[1] : o === i.groupmarker[1] && (o = i.groupmarker[0]), o);
                        }
                        var o;
                        return t;
                    }(m[0]);
                    return m;
                }, t.generateMaskSet = function(e, t) {
                    var i;
                    function a(e, t) {
                        var i = t.repeat, n = t.groupmarker, a = t.quantifiermarker, r = t.keepStatic;
                        if (i > 0 || "*" === i || "+" === i) {
                            var l = "*" === i ? 0 : "+" === i ? 1 : i;
                            e = n[0] + e + n[1] + a[0] + l + "," + i + a[1];
                        }
                        if (!0 === r) {
                            var c = e.match(new RegExp("(.)\\[([^\\]]*)\\]", "g"));
                            c && c.forEach(function(t, i) {
                                var n = function(e, t) {
                                    return function(e) {
                                        if (Array.isArray(e)) return e;
                                    }(e) || function(e, t) {
                                        var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                        if (null != i) {
                                            var n, a, r, o, s = [], l = !0, c = !1;
                                            try {
                                                if (r = (i = i.call(e)).next, 0 === t) {
                                                    if (Object(i) !== i) return;
                                                    l = !1;
                                                } else for(; !(l = (n = r.call(i)).done) && (s.push(n.value), s.length !== t); l = !0);
                                            } catch (e) {
                                                c = !0, a = e;
                                            } finally{
                                                try {
                                                    if (!l && null != i.return && (o = i.return(), Object(o) !== o)) return;
                                                } finally{
                                                    if (c) throw a;
                                                }
                                            }
                                            return s;
                                        }
                                    }(e, t) || function(e, t) {
                                        if (!e) return;
                                        if ("string" == typeof e) return s(e, t);
                                        var i = Object.prototype.toString.call(e).slice(8, -1);
                                        "Object" === i && e.constructor && (i = e.constructor.name);
                                        if ("Map" === i || "Set" === i) return Array.from(e);
                                        if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return s(e, t);
                                    }(e, t) || function() {
                                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                    }();
                                }(t.split("["), 2), a = n[0], r = n[1];
                                r = r.replace("]", ""), e = e.replace(new RegExp("".concat((0, o.default)(a), "\\[").concat((0, o.default)(r), "\\]")), a.charAt(0) === r.charAt(0) ? "(".concat(a, "|").concat(a).concat(r, ")") : "".concat(a, "[").concat(r, "]"));
                            });
                        }
                        return e;
                    }
                    function l(e, i, o) {
                        var s, l, c = !1;
                        return null !== e && "" !== e || ((c = null !== o.regex) ? e = (e = o.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (c = !0, e = ".*")), 1 === e.length && !1 === o.greedy && 0 !== o.repeat && (o.placeholder = ""), e = a(e, o), l = c ? "regex_" + o.regex : o.numericInput ? e.split("").reverse().join("") : e, null !== o.keepStatic && (l = "ks_" + o.keepStatic + l), void 0 === r.default.prototype.masksCache[l] || !0 === t ? (s = {
                            mask: e,
                            maskToken: r.default.prototype.analyseMask(e, c, o),
                            validPositions: [],
                            _buffer: void 0,
                            buffer: void 0,
                            tests: {},
                            excludes: {},
                            metadata: i,
                            maskLength: void 0,
                            jitOffset: {}
                        }, !0 !== t && (r.default.prototype.masksCache[l] = s, s = n.default.extend(!0, {}, r.default.prototype.masksCache[l]))) : s = n.default.extend(!0, {}, r.default.prototype.masksCache[l]), s;
                    }
                    "function" == typeof e.mask && (e.mask = e.mask(e));
                    if (Array.isArray(e.mask)) {
                        if (e.mask.length > 1) {
                            null === e.keepStatic && (e.keepStatic = !0);
                            var c = e.groupmarker[0];
                            return (e.isRTL ? e.mask.reverse() : e.mask).forEach(function(t) {
                                c.length > 1 && (c += e.alternatormarker), void 0 !== t.mask && "function" != typeof t.mask ? c += t.mask : c += t;
                            }), l(c += e.groupmarker[1], e.mask, e);
                        }
                        e.mask = e.mask.pop();
                    }
                    i = e.mask && void 0 !== e.mask.mask && "function" != typeof e.mask.mask ? l(e.mask.mask, e.mask, e) : l(e.mask, e.mask, e);
                    null === e.keepStatic && (e.keepStatic = !1);
                    return i;
                };
                var n = l(i(4963)), a = l(i(9695)), r = l(i(2394)), o = l(i(7184));
                function s(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for(var i = 0, n = new Array(t); i < t; i++)n[i] = e[i];
                    return n;
                }
                function l(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
            },
            157: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.mask = function() {
                    var e = this, t = this.opts, i = this.el, u = this.dependencyLib;
                    o.EventRuler.off(i);
                    var f = function(t, i) {
                        "textarea" !== t.tagName.toLowerCase() && i.ignorables.push(n.keys.Enter);
                        var s = t.getAttribute("type"), l = "input" === t.tagName.toLowerCase() && i.supportsInputType.includes(s) || t.isContentEditable || "textarea" === t.tagName.toLowerCase();
                        if (!l) {
                            if ("input" === t.tagName.toLowerCase()) {
                                var c = document.createElement("input");
                                c.setAttribute("type", s), l = "text" === c.type, c = null;
                            } else l = "partial";
                        }
                        return !1 !== l ? function(t) {
                            var n, s;
                            function l() {
                                return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== a.getLastValidPosition.call(e) || !0 !== i.nullable ? (this.inputmask.shadowRoot || this.ownerDocument).activeElement === this && i.clearMaskOnLostFocus ? (e.isRTL ? r.clearOptionalTail.call(e, a.getBuffer.call(e).slice()).reverse() : r.clearOptionalTail.call(e, a.getBuffer.call(e).slice())).join("") : n.call(this) : "" : n.call(this);
                            }
                            function c(e) {
                                s.call(this, e), this.inputmask && (0, r.applyInputValue)(this, e);
                            }
                            if (!t.inputmask.__valueGet) {
                                if (!0 !== i.noValuePatching) {
                                    if (Object.getOwnPropertyDescriptor) {
                                        var f = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), "value") : void 0;
                                        f && f.get && f.set ? (n = f.get, s = f.set, Object.defineProperty(t, "value", {
                                            get: l,
                                            set: c,
                                            configurable: !0
                                        })) : "input" !== t.tagName.toLowerCase() && (n = function() {
                                            return this.textContent;
                                        }, s = function(e) {
                                            this.textContent = e;
                                        }, Object.defineProperty(t, "value", {
                                            get: l,
                                            set: c,
                                            configurable: !0
                                        }));
                                    } else document.__lookupGetter__ && t.__lookupGetter__("value") && (n = t.__lookupGetter__("value"), s = t.__lookupSetter__("value"), t.__defineGetter__("value", l), t.__defineSetter__("value", c));
                                    t.inputmask.__valueGet = n, t.inputmask.__valueSet = s;
                                }
                                t.inputmask._valueGet = function(t) {
                                    return e.isRTL && !0 !== t ? n.call(this.el).split("").reverse().join("") : n.call(this.el);
                                }, t.inputmask._valueSet = function(t, i) {
                                    s.call(this.el, null == t ? "" : !0 !== i && e.isRTL ? t.split("").reverse().join("") : t);
                                }, void 0 === n && (n = function() {
                                    return this.value;
                                }, s = function(e) {
                                    this.value = e;
                                }, function(t) {
                                    if (u.valHooks && (void 0 === u.valHooks[t] || !0 !== u.valHooks[t].inputmaskpatch)) {
                                        var n = u.valHooks[t] && u.valHooks[t].get ? u.valHooks[t].get : function(e) {
                                            return e.value;
                                        }, o = u.valHooks[t] && u.valHooks[t].set ? u.valHooks[t].set : function(e, t) {
                                            return e.value = t, e;
                                        };
                                        u.valHooks[t] = {
                                            get: function(t) {
                                                if (t.inputmask) {
                                                    if (t.inputmask.opts.autoUnmask) return t.inputmask.unmaskedvalue();
                                                    var r = n(t);
                                                    return -1 !== a.getLastValidPosition.call(e, void 0, void 0, t.inputmask.maskset.validPositions) || !0 !== i.nullable ? r : "";
                                                }
                                                return n(t);
                                            },
                                            set: function(e, t) {
                                                var i = o(e, t);
                                                return e.inputmask && (0, r.applyInputValue)(e, t), i;
                                            },
                                            inputmaskpatch: !0
                                        };
                                    }
                                }(t.type), function(e) {
                                    o.EventRuler.on(e, "mouseenter", function() {
                                        var e = this, t = e.inputmask._valueGet(!0);
                                        t != (e.inputmask.isRTL ? a.getBuffer.call(e.inputmask).slice().reverse() : a.getBuffer.call(e.inputmask)).join("") && (0, r.applyInputValue)(e, t);
                                    });
                                }(t));
                            }
                        }(t) : t.inputmask = void 0, l;
                    }(i, t);
                    if (!1 !== f) {
                        e.originalPlaceholder = i.placeholder, e.maxLength = void 0 !== i ? i.maxLength : void 0, -1 === e.maxLength && (e.maxLength = void 0), "inputMode" in i && null === i.getAttribute("inputmode") && (i.inputMode = t.inputmode, i.setAttribute("inputmode", t.inputmode)), !0 === f && (t.showMaskOnFocus = t.showMaskOnFocus && -1 === [
                            "cc-number",
                            "cc-exp"
                        ].indexOf(i.autocomplete), s.iphone && (t.insertModeVisual = !1, i.setAttribute("autocorrect", "off")), o.EventRuler.on(i, "submit", c.EventHandlers.submitEvent), o.EventRuler.on(i, "reset", c.EventHandlers.resetEvent), o.EventRuler.on(i, "blur", c.EventHandlers.blurEvent), o.EventRuler.on(i, "focus", c.EventHandlers.focusEvent), o.EventRuler.on(i, "invalid", c.EventHandlers.invalidEvent), o.EventRuler.on(i, "click", c.EventHandlers.clickEvent), o.EventRuler.on(i, "mouseleave", c.EventHandlers.mouseleaveEvent), o.EventRuler.on(i, "mouseenter", c.EventHandlers.mouseenterEvent), o.EventRuler.on(i, "paste", c.EventHandlers.pasteEvent), o.EventRuler.on(i, "cut", c.EventHandlers.cutEvent), o.EventRuler.on(i, "complete", t.oncomplete), o.EventRuler.on(i, "incomplete", t.onincomplete), o.EventRuler.on(i, "cleared", t.oncleared), !0 !== t.inputEventOnly && o.EventRuler.on(i, "keydown", c.EventHandlers.keyEvent), (s.mobile || t.inputEventOnly) && i.removeAttribute("maxLength"), o.EventRuler.on(i, "input", c.EventHandlers.inputFallBackEvent)), o.EventRuler.on(i, "setvalue", c.EventHandlers.setValueEvent), a.getBufferTemplate.call(e).join(""), e.undoValue = e._valueGet(!0);
                        var d = (i.inputmask.shadowRoot || i.ownerDocument).activeElement;
                        if ("" !== i.inputmask._valueGet(!0) || !1 === t.clearMaskOnLostFocus || d === i) {
                            (0, r.applyInputValue)(i, i.inputmask._valueGet(!0), t);
                            var p = a.getBuffer.call(e).slice();
                            !1 === l.isComplete.call(e, p) && t.clearIncomplete && a.resetMaskSet.call(e), t.clearMaskOnLostFocus && d !== i && (-1 === a.getLastValidPosition.call(e) ? p = [] : r.clearOptionalTail.call(e, p)), (!1 === t.clearMaskOnLostFocus || t.showMaskOnFocus && d === i || "" !== i.inputmask._valueGet(!0)) && (0, r.writeBuffer)(i, p), d === i && a.caret.call(e, i, a.seekNext.call(e, a.getLastValidPosition.call(e)));
                        }
                    }
                };
                var n = i(2839), a = i(8711), r = i(7760), o = i(9716), s = i(9845), l = i(7215), c = i(6030);
            },
            9695: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e, t, i, n) {
                    this.matches = [], this.openGroup = e || !1, this.alternatorGroup = !1, this.isGroup = e || !1, this.isOptional = t || !1, this.isQuantifier = i || !1, this.isAlternator = n || !1, this.quantifier = {
                        min: 1,
                        max: 1
                    };
                };
            },
            3194: function() {
                Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
                    value: function(e, t) {
                        if (null == this) throw new TypeError('"this" is null or not defined');
                        var i = Object(this), n = i.length >>> 0;
                        if (0 === n) return !1;
                        for(var a = 0 | t, r = Math.max(a >= 0 ? a : n - Math.abs(a), 0); r < n;){
                            if (i[r] === e) return !0;
                            r++;
                        }
                        return !1;
                    }
                });
            },
            9302: function() {
                var e = Function.bind.call(Function.call, Array.prototype.reduce), t = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable), i = Function.bind.call(Function.call, Array.prototype.concat), n = Object.keys;
                Object.entries || (Object.entries = function(a) {
                    return e(n(a), function(e, n) {
                        return i(e, "string" == typeof n && t(a, n) ? [
                            [
                                n,
                                a[n]
                            ]
                        ] : []);
                    }, []);
                });
            },
            7149: function() {
                function e(t) {
                    return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, e(t);
                }
                "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === e("test".__proto__) ? function(e) {
                    return e.__proto__;
                } : function(e) {
                    return e.constructor.prototype;
                });
            },
            4013: function() {
                String.prototype.includes || (String.prototype.includes = function(e, t) {
                    return "number" != typeof t && (t = 0), !(t + e.length > this.length) && -1 !== this.indexOf(e, t);
                });
            },
            8711: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.caret = function(e, t, i, n, a) {
                    var r, o = this, s = this.opts;
                    if (void 0 === t) return "selectionStart" in e && "selectionEnd" in e ? (t = e.selectionStart, i = e.selectionEnd) : window.getSelection ? (r = window.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== e && r.commonAncestorContainer !== e || (t = r.startOffset, i = r.endOffset) : document.selection && document.selection.createRange && (i = (t = 0 - (r = document.selection.createRange()).duplicate().moveStart("character", -e.inputmask._valueGet().length)) + r.text.length), {
                        begin: n ? t : c.call(o, t),
                        end: n ? i : c.call(o, i)
                    };
                    if (Array.isArray(t) && (i = o.isRTL ? t[0] : t[1], t = o.isRTL ? t[1] : t[0]), void 0 !== t.begin && (i = o.isRTL ? t.begin : t.end, t = o.isRTL ? t.end : t.begin), "number" == typeof t) {
                        t = n ? t : c.call(o, t), i = "number" == typeof (i = n ? i : c.call(o, i)) ? i : t;
                        var l = parseInt(((e.ownerDocument.defaultView || window).getComputedStyle ? (e.ownerDocument.defaultView || window).getComputedStyle(e, null) : e.currentStyle).fontSize) * i;
                        if (e.scrollLeft = l > e.scrollWidth ? l : 0, e.inputmask.caretPos = {
                            begin: t,
                            end: i
                        }, s.insertModeVisual && !1 === s.insertMode && t === i && (a || i++), e === (e.inputmask.shadowRoot || e.ownerDocument).activeElement) {
                            if ("setSelectionRange" in e) e.setSelectionRange(t, i);
                            else if (window.getSelection) {
                                if (r = document.createRange(), void 0 === e.firstChild || null === e.firstChild) {
                                    var u = document.createTextNode("");
                                    e.appendChild(u);
                                }
                                r.setStart(e.firstChild, t < e.inputmask._valueGet().length ? t : e.inputmask._valueGet().length), r.setEnd(e.firstChild, i < e.inputmask._valueGet().length ? i : e.inputmask._valueGet().length), r.collapse(!0);
                                var f = window.getSelection();
                                f.removeAllRanges(), f.addRange(r);
                            } else e.createTextRange && ((r = e.createTextRange()).collapse(!0), r.moveEnd("character", i), r.moveStart("character", t), r.select());
                        }
                    }
                }, t.determineLastRequiredPosition = function(e) {
                    var t, i, r = this, s = r.maskset, l = r.dependencyLib, c = n.getMaskTemplate.call(r, !0, o.call(r), !0, !0), u = c.length, f = o.call(r), d = {}, p = s.validPositions[f], h = void 0 !== p ? p.locator.slice() : void 0;
                    for(t = f + 1; t < c.length; t++)h = (i = n.getTestTemplate.call(r, t, h, t - 1)).locator.slice(), d[t] = l.extend(!0, {}, i);
                    var v = p && void 0 !== p.alternation ? p.locator[p.alternation] : void 0;
                    for(t = u - 1; t > f && ((i = d[t]).match.optionality || i.match.optionalQuantifier && i.match.newBlockMarker || v && (v !== d[t].locator[p.alternation] && 1 != i.match.static || !0 === i.match.static && i.locator[p.alternation] && a.checkAlternationMatch.call(r, i.locator[p.alternation].toString().split(","), v.toString().split(",")) && "" !== n.getTests.call(r, t)[0].def)) && c[t] === n.getPlaceholder.call(r, t, i.match); t--)u--;
                    return e ? {
                        l: u,
                        def: d[u] ? d[u].match : void 0
                    } : u;
                }, t.determineNewCaretPosition = function(e, t, i) {
                    var a = this, c = a.maskset, u = a.opts;
                    t && (a.isRTL ? e.end = e.begin : e.begin = e.end);
                    if (e.begin === e.end) {
                        switch(i = i || u.positionCaretOnClick){
                            case "none":
                                break;
                            case "select":
                                e = {
                                    begin: 0,
                                    end: r.call(a).length
                                };
                                break;
                            case "ignore":
                                e.end = e.begin = l.call(a, o.call(a));
                                break;
                            case "radixFocus":
                                if (a.clicked > 1 && 0 == c.validPositions.length) break;
                                if (function(e) {
                                    if ("" !== u.radixPoint && 0 !== u.digits) {
                                        var t = c.validPositions;
                                        if (void 0 === t[e] || t[e].input === n.getPlaceholder.call(a, e)) {
                                            if (e < l.call(a, -1)) return !0;
                                            var i = r.call(a).indexOf(u.radixPoint);
                                            if (-1 !== i) {
                                                for(var o = 0, s = t.length; o < s; o++)if (t[o] && i < o && t[o].input !== n.getPlaceholder.call(a, o)) return !1;
                                                return !0;
                                            }
                                        }
                                    }
                                    return !1;
                                }(e.begin)) {
                                    var f = r.call(a).join("").indexOf(u.radixPoint);
                                    e.end = e.begin = u.numericInput ? l.call(a, f) : f;
                                    break;
                                }
                            default:
                                var d = e.begin, p = o.call(a, d, !0), h = l.call(a, -1 !== p || s.call(a, 0) ? p : -1);
                                if (d <= h) e.end = e.begin = s.call(a, d, !1, !0) ? d : l.call(a, d);
                                else {
                                    var v = c.validPositions[p], m = n.getTestTemplate.call(a, h, v ? v.match.locator : void 0, v), g = n.getPlaceholder.call(a, h, m.match);
                                    if ("" !== g && r.call(a)[h] !== g && !0 !== m.match.optionalQuantifier && !0 !== m.match.newBlockMarker || !s.call(a, h, u.keepStatic, !0) && m.match.def === g) {
                                        var y = l.call(a, h);
                                        (d >= y || d === h) && (h = y);
                                    }
                                    e.end = e.begin = h;
                                }
                        }
                        return e;
                    }
                }, t.getBuffer = r, t.getBufferTemplate = function() {
                    var e = this.maskset;
                    void 0 === e._buffer && (e._buffer = n.getMaskTemplate.call(this, !1, 1), void 0 === e.buffer && (e.buffer = e._buffer.slice()));
                    return e._buffer;
                }, t.getLastValidPosition = o, t.isMask = s, t.resetMaskSet = function(e) {
                    var t = this.maskset;
                    t.buffer = void 0, !0 !== e && (t.validPositions = [], t.p = 0);
                }, t.seekNext = l, t.seekPrevious = function(e, t) {
                    var i = this, a = e - 1;
                    if (e <= 0) return 0;
                    for(; a > 0 && (!0 === t && (!0 !== n.getTest.call(i, a).match.newBlockMarker || !s.call(i, a, void 0, !0)) || !0 !== t && !s.call(i, a, void 0, !0));)a--;
                    return a;
                }, t.translatePosition = c;
                var n = i(4713), a = i(7215);
                function r(e) {
                    var t = this, i = t.maskset;
                    return void 0 !== i.buffer && !0 !== e || (i.buffer = n.getMaskTemplate.call(t, !0, o.call(t), !0), void 0 === i._buffer && (i._buffer = i.buffer.slice())), i.buffer;
                }
                function o(e, t, i) {
                    var n = this.maskset, a = -1, r = -1, o = i || n.validPositions;
                    void 0 === e && (e = -1);
                    for(var s = 0, l = o.length; s < l; s++)o[s] && (t || !0 !== o[s].generatedInput) && (s <= e && (a = s), s >= e && (r = s));
                    return -1 === a || a == e ? r : -1 == r || e - a < r - e ? a : r;
                }
                function s(e, t, i) {
                    var a = this, r = this.maskset, o = n.getTestTemplate.call(a, e).match;
                    if ("" === o.def && (o = n.getTest.call(a, e).match), !0 !== o.static) return o.fn;
                    if (!0 === i && void 0 !== r.validPositions[e] && !0 !== r.validPositions[e].generatedInput) return !0;
                    if (!0 !== t && e > -1) {
                        if (i) {
                            var s = n.getTests.call(a, e);
                            return s.length > 1 + ("" === s[s.length - 1].match.def ? 1 : 0);
                        }
                        var l = n.determineTestTemplate.call(a, e, n.getTests.call(a, e)), c = n.getPlaceholder.call(a, e, l.match);
                        return l.match.def !== c;
                    }
                    return !1;
                }
                function l(e, t, i) {
                    var a = this;
                    void 0 === i && (i = !0);
                    for(var r = e + 1; "" !== n.getTest.call(a, r).match.def && (!0 === t && (!0 !== n.getTest.call(a, r).match.newBlockMarker || !s.call(a, r, void 0, !0)) || !0 !== t && !s.call(a, r, void 0, i));)r++;
                    return r;
                }
                function c(e) {
                    var t = this.opts, i = this.el;
                    return !this.isRTL || "number" != typeof e || t.greedy && "" === t.placeholder || !i || (e = this._valueGet().length - e) < 0 && (e = 0), e;
                }
            },
            4713: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.determineTestTemplate = c, t.getDecisionTaker = o, t.getMaskTemplate = function(e, t, i, n, a) {
                    var r = this, o = this.opts, u = this.maskset, f = o.greedy;
                    a && o.greedy && (o.greedy = !1, r.maskset.tests = {});
                    t = t || 0;
                    var p, h, v, m, g = [], y = 0;
                    do {
                        if (!0 === e && u.validPositions[y]) h = (v = a && u.validPositions[y].match.optionality && void 0 === u.validPositions[y + 1] && (!0 === u.validPositions[y].generatedInput || u.validPositions[y].input == o.skipOptionalPartCharacter && y > 0) ? c.call(r, y, d.call(r, y, p, y - 1)) : u.validPositions[y]).match, p = v.locator.slice(), g.push(!0 === i ? v.input : !1 === i ? h.nativeDef : s.call(r, y, h));
                        else {
                            h = (v = l.call(r, y, p, y - 1)).match, p = v.locator.slice();
                            var k = !0 !== n && (!1 !== o.jitMasking ? o.jitMasking : h.jit);
                            (m = (m && h.static && h.def !== o.groupSeparator && null === h.fn || u.validPositions[y - 1] && h.static && h.def !== o.groupSeparator && null === h.fn) && u.tests[y]) || !1 === k || void 0 === k || "number" == typeof k && isFinite(k) && k > y ? g.push(!1 === i ? h.nativeDef : s.call(r, g.length, h)) : m = !1;
                        }
                        y++;
                    }while (!0 !== h.static || "" !== h.def || t > y);
                    "" === g[g.length - 1] && g.pop();
                    !1 === i && void 0 !== u.maskLength || (u.maskLength = y - 1);
                    return o.greedy = f, g;
                }, t.getPlaceholder = s, t.getTest = u, t.getTestTemplate = l, t.getTests = d, t.isSubsetOf = f;
                var n, a = (n = i(2394)) && n.__esModule ? n : {
                    default: n
                };
                function r(e, t) {
                    var i = (null != e.alternation ? e.mloc[o(e)] : e.locator).join("");
                    if ("" !== i) for(; i.length < t;)i += "0";
                    return i;
                }
                function o(e) {
                    var t = e.locator[e.alternation];
                    return "string" == typeof t && t.length > 0 && (t = t.split(",")[0]), void 0 !== t ? t.toString() : "";
                }
                function s(e, t, i) {
                    var n = this.opts, a = this.maskset;
                    if (void 0 !== (t = t || u.call(this, e).match).placeholder || !0 === i) return "function" == typeof t.placeholder ? t.placeholder(n) : t.placeholder;
                    if (!0 === t.static) {
                        if (e > -1 && void 0 === a.validPositions[e]) {
                            var r, o = d.call(this, e), s = [];
                            if (o.length > 1 + ("" === o[o.length - 1].match.def ? 1 : 0)) {
                                for(var l = 0; l < o.length; l++)if ("" !== o[l].match.def && !0 !== o[l].match.optionality && !0 !== o[l].match.optionalQuantifier && (!0 === o[l].match.static || void 0 === r || !1 !== o[l].match.fn.test(r.match.def, a, e, !0, n)) && (s.push(o[l]), !0 === o[l].match.static && (r = o[l]), s.length > 1 && /[0-9a-bA-Z]/.test(s[0].match.def))) return n.placeholder.charAt(e % n.placeholder.length);
                            }
                        }
                        return t.def;
                    }
                    return n.placeholder.charAt(e % n.placeholder.length);
                }
                function l(e, t, i) {
                    return this.maskset.validPositions[e] || c.call(this, e, d.call(this, e, t ? t.slice() : t, i));
                }
                function c(e, t) {
                    var i = this.opts, n = 0, a = function(e, t) {
                        var i = 0, n = !1;
                        t.forEach(function(e) {
                            e.match.optionality && (0 !== i && i !== e.match.optionality && (n = !0), (0 === i || i > e.match.optionality) && (i = e.match.optionality));
                        }), i && (0 == e || 1 == t.length ? i = 0 : n || (i = 0));
                        return i;
                    }(e, t);
                    e = e > 0 ? e - 1 : 0;
                    var o, s, l, c = r(u.call(this, e));
                    i.greedy && t.length > 1 && "" === t[t.length - 1].match.def && (n = 1);
                    for(var f = 0; f < t.length - n; f++){
                        var d = t[f];
                        o = r(d, c.length);
                        var p = Math.abs(o - c);
                        (void 0 === s || "" !== o && p < s || l && !i.greedy && l.match.optionality && l.match.optionality - a > 0 && "master" === l.match.newBlockMarker && (!d.match.optionality || d.match.optionality - a < 1 || !d.match.newBlockMarker) || l && !i.greedy && l.match.optionalQuantifier && !d.match.optionalQuantifier) && (s = p, l = d);
                    }
                    return l;
                }
                function u(e, t) {
                    var i = this.maskset;
                    return i.validPositions[e] ? i.validPositions[e] : (t || d.call(this, e))[0];
                }
                function f(e, t, i) {
                    function n(e) {
                        for(var t, i = [], n = -1, a = 0, r = e.length; a < r; a++)if ("-" === e.charAt(a)) for(t = e.charCodeAt(a + 1); ++n < t;)i.push(String.fromCharCode(n));
                        else n = e.charCodeAt(a), i.push(e.charAt(a));
                        return i.join("");
                    }
                    return e.match.def === t.match.nativeDef || !(!(i.regex || e.match.fn instanceof RegExp && t.match.fn instanceof RegExp) || !0 === e.match.static || !0 === t.match.static) && -1 !== n(t.match.fn.toString().replace(/[[\]/]/g, "")).indexOf(n(e.match.fn.toString().replace(/[[\]/]/g, "")));
                }
                function d(e, t, i) {
                    var n, r, o = this, s = this.dependencyLib, l = this.maskset, u = this.opts, d = this.el, p = l.maskToken, h = t ? i : 0, v = t ? t.slice() : [
                        0
                    ], m = [], g = !1, y = t ? t.join("") : "";
                    function k(t, i, r, s) {
                        function c(r, s, p) {
                            function v(e, t) {
                                var i = 0 === t.matches.indexOf(e);
                                return i || t.matches.every(function(n, a) {
                                    return !0 === n.isQuantifier ? i = v(e, t.matches[a - 1]) : Object.prototype.hasOwnProperty.call(n, "matches") && (i = v(e, n)), !i;
                                }), i;
                            }
                            function x(e, t, i) {
                                var n, a;
                                if ((l.tests[e] || l.validPositions[e]) && (l.tests[e] || [
                                    l.validPositions[e]
                                ]).every(function(e, r) {
                                    if (e.mloc[t]) return n = e, !1;
                                    var o = void 0 !== i ? i : e.alternation, s = void 0 !== e.locator[o] ? e.locator[o].toString().indexOf(t) : -1;
                                    return (void 0 === a || s < a) && -1 !== s && (n = e, a = s), !0;
                                }), n) {
                                    var r = n.locator[n.alternation];
                                    return (n.mloc[t] || n.mloc[r] || n.locator).slice((void 0 !== i ? i : n.alternation) + 1);
                                }
                                return void 0 !== i ? x(e, t) : void 0;
                            }
                            function P(e, t) {
                                var i = e.alternation, n = void 0 === t || i === t.alternation && -1 === e.locator[i].toString().indexOf(t.locator[i]);
                                if (!n && i > t.alternation) {
                                    for(var a = t.alternation; a < i; a++)if (e.locator[a] !== t.locator[a]) {
                                        i = a, n = !0;
                                        break;
                                    }
                                }
                                if (n) {
                                    e.mloc = e.mloc || {};
                                    var r = e.locator[i];
                                    if (void 0 !== r) {
                                        if ("string" == typeof r && (r = r.split(",")[0]), void 0 === e.mloc[r] && (e.mloc[r] = e.locator.slice()), void 0 !== t) {
                                            for(var o in t.mloc)"string" == typeof o && (o = o.split(",")[0]), void 0 === e.mloc[o] && (e.mloc[o] = t.mloc[o]);
                                            e.locator[i] = Object.keys(e.mloc).join(",");
                                        }
                                        return !0;
                                    }
                                    e.alternation = void 0;
                                }
                                return !1;
                            }
                            function w(e, t) {
                                if (e.locator.length !== t.locator.length) return !1;
                                for(var i = e.alternation + 1; i < e.locator.length; i++)if (e.locator[i] !== t.locator[i]) return !1;
                                return !0;
                            }
                            if (h > e + u._maxTestPos) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + l.mask;
                            if (h === e && void 0 === r.matches) {
                                if (m.push({
                                    match: r,
                                    locator: s.reverse(),
                                    cd: y,
                                    mloc: {}
                                }), !r.optionality || void 0 !== p || !(u.definitions && u.definitions[r.nativeDef] && u.definitions[r.nativeDef].optional || a.default.prototype.definitions[r.nativeDef] && a.default.prototype.definitions[r.nativeDef].optional)) return !0;
                                g = !0, h = e;
                            } else if (void 0 !== r.matches) {
                                if (r.isGroup && p !== r) return function() {
                                    if (r = c(t.matches[t.matches.indexOf(r) + 1], s, p)) return !0;
                                }();
                                if (r.isOptional) return function() {
                                    var t = r, a = m.length;
                                    if (r = k(r, i, s, p), m.length > 0) {
                                        if (m.forEach(function(e, t) {
                                            t >= a && (e.match.optionality = e.match.optionality ? e.match.optionality + 1 : 1);
                                        }), n = m[m.length - 1].match, void 0 !== p || !v(n, t)) return r;
                                        g = !0, h = e;
                                    }
                                }();
                                if (r.isAlternator) return function() {
                                    o.hasAlternator = !0;
                                    var n, a, v, y = r, k = [], b = m.slice(), S = s.length, M = !1, _ = i.length > 0 ? i.shift() : -1;
                                    if (-1 === _ || "string" == typeof _) {
                                        var O, E = h, T = i.slice(), j = [];
                                        if ("string" == typeof _) j = _.split(",");
                                        else for(O = 0; O < y.matches.length; O++)j.push(O.toString());
                                        if (void 0 !== l.excludes[e]) {
                                            for(var A = j.slice(), D = 0, B = l.excludes[e].length; D < B; D++){
                                                var C = l.excludes[e][D].toString().split(":");
                                                s.length == C[1] && j.splice(j.indexOf(C[0]), 1);
                                            }
                                            0 === j.length && (delete l.excludes[e], j = A);
                                        }
                                        (!0 === u.keepStatic || isFinite(parseInt(u.keepStatic)) && E >= u.keepStatic) && (j = j.slice(0, 1));
                                        for(var R = 0; R < j.length; R++){
                                            O = parseInt(j[R]), m = [], i = "string" == typeof _ && x(h, O, S) || T.slice();
                                            var L = y.matches[O];
                                            if (L && c(L, [
                                                O
                                            ].concat(s), p)) r = !0;
                                            else if (0 === R && (M = !0), L && L.matches && L.matches.length > y.matches[0].matches.length) break;
                                            n = m.slice(), h = E, m = [];
                                            for(var F = 0; F < n.length; F++){
                                                var I = n[F], N = !1;
                                                I.match.jit = I.match.jit || M, I.alternation = I.alternation || S, P(I);
                                                for(var V = 0; V < k.length; V++){
                                                    var G = k[V];
                                                    if ("string" != typeof _ || void 0 !== I.alternation && j.includes(I.locator[I.alternation].toString())) {
                                                        if (I.match.nativeDef === G.match.nativeDef) {
                                                            N = !0, P(G, I);
                                                            break;
                                                        }
                                                        if (f(I, G, u)) {
                                                            P(I, G) && (N = !0, k.splice(k.indexOf(G), 0, I));
                                                            break;
                                                        }
                                                        if (f(G, I, u)) {
                                                            P(G, I);
                                                            break;
                                                        }
                                                        if (v = G, !0 === (a = I).match.static && !0 !== v.match.static && v.match.fn.test(a.match.def, l, e, !1, u, !1)) {
                                                            w(I, G) || void 0 !== d.inputmask.userOptions.keepStatic ? P(I, G) && (N = !0, k.splice(k.indexOf(G), 0, I)) : u.keepStatic = !0;
                                                            break;
                                                        }
                                                    }
                                                }
                                                N || k.push(I);
                                            }
                                        }
                                        m = b.concat(k), h = e, g = m.length > 0, r = k.length > 0, i = T.slice();
                                    } else r = c(y.matches[_] || t.matches[_], [
                                        _
                                    ].concat(s), p);
                                    if (r) return !0;
                                }();
                                if (r.isQuantifier && p !== t.matches[t.matches.indexOf(r) - 1]) return function() {
                                    for(var a = r, o = !1, f = i.length > 0 ? i.shift() : 0; f < (isNaN(a.quantifier.max) ? f + 1 : a.quantifier.max) && h <= e; f++){
                                        var d = t.matches[t.matches.indexOf(a) - 1];
                                        if (r = c(d, [
                                            f
                                        ].concat(s), d)) {
                                            if (m.forEach(function(t, i) {
                                                (n = b(d, t.match) ? t.match : m[m.length - 1].match).optionalQuantifier = f >= a.quantifier.min, n.jit = (f + 1) * (d.matches.indexOf(n) + 1) > a.quantifier.jit, n.optionalQuantifier && v(n, d) && (g = !0, h = e, u.greedy && null == l.validPositions[e - 1] && f > a.quantifier.min && -1 != [
                                                    "*",
                                                    "+"
                                                ].indexOf(a.quantifier.max) && (m.pop(), y = void 0), o = !0, r = !1), !o && n.jit && (l.jitOffset[e] = d.matches.length - d.matches.indexOf(n));
                                            }), o) break;
                                            return !0;
                                        }
                                    }
                                }();
                                if (r = k(r, i, s, p)) return !0;
                            } else h++;
                        }
                        for(var p = i.length > 0 ? i.shift() : 0; p < t.matches.length; p++)if (!0 !== t.matches[p].isQuantifier) {
                            var v = c(t.matches[p], [
                                p
                            ].concat(r), s);
                            if (v && h === e) return v;
                            if (h > e) break;
                        }
                    }
                    function b(e, t) {
                        var i = -1 != e.matches.indexOf(t);
                        return i || e.matches.forEach(function(e, n) {
                            void 0 === e.matches || i || (i = b(e, t));
                        }), i;
                    }
                    if (e > -1) {
                        if (void 0 === t) {
                            for(var x, P = e - 1; void 0 === (x = l.validPositions[P] || l.tests[P]) && P > -1;)P--;
                            void 0 !== x && P > -1 && (v = function(e, t) {
                                var i, n = [];
                                return Array.isArray(t) || (t = [
                                    t
                                ]), t.length > 0 && (void 0 === t[0].alternation || !0 === u.keepStatic ? 0 === (n = c.call(o, e, t.slice()).locator.slice()).length && (n = t[0].locator.slice()) : t.forEach(function(e) {
                                    "" !== e.def && (0 === n.length ? (i = e.alternation, n = e.locator.slice()) : e.locator[i] && -1 === n[i].toString().indexOf(e.locator[i]) && (n[i] += "," + e.locator[i]));
                                })), n;
                            }(P, x), y = v.join(""), h = P);
                        }
                        if (l.tests[e] && l.tests[e][0].cd === y) return l.tests[e];
                        for(var w = v.shift(); w < p.length; w++){
                            if (k(p[w], v, [
                                w
                            ]) && h === e || h > e) break;
                        }
                    }
                    return (0 === m.length || g) && m.push({
                        match: {
                            fn: null,
                            static: !0,
                            optionality: !1,
                            casing: null,
                            def: "",
                            placeholder: ""
                        },
                        locator: [],
                        mloc: {},
                        cd: y
                    }), void 0 !== t && l.tests[e] ? r = s.extend(!0, [], m) : (l.tests[e] = s.extend(!0, [], m), r = l.tests[e]), m.forEach(function(e) {
                        e.match.optionality = e.match.defOptionality || !1;
                    }), r;
                }
            },
            7215: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.alternate = s, t.checkAlternationMatch = function(e, t, i) {
                    for(var n, a = this.opts.greedy ? t : t.slice(0, 1), r = !1, o = void 0 !== i ? i.split(",") : [], s = 0; s < o.length; s++)-1 !== (n = e.indexOf(o[s])) && e.splice(n, 1);
                    for(var l = 0; l < e.length; l++)if (a.includes(e[l])) {
                        r = !0;
                        break;
                    }
                    return r;
                }, t.handleRemove = function(e, t, i, o, l) {
                    var c = this, u = this.maskset, f = this.opts;
                    if ((f.numericInput || c.isRTL) && (t === a.keys.Backspace ? t = a.keys.Delete : t === a.keys.Delete && (t = a.keys.Backspace), c.isRTL)) {
                        var d = i.end;
                        i.end = i.begin, i.begin = d;
                    }
                    var p, h = r.getLastValidPosition.call(c, void 0, !0);
                    i.end >= r.getBuffer.call(c).length && h >= i.end && (i.end = h + 1);
                    t === a.keys.Backspace ? i.end - i.begin < 1 && (i.begin = r.seekPrevious.call(c, i.begin)) : t === a.keys.Delete && i.begin === i.end && (i.end = r.isMask.call(c, i.end, !0, !0) ? i.end + 1 : r.seekNext.call(c, i.end) + 1);
                    if (!1 !== (p = v.call(c, i))) {
                        if (!0 !== o && !1 !== f.keepStatic || null !== f.regex && -1 !== n.getTest.call(c, i.begin).match.def.indexOf("|")) {
                            var m = s.call(c, !0);
                            if (m) {
                                var g = void 0 !== m.caret ? m.caret : m.pos ? r.seekNext.call(c, m.pos.begin ? m.pos.begin : m.pos) : r.getLastValidPosition.call(c, -1, !0);
                                (t !== a.keys.Delete || i.begin > g) && i.begin;
                            }
                        }
                        !0 !== o && (u.p = t === a.keys.Delete ? i.begin + p : i.begin, u.p = r.determineNewCaretPosition.call(c, {
                            begin: u.p,
                            end: u.p
                        }, !1, !1 === f.insertMode && t === a.keys.Backspace ? "none" : void 0).begin);
                    }
                }, t.isComplete = c, t.isSelection = u, t.isValid = f, t.refreshFromBuffer = p, t.revalidateMask = v;
                var n = i(4713), a = i(2839), r = i(8711), o = i(6030);
                function s(e, t, i, a, o, l) {
                    var c, u, d, p, h, v, m, g, y, k, b, x = this, P = this.dependencyLib, w = this.opts, S = x.maskset, M = P.extend(!0, [], S.validPositions), _ = P.extend(!0, {}, S.tests), O = !1, E = !1, T = void 0 !== o ? o : r.getLastValidPosition.call(x);
                    if (l && (k = l.begin, b = l.end, l.begin > l.end && (k = l.end, b = l.begin)), -1 === T && void 0 === o) c = 0, u = (p = n.getTest.call(x, c)).alternation;
                    else for(; T >= 0; T--)if ((d = S.validPositions[T]) && void 0 !== d.alternation) {
                        if (T <= (e || 0) && p && p.locator[d.alternation] !== d.locator[d.alternation]) break;
                        c = T, u = S.validPositions[c].alternation, p = d;
                    }
                    if (void 0 !== u) {
                        m = parseInt(c), S.excludes[m] = S.excludes[m] || [], !0 !== e && S.excludes[m].push((0, n.getDecisionTaker)(p) + ":" + p.alternation);
                        var j = [], A = -1;
                        for(h = m; h < r.getLastValidPosition.call(x, void 0, !0) + 1; h++)-1 === A && e <= h && void 0 !== t && (j.push(t), A = j.length - 1), (v = S.validPositions[h]) && !0 !== v.generatedInput && (void 0 === l || h < k || h >= b) && j.push(v.input), delete S.validPositions[h];
                        for(-1 === A && void 0 !== t && (j.push(t), A = j.length - 1); void 0 !== S.excludes[m] && S.excludes[m].length < 10;){
                            for(S.tests = {}, r.resetMaskSet.call(x, !0), O = !0, h = 0; h < j.length && (g = O.caret || r.getLastValidPosition.call(x, void 0, !0) + 1, y = j[h], O = f.call(x, g, y, !1, a, !0)); h++)h === A && (E = O), 1 == e && O && (E = {
                                caretPos: h
                            });
                            if (O) break;
                            if (r.resetMaskSet.call(x), p = n.getTest.call(x, m), S.validPositions = P.extend(!0, [], M), S.tests = P.extend(!0, {}, _), !S.excludes[m]) {
                                E = s.call(x, e, t, i, a, m - 1, l);
                                break;
                            }
                            var D = (0, n.getDecisionTaker)(p);
                            if (-1 !== S.excludes[m].indexOf(D + ":" + p.alternation)) {
                                E = s.call(x, e, t, i, a, m - 1, l);
                                break;
                            }
                            for(S.excludes[m].push(D + ":" + p.alternation), h = m; h < r.getLastValidPosition.call(x, void 0, !0) + 1; h++)delete S.validPositions[h];
                        }
                    }
                    return E && !1 === w.keepStatic || delete S.excludes[m], E;
                }
                function l(e, t, i) {
                    var n = this.opts, r = this.maskset;
                    switch(n.casing || t.casing){
                        case "upper":
                            e = e.toUpperCase();
                            break;
                        case "lower":
                            e = e.toLowerCase();
                            break;
                        case "title":
                            var o = r.validPositions[i - 1];
                            e = 0 === i || o && o.input === String.fromCharCode(a.keyCode.Space) ? e.toUpperCase() : e.toLowerCase();
                            break;
                        default:
                            if ("function" == typeof n.casing) {
                                var s = Array.prototype.slice.call(arguments);
                                s.push(r.validPositions), e = n.casing.apply(this, s);
                            }
                    }
                    return e;
                }
                function c(e) {
                    var t = this, i = this.opts, a = this.maskset;
                    if ("function" == typeof i.isComplete) return i.isComplete(e, i);
                    if ("*" !== i.repeat) {
                        var o = !1, s = r.determineLastRequiredPosition.call(t, !0), l = r.seekPrevious.call(t, s.l);
                        if (void 0 === s.def || s.def.newBlockMarker || s.def.optionality || s.def.optionalQuantifier) {
                            o = !0;
                            for(var c = 0; c <= l; c++){
                                var u = n.getTestTemplate.call(t, c).match;
                                if (!0 !== u.static && void 0 === a.validPositions[c] && !0 !== u.optionality && !0 !== u.optionalQuantifier || !0 === u.static && e[c] !== n.getPlaceholder.call(t, c, u)) {
                                    o = !1;
                                    break;
                                }
                            }
                        }
                        return o;
                    }
                }
                function u(e) {
                    var t = this.opts.insertMode ? 0 : 1;
                    return this.isRTL ? e.begin - e.end > t : e.end - e.begin > t;
                }
                function f(e, t, i, a, o, d, m) {
                    var g = this, y = this.dependencyLib, k = this.opts, b = g.maskset;
                    i = !0 === i;
                    var x = e;
                    function P(e) {
                        if (void 0 !== e) {
                            if (void 0 !== e.remove && (Array.isArray(e.remove) || (e.remove = [
                                e.remove
                            ]), e.remove.sort(function(e, t) {
                                return g.isRTL ? e.pos - t.pos : t.pos - e.pos;
                            }).forEach(function(e) {
                                v.call(g, {
                                    begin: e,
                                    end: e + 1
                                });
                            }), e.remove = void 0), void 0 !== e.insert && (Array.isArray(e.insert) || (e.insert = [
                                e.insert
                            ]), e.insert.sort(function(e, t) {
                                return g.isRTL ? t.pos - e.pos : e.pos - t.pos;
                            }).forEach(function(e) {
                                "" !== e.c && f.call(g, e.pos, e.c, void 0 === e.strict || e.strict, void 0 !== e.fromIsValid ? e.fromIsValid : a);
                            }), e.insert = void 0), e.refreshFromBuffer && e.buffer) {
                                var t = e.refreshFromBuffer;
                                p.call(g, !0 === t ? t : t.start, t.end, e.buffer), e.refreshFromBuffer = void 0;
                            }
                            void 0 !== e.rewritePosition && (x = e.rewritePosition, e = !0);
                        }
                        return e;
                    }
                    function w(t, i, o) {
                        var s = !1;
                        return n.getTests.call(g, t).every(function(c, f) {
                            var d = c.match;
                            if (r.getBuffer.call(g, !0), !1 !== (s = (!d.jit || void 0 !== b.validPositions[r.seekPrevious.call(g, t)]) && (null != d.fn ? d.fn.test(i, b, t, o, k, u.call(g, e)) : (i === d.def || i === k.skipOptionalPartCharacter) && "" !== d.def && {
                                c: n.getPlaceholder.call(g, t, d, !0) || d.def,
                                pos: t
                            }))) {
                                var p = void 0 !== s.c ? s.c : i, h = t;
                                return p = p === k.skipOptionalPartCharacter && !0 === d.static ? n.getPlaceholder.call(g, t, d, !0) || d.def : p, !0 !== (s = P(s)) && void 0 !== s.pos && s.pos !== t && (h = s.pos), !0 !== s && void 0 === s.pos && void 0 === s.c ? !1 : (!1 === v.call(g, e, y.extend({}, c, {
                                    input: l.call(g, p, d, h)
                                }), a, h) && (s = !1), !1);
                            }
                            return !0;
                        }), s;
                    }
                    void 0 !== e.begin && (x = g.isRTL ? e.end : e.begin);
                    var S = !0, M = y.extend(!0, {}, b.validPositions);
                    if (!1 === k.keepStatic && void 0 !== b.excludes[x] && !0 !== o && !0 !== a) for(var _ = x; _ < (g.isRTL ? e.begin : e.end); _++)void 0 !== b.excludes[_] && (b.excludes[_] = void 0, delete b.tests[_]);
                    if ("function" == typeof k.preValidation && !0 !== a && !0 !== d && (S = P(S = k.preValidation.call(g, r.getBuffer.call(g), x, t, u.call(g, e), k, b, e, i || o))), !0 === S) {
                        if (S = w(x, t, i), (!i || !0 === a) && !1 === S && !0 !== d) {
                            var O = b.validPositions[x];
                            if (!O || !0 !== O.match.static || O.match.def !== t && t !== k.skipOptionalPartCharacter) {
                                if (k.insertMode || void 0 === b.validPositions[r.seekNext.call(g, x)] || e.end > x) {
                                    var E = !1;
                                    if (b.jitOffset[x] && void 0 === b.validPositions[r.seekNext.call(g, x)] && !1 !== (S = f.call(g, x + b.jitOffset[x], t, !0, !0)) && (!0 !== o && (S.caret = x), E = !0), e.end > x && (b.validPositions[x] = void 0), !E && !r.isMask.call(g, x, k.keepStatic && 0 === x)) {
                                        for(var T = x + 1, j = r.seekNext.call(g, x, !1, 0 !== x); T <= j; T++)if (!1 !== (S = w(T, t, i))) {
                                            S = h.call(g, x, void 0 !== S.pos ? S.pos : T) || S, x = T;
                                            break;
                                        }
                                    }
                                }
                            } else S = {
                                caret: r.seekNext.call(g, x)
                            };
                        }
                        g.hasAlternator && !0 !== o && !i && (!1 === S && k.keepStatic && (c.call(g, r.getBuffer.call(g)) || 0 === x) ? S = s.call(g, x, t, i, a, void 0, e) : (u.call(g, e) && b.tests[x] && b.tests[x].length > 1 && k.keepStatic || 1 == S && !0 !== k.numericInput && b.tests[x] && b.tests[x].length > 1 && r.getLastValidPosition.call(g, void 0, !0) > x) && (S = s.call(g, !0))), !0 === S && (S = {
                            pos: x
                        });
                    }
                    if ("function" == typeof k.postValidation && !0 !== a && !0 !== d) {
                        var A = k.postValidation.call(g, r.getBuffer.call(g, !0), void 0 !== e.begin ? g.isRTL ? e.end : e.begin : e, t, S, k, b, i, m);
                        void 0 !== A && (S = !0 === A ? S : A);
                    }
                    S && void 0 === S.pos && (S.pos = x), !1 === S || !0 === d ? (r.resetMaskSet.call(g, !0), b.validPositions = y.extend(!0, [], M)) : h.call(g, void 0, x, !0);
                    var D = P(S);
                    void 0 !== g.maxLength && r.getBuffer.call(g).length > g.maxLength && !a && (r.resetMaskSet.call(g, !0), b.validPositions = y.extend(!0, [], M), D = !1);
                    return D;
                }
                function d(e, t, i) {
                    for(var a = this.maskset, r = !1, o = n.getTests.call(this, e), s = 0; s < o.length; s++){
                        if (o[s].match && (o[s].match.nativeDef === t.match[i.shiftPositions ? "def" : "nativeDef"] && (!i.shiftPositions || !t.match.static) || o[s].match.nativeDef === t.match.nativeDef || i.regex && !o[s].match.static && o[s].match.fn.test(t.input, a, e, !1, i))) {
                            r = !0;
                            break;
                        }
                        if (o[s].match && o[s].match.def === t.match.nativeDef) {
                            r = void 0;
                            break;
                        }
                    }
                    return !1 === r && void 0 !== a.jitOffset[e] && (r = d.call(this, e + a.jitOffset[e], t, i)), r;
                }
                function p(e, t, i) {
                    var n, a, s = this, l = this.maskset, c = this.opts, u = this.dependencyLib, f = c.skipOptionalPartCharacter, d = s.isRTL ? i.slice().reverse() : i;
                    if (c.skipOptionalPartCharacter = "", !0 === e) r.resetMaskSet.call(s), l.tests = {}, e = 0, t = i.length, a = r.determineNewCaretPosition.call(s, {
                        begin: 0,
                        end: 0
                    }, !1).begin;
                    else {
                        for(n = e; n < t; n++)delete l.validPositions[n];
                        a = e;
                    }
                    var p = new u.Event("keypress");
                    for(n = e; n < t; n++){
                        p.key = d[n].toString(), s.ignorable = !1;
                        var h = o.EventHandlers.keypressEvent.call(s, p, !0, !1, !1, a);
                        !1 !== h && void 0 !== h && (a = h.forwardPosition);
                    }
                    c.skipOptionalPartCharacter = f;
                }
                function h(e, t, i) {
                    var a = this, o = this.maskset, s = this.dependencyLib;
                    if (void 0 === e) for(e = t - 1; e > 0 && !o.validPositions[e]; e--);
                    for(var l = e; l < t; l++){
                        if (void 0 === o.validPositions[l] && !r.isMask.call(a, l, !1)) {
                            if (0 == l ? n.getTest.call(a, l) : o.validPositions[l - 1]) {
                                var c = n.getTests.call(a, l).slice();
                                "" === c[c.length - 1].match.def && c.pop();
                                var u, d = n.determineTestTemplate.call(a, l, c);
                                if (d && (!0 !== d.match.jit || "master" === d.match.newBlockMarker && (u = o.validPositions[l + 1]) && !0 === u.match.optionalQuantifier) && ((d = s.extend({}, d, {
                                    input: n.getPlaceholder.call(a, l, d.match, !0) || d.match.def
                                })).generatedInput = !0, v.call(a, l, d, !0), !0 !== i)) {
                                    var p = o.validPositions[t].input;
                                    return o.validPositions[t] = void 0, f.call(a, t, p, !0, !0);
                                }
                            }
                        }
                    }
                }
                function v(e, t, i, a) {
                    var o = this, s = this.maskset, l = this.opts, c = this.dependencyLib;
                    function u(e, t, i) {
                        var n = t[e];
                        if (void 0 !== n && !0 === n.match.static && !0 !== n.match.optionality && (void 0 === t[0] || void 0 === t[0].alternation)) {
                            var a = i.begin <= e - 1 ? t[e - 1] && !0 === t[e - 1].match.static && t[e - 1] : t[e - 1], r = i.end > e + 1 ? t[e + 1] && !0 === t[e + 1].match.static && t[e + 1] : t[e + 1];
                            return a && r;
                        }
                        return !1;
                    }
                    var p = 0, h = void 0 !== e.begin ? e.begin : e, v = void 0 !== e.end ? e.end : e, m = !0;
                    if (e.begin > e.end && (h = e.end, v = e.begin), a = void 0 !== a ? a : h, void 0 === i && (h !== v || l.insertMode && void 0 !== s.validPositions[a] || void 0 === t || t.match.optionalQuantifier || t.match.optionality)) {
                        var g, y = c.extend(!0, {}, s.validPositions), k = r.getLastValidPosition.call(o, void 0, !0);
                        for(s.p = h, g = k; g >= h; g--)delete s.validPositions[g], void 0 === t && delete s.tests[g + 1];
                        var b, x, P = a, w = P;
                        for(t && (s.validPositions[a] = c.extend(!0, {}, t), w++, P++), g = t ? v : v - 1; g <= k; g++){
                            if (void 0 !== (b = y[g]) && !0 !== b.generatedInput && (g >= v || g >= h && u(g, y, {
                                begin: h,
                                end: v
                            }))) {
                                for(; "" !== n.getTest.call(o, w).match.def;){
                                    if (!1 !== (x = d.call(o, w, b, l)) || "+" === b.match.def) {
                                        "+" === b.match.def && r.getBuffer.call(o, !0);
                                        var S = f.call(o, w, b.input, "+" !== b.match.def, !0);
                                        if (m = !1 !== S, P = (S.pos || w) + 1, !m && x) break;
                                    } else m = !1;
                                    if (m) {
                                        void 0 === t && b.match.static && g === e.begin && p++;
                                        break;
                                    }
                                    if (!m && r.getBuffer.call(o), w > s.maskLength) break;
                                    w++;
                                }
                                "" == n.getTest.call(o, w).match.def && (m = !1), w = P;
                            }
                            if (!m) break;
                        }
                        if (!m) return s.validPositions = c.extend(!0, [], y), r.resetMaskSet.call(o, !0), !1;
                    } else t && n.getTest.call(o, a).match.cd === t.match.cd && (s.validPositions[a] = c.extend(!0, {}, t));
                    return r.resetMaskSet.call(o, !0), p;
                }
            }
        }, t = {};
        function i(n) {
            var a = t[n];
            if (void 0 !== a) return a.exports;
            var r = t[n] = {
                exports: {}
            };
            return e[n](r, r.exports, i), r.exports;
        }
        var n = {};
        return function() {
            var e, t = n;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, i(7149), i(3194), i(9302), i(4013), i(3851), i(219), i(207), i(5296);
            var a = ((e = i(2394)) && e.__esModule ? e : {
                default: e
            }).default;
            t.default = a;
        }(), n;
    }();
});

},{}],"cVNJ7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getBankInfo", ()=>getBankInfo);
parcelHelpers.export(exports, "getBrandInfo", ()=>getBrandInfo);
var _cardInfo = require("card-info");
var _cardInfoDefault = parcelHelpers.interopDefault(_cardInfo);
var _redom = require("redom");
const getImg = (URL, urlLogo, id = "")=>{
    const fileName = urlLogo.split("/").pop();
    const img = (0, _redom.el)("img", {
        src: `${URL}${fileName}`,
        alt: "logo",
        id: `${id}`
    });
    img.style.backgroundColor = fileName.includes("white") ? "darkgray" : "";
    return img;
};
let currentBrand = null; // Инициализация текущего бренда как null
const getBrandInfo = (cardNumber)=>{
    if (cardNumber.length < 2) {
        currentBrand = null;
        return;
    }
    const cardInfo = new (0, _cardInfoDefault.default)(cardNumber);
    const brandLogo = cardInfo.brandLogo;
    // Проверка, изменился ли бренд
    if (String(cardNumber).startsWith(cardInfo.numberSource) && currentBrand === brandLogo) return;
    const ccicon = document.querySelector("#ccicon");
    const existingBrandLogo = document.querySelector("#brand-logo");
    const URL = "img/brands-logos/";
    if (existingBrandLogo) {
        existingBrandLogo.remove();
        currentBrand = null;
    }
    // Обновление текущего бренда
    if (brandLogo) {
        currentBrand = brandLogo;
        const img = getImg(URL, currentBrand, "brand-logo");
        ccicon.append(img);
    }
};
const getBankInfo = (cardNumber)=>{
    const cardInfo = new (0, _cardInfoDefault.default)(cardNumber);
    const ccsingle = document.querySelector("#ccsingle");
    const existingBankLogo = document.querySelector("#bank-logo");
    if (String(cardNumber).startsWith(cardInfo.numberSource) && existingBankLogo) return;
    // Смена цвета карты
    const [light, dark] = cardInfo.backgroundColors;
    const pathLightColor = document.querySelector(".lightcolor");
    const pathDarkColor = document.querySelector(".darkcolor");
    const rectangle2 = document.querySelector("#Rectangle-1_2_");
    if (!String(cardNumber).startsWith("402532")) {
        pathLightColor.setAttribute("fill", light);
        pathDarkColor.setAttribute("fill", dark);
        rectangle2.setAttribute("fill", dark);
    } else {
        pathLightColor.setAttribute("fill", dark);
        pathDarkColor.setAttribute("fill", light);
        rectangle2.setAttribute("fill", light);
    }
    const URL = "img/banks-logos/";
    let urlBankLogo;
    if (cardInfo.bankLogoSvg) urlBankLogo = cardInfo.bankLogoSvg;
    else if (cardInfo.bankLogo) urlBankLogo = cardInfo.bankLogo;
    if (urlBankLogo) {
        const img = getImg(URL, urlBankLogo, "bank-logo");
        ccsingle.append(img);
    } else console.warn("Отсутствует информация о логотипе банка");
};

},{"card-info":"8Fvp1","redom":"iahd6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Fvp1":[function(require,module,exports) {
(function() {
    function CardInfo(numberSource, options) {
        CardInfo._assign(this, CardInfo._defaultProps);
        this.options = CardInfo._assign({}, CardInfo.defaultOptions, options || {});
        this.numberSource = arguments.length ? numberSource : "";
        this.number = CardInfo._getNumber(this.numberSource);
        var bankData = CardInfo._getBank(this.number);
        if (bankData) {
            this.bankAlias = bankData.alias;
            this.bankName = bankData.name;
            this.bankNameEn = bankData.nameEn;
            this.bankCountry = bankData.country;
            this.bankUrl = bankData.url;
            this.bankLogoPng = CardInfo._getLogo(this.options.banksLogosPath, bankData.logoPng);
            this.bankLogoSvg = CardInfo._getLogo(this.options.banksLogosPath, bankData.logoSvg);
            this.bankLogo = CardInfo._getLogoByPreferredExt(this.bankLogoPng, this.bankLogoSvg, this.options.preferredExt);
            this.bankLogoStyle = bankData.logoStyle;
            this.backgroundColor = bankData.backgroundColor;
            this.backgroundColors = bankData.backgroundColors;
            this.backgroundLightness = bankData.backgroundLightness;
            this.textColor = bankData.text;
        }
        this.backgroundGradient = CardInfo._getGradient(this.backgroundColors, this.options.gradientDegrees);
        var brandData = CardInfo._getBrand(this.number);
        if (brandData) {
            this.brandAlias = brandData.alias;
            this.brandName = brandData.name;
            var brandLogoBasename = CardInfo._getBrandLogoBasename(this.brandAlias, this.options.brandLogoPolicy, this.backgroundLightness, this.bankLogoStyle);
            this.brandLogoPng = CardInfo._getLogo(this.options.brandsLogosPath, brandLogoBasename, "png");
            this.brandLogoSvg = CardInfo._getLogo(this.options.brandsLogosPath, brandLogoBasename, "svg");
            this.brandLogo = CardInfo._getLogoByPreferredExt(this.brandLogoPng, this.brandLogoSvg, this.options.preferredExt);
            this.codeName = brandData.codeName;
            this.codeLength = brandData.codeLength;
            this.numberLengths = brandData.lengths;
            this.numberGaps = brandData.gaps;
        }
        this.numberBlocks = CardInfo._getBlocks(this.numberGaps, this.numberLengths);
        this.numberMask = CardInfo._getMask(this.options.maskDigitSymbol, this.options.maskDelimiterSymbol, this.numberBlocks);
        this.numberNice = CardInfo._getNumberNice(this.number, this.numberGaps);
    }
    CardInfo._defaultProps = {
        bankAlias: null,
        bankName: null,
        bankNameEn: null,
        bankCountry: null,
        bankUrl: null,
        bankLogo: null,
        bankLogoPng: null,
        bankLogoSvg: null,
        bankLogoStyle: null,
        backgroundColor: "#eeeeee",
        backgroundColors: [
            "#eeeeee",
            "#dddddd"
        ],
        backgroundLightness: "light",
        backgroundGradient: null,
        textColor: "#000",
        brandAlias: null,
        brandName: null,
        brandLogo: null,
        brandLogoPng: null,
        brandLogoSvg: null,
        codeName: null,
        codeLength: null,
        numberMask: null,
        numberGaps: [
            4,
            8,
            12
        ],
        numberBlocks: null,
        numberLengths: [
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19
        ],
        numberNice: null,
        number: null,
        numberSource: null,
        options: {}
    };
    CardInfo.defaultOptions = {
        banksLogosPath: "/bower_components/card-info/dist/banks-logos/",
        brandsLogosPath: "/bower_components/card-info/dist/brands-logos/",
        brandLogoPolicy: "auto",
        preferredExt: "svg",
        maskDigitSymbol: "0",
        maskDelimiterSymbol: " ",
        gradientDegrees: 135
    };
    CardInfo._banks = {};
    CardInfo._prefixes = {};
    CardInfo._brands = [
        {
            alias: "visa",
            name: "Visa",
            codeName: "CVV",
            codeLength: 3,
            gaps: [
                4,
                8,
                12
            ],
            lengths: [
                16
            ],
            pattern: /^4\d*$/
        },
        {
            alias: "master-card",
            name: "MasterCard",
            codeName: "CVC",
            codeLength: 3,
            gaps: [
                4,
                8,
                12
            ],
            lengths: [
                16
            ],
            pattern: /^(5[1-5]|222[1-9]|2[3-6]|27[0-1]|2720)\d*$/
        },
        {
            alias: "american-express",
            name: "American Express",
            codeName: "CID",
            codeLength: 4,
            gaps: [
                4,
                10
            ],
            lengths: [
                15
            ],
            pattern: /^3[47]\d*$/
        },
        {
            alias: "diners-club",
            name: "Diners Club",
            codeName: "CVV",
            codeLength: 3,
            gaps: [
                4,
                10
            ],
            lengths: [
                14
            ],
            pattern: /^3(0[0-5]|[689])\d*$/
        },
        {
            alias: "discover",
            name: "Discover",
            codeName: "CID",
            codeLength: 3,
            gaps: [
                4,
                8,
                12
            ],
            lengths: [
                16,
                19
            ],
            pattern: /^(6011|65|64[4-9])\d*$/
        },
        {
            alias: "jcb",
            name: "JCB",
            codeName: "CVV",
            codeLength: 3,
            gaps: [
                4,
                8,
                12
            ],
            lengths: [
                16
            ],
            pattern: /^(2131|1800|35)\d*$/
        },
        {
            alias: "unionpay",
            name: "UnionPay",
            codeName: "CVN",
            codeLength: 3,
            gaps: [
                4,
                8,
                12
            ],
            lengths: [
                16,
                17,
                18,
                19
            ],
            pattern: /^62[0-5]\d*$/
        },
        {
            alias: "maestro",
            name: "Maestro",
            codeName: "CVC",
            codeLength: 3,
            gaps: [
                4,
                8,
                12
            ],
            lengths: [
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19
            ],
            pattern: /^(5[0678]|6304|6390|6054|6271|67)\d*$/
        },
        {
            alias: "mir",
            name: "MIR",
            codeName: "CVC",
            codeLength: 3,
            gaps: [
                4,
                8,
                12
            ],
            lengths: [
                16
            ],
            pattern: /^22\d*$/
        }
    ];
    CardInfo._assign = function() {
        var objTarget = arguments[0];
        for(var i = 1; i < arguments.length; i++){
            var objSource = arguments[i];
            for(var key in objSource)if (objSource.hasOwnProperty(key)) {
                if (objSource[key] instanceof Array) objTarget[key] = CardInfo._assign([], objSource[key]);
                else objTarget[key] = objSource[key];
            }
        }
        return objTarget;
    };
    CardInfo._getNumber = function(numberSource) {
        var numberSourceString = numberSource + "";
        return /^[\d ]*$/.test(numberSourceString) ? numberSourceString.replace(/\D/g, "") : "";
    };
    CardInfo._getBank = function(number) {
        if (number.length < 6) return undefined;
        var prefix = number.substr(0, 6);
        return this._prefixes[prefix] ? this._banks[this._prefixes[prefix]] : undefined;
    };
    CardInfo._getBrand = function(number) {
        var brands = [];
        for(var i = 0; i < this._brands.length; i++)if (this._brands[i].pattern.test(number)) brands.push(this._brands[i]);
        if (brands.length === 1) return brands[0];
    };
    CardInfo._getLogo = function(dirname, basename, extname) {
        return basename ? dirname + (extname ? basename + "." + extname : basename) : null;
    };
    CardInfo._getBrandLogoBasename = function(brandAlias, brandLogoPolicy, backgroundLightness, bankLogoStyle) {
        switch(brandLogoPolicy){
            case "auto":
                return brandAlias + "-" + (bankLogoStyle || "colored");
            case "colored":
                return brandAlias + "-colored";
            case "mono":
                return brandAlias + (backgroundLightness === "light" ? "-black" : "-white");
            case "black":
                return brandAlias + "-black";
            case "white":
                return brandAlias + "-white";
        }
    };
    CardInfo._getLogoByPreferredExt = function(logoPng, logoSvg, preferredExt) {
        if (!logoPng && !logoSvg) return null;
        if (!logoPng) return logoSvg;
        if (!logoSvg) return logoPng;
        return logoPng.substr(logoPng.length - 3) === preferredExt ? logoPng : logoSvg;
    };
    CardInfo._getGradient = function(backgroundColors, gradientDegrees) {
        return "linear-gradient(" + gradientDegrees + "deg, " + backgroundColors.join(", ") + ")";
    };
    CardInfo._getBlocks = function(numberGaps, numberLengths) {
        var numberLength = numberLengths[numberLengths.length - 1];
        var blocks = [];
        for(var i = numberGaps.length - 1; i >= 0; i--){
            var blockLength = numberLength - numberGaps[i];
            numberLength -= blockLength;
            blocks.push(blockLength);
        }
        blocks.push(numberLength);
        return blocks.reverse();
    };
    CardInfo._getMask = function(maskDigitSymbol, maskDelimiterSymbol, numberBlocks) {
        var mask = "";
        for(var i = 0; i < numberBlocks.length; i++)mask += (i ? maskDelimiterSymbol : "") + Array(numberBlocks[i] + 1).join(maskDigitSymbol);
        return mask;
    };
    CardInfo._getNumberNice = function(number, numberGaps) {
        var offsets = [
            0
        ].concat(numberGaps).concat([
            number.length
        ]);
        var components = [];
        for(var i = 0; offsets[i] < number.length; i++){
            var start = offsets[i];
            var end = Math.min(offsets[i + 1], number.length);
            components.push(number.substring(start, end));
        }
        return components.join(" ");
    };
    CardInfo._addBanks = function(banks) {
        this._assign(this._banks, banks);
    };
    CardInfo._addPrefixes = function(prefixes) {
        this._assign(this._prefixes, prefixes);
    };
    CardInfo.addBanksAndPrefixes = function(banksAndPrefixes) {
        this._addBanks(banksAndPrefixes.banks);
        this._addPrefixes(banksAndPrefixes.prefixes);
    };
    CardInfo.getBanks = function(options) {
        options = CardInfo._assign({}, CardInfo.defaultOptions, options || {});
        var banks = [];
        var exts = [
            "png",
            "svg"
        ];
        var extsCapitalized = [
            "Png",
            "Svg"
        ];
        for(var bi in this._banks)if (this._banks.hasOwnProperty(bi)) {
            var bank = CardInfo._assign({}, this._banks[bi]);
            for(var ei = 0; ei < exts.length; ei++){
                var logoKey = "logo" + extsCapitalized[ei];
                if (bank[logoKey]) bank[logoKey] = CardInfo._getLogo(options.banksLogosPath, bank[logoKey]);
            }
            bank.backgroundGradient = CardInfo._getGradient(bank.backgroundColors, options.gradientDegrees);
            bank.logo = CardInfo._getLogoByPreferredExt(bank.logoPng, bank.logoSvg, options.preferredExt);
            banks.push(bank);
        }
        return banks;
    };
    CardInfo.getBrands = function(options) {
        options = CardInfo._assign({}, CardInfo.defaultOptions, options || {});
        var brands = [];
        var styles = [
            "colored",
            "black",
            "white"
        ];
        var exts = [
            "png",
            "svg"
        ];
        var stylesCapitalized = [
            "Colored",
            "Black",
            "White"
        ];
        var extsCapitalized = [
            "Png",
            "Svg"
        ];
        for(var bi = 0; bi < this._brands.length; bi++){
            var brand = CardInfo._assign({}, this._brands[bi]);
            brand.blocks = CardInfo._getBlocks(brand.gaps, brand.lengths);
            brand.mask = CardInfo._getMask(options.maskDigitSymbol, options.maskDelimiterSymbol, brand.blocks);
            for(var si = 0; si < styles.length; si++){
                var logoKey = "logo" + stylesCapitalized[si];
                for(var ei = 0; ei < exts.length; ei++)brand[logoKey + extsCapitalized[ei]] = CardInfo._getLogo(options.brandsLogosPath, brand.alias + "-" + styles[si], exts[ei]);
                brand[logoKey] = CardInfo._getLogoByPreferredExt(brand[logoKey + "Png"], brand[logoKey + "Svg"], options.preferredExt);
            }
            brands.push(brand);
        }
        return brands;
    };
    CardInfo.setDefaultOptions = function(options) {
        this._assign(CardInfo.defaultOptions, options);
    };
    if (0, module.exports) exports = module.exports = CardInfo;
    exports.CardInfo = CardInfo;
})();
(function() {
    var banks = {
        "ru-absolut": {
            "name": "Абсолют Банк",
            "nameEn": "Absolut Bank",
            "url": "http://absolutbank.ru/",
            "backgroundColor": "#fdb89a",
            "backgroundColors": [
                "#fbd6c5",
                "#fdb89a"
            ],
            "backgroundLightness": "light",
            "logoStyle": "colored",
            "text": "#676766",
            "alias": "ru-absolut",
            "country": "ru",
            "logoPng": "ru-absolut.png"
        },
        "ru-akbars": {
            "name": "Ак Барс",
            "nameEn": "AK Bars",
            "url": "https://www.akbars.ru/",
            "backgroundColor": "#01973e",
            "backgroundColors": [
                "#01973e",
                "#04632b"
            ],
            "backgroundLightness": "dark",
            "logoStyle": "white",
            "text": "#fff",
            "alias": "ru-akbars",
            "country": "ru",
            "logoPng": "ru-akbars.png"
        },
        "ru-alfa": {
            "name": "Альфа-Банк",
            "nameEn": "Alfa-Bank",
            "url": "https://alfabank.ru/",
            "backgroundColor": "#ef3124",
            "backgroundColors": [
                "#ef3124",
                "#d6180b"
            ],
            "backgroundLightness": "dark",
            "logoStyle": "white",
            "text": "#fff",
            "alias": "ru-alfa",
            "country": "ru",
            "logoPng": "ru-alfa.png",
            "logoSvg": "ru-alfa.svg"
        },
        "ru-atb": {
            "name": "Азиатско-Тихоокеанский Банк",
            "nameEn": "Азиатско-Тихоокеанский Банк",
            "url": "https://www.atb.su/",
            "backgroundColor": "#eeeeee",
            "backgroundColors": [
                "#eeeeee",
                "#dea184"
            ],
            "backgroundLightness": "light",
            "logoStyle": "colored",
            "text": "#373a36",
            "alias": "ru-atb",
            "country": "ru",
            "logoPng": "ru-atb.png",
            "logoSvg": "ru-atb.svg"
        },
        "ru-avangard": {
            "name": "Авангард",
            "nameEn": "Avangard",
            "url": "https://www.avangard.ru/",
            "backgroundColor": "#095b34",
            "backgroundColors": [
                "#0f8e52",
                "#095b34"
            ],
            "backgroundLightness": "dark",
            "logoStyle": "white",
            "text": "#fff",
            "alias": "ru-avangard",
            "country": "ru",
            "logoPng": "ru-avangard.png"
        },
        "ru-binbank": {
            "name": "Бинбанк",
            "nameEn": "B&N Bank Public",
            "url": "https://www.binbank.ru/",
            "backgroundColor": "#cdeafd",
            "backgroundColors": [
                "#cdeafd",
                "#9cc0d9"
            ],
            "backgroundLightness": "light",
            "logoStyle": "colored",
            "text": "#004c81",
            "alias": "ru-binbank",
            "country": "ru",
            "logoPng": "ru-binbank.png",
            "logoSvg": "ru-binbank.svg"
        },
        "ru-ceb": {
            "name": "Кредит Европа Банк",
            "nameEn": "Credit Europe Bank",
            "url": "https://www.crediteurope.ru/",
            "backgroundColor": "#e0eaf7",
            "backgroundColors": [
                "#e0eaf7",
                "#f7dfdf"
            ],
            "backgroundLightness": "light",
            "logoStyle": "colored",
            "text": "#1c297b",
            "alias": "ru-ceb",
            "country": "ru",
            "logoPng": "ru-ceb.png",
            "logoSvg": "ru-ceb.svg"
        },
        "ru-cetelem": {
            "name": "Сетелем Банк",
            "nameEn": "Cetelem Bank",
            "url": "https://www.cetelem.ru/",
            "backgroundColor": "#ceecb7",
            "backgroundColors": [
                "#ceecb7",
                "#8bbb75"
            ],
            "backgroundLightness": "light",
            "logoStyle": "colored",
            "text": "#167158",
            "alias": "ru-cetelem",
            "country": "ru",
            "logoPng": "ru-cetelem.png",
            "logoSvg": "ru-cetelem.svg"
        },
        "ru-citi": {
            "name": "Ситибанк",
            "nameEn": "Citibank",
            "url": "https://www.citibank.ru/",
            "backgroundColor": "#008bd0",
            "backgroundColors": [
                "#00bcf2",
                "#004e90"
            ],
            "backgroundLightness": "dark",
            "logoStyle": "white",
            "text": "#fff",
            "alias": "ru-citi",
            "country": "ru",
            "logoPng": "ru-citi.png",
            "logoSvg": "ru-citi.svg"
        },
        "ru-globex": {
            "name": "Глобэкс",
            "nameEn": "Globexbank",
            "url": "http://www.globexbank.ru/",
            "backgroundColor": "#9bdaff",
            "backgroundColors": [
                "#9bdaff",
                "#ffd2a2"
            ],
            "backgroundLightness": "light",
            "logoStyle": "colored",
            "text": "#072761",
            "alias": "ru-globex",
            "country": "ru",
            "logoPng": "ru-globex.png"
        },
        "ru-gpb": {
            "name": "Газпромбанк",
            "nameEn": "Gazprombank",
            "url": "http://www.gazprombank.ru/",
            "backgroundColor": "#02356c",
            "backgroundColors": [
                "#044b98",
                "#02356c"
            ],
            "backgroundLightness": "dark",
            "logoStyle": "white",
            "text": "#fff",
            "alias": "ru-gpb",
            "country": "ru",
            "logoPng": "ru-gpb.png",
            "logoSvg": "ru-gpb.svg"
        },
        "ru-hcf": {
            "name": "Хоум Кредит Банк",
            "nameEn": "HCF Bank",
            "url": "http://homecredit.ru/",
            "backgroundColor": "#e41701",
            "backgroundColors": [
                "#e41701",
                "#bd1908"
            ],
            "backgroundLightness": "dark",
            "logoStyle": "white",
            "text": "#fff",
            "alias": "ru-hcf",
            "country": "ru",
            "logoPng": "ru-hcf.png",
            "logoSvg": "ru-hcf.svg"
        },
        "ru-jugra": {
            "name": "Югра",
            "nameEn": "Jugra",
            "url": "http://www.jugra.ru/",
            "backgroundColor": "#d6ffe6",
            "backgroundColors": [
                "#d6ffe6",
                "#fff1e4"
            ],
            "backgroundLightness": "light",
            "logoStyle": "colored",
            "text": "#088237",
            "alias": "ru-jugra",
            "country": "ru",
            "logoPng": "ru-jugra.png"
        },
        "ru-mib": {
            "name": "Московский Индустриальный Банк",
            "nameEn": "Mosсow Industrial Bank",
            "url": "http://www.minbank.ru/",
            "backgroundColor": "#8f0e0f",
            "backgroundColors": [
                "#ce4647",
                "#8f0e0f"
            ],
            "backgroundLightness": "dark",
            "logoStyle": "white",
            "text": "#fff",
            "alias": "ru-mib",
            "country": "ru",
            "logoPng": "ru-mib.png"
        },
        "ru-mkb": {
            "name": "Московский Кредитный Банк",
            "nameEn": "Credit Bank of Moscow",
            "url": "https://mkb.ru/",
            "backgroundColor": "#eeeeee",
            "backgroundColors": [
                "#eeeeee",
                "#f9dee8"
            ],
            "backgroundLightness": "light",
            "logoStyle": "colored",
            "text": "#ae0039",
            "alias": "ru-mkb",
            "country": "ru",
            "logoPng": "ru-mkb.png"
        },
        "ru-mob": {
            "name": "Московский Областной Банк",
            "nameEn": "Mosoblbank",
            "url": "http://www.mosoblbank.ru/",
            "backgroundColor": "#dd3c3d",
            "backgroundColors": [
                "#e14041",
                "#8e2222"
            ],
            "backgroundLightness": "dark",
            "logoStyle": "white",
            "text": "#fff",
            "alias": "ru-mob",
            "country": "ru",
            "logoPng": "ru-mob.png"
        },
        "ru-mts": {
            "name": "МТС Банк",
            "nameEn": "MTS Bank",
            "url": "http://www.mtsbank.ru/",
            "backgroundColor": "#de1612",
            "backgroundColors": [
                "#ff0000",
                "#ba0e0a"
            ],
            "backgroundLightness": "dark",
            "logoStyle": "white",
            "text": "#fff",
            "alias": "ru-mts",
            "country": "ru",
            "logoPng": "ru-mts.png",
            "logoSvg": "ru-mts.svg"
        },
        "ru-novikom": {
            "name": "Новикомбанк",
            "nameEn": "Novikombank",
            "url": "http://www.novikom.ru/",
            "backgroundColor": "#00529b",
            "backgroundColors": [
                "#00529b",
                "#0a4477"
            ],
            "backgroundLightness": "dark",
            "logoStyle": "white",
            "text": "#fff",
            "alias": "ru-novikom",
            "country": "ru",
            "logoPng": "ru-novikom.png",
            "logoSvg": "ru-novikom.svg"
        },
        "ru-open": {
            "name": "ФК Открытие",
            "nameEn": "Otkritie FC",
            "url": "https://www.open.ru/",
            "backgroundColor": "#00b3e1",
            "backgroundColors": [
                "#29c9f3",
                "#00b3e1"
            ],
            "backgroundLightness": "dark",
            "logoStyle": "white",
            "text": "#fff",
            "alias": "ru-open",
            "country": "ru",
            "logoPng": "ru-open.png",
            "logoSvg": "ru-open.svg"
        },
        "ru-otp": {
            "name": "ОТП Банк",
            "nameEn": "OTP Bank",
            "url": "https://www.otpbank.ru/",
            "backgroundColor": "#acff90",
            "backgroundColors": [
                "#acff90",
                "#9edabf"
            ],
            "backgroundLightness": "light",
            "logoStyle": "colored",
            "text": "#006437",
            "alias": "ru-otp",
            "country": "ru",
            "logoPng": "ru-otp.png",
            "logoSvg": "ru-otp.svg"
        },
        "ru-pochta": {
            "name": "Почта Банк",
            "nameEn": "Pochtabank",
            "url": "https://www.pochtabank.ru/",
            "backgroundColor": "#efefef",
            "backgroundColors": [
                "#efefef",
                "#dbe1ff"
            ],
            "backgroundLightness": "light",
            "logoStyle": "colored",
            "text": "#001689",
            "alias": "ru-pochta",
            "country": "ru",
            "logoPng": "ru-pochta.png",
            "logoSvg": "ru-pochta.svg"
        },
        "ru-psb": {
            "name": "Промсвязьбанк",
            "nameEn": "Promsvyazbank",
            "url": "http://www.psbank.ru/",
            "backgroundColor": "#c5cfef",
            "backgroundColors": [
                "#f7d1b5",
                "#c5cfef"
            ],
            "backgroundLightness": "light",
            "logoStyle": "colored",
            "text": "#274193",
            "alias": "ru-psb",
            "country": "ru",
            "logoPng": "ru-psb.png",
            "logoSvg": "ru-psb.svg"
        },
        "ru-raiffeisen": {
            "name": "Райффайзенбанк",
            "nameEn": "Raiffeisenbank bank",
            "url": "https://www.raiffeisen.ru/",
            "backgroundColor": "#efe6a2",
            "backgroundColors": [
                "#eeeeee",
                "#efe6a2"
            ],
            "backgroundLightness": "light",
            "logoStyle": "black",
            "text": "#000",
            "alias": "ru-raiffeisen",
            "country": "ru",
            "logoPng": "ru-raiffeisen.png",
            "logoSvg": "ru-raiffeisen.svg"
        },
        "ru-reb": {
            "name": "РосЕвроБанк",
            "nameEn": "Rosevrobank",
            "url": "http://www.rosevrobank.ru/",
            "backgroundColor": "#4b1650",
            "backgroundColors": [
                "#8b2d8e",
                "#4b1650"
            ],
            "backgroundLightness": "dark",
            "logoStyle": "white",
            "text": "#fff",
            "alias": "ru-reb",
            "country": "ru",
            "logoPng": "ru-reb.png"
        },
        "ru-ren": {
            "name": "Ренессанс Кредит",
            "nameEn": "Renaissance Capital",
            "url": "https://rencredit.ru/",
            "backgroundColor": "#ffe6f1",
            "backgroundColors": [
                "#ffe6f1",
                "#f9fff1"
            ],
            "backgroundLightness": "light",
            "logoStyle": "colored",
            "text": "#439539",
            "alias": "ru-ren",
            "country": "ru",
            "logoPng": "ru-ren.png"
        },
        "ru-rgs": {
            "name": "Росгосстрах Банк",
            "nameEn": "Rosgosstrakh Bank",
            "url": "https://www.rgsbank.ru/",
            "backgroundColor": "#b31b2c",
            "backgroundColors": [
                "#b31b2c",
                "#6f030f"
            ],
            "backgroundLightness": "dark",
            "logoStyle": "colored",
            "text": "#ffe2b8",
            "alias": "ru-rgs",
            "country": "ru",
            "logoPng": "ru-rgs.png",
            "logoSvg": "ru-rgs.svg"
        },
        "ru-rosbank": {
            "name": "Росбанк",
            "nameEn": "Rosbank bank",
            "url": "http://www.rosbank.ru/",
            "backgroundColor": "#d3b9ba",
            "backgroundColors": [
                "#d3b9ba",
                "#b1898b"
            ],
            "backgroundLightness": "light",
            "logoStyle": "black",
            "text": "#000",
            "alias": "ru-rosbank",
            "country": "ru",
            "logoPng": "ru-rosbank.png",
            "logoSvg": "ru-rosbank.svg"
        },
        "ru-roscap": {
            "name": "Российский Капитал",
            "nameEn": "Rossiysky Capital",
            "url": "http://www.roscap.ru/",
            "backgroundColor": "#ffdcc1",
            "backgroundColors": [
                "#ffdcc1",
                "#ffced0"
            ],
            "backgroundLightness": "light",
            "logoStyle": "colored",
            "text": "#000",
            "alias": "ru-roscap",
            "country": "ru",
            "logoPng": "ru-roscap.png"
        },
        "ru-rossiya": {
            "name": "Россия",
            "nameEn": "Rossiya",
            "url": "http://www.abr.ru/",
            "backgroundColor": "#eeeeee",
            "backgroundColors": [
                "#eeeeee",
                "#98c2dd"
            ],
            "backgroundLightness": "light",
            "logoStyle": "colored",
            "text": "#07476e",
            "alias": "ru-rossiya",
            "country": "ru",
            "logoPng": "ru-rossiya.png"
        },
        "ru-rsb": {
            "name": "Русский Стандарт",
            "nameEn": "Russian Standard Bank",
            "url": "https://www.rsb.ru/",
            "backgroundColor": "#414042",
            "backgroundColors": [
                "#6a656f",
                "#414042"
            ],
            "backgroundLightness": "dark",
            "logoStyle": "white",
            "text": "#fff",
            "alias": "ru-rsb",
            "country": "ru",
            "logoPng": "ru-rsb.png",
            "logoSvg": "ru-rsb.svg"
        },
        "ru-rshb": {
            "name": "Россельхозбанк",
            "nameEn": "Rosselkhozbank",
            "url": "http://www.rshb.ru/",
            "backgroundColor": "#007f2b",
            "backgroundColors": [
                "#007f2b",
                "#005026"
            ],
            "backgroundLightness": "dark",
            "logoStyle": "white",
            "text": "#ffcd00",
            "alias": "ru-rshb",
            "country": "ru",
            "logoPng": "ru-rshb.png",
            "logoSvg": "ru-rshb.svg"
        },
        "ru-sberbank": {
            "name": "Сбербанк России",
            "nameEn": "Sberbank",
            "url": "https://www.sberbank.ru/",
            "backgroundColor": "#1a9f29",
            "backgroundColors": [
                "#1a9f29",
                "#0d7518"
            ],
            "backgroundLightness": "dark",
            "logoStyle": "white",
            "text": "#fff",
            "alias": "ru-sberbank",
            "country": "ru",
            "logoPng": "ru-sberbank.png",
            "logoSvg": "ru-sberbank.svg"
        },
        "ru-skb": {
            "name": "СКБ-Банк",
            "nameEn": "SKB-Bank",
            "url": "http://www.skbbank.ru/",
            "backgroundColor": "#006b5a",
            "backgroundColors": [
                "#31a899",
                "#006b5a"
            ],
            "backgroundLightness": "dark",
            "logoStyle": "white",
            "text": "#fff",
            "alias": "ru-skb",
            "country": "ru",
            "logoPng": "ru-skb.png"
        },
        "ru-smp": {
            "name": "СМП Банк",
            "nameEn": "SMP Bank",
            "url": "http://smpbank.ru/",
            "backgroundColor": "#9fe5ff",
            "backgroundColors": [
                "#9fe5ff",
                "#5ea6d6"
            ],
            "backgroundLightness": "light",
            "logoStyle": "colored",
            "text": "#005288",
            "alias": "ru-smp",
            "country": "ru",
            "logoPng": "ru-smp.png",
            "logoSvg": "ru-smp.svg"
        },
        "ru-sovkom": {
            "name": "Совкомбанк",
            "nameEn": "Sovcombank bank",
            "url": "https://sovcombank.ru/",
            "backgroundColor": "#c9e4f6",
            "backgroundColors": [
                "#c9e4f6",
                "#f5fafd"
            ],
            "backgroundLightness": "light",
            "logoStyle": "colored",
            "text": "#004281",
            "alias": "ru-sovkom",
            "country": "ru",
            "logoPng": "ru-sovkom.png"
        },
        "ru-spb": {
            "name": "Банк \xabСанкт-Петербург\xbb",
            "nameEn": "Bank Saint Petersburg",
            "url": "https://www.bspb.ru/",
            "backgroundColor": "#ffcfcf",
            "backgroundColors": [
                "#ffcfcf",
                "#d2553f"
            ],
            "backgroundLightness": "light",
            "logoStyle": "colored",
            "text": "#000",
            "alias": "ru-spb",
            "country": "ru",
            "logoPng": "ru-spb.png"
        },
        "ru-sviaz": {
            "name": "Связь-Банк",
            "nameEn": "Sviaz-Bank",
            "url": "https://www.sviaz-bank.ru/",
            "backgroundColor": "#d2e0ec",
            "backgroundColors": [
                "#d2e0ec",
                "#caecd8"
            ],
            "backgroundLightness": "light",
            "logoStyle": "colored",
            "text": "#165a9a",
            "alias": "ru-sviaz",
            "country": "ru",
            "logoPng": "ru-sviaz.png"
        },
        "ru-tcb": {
            "name": "Транскапиталбанк",
            "nameEn": "Transcapitalbank",
            "url": "https://www.tkbbank.ru/",
            "backgroundColor": "#8cf5f4",
            "backgroundColors": [
                "#8cf5f4",
                "#ffe6bf"
            ],
            "backgroundLightness": "light",
            "logoStyle": "colored",
            "text": "#005599",
            "alias": "ru-tcb",
            "country": "ru",
            "logoPng": "ru-tcb.png"
        },
        "ru-tinkoff": {
            "name": "Тинькофф Банк",
            "nameEn": "Tinkoff Bank",
            "url": "https://www.tinkoff.ru/",
            "backgroundColor": "#333",
            "backgroundColors": [
                "#444",
                "#222"
            ],
            "backgroundLightness": "dark",
            "logoStyle": "white",
            "text": "#fff",
            "alias": "ru-tinkoff",
            "country": "ru",
            "logoPng": "ru-tinkoff.png",
            "logoSvg": "ru-tinkoff.svg"
        },
        "ru-trust": {
            "name": "Траст",
            "nameEn": "Trust",
            "url": "http://www.trust.ru/",
            "backgroundColor": "#231f20",
            "backgroundColors": [
                "#403739",
                "#231f20"
            ],
            "backgroundLightness": "dark",
            "logoStyle": "white",
            "text": "#fff",
            "alias": "ru-trust",
            "country": "ru",
            "logoPng": "ru-trust.png"
        },
        "ru-ubrd": {
            "name": "Уральский Банк Реконструкции и Развития",
            "nameEn": "UBRD",
            "url": "http://www.ubrr.ru/",
            "backgroundColor": "#ffd9e4",
            "backgroundColors": [
                "#ffd9e4",
                "#b6d1e3"
            ],
            "backgroundLightness": "light",
            "logoStyle": "black",
            "text": "#000",
            "alias": "ru-ubrd",
            "country": "ru",
            "logoPng": "ru-ubrd.png"
        },
        "ru-ucb": {
            "name": "ЮниКредит Банк",
            "nameEn": "UniCredit Bank",
            "url": "https://www.unicreditbank.ru/",
            "backgroundColor": "#250c0c",
            "backgroundColors": [
                "#402727",
                "#250c0c"
            ],
            "backgroundLightness": "dark",
            "logoStyle": "white",
            "text": "#fff",
            "alias": "ru-ucb",
            "country": "ru",
            "logoPng": "ru-ucb.png",
            "logoSvg": "ru-ucb.svg"
        },
        "ru-uralsib": {
            "name": "Банк Уралсиб",
            "nameEn": "Uralsib",
            "url": "https://www.uralsib.ru/",
            "backgroundColor": "#2c4257",
            "backgroundColors": [
                "#6289aa",
                "#2c4257"
            ],
            "backgroundLightness": "dark",
            "logoStyle": "white",
            "text": "#fff",
            "alias": "ru-uralsib",
            "country": "ru",
            "logoPng": "ru-uralsib.png",
            "logoSvg": "ru-uralsib.svg"
        },
        "ru-vbrr": {
            "name": "Всероссийский Банк Развития Регионов",
            "nameEn": "Russian Regional Development Bank",
            "url": "https://www.vbrr.ru/",
            "backgroundColor": "#173e6d",
            "backgroundColors": [
                "#4a5e75",
                "#173e6d"
            ],
            "backgroundLightness": "dark",
            "logoStyle": "white",
            "text": "#fff",
            "alias": "ru-vbrr",
            "country": "ru",
            "logoPng": "ru-vbrr.png",
            "logoSvg": "ru-vbrr.svg"
        },
        "ru-veb": {
            "name": "Восточный Экспресс Банк",
            "nameEn": "Eastern Express Bank",
            "url": "https://www.vostbank.ru/",
            "backgroundColor": "#004e96",
            "backgroundColors": [
                "#004e96",
                "#ee3224"
            ],
            "backgroundLightness": "dark",
            "logoStyle": "white",
            "text": "#fff",
            "alias": "ru-veb",
            "country": "ru",
            "logoPng": "ru-veb.png",
            "logoSvg": "ru-veb.svg"
        },
        "ru-vozrozhdenie": {
            "name": "Возрождение",
            "nameEn": "Bank Vozrozhdenie",
            "url": "http://www.vbank.ru/",
            "backgroundColor": "#cedae6",
            "backgroundColors": [
                "#cedae6",
                "#a4abb3"
            ],
            "backgroundLightness": "light",
            "logoStyle": "colored",
            "text": "#13427b",
            "alias": "ru-vozrozhdenie",
            "country": "ru",
            "logoPng": "ru-vozrozhdenie.png",
            "logoSvg": "ru-vozrozhdenie.svg"
        },
        "ru-vtb": {
            "name": "ВТБ Банк Москвы",
            "nameEn": "VTB Bank",
            "url": "http://www.vtb.ru/",
            "backgroundColor": "#1d2d70",
            "backgroundColors": [
                "#264489",
                "#1d2d70"
            ],
            "backgroundLightness": "dark",
            "logoStyle": "white",
            "text": "#fff",
            "alias": "ru-vtb",
            "country": "ru",
            "logoPng": "ru-vtb.png",
            "logoSvg": "ru-vtb.svg"
        },
        "ru-vtb24": {
            "name": "ВТБ 24",
            "nameEn": "VTB 24",
            "url": "https://www.vtb24.ru/",
            "backgroundColor": "#c4cde4",
            "backgroundColors": [
                "#c4cde4",
                "#9fabcc",
                "#dca9ad"
            ],
            "backgroundLightness": "light",
            "logoStyle": "colored",
            "text": "#0a2972",
            "alias": "ru-vtb24",
            "country": "ru",
            "logoPng": "ru-vtb24.png"
        },
        "ru-zenit": {
            "name": "Зенит",
            "nameEn": "Zenit",
            "url": "https://www.zenit.ru/",
            "backgroundColor": "#008c99",
            "backgroundColors": [
                "#3fc2ce",
                "#008c99"
            ],
            "backgroundLightness": "dark",
            "logoStyle": "white",
            "text": "#fff",
            "alias": "ru-zenit",
            "country": "ru",
            "logoPng": "ru-zenit.png",
            "logoSvg": "ru-zenit.svg"
        }
    };
    var prefixes = {
        "220001": "ru-gpb",
        "220003": "ru-psb",
        "220006": "ru-sviaz",
        "220008": "ru-rossiya",
        "220020": "ru-mib",
        "220022": "ru-binbank",
        "220023": "ru-avangard",
        "220030": "ru-raiffeisen",
        "220488": "ru-smp",
        "360769": "ru-rsb",
        "375117": "ru-rsb",
        "400079": "ru-akbars",
        "400171": "ru-reb",
        "400244": "ru-uralsib",
        "400812": "ru-rosbank",
        "400814": "ru-rosbank",
        "400866": "ru-rosbank",
        "401173": "ru-open",
        "402107": "ru-vtb",
        "402177": "ru-raiffeisen",
        "402178": "ru-raiffeisen",
        "402179": "ru-raiffeisen",
        "402311": "ru-otp",
        "402312": "ru-otp",
        "402313": "ru-otp",
        "402326": "ru-mib",
        "402327": "ru-mib",
        "402328": "ru-mib",
        "402333": "ru-sberbank",
        "402429": "ru-globex",
        "402457": "ru-novikom",
        "402507": "ru-psb",
        "402532": "ru-sovkom",
        "402533": "ru-sovkom",
        "402534": "ru-sovkom",
        "402549": "ru-mib",
        "402877": "ru-tcb",
        "402909": "ru-novikom",
        "402910": "ru-novikom",
        "402911": "ru-novikom",
        "402948": "ru-binbank",
        "402949": "ru-binbank",
        "403184": "ru-vozrozhdenie",
        "403218": "ru-roscap",
        "403324": "ru-globex",
        "403780": "ru-mkb",
        "403894": "ru-binbank",
        "403896": "ru-avangard",
        "403897": "ru-avangard",
        "403898": "ru-avangard",
        "404111": "ru-uralsib",
        "404114": "ru-avangard",
        "404136": "ru-gpb",
        "404204": "ru-mts",
        "404224": "ru-mts",
        "404266": "ru-mts",
        "404267": "ru-mts",
        "404268": "ru-mts",
        "404269": "ru-mts",
        "404270": "ru-gpb",
        "404586": "ru-open",
        "404807": "ru-raiffeisen",
        "404862": "ru-rosbank",
        "404863": "ru-rosbank",
        "404885": "ru-raiffeisen",
        "404890": "ru-rosbank",
        "404892": "ru-rosbank",
        "404906": "ru-psb",
        "405225": "ru-binbank",
        "405226": "ru-binbank",
        "405436": "ru-rosbank",
        "405658": "ru-open",
        "405665": "ru-roscap",
        "405666": "ru-roscap",
        "405667": "ru-roscap",
        "405669": "ru-roscap",
        "405870": "ru-open",
        "405990": "ru-pochta",
        "405991": "ru-pochta",
        "405992": "ru-pochta",
        "405993": "ru-pochta",
        "406140": "ru-vbrr",
        "406141": "ru-vbrr",
        "406356": "ru-mts",
        "406364": "ru-hcf",
        "406372": "ru-absolut",
        "406744": "ru-vtb24",
        "406767": "ru-rosbank",
        "406777": "ru-jugra",
        "406778": "ru-jugra",
        "406779": "ru-jugra",
        "406780": "ru-jugra",
        "406781": "ru-jugra",
        "406977": "ru-vtb24",
        "407178": "ru-open",
        "407564": "ru-rosbank",
        "408373": "ru-ceb",
        "408396": "ru-alfa",
        "408397": "ru-alfa",
        "409356": "ru-open",
        "409357": "ru-open",
        "409358": "ru-open",
        "409398": "ru-vtb24",
        "409681": "ru-otp",
        "409682": "ru-uralsib",
        "409794": "ru-binbank",
        "410085": "ru-binbank",
        "410086": "ru-binbank",
        "410213": "ru-uralsib",
        "410323": "ru-trust",
        "410584": "ru-alfa",
        "410695": "ru-skb",
        "410696": "ru-skb",
        "410730": "ru-vozrozhdenie",
        "410731": "ru-vozrozhdenie",
        "411641": "ru-binbank",
        "411647": "ru-ceb",
        "411648": "ru-ceb",
        "411649": "ru-ceb",
        "411669": "ru-mob",
        "411670": "ru-mob",
        "411671": "ru-mob",
        "411676": "ru-spb",
        "411790": "ru-rsb",
        "411791": "ru-psb",
        "411900": "ru-trust",
        "411945": "ru-roscap",
        "412434": "ru-zenit",
        "412519": "ru-rosbank",
        "412746": "ru-binbank",
        "412776": "ru-citi",
        "413047": "ru-ucb",
        "413052": "ru-vozrozhdenie",
        "413203": "ru-vbrr",
        "413204": "ru-vbrr",
        "413205": "ru-vbrr",
        "413877": "ru-skb",
        "413878": "ru-skb",
        "413879": "ru-skb",
        "414035": "ru-vozrozhdenie",
        "414076": "ru-open",
        "414379": "ru-rosbank",
        "414563": "ru-roscap",
        "414656": "ru-zenit",
        "414657": "ru-zenit",
        "414658": "ru-zenit",
        "414659": "ru-zenit",
        "415025": "ru-ubrd",
        "415400": "ru-alfa",
        "415428": "ru-alfa",
        "415429": "ru-alfa",
        "415430": "ru-raiffeisen",
        "415481": "ru-alfa",
        "415482": "ru-alfa",
        "415822": "ru-reb",
        "416132": "ru-absolut",
        "416700": "ru-binbank",
        "416701": "ru-binbank",
        "416702": "ru-binbank",
        "416703": "ru-binbank",
        "416790": "ru-binbank",
        "416791": "ru-binbank",
        "416792": "ru-binbank",
        "416920": "ru-ceb",
        "416927": "ru-vtb",
        "416928": "ru-vtb",
        "416982": "ru-rgs",
        "416983": "ru-rgs",
        "416984": "ru-rgs",
        "417250": "ru-rsb",
        "417251": "ru-rsb",
        "417252": "ru-rsb",
        "417253": "ru-rsb",
        "417254": "ru-rsb",
        "417291": "ru-rsb",
        "417398": "ru-sberbank",
        "417689": "ru-binbank",
        "418260": "ru-vtb",
        "418261": "ru-vtb",
        "418262": "ru-vtb",
        "418362": "ru-sovkom",
        "418363": "ru-sovkom",
        "418364": "ru-sovkom",
        "418384": "ru-rshb",
        "418385": "ru-rshb",
        "418386": "ru-rshb",
        "418387": "ru-rshb",
        "418388": "ru-rshb",
        "418831": "ru-vtb24",
        "418906": "ru-reb",
        "418907": "ru-reb",
        "418908": "ru-reb",
        "418909": "ru-reb",
        "419149": "ru-atb",
        "419150": "ru-atb",
        "419151": "ru-atb",
        "419152": "ru-atb",
        "419153": "ru-atb",
        "419163": "ru-avangard",
        "419164": "ru-avangard",
        "419292": "ru-mkb",
        "419293": "ru-citi",
        "419349": "ru-citi",
        "419370": "ru-uralsib",
        "419519": "ru-binbank",
        "419539": "ru-alfa",
        "419540": "ru-alfa",
        "419636": "ru-otp",
        "419718": "ru-rsb",
        "419804": "ru-uralsib",
        "419805": "ru-uralsib",
        "419810": "ru-uralsib",
        "419905": "ru-rossiya",
        "420336": "ru-absolut",
        "420337": "ru-absolut",
        "420705": "ru-raiffeisen",
        "421179": "ru-citi",
        "421394": "ru-rosbank",
        "421398": "ru-gpb",
        "421637": "ru-sovkom",
        "421647": "ru-sovkom",
        "421648": "ru-rosbank",
        "421651": "ru-binbank",
        "421919": "ru-absolut",
        "422096": "ru-sovkom",
        "422097": "ru-sovkom",
        "422098": "ru-binbank",
        "422104": "ru-binbank",
        "422105": "ru-binbank",
        "422287": "ru-raiffeisen",
        "422372": "ru-uralsib",
        "422608": "ru-rshb",
        "422838": "ru-vozrozhdenie",
        "422839": "ru-vozrozhdenie",
        "423078": "ru-sberbank",
        "423169": "ru-rosbank",
        "423197": "ru-spb",
        "423218": "ru-vozrozhdenie",
        "423569": "ru-absolut",
        "424204": "ru-uralsib",
        "424205": "ru-uralsib",
        "424206": "ru-uralsib",
        "424207": "ru-uralsib",
        "424290": "ru-uralsib",
        "424291": "ru-uralsib",
        "424436": "ru-akbars",
        "424437": "ru-akbars",
        "424438": "ru-akbars",
        "424439": "ru-akbars",
        "424440": "ru-akbars",
        "424473": "ru-uralsib",
        "424474": "ru-uralsib",
        "424475": "ru-uralsib",
        "424476": "ru-uralsib",
        "424553": "ru-trust",
        "424554": "ru-trust",
        "424555": "ru-trust",
        "424561": "ru-psb",
        "424562": "ru-psb",
        "424563": "ru-psb",
        "424901": "ru-sovkom",
        "424917": "ru-gpb",
        "424944": "ru-sovkom",
        "424974": "ru-gpb",
        "424975": "ru-gpb",
        "424976": "ru-gpb",
        "425153": "ru-rosbank",
        "425534": "ru-veb",
        "425535": "ru-veb",
        "425553": "ru-veb",
        "425620": "ru-raiffeisen",
        "425693": "ru-smp",
        "425694": "ru-smp",
        "425695": "ru-smp",
        "425696": "ru-smp",
        "425874": "ru-binbank",
        "425884": "ru-raiffeisen",
        "425885": "ru-raiffeisen",
        "426101": "ru-alfa",
        "426102": "ru-alfa",
        "426113": "ru-alfa",
        "426114": "ru-alfa",
        "426201": "ru-trust",
        "426334": "ru-trust",
        "426335": "ru-trust",
        "426390": "ru-uralsib",
        "426396": "ru-uralsib",
        "426803": "ru-psb",
        "426804": "ru-psb",
        "426809": "ru-rossiya",
        "426810": "ru-rossiya",
        "426811": "ru-rossiya",
        "426812": "ru-rossiya",
        "426813": "ru-rossiya",
        "426814": "ru-rossiya",
        "426815": "ru-rossiya",
        "426890": "ru-gpb",
        "427229": "ru-vtb24",
        "427230": "ru-vtb24",
        "427326": "ru-gpb",
        "427400": "ru-sberbank",
        "427401": "ru-sberbank",
        "427402": "ru-sberbank",
        "427403": "ru-sberbank",
        "427404": "ru-sberbank",
        "427405": "ru-sberbank",
        "427406": "ru-sberbank",
        "427407": "ru-sberbank",
        "427408": "ru-sberbank",
        "427409": "ru-sberbank",
        "427410": "ru-sberbank",
        "427411": "ru-sberbank",
        "427412": "ru-sberbank",
        "427413": "ru-sberbank",
        "427414": "ru-sberbank",
        "427415": "ru-sberbank",
        "427416": "ru-sberbank",
        "427417": "ru-sberbank",
        "427418": "ru-sberbank",
        "427419": "ru-sberbank",
        "427420": "ru-sberbank",
        "427421": "ru-sberbank",
        "427422": "ru-sberbank",
        "427423": "ru-sberbank",
        "427424": "ru-sberbank",
        "427425": "ru-sberbank",
        "427426": "ru-sberbank",
        "427427": "ru-sberbank",
        "427428": "ru-sberbank",
        "427429": "ru-sberbank",
        "427430": "ru-sberbank",
        "427431": "ru-sberbank",
        "427432": "ru-sberbank",
        "427433": "ru-sberbank",
        "427434": "ru-sberbank",
        "427435": "ru-sberbank",
        "427436": "ru-sberbank",
        "427437": "ru-sberbank",
        "427438": "ru-sberbank",
        "427439": "ru-sberbank",
        "427440": "ru-sberbank",
        "427441": "ru-sberbank",
        "427442": "ru-sberbank",
        "427443": "ru-sberbank",
        "427444": "ru-sberbank",
        "427445": "ru-sberbank",
        "427446": "ru-sberbank",
        "427447": "ru-sberbank",
        "427448": "ru-sberbank",
        "427449": "ru-sberbank",
        "427450": "ru-sberbank",
        "427451": "ru-sberbank",
        "427452": "ru-sberbank",
        "427453": "ru-sberbank",
        "427454": "ru-sberbank",
        "427455": "ru-sberbank",
        "427456": "ru-sberbank",
        "427457": "ru-sberbank",
        "427458": "ru-sberbank",
        "427459": "ru-sberbank",
        "427460": "ru-sberbank",
        "427461": "ru-sberbank",
        "427462": "ru-sberbank",
        "427463": "ru-sberbank",
        "427464": "ru-sberbank",
        "427465": "ru-sberbank",
        "427466": "ru-sberbank",
        "427467": "ru-sberbank",
        "427468": "ru-sberbank",
        "427469": "ru-sberbank",
        "427470": "ru-sberbank",
        "427471": "ru-sberbank",
        "427472": "ru-sberbank",
        "427473": "ru-sberbank",
        "427474": "ru-sberbank",
        "427475": "ru-sberbank",
        "427476": "ru-sberbank",
        "427477": "ru-sberbank",
        "427491": "ru-sberbank",
        "427499": "ru-sberbank",
        "427600": "ru-sberbank",
        "427601": "ru-sberbank",
        "427602": "ru-sberbank",
        "427603": "ru-sberbank",
        "427604": "ru-sberbank",
        "427605": "ru-sberbank",
        "427606": "ru-sberbank",
        "427607": "ru-sberbank",
        "427608": "ru-sberbank",
        "427609": "ru-sberbank",
        "427610": "ru-sberbank",
        "427611": "ru-sberbank",
        "427612": "ru-sberbank",
        "427613": "ru-sberbank",
        "427614": "ru-sberbank",
        "427615": "ru-sberbank",
        "427616": "ru-sberbank",
        "427617": "ru-sberbank",
        "427618": "ru-sberbank",
        "427619": "ru-sberbank",
        "427620": "ru-sberbank",
        "427621": "ru-sberbank",
        "427622": "ru-sberbank",
        "427623": "ru-sberbank",
        "427624": "ru-sberbank",
        "427625": "ru-sberbank",
        "427626": "ru-sberbank",
        "427627": "ru-sberbank",
        "427628": "ru-sberbank",
        "427629": "ru-sberbank",
        "427630": "ru-sberbank",
        "427631": "ru-sberbank",
        "427632": "ru-sberbank",
        "427633": "ru-sberbank",
        "427634": "ru-sberbank",
        "427635": "ru-sberbank",
        "427636": "ru-sberbank",
        "427637": "ru-sberbank",
        "427638": "ru-sberbank",
        "427639": "ru-sberbank",
        "427640": "ru-sberbank",
        "427641": "ru-sberbank",
        "427642": "ru-sberbank",
        "427643": "ru-sberbank",
        "427644": "ru-sberbank",
        "427645": "ru-sberbank",
        "427646": "ru-sberbank",
        "427647": "ru-sberbank",
        "427648": "ru-sberbank",
        "427649": "ru-sberbank",
        "427650": "ru-sberbank",
        "427651": "ru-sberbank",
        "427652": "ru-sberbank",
        "427653": "ru-sberbank",
        "427654": "ru-sberbank",
        "427655": "ru-sberbank",
        "427656": "ru-sberbank",
        "427657": "ru-sberbank",
        "427658": "ru-sberbank",
        "427659": "ru-sberbank",
        "427660": "ru-sberbank",
        "427661": "ru-sberbank",
        "427662": "ru-sberbank",
        "427663": "ru-sberbank",
        "427664": "ru-sberbank",
        "427665": "ru-sberbank",
        "427666": "ru-sberbank",
        "427667": "ru-sberbank",
        "427668": "ru-sberbank",
        "427669": "ru-sberbank",
        "427670": "ru-sberbank",
        "427671": "ru-sberbank",
        "427672": "ru-sberbank",
        "427673": "ru-sberbank",
        "427674": "ru-sberbank",
        "427675": "ru-sberbank",
        "427676": "ru-sberbank",
        "427677": "ru-sberbank",
        "427678": "ru-sberbank",
        "427679": "ru-sberbank",
        "427680": "ru-sberbank",
        "427681": "ru-sberbank",
        "427682": "ru-sberbank",
        "427683": "ru-sberbank",
        "427684": "ru-sberbank",
        "427685": "ru-sberbank",
        "427686": "ru-sberbank",
        "427687": "ru-sberbank",
        "427688": "ru-sberbank",
        "427689": "ru-sberbank",
        "427690": "ru-sberbank",
        "427692": "ru-sberbank",
        "427693": "ru-sberbank",
        "427694": "ru-sberbank",
        "427695": "ru-sberbank",
        "427696": "ru-sberbank",
        "427697": "ru-sberbank",
        "427699": "ru-sberbank",
        "427714": "ru-alfa",
        "427715": "ru-rosbank",
        "427725": "ru-binbank",
        "427760": "ru-citi",
        "427761": "ru-citi",
        "427806": "ru-roscap",
        "427807": "ru-roscap",
        "427808": "ru-roscap",
        "427827": "ru-uralsib",
        "427828": "ru-uralsib",
        "427853": "ru-sovkom",
        "427900": "ru-sberbank",
        "427901": "ru-sberbank",
        "427902": "ru-sberbank",
        "427903": "ru-sberbank",
        "427904": "ru-sberbank",
        "427905": "ru-sberbank",
        "427906": "ru-sberbank",
        "427907": "ru-sberbank",
        "427908": "ru-sberbank",
        "427909": "ru-sberbank",
        "427910": "ru-sberbank",
        "427911": "ru-sberbank",
        "427912": "ru-sberbank",
        "427913": "ru-sberbank",
        "427914": "ru-sberbank",
        "427915": "ru-sberbank",
        "427916": "ru-sberbank",
        "427917": "ru-sberbank",
        "427918": "ru-sberbank",
        "427919": "ru-sberbank",
        "427920": "ru-sberbank",
        "427921": "ru-sberbank",
        "427922": "ru-sberbank",
        "427923": "ru-sberbank",
        "427924": "ru-sberbank",
        "427925": "ru-sberbank",
        "427926": "ru-sberbank",
        "427927": "ru-sberbank",
        "427928": "ru-sberbank",
        "427929": "ru-sberbank",
        "427930": "ru-sberbank",
        "427931": "ru-sberbank",
        "427932": "ru-sberbank",
        "427933": "ru-sberbank",
        "427934": "ru-sberbank",
        "427935": "ru-sberbank",
        "427936": "ru-sberbank",
        "427937": "ru-sberbank",
        "427938": "ru-sberbank",
        "427939": "ru-sberbank",
        "427940": "ru-sberbank",
        "427941": "ru-sberbank",
        "427942": "ru-sberbank",
        "427943": "ru-sberbank",
        "427944": "ru-sberbank",
        "427945": "ru-sberbank",
        "427946": "ru-sberbank",
        "427947": "ru-sberbank",
        "427948": "ru-sberbank",
        "427949": "ru-sberbank",
        "427950": "ru-sberbank",
        "427951": "ru-sberbank",
        "427952": "ru-sberbank",
        "427953": "ru-sberbank",
        "427954": "ru-sberbank",
        "427955": "ru-sberbank",
        "427956": "ru-sberbank",
        "427957": "ru-sberbank",
        "427958": "ru-sberbank",
        "427959": "ru-sberbank",
        "427960": "ru-sberbank",
        "427961": "ru-sberbank",
        "427962": "ru-sberbank",
        "427963": "ru-sberbank",
        "427964": "ru-sberbank",
        "427965": "ru-sberbank",
        "427966": "ru-sberbank",
        "427967": "ru-sberbank",
        "427968": "ru-sberbank",
        "427969": "ru-sberbank",
        "427970": "ru-sberbank",
        "427971": "ru-sberbank",
        "427972": "ru-sberbank",
        "427973": "ru-sberbank",
        "427974": "ru-sberbank",
        "427975": "ru-sberbank",
        "427976": "ru-sberbank",
        "427977": "ru-sberbank",
        "427978": "ru-sberbank",
        "427979": "ru-sberbank",
        "427980": "ru-sberbank",
        "427981": "ru-sberbank",
        "427982": "ru-sberbank",
        "427983": "ru-sberbank",
        "427984": "ru-sberbank",
        "427985": "ru-sberbank",
        "427986": "ru-sberbank",
        "427987": "ru-sberbank",
        "427988": "ru-sberbank",
        "427989": "ru-sberbank",
        "427990": "ru-sberbank",
        "427991": "ru-sberbank",
        "427992": "ru-sberbank",
        "427993": "ru-sberbank",
        "427994": "ru-sberbank",
        "427995": "ru-sberbank",
        "427996": "ru-sberbank",
        "427997": "ru-sberbank",
        "427998": "ru-sberbank",
        "427999": "ru-sberbank",
        "428252": "ru-absolut",
        "428253": "ru-absolut",
        "428254": "ru-absolut",
        "428266": "ru-zenit",
        "428666": "ru-atb",
        "428804": "ru-alfa",
        "428905": "ru-alfa",
        "428906": "ru-alfa",
        "428925": "ru-spb",
        "429015": "ru-veb",
        "429016": "ru-veb",
        "429037": "ru-open",
        "429038": "ru-open",
        "429039": "ru-open",
        "429040": "ru-open",
        "429096": "ru-open",
        "429196": "ru-uralsib",
        "429197": "ru-uralsib",
        "429565": "ru-vtb24",
        "429749": "ru-vtb24",
        "429796": "ru-zenit",
        "429797": "ru-zenit",
        "429798": "ru-zenit",
        "429811": "ru-uralsib",
        "430081": "ru-rosbank",
        "430088": "ru-rosbank",
        "430180": "ru-ubrd",
        "430181": "ru-ubrd",
        "430289": "ru-sviaz",
        "430299": "ru-gpb",
        "430323": "ru-ucb",
        "430439": "ru-ubrd",
        "430708": "ru-rossiya",
        "430709": "ru-rossiya",
        "431112": "ru-uralsib",
        "431113": "ru-uralsib",
        "431114": "ru-uralsib",
        "431165": "ru-open",
        "431166": "ru-open",
        "431359": "ru-rgs",
        "431416": "ru-alfa",
        "431417": "ru-alfa",
        "431727": "ru-alfa",
        "431854": "ru-ren",
        "431855": "ru-ren",
        "431856": "ru-ren",
        "431857": "ru-ren",
        "431890": "ru-ren",
        "432050": "ru-globex",
        "432058": "ru-skb",
        "432158": "ru-ceb",
        "432169": "ru-uralsib",
        "432259": "ru-uralsib",
        "432260": "ru-uralsib",
        "432417": "ru-open",
        "432498": "ru-raiffeisen",
        "432560": "ru-ucb",
        "432638": "ru-rosbank",
        "432947": "ru-otp",
        "432948": "ru-otp",
        "432949": "ru-otp",
        "433011": "ru-uralsib",
        "433102": "ru-vozrozhdenie",
        "433300": "ru-ucb",
        "433316": "ru-gpb",
        "433336": "ru-ucb",
        "434135": "ru-alfa",
        "434146": "ru-open",
        "434147": "ru-open",
        "434148": "ru-open",
        "434149": "ru-uralsib",
        "435139": "ru-ubrd",
        "435986": "ru-rshb",
        "436100": "ru-rshb",
        "436104": "ru-rshb",
        "436398": "ru-novikom",
        "436865": "ru-otp",
        "437348": "ru-rsb",
        "437349": "ru-spb",
        "437524": "ru-skb",
        "437540": "ru-trust",
        "437541": "ru-trust",
        "437772": "ru-tinkoff",
        "437773": "ru-tinkoff",
        "437784": "ru-tinkoff",
        "438046": "ru-citi",
        "438143": "ru-alfa",
        "438254": "ru-vozrozhdenie",
        "438933": "ru-rosbank",
        "438970": "ru-rosbank",
        "438971": "ru-rosbank",
        "439000": "ru-alfa",
        "439054": "ru-sviaz",
        "439055": "ru-sviaz",
        "439056": "ru-sviaz",
        "439057": "ru-sviaz",
        "439077": "ru-alfa",
        "439243": "ru-globex",
        "439244": "ru-globex",
        "439245": "ru-globex",
        "439246": "ru-globex",
        "439250": "ru-globex",
        "439251": "ru-globex",
        "440237": "ru-alfa",
        "440399": "ru-vozrozhdenie",
        "440503": "ru-rosbank",
        "440504": "ru-rosbank",
        "440505": "ru-rosbank",
        "440540": "ru-rosbank",
        "440541": "ru-rosbank",
        "440610": "ru-uralsib",
        "440664": "ru-uralsib",
        "440665": "ru-uralsib",
        "440666": "ru-uralsib",
        "440668": "ru-uralsib",
        "440680": "ru-uralsib",
        "440682": "ru-uralsib",
        "440683": "ru-uralsib",
        "440689": "ru-uralsib",
        "440690": "ru-uralsib",
        "440849": "ru-rosbank",
        "440850": "ru-rosbank",
        "441108": "ru-globex",
        "441273": "ru-vbrr",
        "441318": "ru-sviaz",
        "442466": "ru-uralsib",
        "443222": "ru-mkb",
        "443223": "ru-mkb",
        "443271": "ru-mkb",
        "443272": "ru-mkb",
        "443273": "ru-mkb",
        "443274": "ru-mkb",
        "443275": "ru-roscap",
        "443306": "ru-absolut",
        "443307": "ru-absolut",
        "443308": "ru-absolut",
        "443309": "ru-absolut",
        "443884": "ru-veb",
        "443885": "ru-veb",
        "443886": "ru-veb",
        "443887": "ru-veb",
        "443888": "ru-veb",
        "444002": "ru-binbank",
        "444023": "ru-binbank",
        "444024": "ru-binbank",
        "444025": "ru-binbank",
        "444094": "ru-veb",
        "444238": "ru-smp",
        "444239": "ru-smp",
        "444240": "ru-smp",
        "444241": "ru-smp",
        "444429": "ru-rsb",
        "445433": "ru-hcf",
        "445434": "ru-hcf",
        "445435": "ru-hcf",
        "445436": "ru-hcf",
        "445977": "ru-raiffeisen",
        "446050": "ru-psb",
        "446065": "ru-open",
        "446098": "ru-hcf",
        "446320": "ru-veb",
        "446674": "ru-vtb",
        "446915": "ru-hcf",
        "446916": "ru-raiffeisen",
        "446917": "ru-raiffeisen",
        "446950": "ru-tcb",
        "447362": "ru-binbank",
        "447363": "ru-binbank",
        "447516": "ru-trust",
        "447603": "ru-raiffeisen",
        "447624": "ru-raiffeisen",
        "447817": "ru-psb",
        "447818": "ru-psb",
        "447824": "ru-psb",
        "448331": "ru-vtb24",
        "448343": "ru-vtb24",
        "448344": "ru-vtb24",
        "448346": "ru-vtb24",
        "448369": "ru-vtb24",
        "449572": "ru-hcf",
        "450251": "ru-rosbank",
        "451382": "ru-psb",
        "452235": "ru-rossiya",
        "452236": "ru-rossiya",
        "453558": "ru-uralsib",
        "453559": "ru-uralsib",
        "453560": "ru-uralsib",
        "453561": "ru-uralsib",
        "456515": "ru-trust",
        "456516": "ru-trust",
        "456587": "ru-ceb",
        "456588": "ru-ceb",
        "457647": "ru-rsb",
        "457802": "ru-mts",
        "457816": "ru-open",
        "457817": "ru-open",
        "457818": "ru-open",
        "457819": "ru-open",
        "458218": "ru-binbank",
        "458279": "ru-alfa",
        "458280": "ru-alfa",
        "458281": "ru-alfa",
        "458410": "ru-alfa",
        "458411": "ru-alfa",
        "458443": "ru-alfa",
        "458450": "ru-alfa",
        "458473": "ru-atb",
        "458488": "ru-atb",
        "458489": "ru-atb",
        "458490": "ru-atb",
        "458493": "ru-open",
        "458559": "ru-novikom",
        "458722": "ru-rossiya",
        "458723": "ru-rossiya",
        "458731": "ru-absolut",
        "459226": "ru-skb",
        "459230": "ru-otp",
        "459290": "ru-uralsib",
        "459328": "ru-roscap",
        "459937": "ru-rosbank",
        "460493": "ru-rosbank",
        "462013": "ru-mts",
        "462235": "ru-vtb24",
        "462729": "ru-raiffeisen",
        "462730": "ru-raiffeisen",
        "462758": "ru-raiffeisen",
        "462776": "ru-ucb",
        "462779": "ru-raiffeisen",
        "464405": "ru-vozrozhdenie",
        "464485": "ru-trust",
        "464636": "ru-akbars",
        "464787": "ru-vtb24",
        "464827": "ru-absolut",
        "464828": "ru-absolut",
        "464842": "ru-vtb24",
        "465203": "ru-binbank",
        "465204": "ru-binbank",
        "465205": "ru-binbank",
        "465227": "ru-alfa",
        "465578": "ru-raiffeisen",
        "465882": "ru-gpb",
        "466047": "ru-uralsib",
        "466048": "ru-uralsib",
        "466049": "ru-uralsib",
        "466050": "ru-uralsib",
        "466163": "ru-ren",
        "466164": "ru-ren",
        "466174": "ru-ren",
        "466500": "ru-roscap",
        "466505": "ru-roscap",
        "466511": "ru-roscap",
        "466512": "ru-roscap",
        "466513": "ru-roscap",
        "466514": "ru-roscap",
        "467033": "ru-trust",
        "467058": "ru-vtb24",
        "467485": "ru-open",
        "467486": "ru-open",
        "467487": "ru-open",
        "467564": "ru-sviaz",
        "467810": "ru-uralsib",
        "467811": "ru-uralsib",
        "467812": "ru-uralsib",
        "467933": "ru-roscap",
        "468596": "ru-smp",
        "469339": "ru-binbank",
        "469360": "ru-citi",
        "469362": "ru-ucb",
        "469376": "ru-globex",
        "469670": "ru-smp",
        "470127": "ru-tinkoff",
        "470342": "ru-uralsib",
        "470434": "ru-zenit",
        "470673": "ru-avangard",
        "470674": "ru-avangard",
        "470675": "ru-avangard",
        "471225": "ru-rgs",
        "471226": "ru-ubrd",
        "471358": "ru-mkb",
        "471436": "ru-novikom",
        "471439": "ru-uralsib",
        "471440": "ru-uralsib",
        "471441": "ru-uralsib",
        "471487": "ru-vtb24",
        "471499": "ru-uralsib",
        "472235": "ru-zenit",
        "472252": "ru-reb",
        "472313": "ru-vtb",
        "472345": "ru-psb",
        "472346": "ru-psb",
        "472347": "ru-psb",
        "472348": "ru-psb",
        "472445": "ru-hcf",
        "472446": "ru-ucb",
        "472480": "ru-mib",
        "472489": "ru-rgs",
        "472879": "ru-skb",
        "472933": "ru-veb",
        "472934": "ru-veb",
        "473841": "ru-rgs",
        "473849": "ru-citi",
        "473850": "ru-citi",
        "473853": "ru-rosbank",
        "473854": "ru-rosbank",
        "473855": "ru-rosbank",
        "473869": "ru-tcb",
        "474218": "ru-rosbank",
        "475098": "ru-sviaz",
        "475791": "ru-alfa",
        "476036": "ru-raiffeisen",
        "476206": "ru-psb",
        "476207": "ru-psb",
        "476208": "ru-psb",
        "476280": "ru-rossiya",
        "476804": "ru-veb",
        "476827": "ru-rosbank",
        "476946": "ru-rossiya",
        "477714": "ru-alfa",
        "477908": "ru-rosbank",
        "477932": "ru-alfa",
        "477960": "ru-alfa",
        "477964": "ru-alfa",
        "477986": "ru-rosbank",
        "478264": "ru-rosbank",
        "478265": "ru-rosbank",
        "478266": "ru-rosbank",
        "478273": "ru-avangard",
        "478387": "ru-atb",
        "478474": "ru-tcb",
        "478475": "ru-tcb",
        "478476": "ru-tcb",
        "478741": "ru-raiffeisen",
        "478752": "ru-alfa",
        "479004": "ru-alfa",
        "479087": "ru-alfa",
        "479713": "ru-spb",
        "479768": "ru-spb",
        "479769": "ru-spb",
        "479770": "ru-spb",
        "479771": "ru-spb",
        "479772": "ru-spb",
        "479773": "ru-spb",
        "479788": "ru-spb",
        "480232": "ru-zenit",
        "480623": "ru-alfa",
        "480938": "ru-mib",
        "481776": "ru-sberbank",
        "481779": "ru-sberbank",
        "481781": "ru-sberbank",
        "482413": "ru-psb",
        "483175": "ru-rsb",
        "483176": "ru-rsb",
        "483177": "ru-rsb",
        "483973": "ru-uralsib",
        "483974": "ru-uralsib",
        "483975": "ru-uralsib",
        "483976": "ru-uralsib",
        "483977": "ru-uralsib",
        "483979": "ru-uralsib",
        "483980": "ru-uralsib",
        "484800": "ru-open",
        "485071": "ru-rossiya",
        "485463": "ru-sberbank",
        "485467": "ru-citi",
        "485608": "ru-ucb",
        "485649": "ru-open",
        "486031": "ru-trust",
        "486065": "ru-rsb",
        "486322": "ru-mob",
        "486666": "ru-citi",
        "487415": "ru-gpb",
        "487416": "ru-gpb",
        "487417": "ru-gpb",
        "488951": "ru-skb",
        "489042": "ru-ucb",
        "489099": "ru-ucb",
        "489169": "ru-uralsib",
        "489186": "ru-reb",
        "489195": "ru-vtb",
        "489196": "ru-vtb",
        "489327": "ru-vtb24",
        "489347": "ru-vtb24",
        "489348": "ru-vtb24",
        "489349": "ru-vtb24",
        "489350": "ru-vtb24",
        "489354": "ru-gpb",
        "490736": "ru-vozrozhdenie",
        "490815": "ru-uralsib",
        "490816": "ru-raiffeisen",
        "490818": "ru-ucb",
        "490855": "ru-ucb",
        "490986": "ru-trust",
        "493475": "ru-trust",
        "494343": "ru-trust",
        "498629": "ru-vtb24",
        "498868": "ru-vozrozhdenie",
        "499932": "ru-rosbank",
        "499966": "ru-rosbank",
        "508406": "ru-raiffeisen",
        "510047": "ru-rsb",
        "510060": "ru-vtb",
        "510069": "ru-raiffeisen",
        "510070": "ru-raiffeisen",
        "510074": "ru-ucb",
        "510082": "ru-roscap",
        "510092": "ru-rsb",
        "510098": "ru-rosbank",
        "510125": "ru-roscap",
        "510126": "ru-alfa",
        "510144": "ru-vtb24",
        "510154": "ru-mib",
        "510162": "ru-roscap",
        "510166": "ru-roscap",
        "510172": "ru-uralsib",
        "510173": "ru-roscap",
        "510411": "ru-uralsib",
        "510412": "ru-uralsib",
        "510424": "ru-uralsib",
        "510429": "ru-uralsib",
        "510436": "ru-uralsib",
        "510444": "ru-uralsib",
        "510453": "ru-rosbank",
        "510464": "ru-zenit",
        "510469": "ru-zenit",
        "510483": "ru-uralsib",
        "510494": "ru-uralsib",
        "510495": "ru-vtb",
        "510499": "ru-uralsib",
        "510508": "ru-uralsib",
        "510511": "ru-mib",
        "511741": "ru-uralsib",
        "512003": "ru-rosbank",
        "512051": "ru-roscap",
        "512082": "ru-roscap",
        "512273": "ru-ceb",
        "512298": "ru-uralsib",
        "512347": "ru-roscap",
        "512378": "ru-vtb",
        "512394": "ru-uralsib",
        "512419": "ru-uralsib",
        "512424": "ru-uralsib",
        "512442": "ru-roscap",
        "512444": "ru-ren",
        "512449": "ru-zenit",
        "512450": "ru-vtb",
        "512478": "ru-rgs",
        "512510": "ru-uralsib",
        "512594": "ru-roscap",
        "512626": "ru-roscap",
        "512636": "ru-uralsib",
        "512641": "ru-roscap",
        "512643": "ru-roscap",
        "512741": "ru-uralsib",
        "512756": "ru-rosbank",
        "512762": "ru-citi",
        "512771": "ru-rosbank",
        "512777": "ru-uralsib",
        "512788": "ru-uralsib",
        "512808": "ru-rosbank",
        "512821": "ru-roscap",
        "513022": "ru-rosbank",
        "513222": "ru-uralsib",
        "513459": "ru-roscap",
        "513691": "ru-rsb",
        "513768": "ru-roscap",
        "513769": "ru-roscap",
        "514014": "ru-roscap",
        "514017": "ru-open",
        "514082": "ru-gpb",
        "514515": "ru-uralsib",
        "514529": "ru-rosbank",
        "514930": "ru-rosbank",
        "515243": "ru-open",
        "515548": "ru-sberbank",
        "515587": "ru-mib",
        "515605": "ru-rosbank",
        "515681": "ru-jugra",
        "515739": "ru-mib",
        "515760": "ru-zenit",
        "515764": "ru-smp",
        "515770": "ru-mkb",
        "515774": "ru-otp",
        "515777": "ru-uralsib",
        "515785": "ru-binbank",
        "515792": "ru-uralsib",
        "515840": "ru-uralsib",
        "515842": "ru-sberbank",
        "515844": "ru-uralsib",
        "515848": "ru-psb",
        "515854": "ru-citi",
        "515861": "ru-uralsib",
        "515862": "ru-roscap",
        "515876": "ru-raiffeisen",
        "515887": "ru-uralsib",
        "515899": "ru-open",
        "515900": "ru-uralsib",
        "516009": "ru-otp",
        "516025": "ru-uralsib",
        "516116": "ru-ren",
        "516150": "ru-ren",
        "516161": "ru-uralsib",
        "516206": "ru-uralsib",
        "516333": "ru-zenit",
        "516354": "ru-open",
        "516356": "ru-mib",
        "516358": "ru-zenit",
        "516372": "ru-zenit",
        "516387": "ru-open",
        "516444": "ru-hcf",
        "516445": "ru-uralsib",
        "516448": "ru-uralsib",
        "516454": "ru-gpb",
        "516456": "ru-zenit",
        "516473": "ru-psb",
        "516570": "ru-vtb",
        "516587": "ru-vtb",
        "516906": "ru-trust",
        "517202": "ru-otp",
        "517375": "ru-gpb",
        "517508": "ru-open",
        "517538": "ru-rosbank",
        "517583": "ru-rosbank",
        "517593": "ru-gpb",
        "517667": "ru-zenit",
        "517803": "ru-roscap",
        "517807": "ru-roscap",
        "517822": "ru-rosbank",
        "517955": "ru-mts",
        "518025": "ru-uralsib",
        "518038": "ru-rosbank",
        "518048": "ru-uralsib",
        "518079": "ru-rosbank",
        "518095": "ru-uralsib",
        "518223": "ru-uralsib",
        "518228": "ru-gpb",
        "518275": "ru-uralsib",
        "518316": "ru-uralsib",
        "518318": "ru-uralsib",
        "518331": "ru-roscap",
        "518365": "ru-roscap",
        "518372": "ru-uralsib",
        "518373": "ru-gpb",
        "518392": "ru-uralsib",
        "518406": "ru-rosbank",
        "518449": "ru-uralsib",
        "518499": "ru-uralsib",
        "518505": "ru-vtb",
        "518522": "ru-uralsib",
        "518533": "ru-uralsib",
        "518580": "ru-rosbank",
        "518586": "ru-binbank",
        "518591": "ru-vtb24",
        "518598": "ru-roscap",
        "518607": "ru-uralsib",
        "518621": "ru-uralsib",
        "518640": "ru-vtb24",
        "518642": "ru-rosbank",
        "518647": "ru-zenit",
        "518681": "ru-avangard",
        "518683": "ru-uralsib",
        "518704": "ru-gpb",
        "518714": "ru-rosbank",
        "518727": "ru-uralsib",
        "518753": "ru-trust",
        "518774": "ru-reb",
        "518781": "ru-reb",
        "518788": "ru-binbank",
        "518795": "ru-roscap",
        "518805": "ru-uralsib",
        "518816": "ru-gpb",
        "518820": "ru-smp",
        "518827": "ru-sviaz",
        "518864": "ru-rosbank",
        "518874": "ru-uralsib",
        "518876": "ru-binbank",
        "518882": "ru-rosbank",
        "518884": "ru-smp",
        "518885": "ru-trust",
        "518889": "ru-rosbank",
        "518901": "ru-tinkoff",
        "518902": "ru-gpb",
        "518909": "ru-uralsib",
        "518911": "ru-uralsib",
        "518916": "ru-roscap",
        "518946": "ru-psb",
        "518970": "ru-psb",
        "518971": "ru-sviaz",
        "518977": "ru-psb",
        "518981": "ru-psb",
        "518996": "ru-ucb",
        "518997": "ru-ucb",
        "519304": "ru-vtb24",
        "519327": "ru-roscap",
        "519333": "ru-vozrozhdenie",
        "519346": "ru-uralsib",
        "519350": "ru-roscap",
        "519747": "ru-alfa",
        "519778": "ru-alfa",
        "519998": "ru-vtb24",
        "520006": "ru-uralsib",
        "520035": "ru-uralsib",
        "520036": "ru-rosbank",
        "520047": "ru-rosbank",
        "520085": "ru-psb",
        "520088": "ru-psb",
        "520093": "ru-roscap",
        "520113": "ru-mib",
        "520305": "ru-citi",
        "520306": "ru-citi",
        "520328": "ru-binbank",
        "520348": "ru-roscap",
        "520350": "ru-zenit",
        "520373": "ru-citi",
        "520377": "ru-citi",
        "520633": "ru-sberbank",
        "520666": "ru-roscap",
        "520685": "ru-roscap",
        "520902": "ru-rosbank",
        "520905": "ru-ren",
        "520920": "ru-smp",
        "520935": "ru-akbars",
        "520957": "ru-citi",
        "520985": "ru-akbars",
        "520993": "ru-citi",
        "520996": "ru-uralsib",
        "521124": "ru-psb",
        "521144": "ru-ceb",
        "521155": "ru-gpb",
        "521159": "ru-mts",
        "521172": "ru-rgs",
        "521178": "ru-alfa",
        "521194": "ru-zenit",
        "521310": "ru-rgs",
        "521324": "ru-tinkoff",
        "521326": "ru-smp",
        "521330": "ru-otp",
        "521374": "ru-rosbank",
        "521379": "ru-uralsib",
        "521381": "ru-uralsib",
        "521508": "ru-rosbank",
        "521528": "ru-mob",
        "521589": "ru-zenit",
        "521658": "ru-uralsib",
        "521779": "ru-uralsib",
        "521801": "ru-mkb",
        "521820": "ru-uralsib",
        "521830": "ru-ceb",
        "521847": "ru-uralsib",
        "521879": "ru-uralsib",
        "522016": "ru-binbank",
        "522022": "ru-uralsib",
        "522042": "ru-roscap",
        "522083": "ru-uralsib",
        "522117": "ru-open",
        "522193": "ru-gpb",
        "522199": "ru-hcf",
        "522212": "ru-uralsib",
        "522223": "ru-avangard",
        "522224": "ru-avangard",
        "522230": "ru-uralsib",
        "522455": "ru-rsb",
        "522456": "ru-zenit",
        "522458": "ru-ucb",
        "522470": "ru-otp",
        "522477": "ru-gpb",
        "522511": "ru-rosbank",
        "522513": "ru-rosbank",
        "522588": "ru-rsb",
        "522592": "ru-cetelem",
        "522598": "ru-vtb24",
        "522705": "ru-rosbank",
        "522711": "ru-rosbank",
        "522826": "ru-gpb",
        "522828": "ru-alfa",
        "522833": "ru-roscap",
        "522851": "ru-zenit",
        "522858": "ru-spb",
        "522860": "ru-sberbank",
        "522862": "ru-roscap",
        "522881": "ru-sovkom",
        "522965": "ru-uralsib",
        "522970": "ru-uralsib",
        "522988": "ru-gpb",
        "522989": "ru-gpb",
        "523281": "ru-uralsib",
        "523436": "ru-roscap",
        "523546": "ru-roscap",
        "523558": "ru-roscap",
        "523559": "ru-roscap",
        "523688": "ru-psb",
        "523701": "ru-alfa",
        "523755": "ru-zenit",
        "523787": "ru-rosbank",
        "524001": "ru-rosbank",
        "524004": "ru-uralsib",
        "524381": "ru-rsb",
        "524390": "ru-uralsib",
        "524448": "ru-rshb",
        "524468": "ru-tinkoff",
        "524477": "ru-vtb",
        "524602": "ru-mts",
        "524614": "ru-rosbank",
        "524620": "ru-citi",
        "524655": "ru-mkb",
        "524665": "ru-ceb",
        "524776": "ru-uralsib",
        "524818": "ru-uralsib",
        "524829": "ru-sberbank",
        "524835": "ru-hcf",
        "524838": "ru-open",
        "524853": "ru-mib",
        "524856": "ru-roscap",
        "524861": "ru-rosbank",
        "524862": "ru-binbank",
        "524943": "ru-mob",
        "525236": "ru-uralsib",
        "525245": "ru-rosbank",
        "525247": "ru-rosbank",
        "525248": "ru-uralsib",
        "525443": "ru-uralsib",
        "525446": "ru-rshb",
        "525494": "ru-psb",
        "525689": "ru-citi",
        "525696": "ru-uralsib",
        "525714": "ru-uralsib",
        "525719": "ru-open",
        "525735": "ru-roscap",
        "525740": "ru-gpb",
        "525741": "ru-rosbank",
        "525744": "ru-binbank",
        "525751": "ru-uralsib",
        "525758": "ru-roscap",
        "525767": "ru-roscap",
        "525768": "ru-roscap",
        "525776": "ru-roscap",
        "525778": "ru-rosbank",
        "525781": "ru-roscap",
        "525784": "ru-gpb",
        "525794": "ru-rosbank",
        "525833": "ru-gpb",
        "525932": "ru-trust",
        "525933": "ru-hcf",
        "526090": "ru-roscap",
        "526280": "ru-psb",
        "526393": "ru-roscap",
        "526462": "ru-rosbank",
        "526469": "ru-vozrozhdenie",
        "526483": "ru-gpb",
        "526532": "ru-vtb",
        "526589": "ru-vtb24",
        "526818": "ru-rgs",
        "526839": "ru-otp",
        "526857": "ru-uralsib",
        "526891": "ru-zenit",
        "526940": "ru-roscap",
        "526981": "ru-rosbank",
        "526984": "ru-rosbank",
        "526992": "ru-uralsib",
        "527001": "ru-uralsib",
        "527023": "ru-mob",
        "527196": "ru-uralsib",
        "527348": "ru-sviaz",
        "527393": "ru-rosbank",
        "527415": "ru-roscap",
        "527444": "ru-gpb",
        "527450": "ru-binbank",
        "527574": "ru-uralsib",
        "527576": "ru-sberbank",
        "527594": "ru-citi",
        "527622": "ru-roscap",
        "527640": "ru-rosbank",
        "527643": "ru-rosbank",
        "527658": "ru-uralsib",
        "527663": "ru-rosbank",
        "527785": "ru-vtb",
        "527792": "ru-mib",
        "527798": "ru-vtb",
        "527883": "ru-vtb24",
        "528014": "ru-uralsib",
        "528015": "ru-rosbank",
        "528016": "ru-roscap",
        "528053": "ru-raiffeisen",
        "528068": "ru-uralsib",
        "528090": "ru-rosbank",
        "528154": "ru-vtb24",
        "528249": "ru-vbrr",
        "528270": "ru-rosbank",
        "528588": "ru-akbars",
        "528593": "ru-roscap",
        "528701": "ru-psb",
        "528704": "ru-uralsib",
        "528808": "ru-raiffeisen",
        "528809": "ru-raiffeisen",
        "528819": "ru-rosbank",
        "528933": "ru-rosbank",
        "529025": "ru-vtb24",
        "529071": "ru-roscap",
        "529100": "ru-rosbank",
        "529101": "ru-rosbank",
        "529160": "ru-psb",
        "529170": "ru-sovkom",
        "529208": "ru-zenit",
        "529247": "ru-rosbank",
        "529260": "ru-open",
        "529273": "ru-uralsib",
        "529278": "ru-gpb",
        "529293": "ru-uralsib",
        "529295": "ru-smp",
        "529426": "ru-roscap",
        "529436": "ru-uralsib",
        "529437": "ru-rosbank",
        "529446": "ru-roscap",
        "529448": "ru-roscap",
        "529450": "ru-uralsib",
        "529461": "ru-uralsib",
        "529488": "ru-gpb",
        "529497": "ru-roscap",
        "529813": "ru-rosbank",
        "529860": "ru-uralsib",
        "529862": "ru-rosbank",
        "529889": "ru-sviaz",
        "529938": "ru-vtb24",
        "529968": "ru-otp",
        "530035": "ru-uralsib",
        "530036": "ru-smp",
        "530078": "ru-roscap",
        "530114": "ru-gpb",
        "530142": "ru-uralsib",
        "530143": "ru-uralsib",
        "530145": "ru-uralsib",
        "530171": "ru-sviaz",
        "530172": "ru-ucb",
        "530183": "ru-open",
        "530184": "ru-vtb24",
        "530215": "ru-rosbank",
        "530229": "ru-vtb",
        "530266": "ru-citi",
        "530279": "ru-uralsib",
        "530403": "ru-open",
        "530412": "ru-rosbank",
        "530413": "ru-atb",
        "530416": "ru-rosbank",
        "530441": "ru-psb",
        "530445": "ru-sovkom",
        "530526": "ru-uralsib",
        "530527": "ru-absolut",
        "530595": "ru-roscap",
        "530758": "ru-uralsib",
        "530800": "ru-rosbank",
        "530827": "ru-alfa",
        "530867": "ru-raiffeisen",
        "530900": "ru-spb",
        "530979": "ru-uralsib",
        "530993": "ru-gpb",
        "531034": "ru-ceb",
        "531038": "ru-uralsib",
        "531073": "ru-uralsib",
        "531207": "ru-uralsib",
        "531222": "ru-rosbank",
        "531233": "ru-vtb24",
        "531236": "ru-ucb",
        "531237": "ru-alfa",
        "531305": "ru-gpb",
        "531310": "ru-sberbank",
        "531315": "ru-ren",
        "531316": "ru-avangard",
        "531318": "ru-trust",
        "531327": "ru-hcf",
        "531332": "ru-sviaz",
        "531344": "ru-ucb",
        "531351": "ru-binbank",
        "531425": "ru-binbank",
        "531428": "ru-otp",
        "531452": "ru-vtb",
        "531534": "ru-psb",
        "531562": "ru-roscap",
        "531652": "ru-roscap",
        "531657": "ru-uralsib",
        "531674": "ru-open",
        "531809": "ru-citi",
        "531853": "ru-binbank",
        "531858": "ru-uralsib",
        "531943": "ru-psb",
        "532058": "ru-rosbank",
        "532130": "ru-open",
        "532184": "ru-mkb",
        "532186": "ru-spb",
        "532301": "ru-open",
        "532310": "ru-roscap",
        "532315": "ru-ceb",
        "532320": "ru-uralsib",
        "532326": "ru-cetelem",
        "532328": "ru-uralsib",
        "532334": "ru-roscap",
        "532336": "ru-rosbank",
        "532356": "ru-vbrr",
        "532436": "ru-roscap",
        "532441": "ru-roscap",
        "532461": "ru-zenit",
        "532463": "ru-zenit",
        "532472": "ru-uralsib",
        "532475": "ru-uralsib",
        "532583": "ru-uralsib",
        "532684": "ru-gpb",
        "532809": "ru-rosbank",
        "532835": "ru-binbank",
        "532917": "ru-roscap",
        "532921": "ru-roscap",
        "532947": "ru-atb",
        "532974": "ru-citi",
        "533151": "ru-binbank",
        "533166": "ru-uralsib",
        "533201": "ru-citi",
        "533205": "ru-sberbank",
        "533206": "ru-avangard",
        "533213": "ru-mts",
        "533214": "ru-zenit",
        "533327": "ru-gpb",
        "533469": "ru-rsb",
        "533594": "ru-raiffeisen",
        "533595": "ru-sovkom",
        "533611": "ru-uralsib",
        "533614": "ru-binbank",
        "533616": "ru-raiffeisen",
        "533668": "ru-roscap",
        "533669": "ru-sberbank",
        "533681": "ru-citi",
        "533684": "ru-rosbank",
        "533685": "ru-otp",
        "533689": "ru-rsb",
        "533725": "ru-roscap",
        "533736": "ru-mts",
        "533794": "ru-roscap",
        "533795": "ru-rosbank",
        "533925": "ru-rosbank",
        "533954": "ru-zenit",
        "534128": "ru-uralsib",
        "534130": "ru-gpb",
        "534132": "ru-uralsib",
        "534134": "ru-roscap",
        "534136": "ru-uralsib",
        "534148": "ru-uralsib",
        "534156": "ru-uralsib",
        "534162": "ru-rshb",
        "534171": "ru-gpb",
        "534183": "ru-roscap",
        "534194": "ru-uralsib",
        "534196": "ru-gpb",
        "534251": "ru-rosbank",
        "534254": "ru-vozrozhdenie",
        "534266": "ru-rsb",
        "534293": "ru-rosbank",
        "534296": "ru-uralsib",
        "534297": "ru-rosbank",
        "534449": "ru-rosbank",
        "534462": "ru-psb",
        "534469": "ru-open",
        "534493": "ru-vtb",
        "534495": "ru-psb",
        "534577": "ru-rosbank",
        "534601": "ru-vtb",
        "534645": "ru-rosbank",
        "534661": "ru-open",
        "534669": "ru-open",
        "534921": "ru-rosbank",
        "534927": "ru-uralsib",
        "535023": "ru-psb",
        "535027": "ru-open",
        "535058": "ru-psb",
        "535082": "ru-vtb24",
        "535108": "ru-open",
        "535946": "ru-avangard",
        "536095": "ru-open",
        "536114": "ru-trust",
        "536176": "ru-uralsib",
        "536186": "ru-uralsib",
        "536370": "ru-roscap",
        "536392": "ru-raiffeisen",
        "536400": "ru-uralsib",
        "536409": "ru-rshb",
        "536443": "ru-roscap",
        "536454": "ru-uralsib",
        "536464": "ru-roscap",
        "536466": "ru-mib",
        "536500": "ru-hcf",
        "536511": "ru-hcf",
        "536554": "ru-roscap",
        "536569": "ru-rosbank",
        "536672": "ru-mts",
        "536829": "ru-vtb24",
        "536960": "ru-uralsib",
        "536995": "ru-gpb",
        "537627": "ru-gpb",
        "537643": "ru-alfa",
        "537705": "ru-uralsib",
        "537709": "ru-uralsib",
        "537713": "ru-roscap",
        "537715": "ru-uralsib",
        "537730": "ru-uralsib",
        "537734": "ru-uralsib",
        "537737": "ru-roscap",
        "537770": "ru-jugra",
        "537965": "ru-raiffeisen",
        "538010": "ru-rshb",
        "538395": "ru-roscap",
        "538397": "ru-uralsib",
        "538800": "ru-uralsib",
        "538828": "ru-roscap",
        "538998": "ru-uralsib",
        "539036": "ru-binbank",
        "539037": "ru-uralsib",
        "539102": "ru-rosbank",
        "539114": "ru-ceb",
        "539600": "ru-binbank",
        "539607": "ru-zenit",
        "539613": "ru-zenit",
        "539617": "ru-uralsib",
        "539621": "ru-psb",
        "539673": "ru-avangard",
        "539704": "ru-psb",
        "539710": "ru-uralsib",
        "539721": "ru-binbank",
        "539726": "ru-citi",
        "539839": "ru-gpb",
        "539850": "ru-zenit",
        "539852": "ru-uralsib",
        "539861": "ru-psb",
        "539864": "ru-roscap",
        "539865": "ru-roscap",
        "539869": "ru-roscap",
        "539898": "ru-zenit",
        "540014": "ru-roscap",
        "540035": "ru-rosbank",
        "540053": "ru-rosbank",
        "540111": "ru-uralsib",
        "540149": "ru-rosbank",
        "540169": "ru-vtb24",
        "540194": "ru-binbank",
        "540229": "ru-rosbank",
        "540308": "ru-roscap",
        "540400": "ru-uralsib",
        "540455": "ru-binbank",
        "540602": "ru-roscap",
        "540616": "ru-mts",
        "540642": "ru-binbank",
        "540664": "ru-gpb",
        "540674": "ru-gpb",
        "540687": "ru-uralsib",
        "540708": "ru-uralsib",
        "540768": "ru-uralsib",
        "540788": "ru-citi",
        "540794": "ru-uralsib",
        "540834": "ru-uralsib",
        "540923": "ru-uralsib",
        "540927": "ru-roscap",
        "541031": "ru-rosbank",
        "541152": "ru-binbank",
        "541269": "ru-psb",
        "541279": "ru-uralsib",
        "541294": "ru-binbank",
        "541354": "ru-uralsib",
        "541435": "ru-mts",
        "541450": "ru-ceb",
        "541456": "ru-uralsib",
        "541503": "ru-psb",
        "541600": "ru-spb",
        "541632": "ru-uralsib",
        "541754": "ru-zenit",
        "541778": "ru-zenit",
        "541789": "ru-uralsib",
        "541895": "ru-roscap",
        "541903": "ru-rosbank",
        "541904": "ru-rosbank",
        "541920": "ru-uralsib",
        "541975": "ru-roscap",
        "541983": "ru-uralsib",
        "541997": "ru-absolut",
        "542033": "ru-mkb",
        "542048": "ru-rsb",
        "542058": "ru-rosbank",
        "542112": "ru-uralsib",
        "542246": "ru-uralsib",
        "542247": "ru-roscap",
        "542255": "ru-gpb",
        "542289": "ru-open",
        "542340": "ru-psb",
        "542475": "ru-open",
        "542501": "ru-open",
        "542504": "ru-binbank",
        "542577": "ru-sberbank",
        "542581": "ru-roscap",
        "542600": "ru-roscap",
        "542654": "ru-atb",
        "542751": "ru-vbrr",
        "542772": "ru-raiffeisen",
        "542932": "ru-roscap",
        "542963": "ru-rosbank",
        "543015": "ru-uralsib",
        "543019": "ru-open",
        "543038": "ru-binbank",
        "543101": "ru-spb",
        "543127": "ru-rosbank",
        "543211": "ru-mkb",
        "543236": "ru-zenit",
        "543354": "ru-uralsib",
        "543366": "ru-binbank",
        "543367": "ru-roscap",
        "543435": "ru-uralsib",
        "543618": "ru-roscap",
        "543664": "ru-roscap",
        "543672": "ru-gpb",
        "543724": "ru-gpb",
        "543728": "ru-roscap",
        "543749": "ru-uralsib",
        "543762": "ru-gpb",
        "543763": "ru-sberbank",
        "543807": "ru-uralsib",
        "543874": "ru-psb",
        "543942": "ru-sberbank",
        "544025": "ru-zenit",
        "544026": "ru-gpb",
        "544069": "ru-roscap",
        "544092": "ru-open",
        "544117": "ru-binbank",
        "544123": "ru-mts",
        "544175": "ru-roscap",
        "544195": "ru-uralsib",
        "544212": "ru-roscap",
        "544218": "ru-open",
        "544237": "ru-raiffeisen",
        "544263": "ru-rosbank",
        "544270": "ru-roscap",
        "544272": "ru-uralsib",
        "544326": "ru-uralsib",
        "544331": "ru-sberbank",
        "544343": "ru-open",
        "544367": "ru-uralsib",
        "544369": "ru-uralsib",
        "544417": "ru-uralsib",
        "544429": "ru-rsb",
        "544439": "ru-uralsib",
        "544462": "ru-uralsib",
        "544491": "ru-rosbank",
        "544499": "ru-open",
        "544552": "ru-uralsib",
        "544561": "ru-gpb",
        "544573": "ru-open",
        "544754": "ru-roscap",
        "544800": "ru-psb",
        "544852": "ru-zenit",
        "544885": "ru-roscap",
        "544886": "ru-atb",
        "544905": "ru-rosbank",
        "544962": "ru-open",
        "545037": "ru-sberbank",
        "545101": "ru-gpb",
        "545115": "ru-raiffeisen",
        "545117": "ru-zenit",
        "545151": "ru-rosbank",
        "545152": "ru-sberbank",
        "545160": "ru-rsb",
        "545182": "ru-citi",
        "545200": "ru-uralsib",
        "545204": "ru-rosbank",
        "545214": "ru-otp",
        "545224": "ru-vtb24",
        "545266": "ru-uralsib",
        "545272": "ru-uralsib",
        "545350": "ru-psb",
        "545362": "ru-roscap",
        "545364": "ru-rosbank",
        "545379": "ru-rosbank",
        "545472": "ru-uralsib",
        "545490": "ru-roscap",
        "545511": "ru-roscap",
        "545529": "ru-rosbank",
        "545539": "ru-uralsib",
        "545540": "ru-uralsib",
        "545547": "ru-rosbank",
        "545572": "ru-rosbank",
        "545575": "ru-rosbank",
        "545592": "ru-uralsib",
        "545638": "ru-uralsib",
        "545655": "ru-uralsib",
        "545701": "ru-uralsib",
        "545742": "ru-uralsib",
        "545744": "ru-uralsib",
        "545761": "ru-uralsib",
        "545762": "ru-hcf",
        "545778": "ru-uralsib",
        "545789": "ru-uralsib",
        "545792": "ru-uralsib",
        "545799": "ru-uralsib",
        "545807": "ru-gpb",
        "545817": "ru-uralsib",
        "545840": "ru-sberbank",
        "545868": "ru-uralsib",
        "545896": "ru-zenit",
        "545916": "ru-uralsib",
        "545929": "ru-zenit",
        "546031": "ru-sberbank",
        "546339": "ru-uralsib",
        "546340": "ru-uralsib",
        "546468": "ru-uralsib",
        "546551": "ru-uralsib",
        "546593": "ru-uralsib",
        "546662": "ru-uralsib",
        "546679": "ru-uralsib",
        "546718": "ru-uralsib",
        "546766": "ru-psb",
        "546842": "ru-uralsib",
        "546844": "ru-uralsib",
        "546850": "ru-sovkom",
        "546901": "ru-sberbank",
        "546902": "ru-sberbank",
        "546903": "ru-sberbank",
        "546904": "ru-sberbank",
        "546905": "ru-sberbank",
        "546906": "ru-sberbank",
        "546907": "ru-sberbank",
        "546908": "ru-sberbank",
        "546909": "ru-sberbank",
        "546910": "ru-sberbank",
        "546911": "ru-sberbank",
        "546912": "ru-sberbank",
        "546913": "ru-sberbank",
        "546916": "ru-sberbank",
        "546917": "ru-sberbank",
        "546918": "ru-sberbank",
        "546920": "ru-sberbank",
        "546922": "ru-sberbank",
        "546925": "ru-sberbank",
        "546926": "ru-sberbank",
        "546927": "ru-sberbank",
        "546928": "ru-sberbank",
        "546929": "ru-sberbank",
        "546930": "ru-sberbank",
        "546931": "ru-sberbank",
        "546932": "ru-sberbank",
        "546933": "ru-sberbank",
        "546935": "ru-sberbank",
        "546936": "ru-sberbank",
        "546937": "ru-sberbank",
        "546938": "ru-sberbank",
        "546939": "ru-sberbank",
        "546940": "ru-sberbank",
        "546941": "ru-sberbank",
        "546942": "ru-sberbank",
        "546943": "ru-sberbank",
        "546944": "ru-sberbank",
        "546945": "ru-sberbank",
        "546946": "ru-sberbank",
        "546947": "ru-sberbank",
        "546948": "ru-sberbank",
        "546949": "ru-sberbank",
        "546950": "ru-sberbank",
        "546951": "ru-sberbank",
        "546952": "ru-sberbank",
        "546953": "ru-sberbank",
        "546954": "ru-sberbank",
        "546955": "ru-sberbank",
        "546956": "ru-sberbank",
        "546959": "ru-sberbank",
        "546960": "ru-sberbank",
        "546961": "ru-sberbank",
        "546962": "ru-sberbank",
        "546963": "ru-sberbank",
        "546964": "ru-sberbank",
        "546966": "ru-sberbank",
        "546967": "ru-sberbank",
        "546968": "ru-sberbank",
        "546969": "ru-sberbank",
        "546970": "ru-sberbank",
        "546972": "ru-sberbank",
        "546974": "ru-sberbank",
        "546975": "ru-sberbank",
        "546976": "ru-sberbank",
        "546977": "ru-sberbank",
        "546996": "ru-roscap",
        "546998": "ru-sberbank",
        "546999": "ru-sberbank",
        "547070": "ru-rosbank",
        "547151": "ru-roscap",
        "547228": "ru-uralsib",
        "547243": "ru-binbank",
        "547253": "ru-uralsib",
        "547257": "ru-uralsib",
        "547258": "ru-uralsib",
        "547262": "ru-rsb",
        "547298": "ru-uralsib",
        "547300": "ru-uralsib",
        "547306": "ru-uralsib",
        "547314": "ru-uralsib",
        "547319": "ru-uralsib",
        "547324": "ru-uralsib",
        "547329": "ru-psb",
        "547348": "ru-gpb",
        "547377": "ru-binbank",
        "547421": "ru-uralsib",
        "547447": "ru-uralsib",
        "547449": "ru-open",
        "547470": "ru-rosbank",
        "547490": "ru-citi",
        "547547": "ru-uralsib",
        "547550": "ru-ceb",
        "547563": "ru-uralsib",
        "547576": "ru-uralsib",
        "547580": "ru-uralsib",
        "547601": "ru-rshb",
        "547610": "ru-roscap",
        "547613": "ru-raiffeisen",
        "547616": "ru-open",
        "547665": "ru-uralsib",
        "547681": "ru-rosbank",
        "547699": "ru-uralsib",
        "547705": "ru-rosbank",
        "547728": "ru-ucb",
        "547743": "ru-vozrozhdenie",
        "547761": "ru-uralsib",
        "547796": "ru-uralsib",
        "547801": "ru-binbank",
        "547851": "ru-uralsib",
        "547859": "ru-roscap",
        "547901": "ru-sberbank",
        "547902": "ru-sberbank",
        "547905": "ru-sberbank",
        "547906": "ru-sberbank",
        "547907": "ru-sberbank",
        "547910": "ru-sberbank",
        "547911": "ru-sberbank",
        "547912": "ru-sberbank",
        "547913": "ru-sberbank",
        "547920": "ru-sberbank",
        "547922": "ru-sberbank",
        "547925": "ru-sberbank",
        "547926": "ru-sberbank",
        "547927": "ru-sberbank",
        "547928": "ru-sberbank",
        "547930": "ru-sberbank",
        "547931": "ru-sberbank",
        "547932": "ru-sberbank",
        "547935": "ru-sberbank",
        "547936": "ru-sberbank",
        "547937": "ru-sberbank",
        "547938": "ru-sberbank",
        "547940": "ru-sberbank",
        "547942": "ru-sberbank",
        "547943": "ru-sberbank",
        "547944": "ru-sberbank",
        "547945": "ru-sberbank",
        "547947": "ru-sberbank",
        "547948": "ru-sberbank",
        "547949": "ru-sberbank",
        "547950": "ru-sberbank",
        "547951": "ru-sberbank",
        "547952": "ru-sberbank",
        "547953": "ru-sberbank",
        "547954": "ru-sberbank",
        "547955": "ru-sberbank",
        "547956": "ru-sberbank",
        "547959": "ru-sberbank",
        "547960": "ru-sberbank",
        "547961": "ru-sberbank",
        "547962": "ru-sberbank",
        "547964": "ru-sberbank",
        "547966": "ru-sberbank",
        "547969": "ru-sberbank",
        "547972": "ru-sberbank",
        "547976": "ru-sberbank",
        "547998": "ru-sberbank",
        "547999": "ru-sberbank",
        "548027": "ru-gpb",
        "548035": "ru-mts",
        "548062": "ru-roscap",
        "548072": "ru-roscap",
        "548073": "ru-roscap",
        "548092": "ru-binbank",
        "548137": "ru-uralsib",
        "548138": "ru-uralsib",
        "548164": "ru-raiffeisen",
        "548172": "ru-psb",
        "548173": "ru-roscap",
        "548177": "ru-uralsib",
        "548186": "ru-roscap",
        "548204": "ru-roscap",
        "548205": "ru-uralsib",
        "548214": "ru-uralsib",
        "548225": "ru-rosbank",
        "548235": "ru-rsb",
        "548246": "ru-uralsib",
        "548249": "ru-uralsib",
        "548265": "ru-binbank",
        "548266": "ru-uralsib",
        "548268": "ru-uralsib",
        "548269": "ru-psb",
        "548270": "ru-binbank",
        "548272": "ru-uralsib",
        "548291": "ru-uralsib",
        "548294": "ru-uralsib",
        "548301": "ru-roscap",
        "548308": "ru-vozrozhdenie",
        "548309": "ru-vozrozhdenie",
        "548326": "ru-uralsib",
        "548328": "ru-roscap",
        "548335": "ru-roscap",
        "548351": "ru-mib",
        "548386": "ru-skb",
        "548387": "ru-tinkoff",
        "548393": "ru-uralsib",
        "548401": "ru-sberbank",
        "548402": "ru-sberbank",
        "548403": "ru-sberbank",
        "548404": "ru-roscap",
        "548405": "ru-sberbank",
        "548406": "ru-sberbank",
        "548407": "ru-sberbank",
        "548409": "ru-rosbank",
        "548410": "ru-sberbank",
        "548411": "ru-sberbank",
        "548412": "ru-sberbank",
        "548413": "ru-sberbank",
        "548416": "ru-sberbank",
        "548420": "ru-sberbank",
        "548422": "ru-sberbank",
        "548425": "ru-sberbank",
        "548426": "ru-sberbank",
        "548427": "ru-sberbank",
        "548428": "ru-sberbank",
        "548429": "ru-psb",
        "548430": "ru-sberbank",
        "548431": "ru-sberbank",
        "548432": "ru-sberbank",
        "548435": "ru-sberbank",
        "548436": "ru-sberbank",
        "548438": "ru-sberbank",
        "548440": "ru-sberbank",
        "548442": "ru-sberbank",
        "548443": "ru-sberbank",
        "548444": "ru-sberbank",
        "548445": "ru-sberbank",
        "548447": "ru-sberbank",
        "548448": "ru-sberbank",
        "548449": "ru-sberbank",
        "548450": "ru-sberbank",
        "548451": "ru-sberbank",
        "548452": "ru-sberbank",
        "548453": "ru-uralsib",
        "548454": "ru-sberbank",
        "548455": "ru-sberbank",
        "548456": "ru-sberbank",
        "548459": "ru-sberbank",
        "548460": "ru-sberbank",
        "548461": "ru-sberbank",
        "548462": "ru-sberbank",
        "548463": "ru-sberbank",
        "548464": "ru-sberbank",
        "548466": "ru-sberbank",
        "548468": "ru-sberbank",
        "548469": "ru-sberbank",
        "548470": "ru-sberbank",
        "548472": "ru-sberbank",
        "548476": "ru-sberbank",
        "548477": "ru-sberbank",
        "548484": "ru-open",
        "548490": "ru-roscap",
        "548498": "ru-sberbank",
        "548499": "ru-sberbank",
        "548504": "ru-uralsib",
        "548511": "ru-uralsib",
        "548554": "ru-roscap",
        "548571": "ru-uralsib",
        "548588": "ru-uralsib",
        "548601": "ru-alfa",
        "548655": "ru-alfa",
        "548673": "ru-alfa",
        "548674": "ru-alfa",
        "548704": "ru-uralsib",
        "548706": "ru-uralsib",
        "548713": "ru-uralsib",
        "548745": "ru-hcf",
        "548752": "ru-uralsib",
        "548753": "ru-roscap",
        "548754": "ru-roscap",
        "548755": "ru-roscap",
        "548767": "ru-zenit",
        "548768": "ru-zenit",
        "548771": "ru-zenit",
        "548777": "ru-roscap",
        "548783": "ru-roscap",
        "548784": "ru-roscap",
        "548785": "ru-roscap",
        "548791": "ru-roscap",
        "548796": "ru-rosbank",
        "548899": "ru-uralsib",
        "548921": "ru-rosbank",
        "548934": "ru-uralsib",
        "548996": "ru-uralsib",
        "548997": "ru-uralsib",
        "548999": "ru-gpb",
        "549000": "ru-gpb",
        "549014": "ru-uralsib",
        "549015": "ru-uralsib",
        "549024": "ru-open",
        "549025": "ru-open",
        "549068": "ru-rosbank",
        "549071": "ru-skb",
        "549074": "ru-roscap",
        "549081": "ru-rosbank",
        "549098": "ru-gpb",
        "549223": "ru-vtb24",
        "549229": "ru-uralsib",
        "549251": "ru-uralsib",
        "549255": "ru-uralsib",
        "549256": "ru-uralsib",
        "549257": "ru-uralsib",
        "549258": "ru-roscap",
        "549264": "ru-uralsib",
        "549268": "ru-rosbank",
        "549270": "ru-vtb24",
        "549274": "ru-uralsib",
        "549283": "ru-uralsib",
        "549285": "ru-uralsib",
        "549302": "ru-ucb",
        "549303": "ru-uralsib",
        "549306": "ru-uralsib",
        "549307": "ru-uralsib",
        "549314": "ru-roscap",
        "549347": "ru-uralsib",
        "549349": "ru-binbank",
        "549376": "ru-spb",
        "549401": "ru-uralsib",
        "549411": "ru-zenit",
        "549424": "ru-uralsib",
        "549425": "ru-psb",
        "549439": "ru-psb",
        "549447": "ru-uralsib",
        "549454": "ru-uralsib",
        "549470": "ru-roscap",
        "549475": "ru-rosbank",
        "549478": "ru-rosbank",
        "549483": "ru-uralsib",
        "549512": "ru-binbank",
        "549522": "ru-uralsib",
        "549523": "ru-binbank",
        "549524": "ru-psb",
        "549574": "ru-roscap",
        "549597": "ru-roscap",
        "549600": "ru-gpb",
        "549614": "ru-gpb",
        "549647": "ru-uralsib",
        "549654": "ru-uralsib",
        "549715": "ru-rshb",
        "549716": "ru-uralsib",
        "549822": "ru-rosbank",
        "549829": "ru-rosbank",
        "549830": "ru-uralsib",
        "549848": "ru-open",
        "549855": "ru-rosbank",
        "549865": "ru-rosbank",
        "549870": "ru-mib",
        "549873": "ru-uralsib",
        "549881": "ru-uralsib",
        "549882": "ru-zenit",
        "549887": "ru-roscap",
        "549888": "ru-zenit",
        "549935": "ru-roscap",
        "549965": "ru-jugra",
        "549966": "ru-jugra",
        "549969": "ru-roscap",
        "550006": "ru-uralsib",
        "550025": "ru-binbank",
        "550064": "ru-rosbank",
        "550070": "ru-roscap",
        "550143": "ru-rosbank",
        "550165": "ru-rosbank",
        "550210": "ru-rosbank",
        "550219": "ru-zenit",
        "550235": "ru-roscap",
        "550251": "ru-sberbank",
        "550446": "ru-open",
        "550467": "ru-rosbank",
        "550468": "ru-uralsib",
        "550484": "ru-raiffeisen",
        "550547": "ru-rosbank",
        "550583": "ru-mts",
        "551950": "ru-roscap",
        "551960": "ru-tinkoff",
        "551979": "ru-rosbank",
        "551985": "ru-rosbank",
        "551989": "ru-rosbank",
        "551993": "ru-rosbank",
        "551996": "ru-rosbank",
        "552055": "ru-gpb",
        "552151": "ru-rosbank",
        "552175": "ru-alfa",
        "552186": "ru-alfa",
        "552549": "ru-roscap",
        "552573": "ru-citi",
        "552574": "ru-citi",
        "552603": "ru-roscap",
        "552613": "ru-reb",
        "552618": "ru-mts",
        "552680": "ru-mkb",
        "552702": "ru-gpb",
        "552708": "ru-open",
        "552729": "ru-ren",
        "552845": "ru-uralsib",
        "552866": "ru-binbank",
        "552958": "ru-akbars",
        "553000": "ru-uralsib",
        "553069": "ru-rosbank",
        "553128": "ru-rosbank",
        "553420": "ru-tinkoff",
        "553496": "ru-raiffeisen",
        "553581": "ru-uralsib",
        "553584": "ru-uralsib",
        "553690": "ru-rosbank",
        "553909": "ru-rosbank",
        "553964": "ru-rosbank",
        "554279": "ru-psb",
        "554317": "ru-rosbank",
        "554324": "ru-rosbank",
        "554326": "ru-rosbank",
        "554364": "ru-roscap",
        "554365": "ru-roscap",
        "554372": "ru-binbank",
        "554373": "ru-binbank",
        "554384": "ru-vtb",
        "554386": "ru-vtb24",
        "554393": "ru-vtb24",
        "554524": "ru-smp",
        "554546": "ru-uralsib",
        "554549": "ru-rosbank",
        "554562": "ru-uralsib",
        "554581": "ru-uralsib",
        "554607": "ru-uralsib",
        "554615": "ru-uralsib",
        "554651": "ru-uralsib",
        "554713": "ru-rosbank",
        "554733": "ru-rosbank",
        "554759": "ru-psb",
        "554761": "ru-rosbank",
        "554780": "ru-zenit",
        "554781": "ru-psb",
        "554782": "ru-rosbank",
        "554844": "ru-rosbank",
        "555057": "ru-citi",
        "555058": "ru-citi",
        "555079": "ru-rosbank",
        "555156": "ru-alfa",
        "555921": "ru-alfa",
        "555928": "ru-alfa",
        "555933": "ru-alfa",
        "555947": "ru-alfa",
        "555949": "ru-alfa",
        "555957": "ru-alfa",
        "556052": "ru-gpb",
        "556056": "ru-sviaz",
        "556057": "ru-uralsib",
        "557029": "ru-zenit",
        "557030": "ru-zenit",
        "557036": "ru-uralsib",
        "557056": "ru-ceb",
        "557057": "ru-ceb",
        "557071": "ru-mib",
        "557072": "ru-mib",
        "557073": "ru-binbank",
        "557106": "ru-uralsib",
        "557107": "ru-uralsib",
        "557646": "ru-rosbank",
        "557724": "ru-rosbank",
        "557734": "ru-hcf",
        "557737": "ru-ren",
        "557808": "ru-trust",
        "557809": "ru-trust",
        "557841": "ru-rosbank",
        "557842": "ru-rosbank",
        "557848": "ru-rosbank",
        "557849": "ru-rosbank",
        "557942": "ru-zenit",
        "557944": "ru-zenit",
        "557946": "ru-open",
        "557948": "ru-open",
        "557959": "ru-roscap",
        "557960": "ru-zenit",
        "557969": "ru-roscap",
        "557970": "ru-uralsib",
        "557976": "ru-binbank",
        "557977": "ru-rosbank",
        "557980": "ru-rosbank",
        "557981": "ru-psb",
        "557986": "ru-mib",
        "558254": "ru-psb",
        "558258": "ru-rosbank",
        "558268": "ru-psb",
        "558273": "ru-raiffeisen",
        "558274": "ru-rosbank",
        "558275": "ru-uralsib",
        "558296": "ru-rosbank",
        "558298": "ru-trust",
        "558326": "ru-uralsib",
        "558334": "ru-alfa",
        "558354": "ru-uralsib",
        "558355": "ru-gpb",
        "558356": "ru-uralsib",
        "558374": "ru-uralsib",
        "558385": "ru-jugra",
        "558391": "ru-uralsib",
        "558416": "ru-rosbank",
        "558462": "ru-mib",
        "558463": "ru-uralsib",
        "558480": "ru-rosbank",
        "558488": "ru-roscap",
        "558504": "ru-rosbank",
        "558516": "ru-psb",
        "558518": "ru-vtb24",
        "558535": "ru-avangard",
        "558536": "ru-raiffeisen",
        "558605": "ru-rosbank",
        "558620": "ru-open",
        "558622": "ru-raiffeisen",
        "558625": "ru-binbank",
        "558636": "ru-binbank",
        "558651": "ru-uralsib",
        "558664": "ru-uralsib",
        "558672": "ru-psb",
        "558673": "ru-rosbank",
        "558690": "ru-uralsib",
        "558696": "ru-zenit",
        "558713": "ru-vbrr",
        "559066": "ru-vtb",
        "559255": "ru-gpb",
        "559264": "ru-open",
        "559448": "ru-rosbank",
        "559456": "ru-mib",
        "559476": "ru-rosbank",
        "559488": "ru-rosbank",
        "559596": "ru-rosbank",
        "559598": "ru-rosbank",
        "559615": "ru-rosbank",
        "559645": "ru-zenit",
        "559811": "ru-rosbank",
        "559813": "ru-ceb",
        "559814": "ru-rosbank",
        "559899": "ru-rosbank",
        "559901": "ru-sberbank",
        "559969": "ru-rosbank",
        "559992": "ru-gpb",
        "605461": "ru-sberbank",
        "605462": "ru-uralsib",
        "627119": "ru-alfa",
        "639002": "ru-sberbank",
        "670505": "ru-roscap",
        "670508": "ru-psb",
        "670512": "ru-zenit",
        "670518": "ru-open",
        "670521": "ru-roscap",
        "670550": "ru-rosbank",
        "670555": "ru-atb",
        "670556": "ru-roscap",
        "670557": "ru-rosbank",
        "670560": "ru-rosbank",
        "670567": "ru-rosbank",
        "670575": "ru-rosbank",
        "670583": "ru-psb",
        "670587": "ru-open",
        "670594": "ru-roscap",
        "670601": "ru-roscap",
        "670602": "ru-roscap",
        "670605": "ru-roscap",
        "670607": "ru-rosbank",
        "670611": "ru-psb",
        "670614": "ru-zenit",
        "670623": "ru-roscap",
        "670624": "ru-roscap",
        "670625": "ru-roscap",
        "670628": "ru-roscap",
        "670633": "ru-roscap",
        "670637": "ru-skb",
        "670638": "ru-roscap",
        "670646": "ru-rosbank",
        "670647": "ru-rosbank",
        "670652": "ru-rosbank",
        "670654": "ru-psb",
        "670661": "ru-psb",
        "670663": "ru-roscap",
        "670671": "ru-roscap",
        "670674": "ru-rosbank",
        "670676": "ru-roscap",
        "670694": "ru-rosbank",
        "670818": "ru-roscap",
        "670819": "ru-rosbank",
        "670828": "ru-rosbank",
        "670846": "ru-roscap",
        "670849": "ru-rosbank",
        "670851": "ru-rosbank",
        "670852": "ru-mob",
        "670869": "ru-rosbank",
        "670893": "ru-roscap",
        "670981": "ru-roscap",
        "670992": "ru-uralsib",
        "670995": "ru-uralsib",
        "670996": "ru-rosbank",
        "671106": "ru-uralsib",
        "671109": "ru-vtb",
        "671111": "ru-vtb",
        "671122": "ru-gpb",
        "671123": "ru-zenit",
        "671136": "ru-uralsib",
        "671137": "ru-rosbank",
        "671148": "ru-vtb",
        "671172": "ru-vtb",
        "676195": "ru-sberbank",
        "676196": "ru-sberbank",
        "676230": "ru-alfa",
        "676231": "ru-open",
        "676245": "ru-jugra",
        "676280": "ru-sberbank",
        "676333": "ru-raiffeisen",
        "676347": "ru-rosbank",
        "676371": "ru-roscap",
        "676397": "ru-vozrozhdenie",
        "676428": "ru-binbank",
        "676444": "ru-psb",
        "676445": "ru-roscap",
        "676450": "ru-rosbank",
        "676454": "ru-gpb",
        "676463": "ru-avangard",
        "676501": "ru-rosbank",
        "676523": "ru-zenit",
        "676528": "ru-uralsib",
        "676533": "ru-rosbank",
        "676565": "ru-rsb",
        "676586": "ru-ceb",
        "676625": "ru-raiffeisen",
        "676642": "ru-trust",
        "676664": "ru-rosbank",
        "676668": "ru-rosbank",
        "676672": "ru-ucb",
        "676697": "ru-open",
        "676800": "ru-vtb24",
        "676802": "ru-vtb24",
        "676803": "ru-vtb24",
        "676805": "ru-vtb24",
        "676845": "ru-vtb24",
        "676851": "ru-vtb24",
        "676859": "ru-roscap",
        "676860": "ru-vtb24",
        "676861": "ru-vtb24",
        "676881": "ru-reb",
        "676884": "ru-mts",
        "676888": "ru-vtb24",
        "676893": "ru-vtb24",
        "676896": "ru-vtb24",
        "676934": "ru-binbank",
        "676939": "ru-vtb24",
        "676946": "ru-rosbank",
        "676947": "ru-binbank",
        "676967": "ru-mkb",
        "676974": "ru-vtb24",
        "676979": "ru-roscap",
        "676984": "ru-uralsib",
        "676989": "ru-roscap",
        "676990": "ru-gpb",
        "676998": "ru-binbank",
        "677018": "ru-roscap",
        "677040": "ru-ren",
        "677058": "ru-binbank",
        "677076": "ru-rosbank",
        "677084": "ru-zenit",
        "677088": "ru-akbars",
        "677110": "ru-gpb",
        "677112": "ru-rosbank",
        "677128": "ru-sberbank",
        "677136": "ru-roscap",
        "677146": "ru-roscap",
        "677151": "ru-vtb",
        "677175": "ru-smp",
        "677189": "ru-rgs",
        "677194": "ru-vtb24",
        "677222": "ru-rosbank",
        "677223": "ru-roscap",
        "677228": "ru-roscap",
        "677229": "ru-roscap",
        "677234": "ru-rosbank",
        "677235": "ru-rosbank",
        "677240": "ru-rosbank",
        "677245": "ru-rosbank",
        "677257": "ru-roscap",
        "677260": "ru-zenit",
        "677261": "ru-uralsib",
        "677263": "ru-psb",
        "677267": "ru-roscap",
        "677271": "ru-vtb24",
        "677272": "ru-roscap",
        "677275": "ru-binbank",
        "677276": "ru-binbank",
        "677285": "ru-roscap",
        "677288": "ru-roscap",
        "677289": "ru-roscap",
        "677302": "ru-roscap",
        "677303": "ru-rosbank",
        "677305": "ru-roscap",
        "677309": "ru-rosbank",
        "677314": "ru-rosbank",
        "677315": "ru-rosbank",
        "677318": "ru-roscap",
        "677319": "ru-roscap",
        "677327": "ru-zenit",
        "677329": "ru-zenit",
        "677335": "ru-roscap",
        "677336": "ru-roscap",
        "677338": "ru-roscap",
        "677342": "ru-rosbank",
        "677343": "ru-rosbank",
        "677345": "ru-rosbank",
        "677349": "ru-roscap",
        "677358": "ru-binbank",
        "677359": "ru-rosbank",
        "677360": "ru-rosbank",
        "677363": "ru-trust",
        "677366": "ru-smp",
        "677367": "ru-sviaz",
        "677370": "ru-psb",
        "677371": "ru-psb",
        "677372": "ru-psb",
        "677374": "ru-roscap",
        "677375": "ru-rosbank",
        "677376": "ru-rosbank",
        "677380": "ru-zenit",
        "677382": "ru-uralsib",
        "677388": "ru-zenit",
        "677389": "ru-zenit",
        "677391": "ru-rsb",
        "677401": "ru-rosbank",
        "677405": "ru-psb",
        "677406": "ru-binbank",
        "677408": "ru-uralsib",
        "677424": "ru-roscap",
        "677428": "ru-roscap",
        "677430": "ru-uralsib",
        "677431": "ru-uralsib",
        "677444": "ru-roscap",
        "677456": "ru-roscap",
        "677457": "ru-roscap",
        "677458": "ru-zenit",
        "677459": "ru-zenit",
        "677461": "ru-psb",
        "677462": "ru-psb",
        "677466": "ru-roscap",
        "677467": "ru-rosbank",
        "677468": "ru-rosbank",
        "677470": "ru-vtb24",
        "677471": "ru-vtb24",
        "677484": "ru-gpb",
        "677493": "ru-zenit",
        "677496": "ru-mob",
        "677497": "ru-zenit",
        "677501": "ru-roscap",
        "677505": "ru-binbank",
        "677506": "ru-psb",
        "677507": "ru-rosbank",
        "677510": "ru-zenit",
        "677514": "ru-zenit",
        "677518": "ru-smp",
        "677578": "ru-roscap",
        "677579": "ru-rosbank",
        "677585": "ru-gpb",
        "677597": "ru-rosbank",
        "677600": "ru-roscap",
        "677611": "ru-roscap",
        "677617": "ru-rosbank",
        "677646": "ru-roscap",
        "677649": "ru-vbrr",
        "677655": "ru-roscap",
        "677656": "ru-roscap",
        "677659": "ru-zenit",
        "677660": "ru-zenit",
        "677684": "ru-mts",
        "677688": "ru-roscap",
        "677694": "ru-roscap",
        "677714": "ru-roscap",
        "677721": "ru-rosbank",
        "679074": "ru-uralsib"
    };
    exports.CardInfo._banks = banks;
    exports.CardInfo._prefixes = prefixes;
})();

},{}]},["kmSpe","2OpUZ"], "2OpUZ", "parcelRequire2b81")

//# sourceMappingURL=index.6690e0da.js.map
