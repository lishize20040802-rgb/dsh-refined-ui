window.__ModuleLoader__.load({ id: "dsh-refined-ui", factory: (require) => { var module = { exports: {} }; var exports = module.exports; Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
"use strict";
// dsh-refined-ui — client half. CSS-only: one idempotent <style> tag.
// Design spec: "DSH Refined" design system (tokens, motion, radius).
// DSH's own brand blue is deliberately NOT overridden.

var PLUGIN = "dsh-refined-ui";
var STYLE_TAG = "dsh-refined-ui/style.css";

var STYLE_CSS = `
/* ---------- 0. Plugin-private scale (used by the rules below) ---------- */
body{
  --dsr-dur-fast:120ms;
  --dsr-dur-base:200ms;
  --dsr-dur-slow:320ms;
  --dsr-ease-out:cubic-bezier(0.22,1,0.36,1);
  --dsr-ease-in-out:cubic-bezier(0.65,0,0.35,1);
  /* DSH's own brand-primary token is near-black (its primary buttons are black), so the
     blue accent is this plugin's own, matched to the blue DSH already uses (tabs, send). */
  --dsr-brand:#3370ff;
  --dsr-brand-light:color-mix(in srgb,var(--dsr-brand) 70%,#7fd0ff);
  --dsr-brand-deep:color-mix(in srgb,var(--dsr-brand) 78%,#0b1f4d);
}

/* ---------- 1. Light neutrals (blue-tinted greys; brand blue untouched) ---------- */
body{
  --dsw-alias-bg-base:#ffffff !important;
  --dsw-alias-surface-2:#f5f7fa !important;
  --dsw-alias-label-primary:#101828 !important;
  --dsw-alias-label-secondary:#4a5565 !important;
  --dsw-alias-label-tertiary:#667085 !important;
  --dsw-alias-text-primary:#101828 !important;
  --dsw-alias-text-secondary:#4a5565 !important;
  --dsw-alias-border-l1:#e3e7ee !important;
  --dsw-alias-border-l2:#d6dce6 !important;
  --dsw-alias-border-l2-darkmode-thin:#d6dce6 !important;
  --dsw-alias-interactive-bg-hover:rgba(16,24,40,0.05) !important;
  --dsw-alias-bg-hover:rgba(16,24,40,0.05) !important;
  --dsw-alias-interactive-bg-hover-danger:rgba(196,50,31,0.10) !important;
  --dsw-alias-bg-danger:rgba(196,50,31,0.10) !important;
  --dsw-alias-state-error-primary:#c4321f !important;
  --dsw-alias-text-danger:#c4321f !important;
  --dsw-alias-border-danger:#c4321f !important;
  --dsw-alias-state-success-primary:#0f7a4f !important;
  --dsw-alias-text-success:#0f7a4f !important;
  --dsw-alias-state-warning-primary:#8a5a00 !important;
  --dsw-alias-text-warning:#8a5a00 !important;
  --dsw-specific-bubble:#eaf1ff !important;
  --dsw-specific-input-major:#ffffff !important;
  --dsw-shadow-lv1:0 1px 2px rgba(16,24,40,0.06), 0 4px 14px rgba(16,24,40,0.06) !important;
}

/* ---------- 2. Dark neutrals ---------- */
body[data-ds-dark-theme]:not([data-ds-dark-theme="false"]){
  --dsw-alias-bg-base:#0e1117 !important;
  --dsw-alias-surface-2:#161b24 !important;
  --dsw-alias-label-primary:#eef2f8 !important;
  --dsw-alias-label-secondary:#a3adbd !important;
  --dsw-alias-label-tertiary:#8a94a6 !important;
  --dsw-alias-text-primary:#eef2f8 !important;
  --dsw-alias-text-secondary:#a3adbd !important;
  --dsw-alias-border-l1:#263041 !important;
  --dsw-alias-border-l2:#2f3b50 !important;
  --dsw-alias-border-l2-darkmode-thin:#2f3b50 !important;
  --dsw-alias-interactive-bg-hover:rgba(238,242,248,0.07) !important;
  --dsw-alias-bg-hover:rgba(238,242,248,0.07) !important;
  --dsw-alias-interactive-bg-hover-danger:rgba(255,123,104,0.14) !important;
  --dsw-alias-bg-danger:rgba(255,123,104,0.14) !important;
  --dsw-alias-state-error-primary:#ff7b68 !important;
  --dsw-alias-text-danger:#ff7b68 !important;
  --dsw-alias-border-danger:#ff7b68 !important;
  --dsw-alias-state-success-primary:#4cc38a !important;
  --dsw-alias-text-success:#4cc38a !important;
  --dsw-alias-state-warning-primary:#e0a93b !important;
  --dsw-alias-text-warning:#e0a93b !important;
  --dsw-specific-bubble:#1b2f5c !important;
  --dsw-specific-input-major:#161b24 !important;
  --dsw-shadow-lv1:0 1px 2px rgba(0,0,0,0.4), 0 4px 14px rgba(0,0,0,0.35) !important;
}

body[data-ds-dark-theme]:not([data-ds-dark-theme="false"]){
  --dsr-brand:#5b8cff;
}

/* ---------- 3. Type: Chinese-first system stack, crisper rendering ---------- */
body{
  --ds-font-family:"Segoe UI Variable Text","Segoe UI","Microsoft YaHei UI","PingFang SC","HarmonyOS Sans SC",system-ui,sans-serif !important;
  --ds-font-family-code:"JetBrains Mono","Cascadia Code","SF Mono",ui-monospace,Consolas,monospace !important;
  -webkit-font-smoothing:antialiased;
  text-rendering:optimizeLegibility;
}

/* ---------- 4. Motion: quiet feedback, only where the app has none ----------
   Selectors are element-level or :where() (specificity 0), so any transition
   or transform DSH already defines on a component keeps winning. */
:where(button, [role="button"], [role="menuitem"], [role="tab"], a, summary, select, input, textarea){
  transition:
    background-color var(--dsr-dur-fast) var(--dsr-ease-out),
    color var(--dsr-dur-fast) var(--dsr-ease-out),
    border-color var(--dsr-dur-fast) var(--dsr-ease-out),
    box-shadow var(--dsr-dur-base) var(--dsr-ease-out),
    opacity var(--dsr-dur-fast) var(--dsr-ease-out);
}
:where(button:active:not(:disabled), [role="button"]:active:not([aria-disabled="true"])){
  transform:scale(0.98);
}
::selection{background:color-mix(in srgb,var(--dsr-brand) 24%,transparent)}

/* ---------- 4b. Composer: a floating card with a gradient hairline on focus ---------- */
[data-dsr-composer]{
  box-shadow:0 10px 30px rgba(16,24,40,0.07), 0 2px 6px rgba(16,24,40,0.05);
  transition:border-color var(--dsr-dur-base) var(--dsr-ease-out), box-shadow var(--dsr-dur-base) var(--dsr-ease-out), transform var(--dsr-dur-base) var(--dsr-ease-out);
}
body[data-ds-dark-theme]:not([data-ds-dark-theme="false"]) [data-dsr-composer]{
  box-shadow:0 10px 30px rgba(0,0,0,0.45), 0 2px 6px rgba(0,0,0,0.35);
}
[data-dsr-composer]::before{
  content:"";position:absolute;inset:-1px;border-radius:inherit;padding:1.5px;pointer-events:none;
  background:linear-gradient(115deg,var(--dsr-brand),var(--dsr-brand-light),var(--dsr-brand),var(--dsr-brand-light));
  background-size:300% 100%;
  -webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);
  -webkit-mask-composite:xor;mask-composite:exclude;
  opacity:0;transition:opacity var(--dsr-dur-base) var(--dsr-ease-out);
}
[data-dsr-composer]:focus-within::before{opacity:1;animation:dsr-sheen 5s linear infinite}
[data-dsr-composer]:focus-within{
  box-shadow:
    0 0 0 4px color-mix(in srgb,var(--dsr-brand) 10%,transparent),
    0 14px 38px color-mix(in srgb,var(--dsr-brand) 16%,transparent) !important;
}
@keyframes dsr-sheen{from{background-position:0% 0}to{background-position:300% 0}}

/* Send button: a solid brand gradient when it can be used, a little lift on hover */
[data-dsr-send]:not(:disabled):not([aria-disabled="true"]){
  background-image:linear-gradient(135deg,var(--dsr-brand-light),var(--dsr-brand)) !important;
  color:#fff !important;
  box-shadow:0 4px 14px color-mix(in srgb,var(--dsr-brand) 38%,transparent);
  transition:transform var(--dsr-dur-fast) var(--dsr-ease-out), box-shadow var(--dsr-dur-base) var(--dsr-ease-out), filter var(--dsr-dur-fast) var(--dsr-ease-out);
}
[data-dsr-send]:not(:disabled):not([aria-disabled="true"]):hover{
  transform:translateY(-1px);
  box-shadow:0 8px 20px color-mix(in srgb,var(--dsr-brand) 46%,transparent);
  filter:saturate(1.08);
}
[data-dsr-send]:not(:disabled):not([aria-disabled="true"]):active{
  transform:translateY(0) scale(0.94);
  transition-duration:60ms;
}

/* ---------- 4c. Messages ---------- */
/* Your message: a deep-to-bright brand gradient bubble with white text */
[data-dsr-bubble]{
  background-image:linear-gradient(135deg,var(--dsr-brand),var(--dsr-brand-deep)) !important;
  background-color:var(--dsr-brand) !important;
  color:#fff !important;
  border-radius:18px 18px 6px 18px !important;
  box-shadow:0 6px 18px color-mix(in srgb,var(--dsr-brand) 22%,transparent);
  animation:dsr-rise var(--dsr-dur-base) var(--dsr-ease-out) both;
}
[data-dsr-bubble] *{color:inherit}
@keyframes dsr-rise{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}

/* Assistant reply: roomier and larger, code blocks softened */
[data-chat-flow-kind="assistant-step"]{font-size:15px}
[data-chat-flow-kind="assistant-step"] :is(p,li){line-height:1.82}
[data-chat-flow-kind="assistant-step"] p{margin-block:0.7em}
[data-chat-flow-kind="assistant-step"] pre{
  border-radius:14px;
  border:1px solid var(--dsw-alias-border-l1);
  box-shadow:0 1px 2px rgba(16,24,40,0.04);
}
[data-chat-flow-kind="assistant-step"] blockquote{
  border-radius:0 10px 10px 0;
}

/* ---------- 4e. Sidebar: gentle hover, selected row with a brand wash ---------- */
[data-row-key^="session:"][role="treeitem"]{
  transition:background-color var(--dsr-dur-fast) var(--dsr-ease-out), color var(--dsr-dur-fast) var(--dsr-ease-out);
}
[data-row-key^="session:"][role="treeitem"]:hover{
  background-color:color-mix(in srgb,var(--dsr-brand) 7%,transparent);
}
[data-row-key^="session:"][role="treeitem"]:is([aria-selected="true"],[aria-current="true"],[data-selected="true"],.ld-row-selected){
  background-image:linear-gradient(90deg,color-mix(in srgb,var(--dsr-brand) 15%,transparent),color-mix(in srgb,var(--dsr-brand) 3%,transparent));
  font-weight:500;
}

/* ---------- 4d. Slim scrollbars through DSH's own scrollbar tokens ---------- */
body{
  --dsh-scrollbar-thumb:rgba(16,24,40,0.16) !important;
  --dsh-scrollbar-thumb-hover:rgba(16,24,40,0.32) !important;
}
body[data-ds-dark-theme]:not([data-ds-dark-theme="false"]){
  --dsh-scrollbar-thumb:rgba(238,242,248,0.18) !important;
  --dsh-scrollbar-thumb-hover:rgba(238,242,248,0.34) !important;
}

/* ---------- 5. Respect reduced motion ---------- */
@media (prefers-reduced-motion:reduce){
  *,*::before,*::after{
    animation-duration:0.01ms !important;
    animation-iteration-count:1 !important;
    transition-duration:0.01ms !important;
    scroll-behavior:auto !important;
  }
}
`;

function injectCss() {
  if (typeof document === "undefined") return function () {};
  var existing = document.querySelector("style[data-plugin-css=" + JSON.stringify(STYLE_TAG) + "]");
  if (existing) existing.remove();
  var tag = document.createElement("style");
  tag.dataset.plugin = PLUGIN;
  tag.dataset.pluginCss = STYLE_TAG;
  tag.textContent = STYLE_CSS;
  document.head.appendChild(tag);
  return function () { tag.remove(); };
}

var name = "refined-ui";
var inject = [];

// Tag a few surfaces so CSS can style them without relying on hashed class names.
// Read-only apart from data-dsr-* attributes (and position:relative on the composer
// card when it is static, needed for its gradient hairline). Everything is undone on dispose.
function watchSurfaces() {
  if (typeof document === "undefined") return function () {};
  var tagged = new Set();
  var relativized = new Set();
  var frame = 0;

  function mark(node, attr) { node.setAttribute(attr, ""); tagged.add([node, attr]); }

  function findComposer(input) {
    var node = input.parentElement;
    for (var depth = 0; node && node !== document.body && depth < 8; depth++, node = node.parentElement) {
      var cs = getComputedStyle(node);
      var round = parseFloat(cs.borderTopLeftRadius) >= 14;
      var framed = cs.boxShadow !== "none" || parseFloat(cs.borderTopWidth) > 0;
      if (round && framed) return node;
    }
    return null;
  }

  function tagComposer() {
    var inputs = document.querySelectorAll("[data-composer-input]");
    for (var i = 0; i < inputs.length; i++) {
      var input = inputs[i];
      var card = input.closest("[data-dsr-composer]");
      if (!card) {
        card = findComposer(input);
        if (!card) continue;
        mark(card, "data-dsr-composer");
        if (getComputedStyle(card).position === "static") {
          card.style.position = "relative";
          relativized.add(card);
        }
      }
      if (card.querySelector("[data-dsr-send]")) continue;
      // The send button is the right-most button in the card.
      var buttons = card.querySelectorAll("button,[role=\"button\"]");
      var best = null, bestRight = -1;
      for (var j = 0; j < buttons.length; j++) {
        var r = buttons[j].getBoundingClientRect();
        if (r.width > 0 && r.right >= bestRight) { best = buttons[j]; bestRight = r.right; }
      }
      if (best) mark(best, "data-dsr-send");
    }
  }

  function tagBubbles() {
    var rows = document.querySelectorAll("[data-chat-flow-kind=\"user\"],[data-chat-flow-kind=\"steering\"]");
    for (var i = 0; i < rows.length; i++) {
      var row = rows[i];
      if (row.querySelector("[data-dsr-bubble]")) continue;
      var els = row.querySelectorAll("*");
      for (var j = 0; j < els.length && j < 60; j++) {
        var el = els[j];
        if (el.tagName === "BUTTON" || el.tagName === "SVG" || !el.textContent || !el.textContent.trim()) continue;
        var cs = getComputedStyle(el);
        var bg = cs.backgroundColor;
        var hasBg = bg && bg !== "transparent" && bg !== "rgba(0, 0, 0, 0)";
        if (hasBg && parseFloat(cs.borderTopLeftRadius) >= 10) { mark(el, "data-dsr-bubble"); break; }
      }
    }
  }

  function run() { frame = 0; tagComposer(); tagBubbles(); }
  function schedule() { if (!frame) frame = requestAnimationFrame(run); }
  var observer = new MutationObserver(schedule);
  observer.observe(document.body, { childList: true, subtree: true });
  schedule();
  return function () {
    observer.disconnect();
    if (frame) cancelAnimationFrame(frame);
    tagged.forEach(function (pair) { pair[0].removeAttribute(pair[1]); });
    tagged.clear();
    relativized.forEach(function (n) { n.style.position = ""; });
    relativized.clear();
  };
}


// ---- Diagnostics: press Ctrl+Alt+D to show (and copy) what this plugin sees. ----
// Read-only: walks the DOM and prints tag/class/data-* and a few computed styles.
function describe(el) {
  var cs = getComputedStyle(el);
  var attrs = [];
  for (var i = 0; i < el.attributes.length; i++) {
    var a = el.attributes[i];
    if (a.name === "style") continue;
    var v = a.value.length > 40 ? a.value.slice(0, 40) + "…" : a.value;
    attrs.push(a.name + (v ? "=" + v : ""));
  }
  return el.tagName.toLowerCase() + " [" + attrs.join(" ") + "] bg=" + cs.backgroundColor +
    " r=" + cs.borderTopLeftRadius + " sh=" + (cs.boxShadow === "none" ? "none" : "yes");
}
function outline(el, depth, max, lines, pad) {
  if (!el || depth > max || lines.length > 70) return;
  lines.push(pad + describe(el));
  for (var i = 0; i < el.children.length && i < 6; i++) outline(el.children[i], depth + 1, max, lines, pad + "  ");
}
function diagnostics() {
  var L = [];
  var q = function (s) { return document.querySelectorAll(s).length; };
  L.push("dsh-refined-ui 0.3.2 | tags: composer=" + q("[data-dsr-composer]") + " send=" + q("[data-dsr-send]") + " bubble=" + q("[data-dsr-bubble]"));
  L.push("user rows=" + q("[data-chat-flow-kind=\"user\"]") + " assistant=" + q("[data-chat-flow-kind=\"assistant-step\"]") + " sidebar rows=" + q("[data-row-key^=\"session:\"]") + " composer inputs=" + q("[data-composer-input]"));
  var user = document.querySelector("[data-chat-flow-kind=\"user\"]");
  L.push("-- first user row"); if (user) outline(user, 0, 4, L, ""); else L.push("(none)");
  var row = document.querySelector("[data-row-key^=\"session:\"][aria-selected=\"true\"]") || document.querySelector("[data-row-key^=\"session:\"]");
  L.push("-- a sidebar row"); if (row) outline(row, 0, 1, L, ""); else L.push("(none)");
  var input = document.querySelector("[data-composer-input]");
  L.push("-- composer ancestors");
  for (var n = input, d = 0; n && n !== document.body && d < 7; n = n.parentElement, d++) L.push(describe(n));
  return L.join("\n");
}
function watchDiagnostics() {
  if (typeof document === "undefined") return function () {};
  var panel = null;
  function close() { if (panel) { panel.remove(); panel = null; } }
  function onKey(e) {
    if (!(e.ctrlKey && e.altKey && (e.key === "d" || e.key === "D"))) return;
    e.preventDefault();
    if (panel) { close(); return; }
    var text = diagnostics();
    try { navigator.clipboard.writeText(text); } catch (err) {}
    panel = document.createElement("pre");
    panel.dataset.plugin = PLUGIN;
    panel.textContent = text;
    panel.style.cssText = "position:fixed;z-index:2147483647;right:12px;bottom:12px;max-width:760px;max-height:70vh;overflow:auto;margin:0;padding:10px 12px;background:#0b1220;color:#dbe7ff;font:11px/1.45 ui-monospace,Consolas,monospace;border-radius:10px;white-space:pre-wrap;box-shadow:0 10px 30px rgba(0,0,0,.4)";
    document.body.appendChild(panel);
  }
  document.addEventListener("keydown", onKey, true);
  return function () { document.removeEventListener("keydown", onKey, true); close(); };
}

function apply(ctx) {
  // Everything is tied to the plugin lifecycle: disabling the plugin removes the
  // style tag, the observer and the attribute.
  ctx.effect(function () { return injectCss(); }, PLUGIN + ": style");
  ctx.effect(function () { return watchSurfaces(); }, PLUGIN + ": surface tags");
  ctx.effect(function () { return watchDiagnostics(); }, PLUGIN + ": diagnostics");
}

module.exports = { name: name, apply: apply, inject: inject };
return module.exports; } });
