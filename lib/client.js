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
::selection{background:color-mix(in srgb,var(--dsw-alias-brand-primary,#1f5fd6) 24%,transparent)}

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

function apply(ctx) {
  // Tie the style tag to the plugin lifecycle so disabling the plugin removes it.
  ctx.effect(function () { return injectCss(); }, PLUGIN + ": style");
}

module.exports = { name: name, apply: apply, inject: inject };
return module.exports; } });
