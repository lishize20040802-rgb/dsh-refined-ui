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
  --dsr-brand-ink:#1f4fc4;
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
  --dsr-brand-ink:#9dbcff;
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
/* Your message: the same soft brand wash as the selected sidebar row, dark text */
[data-dsr-bubble]{
  background-image:linear-gradient(90deg,color-mix(in srgb,var(--dsr-brand) 20%,transparent),color-mix(in srgb,var(--dsr-brand) 7%,transparent)) !important;
  background-color:transparent !important;
  color:var(--dsw-alias-label-primary) !important;
  border-radius:18px 18px 6px 18px !important;
  box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--dsr-brand) 16%,transparent);
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


/* ---------- 4f. Spotlight: a soft glow that follows the pointer ---------- */
[data-row-key^="session:"][role="treeitem"]:hover:not(:is([aria-selected="true"],[aria-current="true"],[data-selected="true"],.ld-row-selected)){
  background-image:radial-gradient(160px circle at var(--dsr-mx,50%) var(--dsr-my,50%),color-mix(in srgb,var(--dsr-brand) 18%,transparent),transparent 72%);
}
[data-dsr-composer]:hover:not(:focus-within){
  background-image:radial-gradient(360px circle at var(--dsr-mx,50%) var(--dsr-my,50%),color-mix(in srgb,var(--dsr-brand) 7%,transparent),transparent 70%);
}

/* ---------- 4g. Live state: the composer glows while DSH is answering ---------- */
body[data-dsr-busy] [data-dsr-composer]::before{opacity:1;padding:2.5px;animation:dsr-sheen 1.6s linear infinite}
body[data-dsr-busy] [data-dsr-composer]{
  animation:dsr-breathe 1.9s ease-in-out infinite;
}
@keyframes dsr-breathe{
  0%,100%{box-shadow:0 0 0 0 color-mix(in srgb,var(--dsr-brand) 0%,transparent),0 0 18px 0 color-mix(in srgb,var(--dsr-brand) 22%,transparent)}
  50%{box-shadow:0 0 0 7px color-mix(in srgb,var(--dsr-brand) 20%,transparent),0 0 56px 6px color-mix(in srgb,var(--dsr-brand) 48%,transparent)}
}
/* When an answer finishes, one ring expands from the composer */
[data-dsr-composer][data-dsr-done]{animation:dsr-done 900ms var(--dsr-ease-out) 1}
@keyframes dsr-done{
  0%{box-shadow:0 0 0 0 color-mix(in srgb,var(--dsr-brand) 60%,transparent)}
  100%{box-shadow:0 0 0 26px color-mix(in srgb,var(--dsr-brand) 0%,transparent)}
}

/* ---------- 4h. Command palette (Ctrl/Cmd + K) ---------- */
.dsr-pal-backdrop{
  position:fixed;inset:0;z-index:2147483000;display:flex;justify-content:center;align-items:flex-start;padding-top:14vh;
  background:color-mix(in srgb,#0b1220 32%,transparent);
  -webkit-backdrop-filter:blur(8px) saturate(1.1);backdrop-filter:blur(8px) saturate(1.1);
  animation:dsr-fade var(--dsr-dur-base) var(--dsr-ease-out) both;
}
.dsr-pal{
  position:relative;width:min(600px,92vw);overflow:hidden;border-radius:20px;
  background:var(--dsw-alias-bg-base,#fff);color:var(--dsw-alias-label-primary,#101828);
  border:1px solid var(--dsw-alias-border-l2,#d6dce6);
  box-shadow:0 24px 70px rgba(11,18,32,0.35);
  font:14px/1.5 var(--ds-font-family,system-ui,sans-serif);
  animation:dsr-pop var(--dsr-dur-base) var(--dsr-ease-out) both;
}
.dsr-pal::before{
  content:"";position:absolute;left:0;right:0;top:0;height:2px;
  background:linear-gradient(90deg,var(--dsr-brand),var(--dsr-brand-light),var(--dsr-brand));
  background-size:200% 100%;animation:dsr-sheen 6s linear infinite;
}
.dsr-pal-input{
  display:block;width:100%;box-sizing:border-box;padding:18px 20px;border:0;outline:0;background:transparent;
  color:inherit;font:inherit;font-size:16px;border-bottom:1px solid var(--dsw-alias-border-l1,#e3e7ee);
}
.dsr-pal-input::placeholder{color:var(--dsw-alias-label-tertiary,#667085)}
.dsr-pal-list{max-height:min(52vh,420px);overflow:auto;padding:8px}
.dsr-pal-item{
  display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:12px;cursor:pointer;
  transition:background-color var(--dsr-dur-fast) var(--dsr-ease-out);
}
.dsr-pal-item[aria-selected="true"]{
  background-image:linear-gradient(90deg,color-mix(in srgb,var(--dsr-brand) 20%,transparent),color-mix(in srgb,var(--dsr-brand) 7%,transparent));
}
.dsr-pal-kind{
  flex:none;font-size:11px;line-height:18px;padding:0 8px;border-radius:999px;
  background:color-mix(in srgb,var(--dsr-brand) 12%,transparent);color:var(--dsr-brand-ink);
}
.dsr-pal-title{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.dsr-pal-sub{flex:none;font-size:12px;color:var(--dsw-alias-label-tertiary,#667085)}
.dsr-pal-empty{padding:22px;text-align:center;color:var(--dsw-alias-label-tertiary,#667085)}
.dsr-pal-foot{
  display:flex;gap:16px;padding:9px 20px;font-size:12px;color:var(--dsw-alias-label-tertiary,#667085);
  border-top:1px solid var(--dsw-alias-border-l1,#e3e7ee);
}
@keyframes dsr-fade{from{opacity:0}to{opacity:1}}
@keyframes dsr-pop{from{opacity:0;transform:translateY(8px) scale(0.98)}to{opacity:1;transform:none}}

/* ---------- 4i. Click ripple + magnetic send ---------- */
.dsr-ripple {
  position: fixed; z-index: 2147483000; pointer-events: none;
  width: 20px; height: 20px; margin: -10px 0 0 -10px; border-radius: 50%;
  border: 2px solid color-mix(in srgb, var(--dsr-brand) 75%, transparent);
  background: radial-gradient(circle, color-mix(in srgb, var(--dsr-brand) 45%, transparent), color-mix(in srgb, var(--dsr-brand) 12%, transparent) 60%, transparent 72%);
  animation: dsr-ripple 650ms var(--dsr-ease-out) forwards;
}
@keyframes dsr-ripple { 0% { transform: scale(.3); opacity: 1; } 100% { transform: scale(7); opacity: 0; } }
[data-dsr-send] { transition: transform 160ms var(--dsr-ease-out), box-shadow 160ms var(--dsr-ease-out) !important; }

/* ---------- 4j. Edge glow: while the agent is running, the conversation's top/left/right edges glow and flow (computer-use style) ---------- */
.dsr-aurora{
  position:fixed;z-index:5;pointer-events:none;overflow:hidden;
  opacity:0;transition:opacity 600ms var(--dsr-ease-out);
  mix-blend-mode:multiply;
  box-shadow:
    inset 0 0 0 2px color-mix(in srgb,var(--dsr-brand) 70%,transparent),
    inset 0 0 26px 4px color-mix(in srgb,var(--dsr-brand) 62%,transparent),
    inset 0 0 90px 10px color-mix(in srgb,var(--dsr-brand) 30%,transparent);
}
body[data-ds-dark-theme]:not([data-ds-dark-theme="false"]) .dsr-aurora{mix-blend-mode:screen}
.dsr-aurora i,.dsr-aurora b{display:none}
.dsr-aurora::before{
  content:"";position:absolute;inset:0;padding:18px 16px 0;
  background:linear-gradient(105deg,var(--dsr-brand),var(--dsr-brand-light),#b48cff,var(--dsr-brand-light),var(--dsr-brand));
  background-size:300% 100%;
  -webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);
  -webkit-mask-composite:xor;mask-composite:exclude;
  filter:blur(14px);opacity:.75;
}
body[data-dsr-busy] .dsr-aurora{opacity:1;animation:dsr-edge 2.2s ease-in-out infinite}
body[data-dsr-busy] .dsr-aurora::before{animation:dsr-flow 3.4s linear infinite}
@keyframes dsr-edge{0%,100%{filter:brightness(.78) saturate(1.05)}50%{filter:brightness(1.22) saturate(1.3)}}
@keyframes dsr-flow{to{background-position:-300% 0}}
body[data-ds-dark-theme]:not([data-ds-dark-theme="false"])[data-dsr-busy] .dsr-aurora{opacity:.8}
/* While answering, the send button wears a spinning light ring */
body[data-dsr-busy] [data-dsr-send]{position:relative}
body[data-dsr-busy] [data-dsr-send]::after{
  content:"";position:absolute;inset:-4px;border-radius:50%;padding:2.5px;pointer-events:none;
  background:conic-gradient(from 0deg,transparent 0 40%,var(--dsr-brand-light) 70%,#fff 100%);
  -webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);
  -webkit-mask-composite:xor;mask-composite:exclude;
  animation:dsr-spin 1.1s linear infinite;
}
@keyframes dsr-spin{to{transform:rotate(360deg)}}
.dsr-fx{position:fixed;inset:0;width:100vw;height:100vh;z-index:2147482000;pointer-events:none}

/* ---------- 4k. Task constellation: draggable glass windows linked by flowing lines ---------- */
.dsr-graph{position:fixed;inset:0;z-index:2147481000;pointer-events:none}
.dsr-graph-lines{position:absolute;left:0;top:0;overflow:visible;pointer-events:none}
.dsr-line{fill:none;stroke:color-mix(in srgb,var(--dsr-brand) 55%,transparent);stroke-width:1.6;stroke-linecap:round}
.dsr-line[data-state="working"]{stroke:var(--dsr-brand);stroke-width:2;stroke-dasharray:7 9;animation:dsr-dash .9s linear infinite;filter:drop-shadow(0 0 4px color-mix(in srgb,var(--dsr-brand) 70%,transparent))}
.dsr-line[data-state="completed"]{stroke-opacity:.45}
.dsr-line[data-state="queued"]{stroke-dasharray:2 6;stroke-opacity:.5}
.dsr-node{fill:var(--dsr-brand)}
.dsr-node[data-state="working"]{animation:dsr-pulse-dot 1.2s ease-in-out infinite}
@keyframes dsr-dash{to{stroke-dashoffset:-16}}
@keyframes dsr-pulse-dot{0%,100%{r:3.5}50%{r:6}}
.dsr-win{
  position:absolute;left:0;top:0;width:236px;pointer-events:auto;box-sizing:border-box;
  border-radius:16px;padding:0;overflow:hidden;
  background:color-mix(in srgb,var(--dsw-alias-bg-base,#fff) 78%,transparent);
  -webkit-backdrop-filter:blur(16px) saturate(1.3);backdrop-filter:blur(16px) saturate(1.3);
  border:1px solid color-mix(in srgb,var(--dsr-brand) 26%,var(--dsw-alias-border-l2,#d6dce6));
  box-shadow:0 10px 34px color-mix(in srgb,var(--dsr-brand) 18%,transparent),0 2px 8px rgba(16,24,40,.08);
  color:var(--dsw-alias-label-primary,#101828);
  animation:dsr-pop 260ms var(--dsr-ease-out) both;
  transition:box-shadow 240ms var(--dsr-ease-out),border-color 240ms var(--dsr-ease-out);
}
.dsr-win[data-state="working"]{border-color:color-mix(in srgb,var(--dsr-brand) 60%,transparent);animation:dsr-pop 260ms var(--dsr-ease-out) both,dsr-winglow 1.8s ease-in-out infinite}
@keyframes dsr-winglow{0%,100%{box-shadow:0 10px 34px color-mix(in srgb,var(--dsr-brand) 20%,transparent),0 0 0 0 color-mix(in srgb,var(--dsr-brand) 0%,transparent)}50%{box-shadow:0 10px 40px color-mix(in srgb,var(--dsr-brand) 42%,transparent),0 0 0 4px color-mix(in srgb,var(--dsr-brand) 16%,transparent)}}
.dsr-win.dsr-dragging{box-shadow:0 22px 50px color-mix(in srgb,var(--dsr-brand) 34%,transparent);cursor:grabbing}
.dsr-win-head{display:flex;align-items:center;gap:8px;padding:9px 10px 7px 12px;cursor:grab;touch-action:none;user-select:none;-webkit-user-select:none}
.dsr-win[data-root="1"] .dsr-win-head{background:linear-gradient(90deg,color-mix(in srgb,var(--dsr-brand) 16%,transparent),transparent)}
.dsr-win-dot{flex:none;width:9px;height:9px;border-radius:50%;background:#98a2b3}
.dsr-win[data-state="working"] .dsr-win-dot{background:radial-gradient(circle at 35% 35%,var(--dsr-brand-light),var(--dsr-brand));box-shadow:0 0 0 0 color-mix(in srgb,var(--dsr-brand) 50%,transparent);animation:dsr-ping 1.3s ease-out infinite}
.dsr-win[data-state="completed"] .dsr-win-dot{background:#2bb673}
@keyframes dsr-ping{to{box-shadow:0 0 0 8px color-mix(in srgb,var(--dsr-brand) 0%,transparent)}}
.dsr-win-title{flex:1;min-width:0;font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.dsr-win-x{flex:none;width:20px;height:20px;border:0;border-radius:6px;background:transparent;color:inherit;opacity:.45;cursor:pointer;font-size:15px;line-height:1;padding:0}
.dsr-win-x:hover{opacity:1;background:color-mix(in srgb,var(--dsr-brand) 14%,transparent)}
.dsr-win-body{display:flex;justify-content:space-between;align-items:center;padding:0 12px 10px 29px;font-size:12px;color:var(--dsw-alias-label-secondary,#4a5565)}
.dsr-win-time{font-variant-numeric:tabular-nums;color:var(--dsr-brand-ink)}

/* Hologram entry button (lives in the conversation header) */
.dsr-holo-btn{display:inline-flex;align-items:center;gap:6px;height:28px;padding:0 12px;margin:0 4px;border-radius:999px;cursor:pointer;
  font:inherit;font-size:12.5px;font-weight:600;color:var(--dsr-brand-ink);
  border:1px solid color-mix(in srgb,var(--dsr-brand) 42%,transparent);
  background:linear-gradient(135deg,color-mix(in srgb,var(--dsr-brand) 14%,transparent),color-mix(in srgb,#9b7bff 14%,transparent));
  transition:box-shadow 200ms var(--dsr-ease-out),transform 200ms var(--dsr-ease-out)}
.dsr-holo-btn:hover{box-shadow:0 0 0 3px color-mix(in srgb,var(--dsr-brand) 16%,transparent),0 6px 18px color-mix(in srgb,var(--dsr-brand) 28%,transparent);transform:translateY(-1px)}
.dsr-holo-btn-ic{font-size:14px;line-height:1;filter:drop-shadow(0 0 4px var(--dsr-brand))}
/* ---------- 4l. Hologram ---------- */
.dsr-holo{position:fixed;inset:0;z-index:2147483100;opacity:0;transition:opacity 260ms var(--dsr-ease-out);overflow:hidden;
  /* the deep, painterly blue of the DeepSeek Harness site */
  background:
    radial-gradient(ellipse 52% 46% at 24% 27%,rgba(92,122,166,.78),transparent 70%),
    radial-gradient(ellipse 58% 50% at 82% 10%,rgba(70,108,170,.7),transparent 72%),
    radial-gradient(ellipse 44% 56% at 4% 94%,rgba(5,10,22,.95),transparent 72%),
    radial-gradient(ellipse 72% 62% at 56% 58%,#2b5288,transparent 76%),
    linear-gradient(165deg,#1a3762 0%,#12264a 55%,#0a1529 100%);
  color:#dcebff;font-family:var(--ds-font-family,system-ui,sans-serif)}
.dsr-holo::before{content:"";position:absolute;inset:-10%;pointer-events:none;opacity:.55;
  background:radial-gradient(ellipse 34% 30% at 30% 30%,rgba(130,165,215,.35),transparent 70%),radial-gradient(ellipse 30% 34% at 75% 65%,rgba(60,110,190,.35),transparent 70%);
  animation:dsr-drift 26s ease-in-out infinite alternate}
@keyframes dsr-drift{0%{transform:translate(-3%,-2%) scale(1)}100%{transform:translate(4%,3%) scale(1.08)}}
.dsr-holo.in{opacity:1}
.dsr-holo-grid{position:absolute;inset:-20%;pointer-events:none;opacity:.5;
  background-image:linear-gradient(rgba(91,160,255,.16) 1px,transparent 1px),linear-gradient(90deg,rgba(91,160,255,.16) 1px,transparent 1px);
  background-size:64px 64px;transform:perspective(700px) rotateX(62deg) translateY(28%);transform-origin:50% 100%;
  -webkit-mask-image:linear-gradient(to top,#000 10%,transparent 70%);mask-image:linear-gradient(to top,#000 10%,transparent 70%)}
.dsr-holo-scan{position:absolute;inset:0;pointer-events:none;opacity:.35;
  background:repeating-linear-gradient(to bottom,rgba(120,190,255,.07) 0 1px,transparent 1px 4px);animation:dsr-scan 7s linear infinite}
@keyframes dsr-scan{to{background-position:0 160px}}
.dsr-holo-svg{position:absolute;inset:0;width:100%;height:100%;cursor:grab;touch-action:none}
.dsr-holo-svg.pan{cursor:grabbing}
.dsr-h-edge{fill:none;stroke:rgba(110,180,255,.42);stroke-linecap:round}
.dsr-h-edge[data-kind="file"]{stroke-dasharray:3 6;stroke:rgba(150,210,255,.4)}
.dsr-h-edge[data-kind="agent"]{stroke:rgba(140,200,255,.7)}
.dsr-h-edge[data-run="1"]{stroke:#7fd0ff;stroke-dasharray:8 10;animation:dsr-dash .8s linear infinite;filter:drop-shadow(0 0 5px #5bb8ff)}
.dsr-h-edge.dim{opacity:.1}
.dsr-h-edge.hot{stroke:#bfe6ff;opacity:1}
.dsr-h-node{cursor:pointer;transition:opacity 200ms}
.dsr-h-node .sh{fill:rgba(40,110,255,.22);stroke:#7fbcff;stroke-width:2;filter:url(#dsr-glow)}
.dsr-h-node[data-type="workspace"] .sh{fill:rgba(90,150,255,.12);stroke:#9cc8ff}
.dsr-h-node[data-type="agent"] .sh{fill:rgba(180,140,255,.28);stroke:#c9b2ff}
.dsr-h-node[data-type="file"] .sh{fill:rgba(120,220,255,.14);stroke:#8fe0ff}
.dsr-h-node[data-state="working"] .sh{stroke:#7fe8ff;fill:rgba(60,170,255,.45);animation:dsr-holo-pulse 1.3s ease-in-out infinite}
.dsr-h-node[data-state="completed"] .sh{stroke:#6fe3b0}
.dsr-h-node .halo{fill:none;stroke:rgba(127,208,255,.5);stroke-width:1.5;stroke-dasharray:4 6;animation:dsr-spin 12s linear infinite;transform-origin:0 0}
.dsr-h-node[data-type="cmd"] .sh{fill:rgba(255,190,90,.14);stroke:#ffc66b}
.dsr-h-node[data-type="cmd"][data-state="working"] .sh{stroke:#ffd98a;fill:rgba(255,190,90,.35)}
.dsr-h-node[data-type="cmd"][data-state="error"] .sh{stroke:#ff8b8b;fill:rgba(255,100,100,.25)}
.dsr-h-node .ic{fill:#ffe2a8;font-size:10px;font-weight:700;pointer-events:none}
.dsr-h-node[data-type="dir"] .sh{fill:rgba(130,160,255,.14);stroke:#a9bcff}
.dsr-h-node[data-type="change"] .sh{fill:rgba(90,230,160,.2);stroke:#6fe3b0}
.dsr-h-node[data-type="change"] .ic{fill:#b6f5d6}
.dsr-h-edge[data-kind="cmd"]{stroke:rgba(255,200,110,.5)}
.dsr-h-edge[data-kind="dir"]{stroke:rgba(150,170,255,.55)}
.dsr-holo-legend .cm{border-radius:3px;border-color:#ffc66b}.dsr-holo-legend .fo{border-color:#a9bcff;border-radius:2px 2px 4px 4px}.dsr-holo-legend .ch{border-color:#6fe3b0}
.dsr-h-node.sel .sh{stroke:#fff;fill:rgba(120,190,255,.5)}
.dsr-h-node.dim{opacity:.14 !important}
.dsr-h-node .lb{fill:#dcebff;font-size:12px;paint-order:stroke;stroke:rgba(4,10,28,.85);stroke-width:3px;pointer-events:none}
@keyframes dsr-holo-pulse{0%,100%{stroke-width:2}50%{stroke-width:5}}
.dsr-holo-hud{position:absolute;inset:0;pointer-events:none}
.dsr-holo-hud > *{pointer-events:auto}
.dsr-holo-top{position:absolute;left:24px;right:24px;top:20px;display:flex;align-items:center;gap:16px}
.dsr-holo-title{font-size:15px;font-weight:700;letter-spacing:.3em;color:#9fd2ff;text-shadow:0 0 12px rgba(91,160,255,.8)}
.dsr-holo-count{font-size:12px;color:#8fb4e6;flex:1}
.dsr-holo-search{width:260px;padding:7px 12px;border-radius:999px;border:1px solid rgba(127,188,255,.4);background:rgba(10,24,56,.6);color:#e8f3ff;outline:none;font-size:13px}
.dsr-holo-search:focus{border-color:#9fd2ff;box-shadow:0 0 14px rgba(91,160,255,.5)}
.dsr-holo-x{width:30px;height:30px;border-radius:50%;border:1px solid rgba(127,188,255,.4);background:rgba(10,24,56,.6);color:#cfe6ff;font-size:18px;cursor:pointer}
.dsr-holo-x:hover{background:rgba(60,120,220,.5)}
.dsr-holo-legend{position:absolute;left:24px;bottom:22px;display:flex;gap:16px;font-size:12px;color:#9ab9e6}
.dsr-holo-legend i{display:inline-block;width:10px;height:10px;margin-right:6px;border:1.5px solid #8fc4ff;vertical-align:-1px}
.dsr-holo-legend .ci{border-radius:50%}.dsr-holo-legend .di{transform:rotate(45deg);border-color:#c9b2ff}.dsr-holo-legend .hx{border-radius:3px}
.dsr-holo-foot{position:absolute;right:24px;bottom:22px;font-size:12px;color:#7fa2d6}
.dsr-holo-detail{position:absolute;right:24px;top:72px;width:280px;max-height:calc(100vh - 160px);overflow:auto;padding:16px;border-radius:16px;
  background:rgba(10,26,62,.66);border:1px solid rgba(127,188,255,.4);box-shadow:0 0 30px rgba(60,130,255,.25),inset 0 0 24px rgba(91,160,255,.08);
  -webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);opacity:0;transform:translateX(14px);pointer-events:none;transition:opacity 220ms,transform 220ms}
.dsr-holo-detail.on{opacity:1;transform:none;pointer-events:auto}
.dsr-holo-detail .k{font-size:11px;letter-spacing:.18em;color:#8fb4e6}
.dsr-holo-detail .t{font-size:16px;font-weight:600;margin:4px 0 6px;color:#fff;word-break:break-all}
.dsr-holo-detail .s{font-size:12px;color:#9fb6d8}.dsr-holo-detail .s[data-state="working"]{color:#7fe8ff}.dsr-holo-detail .s[data-state="completed"]{color:#6fe3b0}
.dsr-holo-detail .d{font-size:12px;color:#8fb4e6;margin-top:6px;word-break:break-all}
.dsr-holo-detail .h{font-size:11px;letter-spacing:.16em;color:#8fb4e6;margin:14px 0 6px}
.dsr-holo-detail button{display:block;width:100%;text-align:left;margin-top:5px;padding:7px 10px;border-radius:9px;border:1px solid rgba(127,188,255,.25);background:rgba(40,100,220,.14);color:#dcebff;font-size:12.5px;cursor:pointer}
.dsr-holo-detail button:hover{background:rgba(60,130,255,.35)}
.dsr-holo-detail .go{margin-top:14px;text-align:center;background:linear-gradient(90deg,#3370ff,#5b8cff);border:0;color:#fff;font-weight:600}

.dsr-holo-cards{position:absolute;inset:0;pointer-events:none;overflow:hidden}
.dsr-hc{position:absolute;left:0;top:0;pointer-events:auto;box-sizing:border-box;border-radius:14px;overflow:hidden;
  background:linear-gradient(160deg,rgba(28,62,130,.62),rgba(10,24,60,.72));border:1px solid rgba(127,188,255,.42);
  box-shadow:0 0 28px rgba(60,130,255,.22),inset 0 0 22px rgba(91,160,255,.08);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);
  color:#dcebff;font-size:12.5px;transition:opacity 200ms,box-shadow 200ms,border-color 200ms;will-change:transform}
.dsr-hc.dim{opacity:.25 !important}
.dsr-hc.sel{border-color:#fff;box-shadow:0 0 40px rgba(120,190,255,.55)}
.dsr-hc[data-state="working"]{border-color:#7fe8ff;animation:dsr-hc-glow 1.8s ease-in-out infinite}
@keyframes dsr-hc-glow{0%,100%{box-shadow:0 0 22px rgba(80,190,255,.3)}50%{box-shadow:0 0 46px rgba(90,210,255,.65)}}
.dsr-hc .hd{display:flex;align-items:center;gap:8px;padding:10px 12px 8px;border-bottom:1px solid rgba(127,188,255,.22);cursor:pointer}
.dsr-hc .dot{flex:none;width:9px;height:9px;border-radius:50%;background:#7a8fb3}
.dsr-hc[data-state="working"] .dot{background:#7fe8ff;box-shadow:0 0 10px #7fe8ff}
.dsr-hc[data-type="agent"] .dot{border-radius:2px;transform:rotate(45deg);background:#c9b2ff}
.dsr-hc .tt{flex:1;min-width:0;font-weight:600;font-size:13.5px;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.dsr-hc .bd{flex:none;font-size:11px;color:#9fd2ff;padding:2px 7px;border-radius:999px;background:rgba(91,160,255,.18)}
.dsr-hc .bdy{padding:8px 12px 12px}
.dsr-hc .sec{margin:8px 0 4px;font-size:11px;letter-spacing:.12em;color:#8fb4e6}
.dsr-hc .cmd{font-family:ui-monospace,Consolas,monospace;font-size:11.5px;color:#ffe2a8;padding:1px 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.dsr-hc .cmd.bad{color:#ff9b9b}
.dsr-hc .dir{color:#a9bcff;margin-top:3px}
.dsr-hc .file{padding-left:14px;color:#cfe4ff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.dsr-hc .file.chg{color:#8ff0c2}
.dsr-hc .mut{color:#7fa2d6;font-size:11.5px;margin-top:6px}
.dsr-hc .chips{display:flex;flex-wrap:wrap;gap:5px}
.dsr-hc .chip{padding:2px 8px;border-radius:999px;font-size:11.5px;border:1px solid rgba(201,178,255,.5);color:#dccfff;background:rgba(150,110,255,.14)}
.dsr-hc .chip[data-state="working"]{border-color:#7fe8ff;color:#bff3ff;background:rgba(60,170,255,.25)}
.dsr-hc .chip[data-state="completed"]{border-color:#6fe3b0;color:#b6f5d6}
.dsr-hc[data-type="hub"] .lst{max-height:min(62vh,460px);overflow:auto;margin:0 -6px;padding:0 6px}
.dsr-hc .gh{margin:10px 0 3px;font-size:11px;letter-spacing:.1em;color:#8fb4e6}
.dsr-hc .row{display:flex;align-items:center;gap:8px;padding:5px 7px;border-radius:8px;cursor:pointer}
.dsr-hc .row:hover{background:rgba(91,160,255,.22)}
.dsr-hc .row.cur{background:rgba(91,160,255,.3)}
.dsr-hc .rd{flex:none;width:7px;height:7px;border-radius:50%;background:#56688c}
.dsr-hc .row.run .rd{background:#7fe8ff;box-shadow:0 0 8px #7fe8ff}
.dsr-hc .rt{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.dsr-orb{display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:50% !important;cursor:pointer;
  background:radial-gradient(circle at 35% 30%,rgba(140,200,255,.55),rgba(30,80,200,.55) 60%,rgba(10,30,90,.8));
  border:1px solid rgba(160,215,255,.7);box-shadow:0 0 34px rgba(80,170,255,.55),inset 0 0 18px rgba(200,235,255,.25);animation:dsr-orb 3.2s ease-in-out infinite}
@keyframes dsr-orb{0%,100%{box-shadow:0 0 26px rgba(80,170,255,.45),inset 0 0 14px rgba(200,235,255,.2)}50%{box-shadow:0 0 50px rgba(110,200,255,.8),inset 0 0 22px rgba(200,235,255,.35)}}
.dsr-orb .ot{font-size:24px;font-weight:700;color:#fff;line-height:1}
.dsr-orb .ol{font-size:10.5px;letter-spacing:.06em;color:#cfe8ff;margin-top:4px}
.dsr-orb[data-state="working"]{border-color:#7fe8ff}
.dsr-hc .x{flex:none;border:0;background:transparent;color:#9fb6d8;cursor:pointer;font-size:15px;line-height:1;padding:2px 6px;border-radius:6px}
.dsr-hc .x:hover{background:rgba(255,255,255,.14);color:#fff}
.dsr-hc.mini .hd{border-bottom:0;padding-bottom:4px}
.dsr-hc.mini .bd{display:none}
.dsr-hc.mini .bdy{padding-top:2px}
.dsr-hc.mini{opacity:.92}
.dsr-hc.big{font-size:14px}
.dsr-hc.big .cmd{font-size:12.5px}
.dsr-hc .chip.act{cursor:pointer;color:#e8f3ff;border-color:rgba(127,188,255,.5);background:rgba(60,130,255,.25);font-family:inherit}
.dsr-hc .chip.act:hover{background:rgba(90,160,255,.5)}
.dsr-hc .gobtn{display:block;margin-top:12px;width:100%;padding:8px;border:0;border-radius:10px;background:linear-gradient(90deg,#3370ff,#5b8cff);color:#fff;font-weight:600;cursor:pointer}
.dsr-h-pillar{stroke:rgba(127,188,255,.22);stroke-width:1;stroke-dasharray:2 5}
.dsr-h-shadow{fill:rgba(91,160,255,.16)}
.dsr-hc.small{border-radius:10px}
.dsr-hc .sm{display:flex;align-items:center;gap:6px;padding:7px 10px}
.dsr-hc.small .ic{color:#a9bcff;font-weight:700}
.dsr-hc.small[data-type="leaf"] .ic{color:#7fa2d6}
.dsr-hc.small.chg{border-color:#6fe3b0}.dsr-hc.small.chg .ic,.dsr-hc.small.chg .nm{color:#8ff0c2}
.dsr-hc.small .nm{flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.dsr-hc.small .ct{font-size:11px;color:#8fb4e6;background:rgba(91,160,255,.2);border-radius:999px;padding:1px 7px}
.dsr-hc[data-type="wsroot"]{border-color:#9cc8ff}
.dsr-hc .gh{display:flex;align-items:center;justify-content:space-between}
.dsr-hc .gent{border:1px solid rgba(127,188,255,.4);background:rgba(60,130,255,.2);color:#cfe6ff;border-radius:999px;font-size:10.5px;padding:1px 8px;cursor:pointer}
.dsr-hc .gent:hover{background:rgba(90,160,255,.5)}
.dsr-holo-hudroot{position:fixed;inset:0;z-index:2147483300;pointer-events:none;opacity:0;transition:opacity 260ms var(--dsr-ease-out)}
.dsr-holo-hudroot.in{opacity:1}
.dsr-holo-front{position:absolute;inset:0;pointer-events:none;overflow:hidden}
.dsr-hc.dsr-snap{background:none;border:0;border-radius:18px;overflow:hidden;-webkit-backdrop-filter:none;backdrop-filter:none;box-shadow:0 20px 60px rgba(0,0,0,.5),0 0 0 1px rgba(127,188,255,.3);cursor:pointer}
.dsr-hc.dsr-snap .snapbody{position:absolute;inset:0;pointer-events:none;overflow:hidden}
.dsr-hc.dsr-snap .snapveil{position:absolute;inset:0;cursor:pointer}
.dsr-hc.dsr-snap:hover{box-shadow:0 24px 70px rgba(60,130,255,.55),0 0 0 2px rgba(160,215,255,.8)}
.dsr-hc.dsr-snap .snapname{position:absolute;left:40px;top:34px;font-size:54px;font-weight:700;color:#fff;background:rgba(10,24,60,.72);padding:6px 26px;border-radius:999px;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);opacity:.92;pointer-events:none}
.dsr-hc.dsr-snap .snapx{position:absolute;right:26px;top:26px;z-index:2;width:84px;height:84px;border-radius:50%;border:0;background:rgba(10,24,60,.78);color:#fff;font-size:56px;line-height:1;cursor:pointer}
.dsr-hc.dsr-snap .snapx:hover{background:rgba(60,130,255,.9)}
.dsr-h-edge[data-kind="list"]{stroke:rgba(140,200,255,.45)}
/* flowing colour on the edge of any card whose work is running, folded or not */
@property --dsr-ang{syntax:"<angle>";inherits:false;initial-value:0deg}
@keyframes dsr-ang{to{--dsr-ang:360deg}}
.dsr-hc[data-state="working"]::after,.dsr-liveframe[data-state="working"]::after{content:"";position:absolute;inset:0;border-radius:inherit;padding:2px;pointer-events:none;z-index:5;
  background:conic-gradient(from var(--dsr-ang),rgba(91,208,255,0) 0deg,#5bd0ff 45deg,#7b8cff 100deg,#d27bff 150deg,#ff8ad0 200deg,#ffd27a 250deg,rgba(255,210,122,0) 310deg,rgba(91,208,255,0) 360deg);
  -webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box exclude,linear-gradient(#000 0 0);mask-composite:exclude;
  animation:dsr-ang 2.4s linear infinite}
.dsr-hc.dsr-snap[data-state="working"]::after,.dsr-liveframe[data-state="working"]::after{padding:7px}
.dsr-liveframe{position:fixed;left:0;top:0;z-index:2147483250;pointer-events:none;transform-origin:50% 50%;border-radius:18px;box-sizing:border-box}
.dsr-liveframe[data-state="working"]{box-shadow:0 0 40px rgba(110,200,255,.5);animation:dsr-hc-glow 1.8s ease-in-out infinite}
.dsr-hc.branch{border-radius:999px;display:flex;align-items:center;gap:7px;padding:7px 12px;cursor:pointer;font-weight:600;font-size:12.5px}
.dsr-hc.branch .ic{font-family:ui-monospace,Consolas,monospace;font-weight:700}
.dsr-hc.branch .nm{flex:1;min-width:0;white-space:nowrap}
.dsr-hc.branch .ct{font-size:11px;border-radius:999px;padding:1px 7px;background:rgba(255,255,255,.14)}
.dsr-hc.branch[data-kind="cmd"]{border-color:rgba(255,200,110,.75)}.dsr-hc.branch[data-kind="cmd"] .ic{color:#ffd98a}
.dsr-hc.branch[data-kind="file"]{border-color:rgba(111,227,176,.75)}.dsr-hc.branch[data-kind="file"] .ic{color:#8ff0c2}
.dsr-hc.branch[data-kind="agent"]{border-color:rgba(201,178,255,.8)}.dsr-hc.branch[data-kind="agent"] .ic{color:#d9c8ff}
.dsr-hc.small[data-leaf="cmd"]{font-family:ui-monospace,Consolas,monospace;font-size:11.5px}
.dsr-hc.small[data-leaf="cmd"] .ic,.dsr-hc.small[data-leaf="cmd"] .nm{color:#ffe2a8}
.dsr-hc.small[data-leaf="cmd"][data-state="error"]{border-color:#ff8b8b}
.dsr-hc.small[data-leaf="cmd"][data-state="error"] .nm{color:#ff9b9b}
.dsr-hc.small[data-leaf="more"]{opacity:.8;border-style:dashed}
.dsr-hc.small.sel{z-index:9999 !important}
.dsr-hc.small.sel .nm{white-space:normal;word-break:break-all}
.dsr-hc.small.sel .sm{align-items:flex-start}
.dsr-hc.wsnode{border-color:#9cc8ff;border-radius:16px}
.dsr-hc.wsnode .hd{cursor:pointer}
.dsr-hc[data-type="agent"] .x{display:none}
.dsr-h-edge[data-kind="branch"]{stroke:rgba(190,225,255,.6);stroke-width:1.6}
.dsr-h-edge[data-kind="ws"]{stroke:rgba(230,242,255,.65);stroke-width:2}
.dsr-h-edge[data-kind="cmd"]{stroke:rgba(255,205,120,.55)}
.dsr-h-edge[data-kind="file"]{stroke:rgba(130,235,190,.5)}
.dsr-core{flex-direction:column;text-align:center}
.dsr-core .ct1{font-size:19px;font-weight:700;letter-spacing:.02em;color:#fff;line-height:1}
.dsr-core .ct2{font-size:10px;letter-spacing:.3em;color:#bfe0ff;margin-top:5px;padding:1px 8px;border:1px solid rgba(191,224,255,.6);border-radius:4px}
.dsr-core .ct3{font-size:10.5px;color:#cfe6ff;margin-top:8px;opacity:.85}
.dsr-hc.sat{border-color:rgba(191,224,255,.7)}.dsr-hc.sat .ic{color:#bfe0ff}
.dsr-hc.sat.off{opacity:.45;cursor:not-allowed}
.dsr-hc.small[data-leaf="conv"] .ic{color:#9fd2ff}
.dsr-h-edge[data-kind="core"]{stroke:rgba(200,230,255,.55);stroke-width:2.2}
.dsr-h-edge[data-kind="sat"]{stroke:rgba(200,230,255,.5);stroke-dasharray:2 5}
.dsr-h-edge[data-kind="moon"]{stroke:rgba(150,200,255,.4);stroke-dasharray:1 5}
.dsr-hc[data-type="wsnode"] .chips{gap:6px}
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
var inject = ["slots", "uiSession", "uiConversation"];

// Tag a few surfaces so CSS can style them without relying on hashed class names.
// Read-only apart from data-dsr-* attributes (and position:relative on the composer
// card when it is static, needed for its gradient hairline). Everything is undone on dispose.
var BUSY = { bridge: false, dom: false, was: false, timer: 0 };
function applyBusy() {
  if (typeof document === "undefined") return;
  var busy = BUSY.bridge || BUSY.dom;
  if (busy) document.body.setAttribute("data-dsr-busy", ""); else document.body.removeAttribute("data-dsr-busy");
  if (BUSY.was && !busy) {
    var card = document.querySelector("[data-dsr-composer]");
    if (card) {
      card.setAttribute("data-dsr-done", "");
      clearTimeout(BUSY.timer);
      BUSY.timer = setTimeout(function () { card.removeAttribute("data-dsr-done"); }, 1000);
    }
  }
  BUSY.was = busy;
}

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

  function trackBusy() {
    BUSY.dom = !!document.querySelector("[data-streaming=\"true\"]");
    applyBusy();
  }

  // Pointer spotlight: expose the pointer position inside sidebar rows and the composer.
  function onMove(e) {
    var t = e.target;
    if (!t || !t.closest) return;
    var host = t.closest("[data-row-key^=\"session:\"],[data-dsr-composer]");
    if (!host) return;
    var r = host.getBoundingClientRect();
    host.style.setProperty("--dsr-mx", (e.clientX - r.left) + "px");
    host.style.setProperty("--dsr-my", (e.clientY - r.top) + "px");
  }
  document.addEventListener("pointermove", onMove, { capture: true, passive: true });

  function run() { frame = 0; tagComposer(); tagBubbles(); trackBusy(); }
  function schedule() { if (!frame) frame = requestAnimationFrame(run); }
  var observer = new MutationObserver(schedule);
  observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["data-streaming"] });
  schedule();
  return function () {
    observer.disconnect();
    document.removeEventListener("pointermove", onMove, true);
    BUSY.dom = false; applyBusy();
    if (frame) cancelAnimationFrame(frame);
    tagged.forEach(function (pair) { pair[0].removeAttribute(pair[1]); });
    tagged.clear();
    relativized.forEach(function (n) { n.style.position = ""; });
    relativized.clear();
  };
}


// ---- Command palette: Ctrl/Cmd + K. Jump to a session or run a sidebar command. ----
// It only clicks elements DSH already renders (session rows, the "新会话" / "插件" entries).
function findClickable(label) {
  var nodes = document.querySelectorAll("button,[role=\"button\"],[role=\"treeitem\"],[role=\"menuitem\"],a,div,span");
  var fallback = null;
  for (var i = 0; i < nodes.length; i++) {
    var n = nodes[i];
    if ((n.textContent || "").trim() !== label || n.closest("[data-dsr-palette]")) continue;
    var role = n.getAttribute("role");
    if (n.tagName === "BUTTON" || n.tagName === "A" || role === "button" || role === "treeitem" || role === "menuitem") return n;
    if (!fallback) fallback = n;
  }
  return fallback;
}
function collectPaletteItems() {
  var items = [];
  [["新会话", "开始一个新的对话"], ["插件", "打开插件页面"], ["自动化任务", "打开自动化任务"]].forEach(function (c) {
    var el = findClickable(c[0]);
    if (el) items.push({ kind: "命令", title: c[0], sub: c[1], run: function () { el.click(); } });
  });
  var fs = FX.state();
  items.push({ kind: "特效", title: "顶部极光：" + (fs.aurora ? "开 → 关" : "关 → 开"), sub: "Agent 工作时，对话顶部亮起流动的蓝光", run: function () { FX.toggle("aurora"); } });
  items.push({ kind: "特效", title: "全息星图", sub: "工作区 / 对话 / 子代理 / 文件的结构图，可缩放聚焦（Alt+H）", run: function () { HOLO.toggle(); } });
  items.push({ kind: "特效", title: "任务星图：" + (GRAPH.pinned ? "开 → 关" : "关 → 开"), sub: "子代理/多任务的可拖动窗口与连线（Alt+G）", run: function () { GRAPH.toggle(); } });
  items.push({ kind: "特效", title: "放烟花", sub: "庆祝一下", run: function () { FX.burst(); } });
  var rows = document.querySelectorAll("[data-row-key^=\"session:\"]");
  for (var i = 0; i < rows.length && i < 80; i++) {
    (function (row) {
      var lines = (row.innerText || "").split("\n").map(function (l) { return l.trim(); }).filter(Boolean);
      if (!lines.length) return;
      items.push({ kind: "会话", title: lines[0], sub: lines.length > 1 ? lines[lines.length - 1] : "", run: function () { row.click(); } });
    })(rows[i]);
  }
  return items;
}
function watchPalette() {
  if (typeof document === "undefined") return function () {};
  var backdrop = null, input = null, list = null, items = [], shown = [], idx = 0;

  function close() { if (backdrop) { backdrop.remove(); backdrop = null; } }
  function render() {
    list.textContent = "";
    if (!shown.length) {
      var empty = document.createElement("div");
      empty.className = "dsr-pal-empty"; empty.textContent = "没有匹配的结果";
      list.appendChild(empty); return;
    }
    shown.forEach(function (it, i) {
      var row = document.createElement("div");
      row.className = "dsr-pal-item"; row.setAttribute("role", "option");
      row.setAttribute("aria-selected", i === idx ? "true" : "false");
      var k = document.createElement("span"); k.className = "dsr-pal-kind"; k.textContent = it.kind;
      var t = document.createElement("span"); t.className = "dsr-pal-title"; t.textContent = it.title;
      var s = document.createElement("span"); s.className = "dsr-pal-sub"; s.textContent = it.sub;
      row.append(k, t, s);
      row.addEventListener("pointermove", function () { if (idx !== i) { idx = i; mark(); } });
      row.addEventListener("click", function () { choose(i); });
      list.appendChild(row);
    });
    var cur = list.children[idx]; if (cur && cur.scrollIntoView) cur.scrollIntoView({ block: "nearest" });
  }
  function mark() {
    for (var i = 0; i < list.children.length; i++) list.children[i].setAttribute("aria-selected", i === idx ? "true" : "false");
    var cur = list.children[idx]; if (cur && cur.scrollIntoView) cur.scrollIntoView({ block: "nearest" });
  }
  function filter() {
    var q = input.value.trim().toLowerCase();
    shown = q ? items.filter(function (it) { return (it.title + " " + it.kind).toLowerCase().indexOf(q) !== -1; })
              : items.slice(0, 12);
    idx = 0; render();
  }
  function choose(i) {
    var it = shown[i]; if (!it) return;
    close();
    setTimeout(function () { try { it.run(); } catch (err) { console.warn("[dsh-refined-ui] palette action failed:", err); } }, 30);
  }
  function open() {
    items = collectPaletteItems();
    backdrop = document.createElement("div");
    backdrop.className = "dsr-pal-backdrop"; backdrop.setAttribute("data-dsr-palette", "");
    var panel = document.createElement("div");
    panel.className = "dsr-pal"; panel.setAttribute("role", "dialog"); panel.setAttribute("aria-label", "命令面板");
    input = document.createElement("input");
    input.className = "dsr-pal-input"; input.placeholder = "搜索会话，或输入命令…"; input.setAttribute("aria-label", "搜索");
    list = document.createElement("div"); list.className = "dsr-pal-list"; list.setAttribute("role", "listbox");
    var foot = document.createElement("div"); foot.className = "dsr-pal-foot";
    foot.textContent = "↑↓ 选择　↵ 打开　Esc 关闭";
    panel.append(input, list, foot); backdrop.appendChild(panel); document.body.appendChild(backdrop);
    backdrop.addEventListener("pointerdown", function (e) { if (e.target === backdrop) close(); });
    input.addEventListener("input", filter);
    input.addEventListener("keydown", function (e) {
      if (e.isComposing || e.keyCode === 229) return;
      if (e.key === "ArrowDown") { e.preventDefault(); idx = Math.min(idx + 1, shown.length - 1); mark(); }
      else if (e.key === "ArrowUp") { e.preventDefault(); idx = Math.max(idx - 1, 0); mark(); }
      else if (e.key === "Enter") { e.preventDefault(); choose(idx); }
      else if (e.key === "Escape") { e.preventDefault(); close(); }
    });
    filter(); input.focus();
  }
  function onKey(e) {
    if ((e.ctrlKey || e.metaKey) && !e.altKey && !e.shiftKey && (e.key === "k" || e.key === "K")) {
      e.preventDefault(); e.stopPropagation();
      if (backdrop) close(); else open();
    }
  }
  document.addEventListener("keydown", onKey, true);
  return function () { document.removeEventListener("keydown", onKey, true); close(); };
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
function brief(el) {
  var at = [];
  for (var i = 0; i < el.attributes.length; i++) {
    var a = el.attributes[i];
    if (a.name === "style" || a.name === "class") continue;
    at.push(a.name + (a.value ? "=" + (a.value.length > 28 ? a.value.slice(0, 28) + "…" : a.value) : ""));
  }
  var cls = (el.getAttribute("class") || "").split(/\s+/).filter(Boolean).slice(0, 3).join(".");
  var own = ""; for (var c = el.firstChild; c; c = c.nextSibling) if (c.nodeType === 3) own += c.nodeValue;
  own = own.trim(); if (own.length > 34) own = own.slice(0, 34) + "…";
  return el.tagName.toLowerCase() + (cls ? "." + cls : "") + (at.length ? " [" + at.join(" ") + "]" : "") + (own ? " \"" + own + "\"" : "");
}
function outlineBrief(el, depth, max, lines, pad) {
  if (!el || depth > max || lines.length > 260) return;
  lines.push(pad + brief(el));
  for (var i = 0; i < el.children.length && i < 10; i++) outlineBrief(el.children[i], depth + 1, max, lines, pad + " ");
}
function diagnostics() {
  var L = [];
  var q = function (s) { return document.querySelectorAll(s).length; };
  L.push("dsh-refined-ui 0.6.0 | reduce=" + (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) + " fx=" + q(".dsr-fx") + " aurora=" + q(".dsr-aurora") + " tags: composer=" + q("[data-dsr-composer]") + " send=" + q("[data-dsr-send]") + " bubble=" + q("[data-dsr-bubble]"));
  L.push("user rows=" + q("[data-chat-flow-kind=\"user\"]") + " assistant=" + q("[data-chat-flow-kind=\"assistant-step\"]") + " sidebar rows=" + q("[data-row-key^=\"session:\"]") + " composer inputs=" + q("[data-composer-input]"));
  var user = document.querySelector("[data-chat-flow-kind=\"user\"]");
  L.push("-- first user row"); if (user) outline(user, 0, 4, L, ""); else L.push("(none)");
  var row = document.querySelector("[data-row-key^=\"session:\"][aria-selected=\"true\"]") || document.querySelector("[data-row-key^=\"session:\"]");
  L.push("-- a sidebar row"); if (row) outline(row, 0, 1, L, ""); else L.push("(none)");
  var input = document.querySelector("[data-composer-input]");
  L.push("-- composer ancestors");
  for (var n = input, d = 0; n && n !== document.body && d < 7; n = n.parentElement, d++) L.push(describe(n));
  var vocab = {}, all = document.querySelectorAll("*");
  for (var vi = 0; vi < all.length; vi++) {
    var at = all[vi].attributes;
    for (var vj = 0; vj < at.length; vj++) {
      var an = at[vj].name;
      if (an.indexOf("data-") !== 0 || /key$|-id$/.test(an)) continue;
      var vv = at[vj].value; if (vv.length > 26 || /\d{3,}/.test(vv)) continue;
      var kk = an + "=" + vv; vocab[kk] = (vocab[kk] || 0) + 1;
    }
  }
  var top = Object.keys(vocab).sort(function (a, b) { return vocab[b] - vocab[a]; }).slice(0, 90);
  L.push("-- data-* vocabulary");
  L.push(top.map(function (k) { return k + "(" + vocab[k] + ")"; }).join("  "));
  var pane = document.querySelector("[data-slot=\"main.conversation\"]");
  L.push("-- main.conversation ancestry");
  for (var an = pane, ad = 0; an && ad < 12; an = an.parentElement, ad++) {
    var acs = getComputedStyle(an), ar = an.getBoundingClientRect();
    L.push((an.tagName.toLowerCase()) + " slot=" + (an.getAttribute("data-slot") || "") + " r=" + Math.round(ar.left) + "," + Math.round(ar.top) + "," + Math.round(ar.width) + "x" + Math.round(ar.height) + " ov=" + acs.overflow + " pos=" + acs.position + " z=" + acs.zIndex + " tf=" + acs.transform + " ct=" + acs.contain + " fl=" + acs.filter + " bf=" + acs.backdropFilter + " wc=" + acs.willChange + " bg=" + acs.backgroundColor);
  }
  var steps = document.querySelectorAll("[data-chat-flow-kind=\"assistant-step\"]");
  L.push("-- last assistant step (structure)");
  if (steps.length) outlineBrief(steps[steps.length - 1], 0, 8, L, ""); else L.push("(none)");
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

/* Click ripple, magnetic send button, "/" to focus composer, Alt+Up/Down to switch sessions. */
function watchInteractions() {
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function onDown(e) {
    if (e.button !== 0) return;
    var t = e.target;
    if (!t || !t.closest || !t.closest("button,a,[role=button],[role=treeitem],[role=tab],[role=menuitem],[role=option],summary")) return;
    var r = document.createElement("div");
    r.className = "dsr-ripple";
    r.style.left = e.clientX + "px"; r.style.top = e.clientY + "px";
    document.body.appendChild(r);
    setTimeout(function () { r.remove(); }, 700);
  }
  var magnet = null;
  function onMove(e) {
    var b = document.querySelector("[data-dsr-send]");
    if (magnet && magnet !== b) { magnet.style.translate = ""; magnet = null; }
    if (!b || reduce) return;
    var r = b.getBoundingClientRect();
    var dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
    var d = Math.hypot(dx, dy);
    if (d < 70) { b.style.translate = (dx * 0.18).toFixed(1) + "px " + (dy * 0.18).toFixed(1) + "px"; magnet = b; }
    else if (magnet) { b.style.translate = ""; magnet = null; }
  }
  function typing(t) {
    return t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName));
  }
  function onKey(e) {
    if (e.isComposing || e.keyCode === 229) return;
    if (document.querySelector(".dsr-pal-backdrop")) return;
    if (e.key === "/" && !e.ctrlKey && !e.metaKey && !e.altKey && !typing(e.target)) {
      var c = document.querySelector("[data-composer-input]");
      if (c) { e.preventDefault(); c.focus(); }
      return;
    }
    if (e.altKey && !e.ctrlKey && !e.metaKey && (e.key === "ArrowUp" || e.key === "ArrowDown")) {
      var rows = Array.prototype.slice.call(document.querySelectorAll('[data-row-key^="session:"][role="treeitem"]'));
      if (!rows.length) return;
      var cur = rows.findIndex(function (r) { return r.matches('[aria-selected="true"],[aria-current="true"],[data-selected="true"]'); });
      var next = rows[Math.max(0, Math.min(rows.length - 1, cur + (e.key === "ArrowDown" ? 1 : -1)))];
      if (next && next !== rows[cur]) { e.preventDefault(); next.click(); next.scrollIntoView({ block: "nearest" }); }
    }
  }
  document.addEventListener("pointerdown", onDown, true);
  document.addEventListener("pointermove", onMove, true);
  document.addEventListener("keydown", onKey, true);
  return function () {
    document.removeEventListener("pointerdown", onDown, true);
    document.removeEventListener("pointermove", onMove, true);
    document.removeEventListener("keydown", onKey, true);
    if (magnet) magnet.style.translate = "";
    document.querySelectorAll(".dsr-ripple").forEach(function (n) { n.remove(); });
  };
}

/* Cosmic layer: send burst, completion sparkle, aurora. All toggleable from Ctrl+K. */
var FX = { toggle: function () {}, burst: function () {}, state: function () { return {}; } };
function watchFx() {
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var KEY = "dsh-refined-ui:fx";
  var st = { aurora: true };
  try { var saved = JSON.parse(localStorage.getItem(KEY) || "null"); if (saved) { st.aurora = saved.aurora !== false; } } catch (e) {}
  function save() { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) {} }
  var cv = document.createElement("canvas"); cv.className = "dsr-fx"; cv.setAttribute("aria-hidden", "true");
  var ctx2 = cv.getContext("2d");
  var aur = document.createElement("div"); aur.className = "dsr-aurora"; aur.setAttribute("aria-hidden", "true");
  
  document.body.appendChild(aur); document.body.appendChild(cv);
  var ro = null, comp = null;
  function position() {
    var c = document.querySelector("[data-dsr-composer]");
    if (c !== comp) { if (ro) ro.disconnect(); comp = c; if (c && window.ResizeObserver) { ro = new ResizeObserver(position); ro.observe(c); } }
    if (!c || !st.aurora || reduce) { aur.style.display = "none"; return; }
    var r = c.getBoundingClientRect(), L = r.left - 10, Wd = r.width + 20;
    var f = document.querySelector("[data-chat-flow-kind]");
    for (var n = f; n && n !== document.body; n = n.parentElement) {
      var oy = getComputedStyle(n).overflowY, nr = n.getBoundingClientRect();
      if ((oy === "auto" || oy === "scroll") && nr.width > 400) { L = nr.left; Wd = nr.width; break; }
    }
    var T = 0, H = 130;
    var tab = null, cand = document.querySelectorAll("[role=tab],button,a,div,span");
    for (var i = 0; i < cand.length && !tab; i++) {
      var cn = cand[i];
      if (cn.children.length === 0 && (cn.textContent || "").trim() === "对话") { var cr = cn.getBoundingClientRect(); if (cr.top < 220 && cr.width > 0) tab = cn; }
    }
    if (tab) {
      var best = null;
      for (var m = tab, k = 0; m && m !== document.body && k < 8; m = m.parentElement, k++) {
        var mr = m.getBoundingClientRect();
        if (mr.height <= 150 && mr.width >= 400) best = mr;
      }
      if (best) { T = best.top; H = best.height + 16; if (Wd === r.width + 20) { L = best.left; Wd = best.width; } }
    }
    aur.style.display = "";
    aur.style.left = L + "px"; aur.style.width = Wd + "px";
    aur.style.top = T + "px"; aur.style.height = Math.max(200, window.innerHeight - T + 140) + "px";
  }
  function applyState() { position(); }
  applyState();
  var posTimer = setInterval(position, 400);
  window.addEventListener("resize", position);
  var dpr = Math.min(window.devicePixelRatio || 1, 2), W = 0, H = 0;
  function resize() { W = window.innerWidth; H = window.innerHeight; cv.width = W * dpr; cv.height = H * dpr; ctx2.setTransform(dpr, 0, 0, dpr, 0, 0); }
  resize(); window.addEventListener("resize", resize);
  var parts = [], raf = 0, lastEmber = 0;
  var hues = ["#3370ff", "#5b8cff", "#7fd0ff", "#9dbcff", "#b48cff", "#ffffff"];
  function burst(x, y, n, power) {
    if (reduce) return;
    for (var i = 0; i < n; i++) {
      var a = Math.random() * Math.PI * 2, v = (0.4 + Math.random()) * power;
      parts.push({ x: x, y: y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - power * 0.35, life: 1, d: 0.014 + Math.random() * 0.016, r: 1.4 + Math.random() * 2.4, c: hues[(Math.random() * hues.length) | 0] });
    }
    kick();
  }
  function kick() { if (!raf) raf = requestAnimationFrame(frame); }
  function frame() {
    raf = 0;
    ctx2.clearRect(0, 0, W, H);
    ctx2.globalCompositeOperation = "lighter";
    var now = performance.now();
    if (document.body.hasAttribute("data-dsr-busy") && !reduce && comp && now - lastEmber > 70) {
      lastEmber = now;
      var rc = comp.getBoundingClientRect();
      parts.push({ x: rc.left + 12 + Math.random() * (rc.width - 24), y: rc.top + 2, vx: (Math.random() - 0.5) * 0.5, vy: -(0.5 + Math.random() * 1.1), g: -0.004, life: 1, d: 0.009 + Math.random() * 0.01, r: 1.2 + Math.random() * 2, c: hues[(Math.random() * 4) | 0] });
    }
    parts = parts.filter(function (p) { return p.life > 0; });
    for (var j = 0; j < parts.length; j++) {
      var q = parts[j];
      q.x += q.vx; q.y += q.vy; q.vy += (q.g === undefined ? 0.09 : q.g); q.vx *= 0.985; q.life -= q.d;
      ctx2.globalAlpha = Math.max(q.life, 0); ctx2.fillStyle = q.c;
      ctx2.beginPath(); ctx2.arc(q.x, q.y, q.r * (0.4 + q.life * 0.6), 0, 6.3); ctx2.fill();
    }
    ctx2.globalAlpha = 1; ctx2.globalCompositeOperation = "source-over";
    if (parts.length || document.body.hasAttribute("data-dsr-busy")) kick();
  }
  function center(el) { var r = el.getBoundingClientRect(); return [r.left + r.width / 2, r.top + r.height / 2]; }
  function onDown(e) {
    var b = e.target && e.target.closest && e.target.closest("[data-dsr-send]");
    if (b && e.button === 0) { var c = center(b); burst(c[0], c[1], 34, 4.2); }
  }
  function onKey(e) {
    if (e.key !== "Enter" || e.shiftKey || e.isComposing || e.keyCode === 229) return;
    var t = e.target; if (!t || !t.closest || !t.closest("[data-composer-input]")) return;
    var b = document.querySelector("[data-dsr-send]"); if (!b) return;
    var c = center(b); burst(c[0], c[1], 34, 4.2);
  }
  var wasBusy = false;
  var mo = new MutationObserver(function () {
    var busy = document.body.hasAttribute("data-dsr-busy");
    if (wasBusy && !busy) {
      var comp = document.querySelector("[data-dsr-composer]");
      if (comp) { var r = comp.getBoundingClientRect(); burst(r.left + r.width / 2, r.top, 22, 3.2); burst(r.left + r.width * 0.25, r.top, 10, 2.4); burst(r.left + r.width * 0.75, r.top, 10, 2.4); }
    }
    if (busy) kick();
    wasBusy = busy;
  });
  mo.observe(document.body, { attributes: true, attributeFilter: ["data-dsr-busy"] });
  document.addEventListener("pointerdown", onDown, true);
  document.addEventListener("keydown", onKey, true);
  FX = {
    state: function () { return st; },
    toggle: function (k) { st[k] = !st[k]; save(); applyState(); position(); },
    burst: function () {
      var w = W, h = H;
      [[0.3, 0.45], [0.5, 0.3], [0.7, 0.45]].forEach(function (p, i) { setTimeout(function () { burst(w * p[0], h * p[1], 60, 5.6); }, i * 220); });
    }
  };
  return function () {
    FX = { toggle: function () {}, burst: function () {}, state: function () { return {}; } };
    document.removeEventListener("pointerdown", onDown, true);
    document.removeEventListener("keydown", onKey, true);
    window.removeEventListener("resize", resize); window.removeEventListener("resize", position);
    clearInterval(posTimer); if (ro) ro.disconnect();
    mo.disconnect(); if (raf) cancelAnimationFrame(raf);
    cv.remove(); aur.remove();
  };
}

/* ---------- Official run-state bridge + Task constellation ---------- */
// The bridge reads DSH's own session status (the same hooks dsh-lingdong uses), so "running"
// covers thinking, commands and sub-agents — not just streamed text.
var STORE = {
  map: new Map(), subs: new Set(),
  set: function (id, data, el) { this.map.set(id, { data: data, el: el }); this.emit(); },
  del: function (id) { this.map.delete(id); this.emit(); },
  emit: function () { this.subs.forEach(function (f) { try { f(); } catch (e) { console.warn("[dsh-refined-ui]", e); } }); },
  current: function () {
    var pick = null;
    this.map.forEach(function (v) {
      var vis = v.el && v.el.parentElement && v.el.parentElement.getClientRects().length > 0;
      if (vis || !pick) pick = v;
    });
    return pick ? pick.data : null;
  }
};

function computeTree(sessionId, list, statuses) {
  list = list || {};
  function running(id) {
    var st = statuses && statuses.get ? statuses.get(id) : null;
    var row = list.byId && list.byId[id];
    var v = st && st.running !== undefined ? st.running : (row && row.running);
    return v === true;
  }
  function catalogOf(id) {
    var p = list.projectionsBySession && list.projectionsBySession[id];
    var v = p && p.values && p.values.subagentCatalog;
    if (v) return v;
    var r = list.byId && list.byId[id];
    return (r && r.projectionValues && r.projectionValues.subagentCatalog) || [];
  }
  function timingOf(id) {
    var p = list.projectionsBySession && list.projectionsBySession[id];
    var r = list.byId && list.byId[id];
    return (p && p.values && p.values.subagentTiming) || (r && r.projectionValues && r.projectionValues.subagentTiming);
  }
  var root = list.byId && list.byId[sessionId];
  var nodes = [{ id: sessionId, title: (root && root.displayTitle) || "当前任务", state: running(sessionId) ? "working" : "idle", parent: null, depth: 0, root: true }];
  var seen = new Set([sessionId]);
  var queue = [{ id: sessionId, depth: 0 }];
  while (queue.length && nodes.length < 24) {
    var cur = queue.shift();
    if (cur.depth >= 3) continue;
    var cat = catalogOf(cur.id);
    for (var i = 0; i < cat.length && nodes.length < 24; i++) {
      var e = cat[i];
      if (!e || seen.has(e.id)) continue;
      seen.add(e.id);
      var sum = list.byId && list.byId[e.id];
      var t = timingOf(e.id);
      var st = running(e.id) ? "working" : (t && t.lastTurnCompleted === true ? "completed" : "queued");
      nodes.push({ id: e.id, title: e.label || (sum && sum.displayTitle) || "子代理", state: st, parent: cur.id, depth: cur.depth + 1 });
      queue.push({ id: e.id, depth: cur.depth + 1 });
    }
  }
  var busy = nodes.some(function (n) { return n.state === "working"; });
  var all = [], cats = {}, states = {};
  var byId = list.byId || {};
  Object.keys(byId).slice(0, 160).forEach(function (id) {
    all.push({ id: id, title: byId[id].displayTitle || id, running: running(id) });
    var c = catalogOf(id);
    if (c && c.length) cats[id] = c.map(function (x) { return { id: x.id, label: x.label || (byId[x.id] && byId[x.id].displayTitle) }; });
  });
  Object.keys(cats).forEach(function (p) { cats[p].forEach(function (c) {
    var t = timingOf(c.id);
    states[c.id] = running(c.id) ? "working" : (t && t.lastTurnCompleted === true ? "completed" : "queued");
  }); });
  return { id: sessionId, nodes: nodes, busy: busy, all: all, catalogs: cats, states: states };
}


/* ---------- Conversation scan: commands, files and code changes DSH already rendered ---------- */
var SCANS = new Map();
var EDIT_RE = /(edit|write|patch|diff|replace|create|apply|编辑|写入|修改|创建|补丁)/i;
function scanConversation() {
  var out = { cmds: [], files: [], t: Date.now() };
  var calls = document.querySelectorAll("[data-chat-flow-kind=\"tool-call\"]");
  var seenC = new Set(), seenF = new Map();
  for (var i = 0; i < calls.length; i++) {
    var c = calls[i];
    var tool = (c.getAttribute("data-tool") || c.getAttribute("data-variant") || c.getAttribute("data-sample") || "").toLowerCase();
    var text = (c.textContent || "").replace(/\s+/g, " ").trim();
    var state = c.getAttribute("data-state") || (c.querySelector("[data-state]") && c.querySelector("[data-state]").getAttribute("data-state")) || "";
    if (tool === "subagent") continue;
    if (tool === "bash" || c.getAttribute("data-sample") === "bash" || c.getAttribute("data-variant") === "bash") {
      var cmd = (c.querySelector("pre,code") || c).textContent.replace(/\s+/g, " ").trim().slice(0, 240);
      if (cmd && !seenC.has(cmd)) { seenC.add(cmd); out.cmds.push({ text: cmd, state: state }); }
      continue;
    }
    FILE_RE.lastIndex = 0;
    var m, edit = EDIT_RE.test(tool) || EDIT_RE.test(text.slice(0, 80)) || !!c.querySelector("[class*=\"diff\"],[data-diff]");
    var found = false;
    while ((m = FILE_RE.exec(text))) {
      found = true;
      var path = m[0], prev = seenF.get(path);
      if (prev) prev.change = prev.change || edit; else seenF.set(path, { path: path, change: edit, state: state });
    }
    if (!found && tool && tool !== "think" && !seenC.has(tool + text.slice(0, 60))) {
      seenC.add(tool + text.slice(0, 60)); out.cmds.push({ text: (tool + ": " + text).slice(0, 240), state: state, tool: tool });
    }
  }
  out.files = Array.from(seenF.values());
  return out;
}
function rememberScan(sid) { if (sid) SCANS.set(sid, scanConversation()); }


/* ---------- Real conversation pane: lifted into the hologram as a live card; earlier conversations are kept as original-style snapshots ---------- */
var PS = 0.42;
var SNAPS = new Map();
var PANE = { w: 0, h: 0, lifted: false };
function findPane() {
  var slot = document.querySelector('[data-slot="main.conversation"]');
  for (var n = slot; n && n !== document.body; n = n.parentElement) {
    var r = n.getBoundingClientRect();
    if (r.width > 300 && r.height > 300) return n;
  }
  return null;
}
function snapPane(sid) {
  if (!sid || PANE.lifted) return;
  var el = findPane(); if (!el) return;
  var r = el.getBoundingClientRect(); if (r.width < 300) return;
  if (!el.querySelector("[data-chat-flow-kind]") && !el.querySelector("[data-composer-input]")) return;
  PANE.w = r.width; PANE.h = r.height;
  var clone = el.cloneNode(true);
  clone.removeAttribute("id");
  clone.querySelectorAll("[id]").forEach(function (n) { n.removeAttribute("id"); });
  clone.querySelectorAll("[contenteditable]").forEach(function (n) { n.setAttribute("contenteditable", "false"); });
  clone.querySelectorAll("script,iframe,video,audio").forEach(function (n) { n.remove(); });
  clone.style.cssText = "position:absolute;left:0;top:0;width:" + r.width + "px;height:" + r.height + "px;margin:0;transform:none;";
  SNAPS.set(sid, { node: clone, w: r.width, h: r.height, t: Date.now() });
  if (SNAPS.size > 6) { var oldest = null; SNAPS.forEach(function (v, k) { if (!oldest || v.t < SNAPS.get(oldest).t) oldest = k; }); SNAPS.delete(oldest); }
}

function makeBridge(React) {
  var h = React.createElement, useEffect = React.useEffect, useRef = React.useRef;
  function Bridge(props) {
    var list = props.useSessions(function (s) { return s; });
    var statuses = props.useSessionStatus(function (s) { return s; });
    var ref = useRef(null);
    useEffect(function () { STORE.set(props.sessionId, computeTree(props.sessionId, list, statuses), ref.current); }, [props.sessionId, list, statuses]);
    useEffect(function () { return function () { STORE.del(props.sessionId); }; }, [props.sessionId]);
    return h("button", { ref: ref, type: "button", className: "dsr-holo-btn", "data-dsr-bridge": props.sessionId, title: "全息模式：工作区 / 对话 / 子代理 / 命令 / 文件的三维结构图（Alt+H）", onClick: function () { HOLO.toggle(); } },
      h("span", { className: "dsr-holo-btn-ic", "aria-hidden": "true" }, "\u2B21"), "全息模式");
  }
  function Boundary(p) { React.Component.call(this, p); this.state = { bad: false }; }
  Boundary.prototype = Object.create(React.Component.prototype);
  Boundary.prototype.constructor = Boundary;
  Boundary.getDerivedStateFromError = function () { return { bad: true }; };
  Boundary.prototype.componentDidCatch = function (e) { console.warn("[dsh-refined-ui] bridge disabled:", e); };
  Boundary.prototype.render = function () { return this.state.bad ? null : this.props.children; };
  return function Slot(props) { return h(Boundary, null, h(Bridge, props)); };
}

function watchRunState() {
  var scanTimer = 0, last = 0;
  var lastSnap = 0, snapSid = null;
  function doScan() {
    scanTimer = 0; last = Date.now(); var d = STORE.current(); if (!d) return; rememberScan(d.id);
    if (!PANE.lifted && (snapSid !== d.id || Date.now() - lastSnap > 9000)) { snapSid = d.id; lastSnap = Date.now(); try { snapPane(d.id); } catch (e) {} }
  }
  function scheduleScan() {
    if (scanTimer) return;
    var wait = Math.max(200, 1500 - (Date.now() - last));
    scanTimer = setTimeout(doScan, wait);
  }
  function onStore() {
    var d = STORE.current();
    BUSY.bridge = !!(d && d.busy);
    applyBusy();
    scheduleScan();
  }
  STORE.subs.add(onStore);
  var mo = new MutationObserver(scheduleScan);
  mo.observe(document.body, { childList: true, subtree: true });
  return function () { STORE.subs.delete(onStore); mo.disconnect(); clearTimeout(scanTimer); BUSY.bridge = false; applyBusy(); };
}

var GRAPH = { pinned: false, toggle: function () {} };
function watchGraph() {
  var KEY = "dsh-refined-ui:graph";
  var pos = {};
  try { pos = JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch (e) {}
  function savePos() { try { localStorage.setItem(KEY, JSON.stringify(pos)); } catch (e) {} }
  var layer = null, svg = null, wins = new Map(), started = new Map();
  var dismissed = false, hideTimer = 0, tick = 0, lastBusy = false, data = null;
  var NS = "http://www.w3.org/2000/svg";
  var WIN_W = 236;

  function ensureLayer() {
    if (layer) return;
    layer = document.createElement("div"); layer.className = "dsr-graph"; layer.setAttribute("data-dsr-graph", "");
    svg = document.createElementNS(NS, "svg"); svg.setAttribute("class", "dsr-graph-lines");
    layer.appendChild(svg); document.body.appendChild(layer);
    tick = setInterval(updateTimes, 1000);
  }
  function removeLayer() {
    if (!layer) return;
    layer.remove(); layer = null; svg = null; wins.clear(); clearInterval(tick);
  }
  function defaultPos(n, idx, col) {
    var W = window.innerWidth;
    return { x: Math.max(16, W - WIN_W - 28 - n.depth * (WIN_W + 44)), y: 96 + idx * 104 + n.depth * 24 };
  }
  function label(n) {
    if (n.state === "working") return "运行中";
    if (n.state === "completed") return "已完成";
    if (n.state === "queued") return "待命";
    return "空闲";
  }
  function elapsed(id) {
    var t0 = started.get(id); if (!t0) return "";
    var s = Math.max(0, Math.round((Date.now() - t0) / 1000));
    return s < 60 ? s + " 秒" : Math.floor(s / 60) + " 分 " + (s % 60) + " 秒";
  }
  function updateTimes() {
    wins.forEach(function (w, id) {
      var n = w.node; if (!n) return;
      w.time.textContent = n.state === "working" ? elapsed(id) : "";
    });
  }
  function makeWin(n) {
    var el = document.createElement("div"); el.className = "dsr-win";
    var head = document.createElement("div"); head.className = "dsr-win-head";
    var dot = document.createElement("span"); dot.className = "dsr-win-dot";
    var title = document.createElement("span"); title.className = "dsr-win-title";
    var x = document.createElement("button"); x.className = "dsr-win-x"; x.type = "button"; x.textContent = "×"; x.title = "关闭任务星图（Alt+G 再次打开）";
    head.append(dot, title, x);
    var body = document.createElement("div"); body.className = "dsr-win-body";
    var stat = document.createElement("span"); stat.className = "dsr-win-stat";
    var time = document.createElement("span"); time.className = "dsr-win-time";
    body.append(stat, time);
    el.append(head, body); layer.appendChild(el);
    var w = { el: el, title: title, stat: stat, time: time, node: n };
    x.addEventListener("click", function (e) { e.stopPropagation(); dismissed = true; GRAPH.pinned = false; render(); });
    title.addEventListener("dblclick", function () {
      var row = document.querySelector('[data-row-key="session:' + (window.CSS && CSS.escape ? CSS.escape(w.node.id) : w.node.id) + '"]');
      if (row) row.click();
    });
    var drag = null;
    head.addEventListener("pointerdown", function (e) {
      if (e.target === x || e.button !== 0) return;
      var p = pos[w.node.id] || { x: 0, y: 0 };
      drag = { dx: e.clientX - p.x, dy: e.clientY - p.y };
      head.setPointerCapture(e.pointerId); el.classList.add("dsr-dragging"); e.preventDefault();
    });
    head.addEventListener("pointermove", function (e) {
      if (!drag) return;
      var r = el.getBoundingClientRect();
      var nx = Math.min(Math.max(0, e.clientX - drag.dx), window.innerWidth - r.width);
      var ny = Math.min(Math.max(40, e.clientY - drag.dy), window.innerHeight - 40);
      pos[w.node.id] = { x: nx, y: ny, user: true };
      place(w, pos[w.node.id]); drawLines();
    });
    function end() { if (!drag) return; drag = null; el.classList.remove("dsr-dragging"); savePos(); }
    head.addEventListener("pointerup", end); head.addEventListener("pointercancel", end);
    return w;
  }
  function place(w, p) { w.el.style.translate = Math.round(p.x) + "px " + Math.round(p.y) + "px"; }
  function rectOf(id) {
    var w = wins.get(id); if (!w) return null;
    var p = pos[id]; var r = w.el.getBoundingClientRect();
    return { x: p ? p.x : r.left, y: p ? p.y : r.top, w: r.width || WIN_W, h: r.height || 70 };
  }
  function drawLines() {
    if (!svg || !data) return;
    svg.setAttribute("width", window.innerWidth); svg.setAttribute("height", window.innerHeight);
    var html = "";
    data.nodes.forEach(function (n) {
      if (!n.parent) return;
      var a = rectOf(n.parent), b = rectOf(n.id); if (!a || !b) return;
      var ax, ay, bx, by;
      // connect the facing sides so lines stay tidy wherever the windows are dragged
      if (b.x + b.w / 2 < a.x + a.w / 2) { ax = a.x; bx = b.x + b.w; } else { ax = a.x + a.w; bx = b.x; }
      ay = a.y + 22; by = b.y + 22;
      var dx = Math.max(40, Math.abs(ax - bx) * 0.5) * (bx < ax ? -1 : 1);
      var d = "M" + ax + " " + ay + " C" + (ax + dx) + " " + ay + " " + (bx - dx) + " " + by + " " + bx + " " + by;
      html += '<path class="dsr-line" data-state="' + n.state + '" d="' + d + '"/>' +
              '<circle class="dsr-node" data-state="' + n.state + '" cx="' + bx + '" cy="' + by + '" r="4"/>';
    });
    svg.innerHTML = html;
  }
  function render() {
    var shouldShow = !!data && data.nodes.length > 0 && (GRAPH.pinned || (data.nodes.length > 1 && !dismissed && (data.busy || hideTimer)));
    if (!shouldShow) { removeLayer(); return; }
    ensureLayer();
    var seen = new Set(), counters = {};
    var kids = data.nodes.filter(function (n) { return n.parent; }).length;
    data.nodes.forEach(function (n) {
      seen.add(n.id);
      var w = wins.get(n.id);
      if (!w) { w = makeWin(n); wins.set(n.id, w); }
      w.node = n;
      var idx = counters[n.depth] = (counters[n.depth] === undefined ? 0 : counters[n.depth] + 1);
      if (!pos[n.id]) pos[n.id] = defaultPos(n, idx);
      place(w, pos[n.id]);
      w.el.setAttribute("data-state", n.state);
      w.el.setAttribute("data-root", n.root ? "1" : "0");
      w.title.textContent = n.title;
      w.stat.textContent = n.root ? (n.state === "working" ? "运行中" : "空闲") + (kids ? " · " + kids + " 个子代理" : "") : label(n);
      if (n.state === "working" && !started.has(n.id)) started.set(n.id, Date.now());
      if (n.state !== "working") started.delete(n.id);
    });
    wins.forEach(function (w, id) { if (!seen.has(id)) { w.el.remove(); wins.delete(id); } });
    updateTimes();
    requestAnimationFrame(drawLines);
  }
  function onStore() {
    data = STORE.current();
    var busy = !!(data && data.busy);
    if (busy && !lastBusy) { dismissed = false; clearTimeout(hideTimer); hideTimer = 0; }
    if (!busy && lastBusy) {
      clearTimeout(hideTimer);
      hideTimer = setTimeout(function () { hideTimer = 0; render(); }, 9000);
    }
    lastBusy = busy;
    render();
  }
  function onKey(e) {
    if (e.altKey && !e.ctrlKey && !e.metaKey && (e.key === "g" || e.key === "G") && !e.isComposing) {
      e.preventDefault(); GRAPH.toggle();
    }
  }
  function onResize() { drawLines(); }
  GRAPH.toggle = function () { GRAPH.pinned = !GRAPH.pinned; if (GRAPH.pinned) dismissed = false; if (!data) data = STORE.current(); render(); };
  STORE.subs.add(onStore);
  document.addEventListener("keydown", onKey, true);
  window.addEventListener("resize", onResize);
  onStore();
  return function () {
    STORE.subs.delete(onStore);
    document.removeEventListener("keydown", onKey, true);
    window.removeEventListener("resize", onResize);
    clearTimeout(hideTimer); removeLayer();
    GRAPH.pinned = false; GRAPH.toggle = function () {};
  };
}

/* ---------- Hologram: legible 3D cards for the conversation list, active conversations and sub-agents ---------- */
var HOLO = { open: false, toggle: function () {} };
var FILE_RE = /(?:[A-Za-z]:[\\\/]|~[\\\/]|\.{1,2}[\\\/])?[\w.\-一-龥]+(?:[\\\/][\w.\-一-龥]+)*\.(?:jsx?|tsx?|py|md|json|ya?ml|css|html?|txt|csv|toml|rs|go|java|cpp|c|h|sh|sql|xlsx?|docx?|pdf|png|jpe?g|svg|log|ini)\b/g;

var HSTATE = { recent: [], closed: new Set(), hubOpen: false, big: null, ws: null, wsAll: {}, prevRun: new Set() };
function trackRecents(d) {
  if (!d) return;
  var r = HSTATE.recent, i = r.indexOf(d.id);
  if (i !== 0) { if (i > 0) r.splice(i, 1); r.unshift(d.id); if (r.length > 6) r.length = 6; }
  var now = new Set();
  (d.all || []).forEach(function (s) { if (s.running) now.add(s.id); });
  now.forEach(function (id) { if (!HSTATE.prevRun.has(id)) HSTATE.closed.delete(id); });
  HSTATE.prevRun = now;
}
function findWsAdd() {
  var labs = [];
  var btns = document.querySelectorAll("button,[role=\"button\"]");
  var re = /(新建|添加|新增|打开|导入|选择).{0,4}(工作区|项目|文件夹)|add.{0,8}(workspace|project|folder)|new.{0,8}(workspace|project)|open.{0,8}(folder|workspace)/i;
  for (var i = 0; i < btns.length && i < 600; i++) {
    var b = btns[i], t = (b.getAttribute("aria-label") || "") + "|" + (b.getAttribute("title") || "") + "|" + (b.textContent || "").trim().slice(0, 20);
    if (b.closest("[data-dsr-palette],.dsr-holo,.dsr-holo-hudroot")) continue;
    if (re.test(t)) return b;
  }
  // fall back: an icon-only button in the same header row as the "工作区" label
  var hdr = findClickable("工作区");
  for (var up = hdr, d = 0; up && d < 4; up = up.parentElement, d++) {
    var bs = Array.from(up.querySelectorAll("button,[role=\"button\"]")).filter(function (x) { return x !== hdr && !(x.textContent || "").trim(); });
    if (bs.length) { window.__dsrHdrBtns = bs.map(function (x) { return (x.getAttribute("aria-label") || x.getAttribute("title") || "?"); }); return bs[bs.length - 1]; }
  }
  return null;
}
function hubSettings() {
  var items = [], seen = new Set();
  ["新会话", "插件", "自动化任务"].forEach(function (l) { var b = findClickable(l); if (b) { items.push({ label: l, run: function () { b.click(); } }); seen.add(l); } });
  var st = document.querySelector('[data-slot="settings.launcher"],[data-slot="sidebar.settings"]');
  if (st) items.push({ label: "设置", run: function () { var b = st.closest("button,[role=button]") || st.querySelector("button,[role=button]") || st; b.click(); } });
  var wa = findWsAdd();
  items.push({ label: "新建工作区", run: function () { if (wa) wa.click(); }, off: !wa });
  return items;
}


function normPath(p) { return p.replace(/\\/g, "/").replace(/^\.\//, ""); }
function collectWorkspaceView(base) {
  var cards = base.cards, edges = [];
  var gs = base.groups.get(HSTATE.ws) || [], sid = base.sid;
  var fileMap = new Map(), scanned = 0;
  gs.forEach(function (s) {
    var sc = s.id === sid ? scanConversation() : SCANS.get(s.id);
    if (!sc) return; scanned++;
    sc.files.forEach(function (f) {
      var p = normPath(f.path), e = fileMap.get(p);
      if (!e) { e = { path: p, change: false, sess: [] }; fileMap.set(p, e); }
      e.change = e.change || f.change; if (e.sess.indexOf(s.id) < 0) e.sess.push(s.id);
    });
  });
  var files = Array.from(fileMap.values());
  var segs = files.map(function (f) { return f.path.split("/"); });
  var common = 0;
  if (segs.length) {
    var minLen = Math.min.apply(null, segs.map(function (x) { return x.length - 1; }));
    while (common < minLen && segs.every(function (x) { return x[common] === segs[0][common]; })) common++;
  }
  var tree = { name: HSTATE.ws, kids: new Map(), files: [], path: "" };
  files.forEach(function (f, i) {
    var parts = segs[i].slice(common), base2 = parts.pop(), node = tree;
    parts.forEach(function (pt) { if (!node.kids.has(pt)) node.kids.set(pt, { name: pt, kids: new Map(), files: [], path: (node.path ? node.path + "/" : "") + pt }); node = node.kids.get(pt); });
    node.files.push({ name: base2, file: f });
  });
  function countFiles(n) { var c = n.files.length; n.kids.forEach(function (k) { c += countFiles(k); }); n.total = c; return c; }
  countFiles(tree);
  var folders = 0;
  cards.set("wsroot", { id: "wsroot", type: "wsroot", title: HSTATE.ws, state: "idle", sessions: gs.length, scanned: scanned, files: files.length, x: 0, y: -240, z: 0, w: 280, h: 120, dirCount: 0 });
  var leafById = new Map();
  (function layout(node, id, p, depth, dirAngle, isRoot) {
    var kids = Array.from(node.kids.values()), items = kids.length + Math.min(node.files.length, 8) + (node.files.length > 8 ? 1 : 0);
    var i = 0;
    function posFor() {
      var step = isRoot ? (Math.PI * 2) / Math.max(1, items) : Math.min(1.0, 2.4 / Math.max(1, items - 1));
      var a = isRoot ? (i * step) : dirAngle + (i - (items - 1) / 2) * step;
      var r = Math.max(190, 330 - depth * 40);
      i++;
      return { a: a, x: p.x + Math.cos(a) * r, y: p.y + 170, z: p.z + Math.sin(a) * r };
    }
    kids.forEach(function (k) {
      var q = posFor(); folders++;
      var fid = "fo:" + k.path;
      cards.set(fid, { id: fid, type: "folder", title: k.name, total: k.total, state: "idle", x: q.x, y: q.y, z: q.z, w: 170, h: 54 });
      edges.push({ a: id, b: fid, kind: "dir" });
      layout(k, fid, q, depth + 1, q.a, false);
    });
    node.files.slice(0, 8).forEach(function (f) {
      var q = posFor(), lid = "fl:" + f.file.path;
      cards.set(lid, { id: lid, type: "leaf", title: f.name, change: f.file.change, detail: f.file.path, state: "idle", x: q.x, y: q.y, z: q.z, w: 150, h: 40 });
      edges.push({ a: id, b: lid, kind: "file" }); leafById.set(f.file.path, lid);
    });
    if (node.files.length > 8) {
      var q2 = posFor(), mid = "fm:" + node.path;
      cards.set(mid, { id: mid, type: "leaf", title: "+" + (node.files.length - 8) + " 个文件", detail: node.path, state: "idle", x: q2.x, y: q2.y, z: q2.z, w: 150, h: 40 });
      edges.push({ a: id, b: mid, kind: "file" });
    }
  })(tree, "wsroot", cards.get("wsroot"), 0, 0, true);
  cards.get("wsroot").dirCount = folders;
  // conversations of this workspace: a ring of mini cards linked to the files they touched
  var R = 640;
  gs.slice(0, 10).forEach(function (s, j) {
    var a = Math.PI * 2 * j / Math.max(1, Math.min(10, gs.length)) + 0.3;
    var cid = "s:" + s.id;
    cards.set(cid, { id: cid, type: "session", sid: s.id, title: s.title, state: s.running ? "working" : "idle", current: s.current, mini: true, scan: s.current ? scanConversation() : SCANS.get(s.id), kids: [], w: 210, h: 92, x: Math.cos(a) * R, y: -240 - 40 + (j % 2) * 120, z: Math.sin(a) * R });
    var linked = 0;
    files.forEach(function (f) { if (linked < 3 && f.sess.indexOf(s.id) >= 0 && leafById.has(f.path)) { edges.push({ a: cid, b: leafById.get(f.path), kind: "list", run: s.running }); linked++; } });
    if (!linked) edges.push({ a: "wsroot", b: cid, kind: "list", run: s.running });
  });
  edges.push({ a: "core", b: "wsroot", kind: "core" });
  return { cards: cards, edges: edges, center: cards.get("wsroot"), sessions: base.sessions, ws: true };
}

function collectHolo() {
  var cur = STORE.current(), sid = cur && cur.id;
  var cards = new Map(), edges = [];
  var all = (cur && cur.all) || [], cats = (cur && cur.catalogs) || {}, states = (cur && cur.states) || {};
  var children = new Set();
  Object.keys(cats).forEach(function (p) { cats[p].forEach(function (c) { children.add(c.id); }); });
  // sidebar conversations, grouped by the workspace the sidebar shows them under
  var domWs = new Map(), curWs = "其它会话", wsOrderDom = [];
  var rows = document.querySelectorAll("[data-row-key]");
  for (var i = 0; i < rows.length && i < 400; i++) {
    var key = rows[i].getAttribute("data-row-key") || "";
    var lines = (rows[i].innerText || "").split("\n").map(function (l) { return l.trim(); }).filter(Boolean);
    if (!lines.length) continue;
    if (key.indexOf("session:") === 0) domWs.set(key.slice(8), { ws: curWs, title: lines[0] });
    else if (!/^(展开|收起|显示)/.test(lines[0])) { curWs = lines[0]; wsOrderDom.push(curWs); }
  }
  var groups = new Map(), sessions = [];
  wsOrderDom.forEach(function (nm) { if (!groups.has(nm)) groups.set(nm, []); });   // workspaces without conversations are planets too
  all.forEach(function (s) {
    if (children.has(s.id)) return;
    var d = domWs.get(s.id), title = (d && d.title) || s.title;
    var g = (d && d.ws) || "其它会话";
    if (!groups.has(g)) groups.set(g, []);
    var it = { id: s.id, title: title, running: s.running, current: s.id === sid, ws: g };
    groups.get(g).push(it); sessions.push(it);
  });
  if (sid && !sessions.some(function (s) { return s.id === sid; })) {
    var it0 = { id: sid, title: (cur.nodes[0] && cur.nodes[0].title) || "当前会话", running: !!cur.busy, current: true, ws: "当前" };
    if (!groups.has("当前")) groups.set("当前", []);
    groups.get("当前").push(it0); sessions.push(it0);
  }
  var settings = hubSettings();
  cards.set("core", { id: "core", type: "core", title: "DeepSeek Harness", count: sessions.length, groups: groups.size, settings: settings, state: sessions.some(function (s) { return s.running; }) ? "working" : "idle", x: -560, y: 0, z: -90, w: 150, h: 150 });
  if (HSTATE.ws && groups.has(HSTATE.ws)) return collectWorkspaceView({ cards: cards, groups: groups, sid: sid, sessions: sessions });
  // windows: current + running + recently opened conversations (user can close any of them)
  var byId = new Map(sessions.map(function (s) { return [s.id, s]; }));
  var shownIds = [];
  function pushId(id) { if (byId.has(id) && shownIds.indexOf(id) < 0 && !HSTATE.closed.has(id)) shownIds.push(id); }
  if (sid) pushId(sid);
  sessions.forEach(function (s) { if (s.running) pushId(s.id); });
  HSTATE.recent.slice(0, 5).forEach(pushId);
  if (sid && shownIds.length > 2) { var ci = shownIds.indexOf(sid); if (ci >= 0) { shownIds.splice(ci, 1); shownIds.splice(Math.floor(shownIds.length / 2), 0, sid); } }
  var N = Math.max(1, shownIds.length);
  var ps = N <= 1 ? 0.5 : (N === 2 ? 0.44 : 0.38);      // panes are sized automatically by how many are open
  var basePw = PANE.w || 1100, basePh = PANE.h || 760;
  var LEAF_H = 44, HUB_W = 120, GAP = 34, KZ = { cmd: 170, file: -110, agent: -30 };   // the three branches live at different depths: a real 3D star
  function cut(t, n) { t = String(t || ""); return t.length > n ? t.slice(0, n - 1) + "…" : t; }
  function estH(sc, nk, big) {
    var h = 96 + (nk ? 30 : 0);
    if (sc) h += (sc.cmds.length ? 26 + Math.min(big ? 10 : 5, sc.cmds.length) * 19 : 0) + (sc.files.length ? 26 + Math.min(big ? 20 : 9, sc.files.length + 2) * 19 : 0);
    return h;
  }
  function fileList(files, cap) {
    var seen = new Set(), ch = [], rest = [];
    files.slice().reverse().forEach(function (f) { var p = normPath(f.path); if (seen.has(p)) return; seen.add(p); (f.change ? ch : rest).push({ path: p, change: !!f.change }); });
    return { list: ch.concat(rest).slice(0, cap), total: seen.size, changed: ch.length };
  }
  // the three branches of any conversation / sub-agent: commands, files, sub-agents
  function specsFor(scan, kids, depth, compact) {
    var out = [], cc = depth ? 3 : (compact ? 3 : 6), cf = depth ? 3 : (compact ? 4 : 8), ca = depth ? 3 : (compact ? 3 : 6);
    if (scan && scan.cmds.length) out.push({ kind: "cmd", total: scan.cmds.length, items: scan.cmds.slice(-cc).map(function (c) { return { text: c.text, bad: /err|fail/i.test(c.state || "") }; }) });
    if (scan && scan.files.length) { var fl = fileList(scan.files, cf); out.push({ kind: "file", total: fl.total, changed: fl.changed, items: fl.list }); }
    if (kids.length && depth <= 2) out.push({ kind: "agent", total: kids.length, items: kids.slice(0, ca) });
    return out;
  }
  function slotOf(k, depth, compact) { return Math.max(92, stackH(specsFor(SCANS.get(k.id), cats[k.id] || [], depth, compact), depth, compact)); }
  function specH(sp, depth, compact) {
    if (sp.kind === "agent") { var h = 0; sp.items.forEach(function (k) { h += slotOf(k, depth + 1, compact); }); return h; }
    return (sp.items.length + (sp.total > sp.items.length ? 1 : 0)) * LEAF_H;
  }
  function stackH(specs, depth, compact) { var h = 0; specs.forEach(function (x) { h += specH(x, depth, compact); }); return h + Math.max(0, specs.length - 1) * GAP; }
  function place(out, subj, sides, compact) {
    sides.forEach(function (side) {
      var specs = specsFor(subj.scan, subj.kids, subj.depth, compact).filter(function (x) { return side.kinds.indexOf(x.kind) >= 0; });
      if (!specs.length) return;
      var hs = specs.map(function (x) { return specH(x, subj.depth, compact); });
      var total = hs.reduce(function (a, b) { return a + b; }, 0) + (specs.length - 1) * GAP;
      var y0 = subj.y - total / 2, d = side.dir;
      specs.forEach(function (sp, i) {
        var top = y0; y0 += hs[i] + GAP;
        var yc = top + hs[i] / 2, hx = subj.x + d * (subj.w / 2 + (subj.depth ? 96 : 70) + HUB_W / 2), hid = "b:" + subj.id + ":" + sp.kind;
        var label = sp.kind === "cmd" ? "命令" : (sp.kind === "agent" ? "子代理" : (sp.changed ? "文件改动" : "涉及文件"));
        var anyRun = sp.kind === "agent" ? sp.items.some(function (k) { return states[k.id] === "working"; }) : !!subj.run;
        out.cards.set(hid, { id: hid, type: "branch", kind: sp.kind, title: label, count: (sp.kind === "file" && sp.changed) ? sp.changed : sp.total, state: anyRun ? "working" : "idle", x: hx, y: yc, z: subj.z + KZ[sp.kind], w: HUB_W, h: 34 });
        out.edges.push({ a: subj.id, b: hid, kind: "branch", run: !!subj.run });
        if (sp.kind === "agent") {
          var cy = top;
          sp.items.forEach(function (k) {
            var slot = slotOf(k, subj.depth + 1, compact), st = states[k.id] || "queued", aid = "a:" + k.id, aw = 200;
            var ay = cy + slot / 2; cy += slot;
            if (out.cards.has(aid)) return;
            var ax = hx + d * (HUB_W / 2 + 40 + aw / 2), big = HSTATE.big === aid, scA = SCANS.get(k.id), az = subj.z + KZ[sp.kind] + 70 + subj.depth * 30;
            out.cards.set(aid, { id: aid, type: "agent", sid: k.id, title: k.label || "子代理", state: st, scan: scA, big: big, mini: !big, w: big ? 400 : aw, h: big ? estH(scA, false, true) : 76, x: ax, y: ay, z: az });
            out.edges.push({ a: hid, b: aid, kind: "agent", run: st === "working" });
            place(out, { id: aid, x: ax, y: ay, z: az, w: aw, depth: subj.depth + 1, scan: scA, kids: cats[k.id] || [], run: st === "working" }, [{ dir: d, kinds: ["cmd", "file", "agent"] }], compact);
          });
        } else {
          var n = sp.items.length, lx = hx + d * (HUB_W / 2 + 56 + 90);
          sp.items.forEach(function (it, j) {
            var lid = (sp.kind === "cmd" ? "c:" : "f:") + subj.id + ":" + j;
            out.cards.set(lid, { id: lid, type: "leaf", leaf: sp.kind, title: sp.kind === "cmd" ? cut(it.text, 26) : it.path.split("/").pop(), detail: sp.kind === "cmd" ? it.text : it.path, change: !!it.change, state: it.bad ? "error" : "idle", x: lx, y: top + (j + 0.5) * LEAF_H, z: subj.z + KZ[sp.kind] + 70 + Math.abs(j - (n - 1) / 2) * 22, w: 180, h: 32 });
            out.edges.push({ a: hid, b: lid, kind: sp.kind });
          });
          if (sp.total > n) {
            var mid = "m:" + subj.id + ":" + sp.kind;
            out.cards.set(mid, { id: mid, type: "leaf", leaf: "more", title: "+" + (sp.total - n) + " 更多", detail: "还有 " + (sp.total - n) + " 项，点它所属的对话查看", state: "idle", x: lx, y: top + (n + 0.5) * LEAF_H, z: subj.z + KZ[sp.kind] + 90, w: 180, h: 32 });
            out.edges.push({ a: hid, b: mid, kind: sp.kind });
          }
        }
      });
    });
  }
  var stars = [];
  shownIds.forEach(function (id) {
    var s = byId.get(id), sc = s.current ? scanConversation() : SCANS.get(s.id), kids = cats[s.id] || [];
    var snap = SNAPS.get(s.id), hasPane = s.current || !!snap, compact = !s.current && !s.running;
    var out = { cards: new Map(), edges: [] }, subj;
    if (hasPane) {
      var pw = (snap && !s.current) ? snap.w : basePw, ph = (snap && !s.current) ? snap.h : basePh;
      var pc = { id: "p:" + s.id, type: s.current ? "live" : "snap", sid: s.id, title: s.title, state: s.running ? "working" : "idle", current: s.current, w: pw * ps, h: ph * ps, pw: pw, ph: ph, ps: ps, x: 0, y: 0, z: 0 };
      out.cards.set(pc.id, pc);
      subj = { id: pc.id, x: 0, y: 0, z: 0, w: pc.w, depth: 0, scan: sc, kids: kids, run: s.running };
    } else {
      var sc3 = { id: "s:" + s.id, type: "session", sid: s.id, title: s.title, state: s.running ? "working" : "idle", current: false, mini: true, scan: sc, kids: kids, w: 210, h: 92, x: 0, y: 0, z: 0 };
      out.cards.set(sc3.id, sc3);
      subj = { id: sc3.id, x: 0, y: 0, z: 0, w: 210, depth: 0, scan: sc, kids: kids, run: s.running };
    }
    place(out, subj, [{ dir: -1, kinds: ["cmd", "file"] }, { dir: 1, kinds: ["agent"] }], compact);
    stars.push({ s: s, out: out, subjId: subj.id, ws: s.ws || "其它会话" });
  });
  // ---- the universe: core -> workspaces (planets) -> conversations -> commands / sub-agents / files ----
  var coreC = cards.get("core"); coreC.x = 0; coreC.y = -380; coreC.z = 0;   // above the front workspace, so the open conversation never hides it
  var wsNames = Array.from(groups.keys());
  stars.forEach(function (st) { if (wsNames.indexOf(st.ws) < 0) wsNames.push(st.ws); });
  var curWs = null; stars.forEach(function (st) { if (st.s.current) curWs = st.ws; });
  if (curWs && wsNames.indexOf(curWs) >= 0) { wsNames.splice(wsNames.indexOf(curWs), 1); wsNames.unshift(curWs); }
  var shownSet = new Set(shownIds);
  var blocks = [];
  wsNames.forEach(function (name) {
    var list = stars.filter(function (st) { return st.ws === name; });
    var blk = { name: name, cards: new Map(), edges: [], list: list }, cur = 0;
    list.forEach(function (st, idx) {
      var x0 = 1e9, x1 = -1e9;
      st.out.cards.forEach(function (c) { x0 = Math.min(x0, c.x - c.w / 2); x1 = Math.max(x1, c.x + c.w / 2); });
      var dx = cur - x0, dz = list.length > 1 ? (idx % 2 ? 260 : -140) : 0;
      st.out.cards.forEach(function (c) { c.x += dx; c.z = (c.z || 0) + dz; blk.cards.set(c.id, c); });
      st.out.edges.forEach(function (e) { blk.edges.push(e); });
      st.px = st.out.cards.get(st.subjId).x;
      cur += (x1 - x0) + 170;
    });
    var cx = 0, topY = 0;
    if (list.length) { var a0 = 1e9, a1 = -1e9; topY = 1e9; blk.cards.forEach(function (c) { a0 = Math.min(a0, c.x - c.w / 2); a1 = Math.max(a1, c.x + c.w / 2); topY = Math.min(topY, c.y - c.h / 2); }); cx = (a0 + a1) / 2; }
    var py = list.length ? topY - 150 : 0, wid = "w:" + name, members = (groups.get(name) || []);
    blk.planetId = wid;
    blk.cards.set(wid, { id: wid, type: "wsnode", title: name, sessions: list.length, total: members.length, state: (list.some(function (st) { return st.s.running; }) || members.some(function (m) { return m.running; })) ? "working" : "idle", x: cx, y: py, z: 0, w: 210, h: 86, open: list.length > 0 });
    list.forEach(function (st) { blk.edges.push({ a: wid, b: st.subjId, kind: "ws", v: true, run: st.s.running }); });
    // moons: the workspace's other conversations (click one to open it as a card)
    var rest = members.filter(function (m) { return !shownSet.has(m.id); });
    var cap = HSTATE.wsAll[name] ? 30 : 6, showM = rest.slice(0, cap);
    showM.forEach(function (m, i) {
      var side = list.length ? (i % 2 ? 1 : -1) : 0, row = list.length ? Math.floor(i / 2) : i;
      var mx = cx + side * 215, my = py + (list.length ? 6 : 84) + row * 40, mid = "mo:" + m.id;
      blk.cards.set(mid, { id: mid, type: "leaf", leaf: "conv", sid: m.id, title: cut(m.title, 16), detail: m.title + "（点击以卡片打开，双击跳转）", state: m.running ? "working" : "idle", x: mx, y: my, z: 30 + (i % 3) * 14, w: 190, h: 30 });
      blk.edges.push({ a: wid, b: mid, kind: "moon" });
    });
    if (rest.length > showM.length || (HSTATE.wsAll[name] && rest.length > 6)) {
      var i2 = showM.length, side2 = list.length ? (i2 % 2 ? 1 : -1) : 0, row2 = list.length ? Math.floor(i2 / 2) : i2, mid2 = "mm:" + name;
      var more = HSTATE.wsAll[name] ? "收起" : "+" + (rest.length - showM.length) + " 更多";
      blk.cards.set(mid2, { id: mid2, type: "leaf", leaf: "more", wsToggle: name, title: more, detail: HSTATE.wsAll[name] ? "收起" : "展开这个工作区的全部对话", state: "idle", x: cx + side2 * 215, y: py + (list.length ? 6 : 84) + row2 * 40, z: 30, w: 190, h: 30 });
      blk.edges.push({ a: wid, b: mid2, kind: "moon" });
    }
    var bx0 = 1e9, bx1 = -1e9; blk.cards.forEach(function (c) { bx0 = Math.min(bx0, c.x - c.w / 2); bx1 = Math.max(bx1, c.x + c.w / 2); });
    blk.cx = (bx0 + bx1) / 2; blk.w = Math.max(260, bx1 - bx0);
    blocks.push(blk);
  });
  // workspaces orbit the core on a ring; each gets an arc as wide as it is
  var GAPW = 240, total = 0; blocks.forEach(function (b) { total += b.w + GAPW; });
  var R = Math.max(1150, total / (Math.PI * 2)), extra = (Math.PI * 2 * R - total) / Math.max(1, blocks.length), start = 0;
  blocks.forEach(function (blk, bi) {
    var th = (start + blk.w / 2 - blocks[0].w / 2) / R; start += blk.w + GAPW + extra;
    var ct = Math.cos(th), st2 = Math.sin(th), Cx = R * st2, Cz = -R * ct, Cy = bi ? Math.sin(bi * 1.7) * 110 : 0;
    blk.cards.forEach(function (c) {
      var X = c.x - blk.cx, Z = c.z || 0;
      c.x = Cx + X * ct - Z * st2; c.z = Cz + X * st2 + Z * ct; c.y = c.y + Cy;
      cards.set(c.id, c);
    });
    blk.edges.forEach(function (e) { edges.push(e); });
    edges.push({ a: "core", b: blk.planetId, kind: "core", run: blk.cards.get(blk.planetId).state === "working" });
  });
  // the core's own branches: plugins, settings, new workspace...
  var sats = settings.filter(function (x) { return true; }), ns = sats.length;
  sats.forEach(function (it, i) {
    var ph = Math.PI * (0.12 + 0.76 * (ns > 1 ? i / (ns - 1) : 0.5)), tid = "t:" + it.label;
    cards.set(tid, { id: tid, type: "sat", title: it.label, off: !!it.off, run: it.run, state: "idle", x: Math.cos(ph) * 360, y: coreC.y + 90 + Math.sin(i * 2.1) * 26, z: -Math.sin(ph) * 360, w: 132, h: 34 });
    edges.push({ a: "core", b: tid, kind: "sat" });
  });
  var cp = cards.get("p:" + sid) || cards.get("s:" + sid) || coreC;
  return { cards: cards, edges: edges, center: cp, sessions: sessions, sid: sid, universe: true };
}

function paneBg(el) {
  for (var n = el; n && n !== document.documentElement; n = n.parentElement) {
    var c = getComputedStyle(n).backgroundColor;
    if (c && !/^rgba\(.*,\s*0\)$/.test(c) && c !== "transparent") return n === el ? "" : c;
  }
  return "#fff";
}
function HOLOSNAP(sid) { return SNAPS.get(sid); }
function watchHolo() {
  var NS = "http://www.w3.org/2000/svg";
  var paneGuard = null, frontLayer = null, liveFrame = null, liveK = 0, liveSW = 0, paneRead = false, paneLay = null, root = null, hudRoot = null, paneEl = null, paneSaved = null, pendingCenter = null, svg = null, gE = null, gF = null, layer = null, detail = null, search = null, thr = 0, unsubStore = null, loop = 0;
  var cam = { tx: 0, ty: 0, tz: 0, yaw: -0.18, pitch: 0.16, k: 0.3 };
  var lastInput = 0, data = null, focusId = null, hoverId = null, adj = new Map();
  var els = new Map(), edgeEls = [], fly = null, F = 1100, dragMoved = false, listScroll = 0;

  function el(tag, cls, parent, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text !== undefined && text !== null) e.textContent = text; if (parent) parent.appendChild(e); return e; }
  function sv(tag, attrs, parent) { var e = document.createElementNS(NS, tag); for (var k in attrs) e.setAttribute(k, attrs[k]); if (parent) parent.appendChild(e); return e; }
  function proj(p, W, H) {
    var x = p.x - cam.tx, y = p.y - cam.ty, z = (p.z || 0) - cam.tz;
    var cy = Math.cos(cam.yaw), sy = Math.sin(cam.yaw), cp = Math.cos(cam.pitch), sp = Math.sin(cam.pitch);
    var x1 = x * cy + z * sy, z1 = -x * sy + z * cy;
    var y1 = y * cp - z1 * sp, z2 = y * sp + z1 * cp;
    var s = F / Math.max(200, F + z2);
    return { x: W / 2 + x1 * s * cam.k, y: H / 2 + y1 * s * cam.k, s: s * cam.k, z: z2 };
  }
  function stateName(s) { return { working: "运行中", completed: "已完成", queued: "待命", idle: "空闲", error: "出错" }[s] || s; }
  function short(t, n) { return t.length > n ? t.slice(0, n - 1) + "…" : t; }

  function fillScan(body, sc, isMissing, big) {
    if (!sc) { if (isMissing) el("div", "mut", body, "还没记录它的命令和文件（打开过这个会话后才会出现）"); return; }
    if (sc.cmds.length) {
      el("div", "sec", body, "命令调用 · " + sc.cmds.length);
      sc.cmds.slice(big ? -10 : -5).forEach(function (c) { var r = el("div", "cmd", body, "> " + short(c.text, big ? 60 : 38)); r.title = c.text; if (/err|fail/i.test(c.state)) r.classList.add("bad"); });
    }
    if (sc.files.length) {
      var ch = sc.files.filter(function (f) { return f.change; }).length;
      el("div", "sec", body, "文件结构 · " + sc.files.length + (ch ? " · " + ch + " 处改动" : ""));
      var byDir = new Map();
      sc.files.slice(big ? -28 : -14).forEach(function (f) { var parts = f.path.split(/[\\\/]/), base = parts.pop(), d = parts.slice(-2).join("/") || "."; if (!byDir.has(d)) byDir.set(d, []); byDir.get(d).push({ base: base, change: f.change, path: f.path }); });
      var shown = 0;
      byDir.forEach(function (fs, d) {
        if (shown >= (big ? 20 : 9)) return;
        el("div", "dir", body, "▸ " + d + "/"); shown++;
        fs.forEach(function (f) { if (shown >= (big ? 20 : 9)) return; var r = el("div", "file" + (f.change ? " chg" : ""), body, (f.change ? "± " : "· ") + f.base); r.title = f.path; shown++; });
      });
    }
  }
  function makeCard(n) {
    if (n.type === "hub" && !n.open) {
      var o = el("div", "dsr-hc dsr-orb"); o.setAttribute("data-type", "hub"); o.setAttribute("data-state", n.state); o.style.width = "92px"; o.style.height = "92px";
      el("div", "ot", o, String(n.count)); el("div", "ol", o, "对话·设置");
      o.title = "展开：对话列表与常用设置";
      o.addEventListener("click", function (ev) { ev.stopPropagation(); HSTATE.hubOpen = true; build(); });
      o.addEventListener("pointerenter", function () { hoverId = n.id; mark(); }); o.addEventListener("pointerleave", function () { hoverId = null; mark(); });
      return o;
    }
    if (n.type === "snap") {
      var sc2 = el("div", "dsr-hc dsr-snap"); sc2.setAttribute("data-type", "snap"); sc2.setAttribute("data-state", n.state);
      sc2.style.width = n.pw + "px"; sc2.style.height = n.ph + "px";
      var sn = HOLOSNAP(n.sid); if (sn) { var body0 = el("div", "snapbody", sc2); body0.appendChild(sn.node.cloneNode(true)); }
      var xs = el("button", "snapx", sc2, "\u00D7"); xs.type = "button"; xs.title = "关闭这张卡片（可在左侧小球里重新打开）";
      xs.addEventListener("click", function (ev) { ev.stopPropagation(); HSTATE.closed.add(n.sid); build(); flyTo(fitView(), 600); });
      var veil = el("div", "snapveil", sc2);
      el("div", "snapname", veil, n.title);
      veil.addEventListener("click", function (ev) { if (dragMoved) return; ev.stopPropagation(); focus(n.id, true); });
      sc2.addEventListener("pointerenter", function () { hoverId = n.id; mark(); }); sc2.addEventListener("pointerleave", function () { hoverId = null; mark(); });
      return sc2;
    }
    if (n.type === "core") {
      var co = el("div", "dsr-hc dsr-orb dsr-core"); co.setAttribute("data-type", "core"); co.setAttribute("data-state", n.state); co.style.width = n.w + "px"; co.style.height = n.h + "px";
      el("div", "ct1", co, "deepseek"); el("div", "ct2", co, "HARNESS");
      el("div", "ct3", co, n.groups + " 个工作区 · " + n.count + " 个对话");
      co.title = HSTATE.ws ? "回到全景" : "DeepSeek Harness：所有工作区、插件、设置都连在这里";
      co.addEventListener("click", function (ev) { ev.stopPropagation(); if (HSTATE.ws) { HSTATE.ws = null; build(); flyTo(fitView(), 800); } else focus("core", true); });
      co.addEventListener("pointerenter", function () { hoverId = n.id; mark(); }); co.addEventListener("pointerleave", function () { hoverId = null; mark(); });
      return co;
    }
    if (n.type === "sat") {
      var sa = el("div", "dsr-hc branch sat"); sa.setAttribute("data-type", "sat"); sa.setAttribute("data-state", "idle"); sa.style.width = n.w + "px";
      if (n.off) sa.classList.add("off");
      el("span", "ic", sa, { "插件": "\u2726", "设置": "\u2699", "新会话": "\uFF0B", "自动化任务": "\u23F1", "新建工作区": "\u25A3" }[n.title] || "\u25CF");
      el("span", "nm", sa, n.title);
      sa.title = n.off ? "侧边栏里没有找到这个按钮" : "点击：" + n.title;
      sa.addEventListener("click", function (ev) { ev.stopPropagation(); if (dragMoved || n.off) return; n.run(); close(); });
      sa.addEventListener("pointerenter", function () { hoverId = n.id; mark(); }); sa.addEventListener("pointerleave", function () { hoverId = null; mark(); });
      return sa;
    }
    if (n.type === "branch") {
      var bc = el("div", "dsr-hc branch"); bc.setAttribute("data-type", "branch"); bc.setAttribute("data-kind", n.kind); bc.setAttribute("data-state", n.state); bc.style.width = n.w + "px";
      el("span", "ic", bc, n.kind === "cmd" ? ">_" : (n.kind === "agent" ? "\u25C8" : "\u270E"));
      el("span", "nm", bc, n.title); el("span", "ct", bc, String(n.count));
      bc.addEventListener("pointerenter", function () { hoverId = n.id; mark(); }); bc.addEventListener("pointerleave", function () { hoverId = null; mark(); });
      bc.addEventListener("click", function (ev) { if (dragMoved) return; ev.stopPropagation(); focus(n.id, true); });
      return bc;
    }
    if (n.type === "wsnode") {
      var wn = el("div", "dsr-hc wsnode"); wn.setAttribute("data-type", "wsnode"); wn.setAttribute("data-state", n.state); wn.style.width = n.w + "px";
      var wnh = el("div", "hd", wn); el("span", "dot", wnh); el("span", "tt", wnh, n.title);
      var wnb = el("div", "bdy", wn); el("div", "mut", wnb, n.sessions + " 个对话展开 · 共 " + n.total + " 个");
      var wrow = el("div", "chips", wnb);
      var wg = el("button", "gent", wrow, "文件夹结构 \u203A"); wg.type = "button";
      wg.addEventListener("click", function (ev) { ev.stopPropagation(); HSTATE.ws = n.title; HSTATE.big = null; focusId = null; build(); flyTo(fitView(), 800); });
      wn.addEventListener("pointerenter", function () { hoverId = n.id; mark(); }); wn.addEventListener("pointerleave", function () { hoverId = null; mark(); });
      wnh.addEventListener("click", function (ev) { if (dragMoved) return; ev.stopPropagation(); focus(n.id, true); });
      return wn;
    }
    if (n.type === "folder" || n.type === "leaf") {
      var lc = el("div", "dsr-hc small"); lc.setAttribute("data-type", n.type); lc.setAttribute("data-state", n.state); lc.style.width = n.w + "px";
      if (n.leaf) lc.setAttribute("data-leaf", n.leaf);
      if (n.change) lc.classList.add("chg");
      var lh = el("div", "sm", lc);
      el("span", "ic", lh, n.type === "folder" ? "\u25B8" : (n.leaf === "cmd" ? ">" : (n.leaf === "conv" ? "\u25CC" : (n.change ? "\u00B1" : "\u00B7"))));
      el("span", "nm", lh, n.type === "folder" ? n.title + "/" : n.title);
      if (n.type === "folder") el("span", "ct", lh, String(n.total));
      lc.title = n.detail || n.title;
      lc.addEventListener("click", function (ev) {
        if (dragMoved) return; ev.stopPropagation();
        if (n.leaf === "more" && n.wsToggle) { HSTATE.wsAll[n.wsToggle] = !HSTATE.wsAll[n.wsToggle]; build(); return; }
        if (n.leaf === "conv") {
          HSTATE.closed.delete(n.sid);
          if (HSTATE.recent.indexOf(n.sid) < 0) { HSTATE.recent.unshift(n.sid); HSTATE.recent.length = Math.min(6, HSTATE.recent.length); }
          build(); flyTo(fitView(), 700); return;
        }
        focus(n.id, true);
      });
      if (n.leaf === "conv") lc.addEventListener("dblclick", function (ev) { ev.stopPropagation(); openSession(n.sid); });
      lc.addEventListener("pointerenter", function () { hoverId = n.id; mark(); }); lc.addEventListener("pointerleave", function () { hoverId = null; mark(); });
      return lc;
    }
    if (n.type === "wsroot") {
      var wc = el("div", "dsr-hc"); wc.setAttribute("data-type", "wsroot"); wc.setAttribute("data-state", "idle"); wc.style.width = n.w + "px";
      var wh = el("div", "hd", wc); el("span", "dot", wh); el("span", "tt", wh, n.title);
      var back = el("button", "x", wh, "总览"); back.type = "button";
      back.addEventListener("click", function (ev) { ev.stopPropagation(); HSTATE.ws = null; build(); flyTo(fitView(), 700); });
      var wb = el("div", "bdy", wc);
      el("div", "mut", wb, n.sessions + " 个对话 · " + n.dirCount + " 个目录 · " + n.files + " 个文件");
      if (!n.files) el("div", "mut", wb, "还没记录到文件。打开过这个工作区里的对话后，文件结构才会出现。");
      else if (n.scanned < n.sessions) el("div", "mut", wb, "已记录 " + n.scanned + "/" + n.sessions + " 个对话的文件（其余打开过才会记录）");
      return wc;
    }
    var c = el("div", "dsr-hc"); c.setAttribute("data-type", n.type); c.setAttribute("data-state", n.state);
    if (n.mini) c.classList.add("mini"); if (n.big) c.classList.add("big");
    c.style.width = n.w + "px";
    var hd = el("div", "hd", c); el("span", "dot", hd);
    el("span", "tt", hd, n.type === "hub" ? "对话与设置" : n.title);
    if (n.type === "session") el("span", "bd", hd, n.current ? "当前 · " + stateName(n.state) : stateName(n.state));
    else if (n.type === "agent") el("span", "bd", hd, "子代理 · " + stateName(n.state));
    var x = el("button", "x", hd, n.type === "hub" ? "收起" : "×"); x.type = "button"; x.title = n.type === "hub" ? "收起成小球" : "关闭此窗口（可在左侧小球里重新打开）";
    x.addEventListener("click", function (ev) {
      ev.stopPropagation();
      if (n.type === "hub") { HSTATE.hubOpen = false; build(); return; }
      if (n.type === "session") HSTATE.closed.add(n.sid);
      if (HSTATE.big === n.id) { HSTATE.big = null; focusId = null; }
      build(); if (!focusId) flyTo(fitView(), 600);
    });
    var body = el("div", "bdy", c);
    if (n.type === "hub") {
      if (n.settings.length) {
        el("div", "gh", body, "设置与快捷");
        var bs = el("div", "chips", body);
        n.settings.forEach(function (it) { var b = el("button", "chip act", bs, it.label); b.type = "button"; b.addEventListener("click", function (ev) { ev.stopPropagation(); it.run(); close(); }); });
      }
      var lst = el("div", "lst", body);
      n.groups.forEach(function (g) {
        var gh = el("div", "gh", lst); el("span", "gn", gh, g[0]);
        var en = el("button", "gent", gh, "结构"); en.type = "button"; en.title = "进入这个工作区，查看文件夹结构";
        (function (name) { en.addEventListener("click", function (ev) { ev.stopPropagation(); HSTATE.ws = name; HSTATE.big = null; focusId = null; build(); flyTo(fitView(), 800); }); })(g[0]);
        g[1].forEach(function (s2) {
          var r = el("div", "row" + (s2.running ? " run" : "") + (s2.current ? " cur" : ""), lst); el("span", "rd", r); el("span", "rt", r, short(s2.title, 24)); r.title = s2.title + "（点击以卡片打开，双击跳转）";
          r.addEventListener("click", function (ev) {
            ev.stopPropagation(); HSTATE.closed.delete(s2.id);
            if (HSTATE.recent.indexOf(s2.id) < 0) { HSTATE.recent.unshift(s2.id); HSTATE.recent.length = Math.min(6, HSTATE.recent.length); }
            build(); var t = data.cards.get("s:" + s2.id); if (t) focus(t.id, true);
          });
          r.addEventListener("dblclick", function (ev) { ev.stopPropagation(); openSession(s2.id); });
        });
      });
      lst.scrollTop = listScroll;
      lst.addEventListener("scroll", function () { listScroll = lst.scrollTop; });
    } else if (n.mini) {
      var sc0 = n.scan;
      var sm = el("div", "mut", body, stateName(n.state) + " · " + (sc0 ? sc0.cmds.length + " 条命令 · " + sc0.files.length + " 个文件" + (n.kids && n.kids.length ? " · " + n.kids.length + " 个子代理" : "") : "点标题放大查看"));
    } else {
      if (n.kids && n.kids.length) {
        el("div", "sec", body, "子代理 · " + n.kids.length);
        var chips = el("div", "chips", body);
        n.kids.forEach(function (k) { var ch = el("span", "chip", chips, short(k.label, 14)); ch.setAttribute("data-state", k.state); ch.title = k.label + " · " + stateName(k.state); });
      }
      fillScan(body, n.scan, n.current || n.state === "working", n.big);
      if (n.big) { var go = el("button", "gobtn", body, "打开此会话"); go.type = "button"; go.addEventListener("click", function (ev) { ev.stopPropagation(); openSession(n.sid); }); }
    }
    c.addEventListener("pointerenter", function () { hoverId = n.id; mark(); });
    c.addEventListener("pointerleave", function () { hoverId = null; mark(); });
    if (n.type !== "hub") {
      hd.addEventListener("click", function (ev) { if (dragMoved) return; ev.stopPropagation(); if (focusId === n.id) { unfocus(); } else focus(n.id, true); });
      hd.addEventListener("dblclick", function (ev) { ev.stopPropagation(); openSession(n.sid); });
    }
    return c;
  }
  function build() {
    data = collectHolo();
    F = data.universe ? 3400 : 1100;      // a long lens for the universe so near planets do not balloon
    adj = new Map();
    data.edges.forEach(function (e) {
      if (!adj.has(e.a)) adj.set(e.a, new Set()); if (!adj.has(e.b)) adj.set(e.b, new Set());
      adj.get(e.a).add(e.b); adj.get(e.b).add(e.a);
    });
    while (gE.firstChild) gE.removeChild(gE.firstChild);
    while (gF.firstChild) gF.removeChild(gF.firstChild);
    while (layer.firstChild) layer.removeChild(layer.firstChild);
    while (frontLayer && frontLayer.firstChild) frontLayer.removeChild(frontLayer.firstChild);
    els = new Map(); edgeEls = [];
    data.cards.forEach(function (n) {
      var c = n.type === "live" ? null : makeCard(n); if (c) layer.appendChild(c);
      var pl = sv("line", { class: "dsr-h-pillar" }, gF), sh = sv("ellipse", { class: "dsr-h-shadow", rx: 26, ry: 8 }, gF);
      els.set(n.id, { c: c, n: n, w: n.w, h: c ? (c.offsetHeight || n.h) : n.h, pl: pl, sh: sh });
    });
    data.edges.forEach(function (e) {
      if (!els.has(e.a) || !els.has(e.b)) return;
      var p = sv("path", { class: "dsr-h-edge", "data-kind": e.kind, "data-run": e.run ? "1" : "0" }, gE);
      edgeEls.push({ p: p, a: e.a, b: e.b, v: !!e.v });
    });
    if (pendingCenter && data.cards.get("p:" + pendingCenter) && data.cards.get("p:" + pendingCenter).type === "live") { var pc0 = pendingCenter; pendingCenter = null; setTimeout(function () { if (root) focus("p:" + pc0, true); }, 60); }
    mark(); showDetail();
    var cnt = hudRoot && hudRoot.querySelector(".dsr-holo-count");
    var act = Array.from(data.cards.values()).filter(function (n) { return n.type === "session" || n.type === "live" || n.type === "snap"; }).length;
    var ag = Array.from(data.cards.values()).filter(function (n) { return n.type === "agent"; }).length;
    if (cnt) cnt.textContent = data.sessions.length + " 个对话（" + act + " 个展开）· " + ag + " 个子代理";
    draw();
  }
  function mark() {
    var active = focusId || hoverId, keep = null;
    if (active) { keep = new Set([active]); (adj.get(active) || new Set()).forEach(function (a) { keep.add(a); if (focusId) (adj.get(a) || new Set()).forEach(function (b2) { keep.add(b2); }); }); }
    els.forEach(function (o, id) { if (!o.c) return; o.c.classList.toggle("dim", !!keep && !keep.has(id)); o.c.classList.toggle("sel", id === focusId); });
    edgeEls.forEach(function (o) {
      var hot = !!active && (o.a === active || o.b === active);
      o.p.classList.toggle("dim", !!active && !(keep.has(o.a) && keep.has(o.b))); o.p.classList.toggle("hot", hot);
    });
  }
  function draw() {
    if (!root) return;
    var W = window.innerWidth, H = window.innerHeight;
    var liveSeen = false, liveZ = null;
    els.forEach(function (o) { if (o.n.type === "live") liveZ = proj(o.n, W, H).z; });
    els.forEach(function (o) {
      var p = proj(o.n, W, H); o.p = p;
      var isPane = o.n.type === "live" || o.n.type === "snap";
      var s = isPane ? Math.max(0.03, p.s * (o.n.ps || PS)) : Math.min(1.6, Math.max(0.5, p.s));
      o.s = s; o.ps = s; o.hw = isPane ? (o.n.w / 2) * p.s : (o.w / 2) * s; o.hh = isPane ? (o.n.h / 2) * p.s : (o.h / 2) * s;
      var fog = Math.max(0.5, Math.min(1, 1.2 - (p.z + 200) / (data.universe ? 3000 : 1400)));
      var tf = "translate(" + p.x.toFixed(1) + "px," + p.y.toFixed(1) + "px) translate(-50%,-50%) scale(" + s.toFixed(4) + ")";
      if (o.n.type === "live") {
        liveSeen = true;
        var read = o.n.id === focusId && !fly && !!liveK;
        if (read !== paneRead && paneEl) {
          paneRead = read;
          if (read) { paneLay = { w: Math.min(PANE.w, Math.round(liveSW / 0.85)), h: Math.min(PANE.h, Math.round(H * 0.84 / 0.85)) }; } else paneLay = null;
          var lw = read ? paneLay.w : PANE.w, lh2 = read ? paneLay.h : PANE.h;
          paneEl.style.setProperty("width", lw + "px", "important"); paneEl.style.setProperty("height", lh2 + "px", "important");
          if (liveFrame) { liveFrame.style.width = lw + "px"; liveFrame.style.height = lh2 + "px"; }
        }
        if (read) { var rs = 0.85 * cam.k / liveK; s = rs; o.s = o.ps = rs; o.hw = paneLay.w * rs / 2; o.hh = paneLay.h * rs / 2; tf = "translate(" + p.x.toFixed(1) + "px," + p.y.toFixed(1) + "px) translate(-50%,-50%) scale(" + rs.toFixed(4) + ")"; }
        if (paneEl) { paneEl.style.visibility = ""; paneEl.style.transform = tf; }
        if (liveFrame) { liveFrame.style.display = ""; liveFrame.style.transform = tf; liveFrame.setAttribute("data-state", o.n.state); }
      } else if (o.c) {
        // cards nearer to the viewer than the live conversation must be drawn above it
        var front = liveZ !== null && p.z < liveZ - 8;
        if (front !== !!o.front && frontLayer) { o.front = front; (front ? frontLayer : layer).appendChild(o.c); }
        o.c.style.transform = tf; o.c.style.opacity = (o.n.type === "snap" ? Math.max(fog, 0.94) : fog).toFixed(2); o.c.style.zIndex = String(Math.round(1000 - p.z));
      }
      var fy = data.ws ? 620 : 520, fp = proj({ x: o.n.x, y: fy, z: o.n.z || 0 }, W, H);
      o.pl.setAttribute("x1", p.x.toFixed(1)); o.pl.setAttribute("y1", p.y.toFixed(1)); o.pl.setAttribute("x2", fp.x.toFixed(1)); o.pl.setAttribute("y2", fp.y.toFixed(1));
      o.sh.setAttribute("cx", fp.x.toFixed(1)); o.sh.setAttribute("cy", fp.y.toFixed(1)); o.sh.setAttribute("rx", (o.n.w * 0.22 * fp.s).toFixed(1)); o.sh.setAttribute("ry", (o.n.w * 0.06 * fp.s).toFixed(1));
      o.pl.style.opacity = o.sh.style.opacity = (fog * 0.8).toFixed(2);
    });
    if (!liveSeen && paneEl) paneEl.style.visibility = "hidden";
    if (!liveSeen && liveFrame) liveFrame.style.display = "none";
    edgeEls.forEach(function (o) {
      var A = els.get(o.a), B = els.get(o.b); if (!A.p || !B.p) return;
      if (o.v) {
        var up = A.p.y <= B.p.y, vy1 = A.p.y + (up ? 1 : -1) * A.hh, vy2 = B.p.y + (up ? -1 : 1) * B.hh, vd = Math.max(50, Math.abs(vy2 - vy1) * 0.5) * (up ? 1 : -1);
        o.p.setAttribute("d", "M" + A.p.x.toFixed(1) + " " + vy1.toFixed(1) + " C" + A.p.x.toFixed(1) + " " + (vy1 + vd).toFixed(1) + " " + B.p.x.toFixed(1) + " " + (vy2 - vd).toFixed(1) + " " + B.p.x.toFixed(1) + " " + vy2.toFixed(1));
        return;
      }
      var right = B.p.x >= A.p.x;
      var ax = A.p.x + (right ? 1 : -1) * A.hw, bx = B.p.x + (right ? -1 : 1) * B.hw;
      var ay = A.p.y, by = B.p.y, dx = Math.max(60, Math.abs(bx - ax) * 0.5) * (right ? 1 : -1);
      o.p.setAttribute("d", "M" + ax.toFixed(1) + " " + ay.toFixed(1) + " C" + (ax + dx).toFixed(1) + " " + ay.toFixed(1) + " " + (bx - dx).toFixed(1) + " " + by.toFixed(1) + " " + bx.toFixed(1) + " " + by.toFixed(1));
    });
  }
  function frame(now) {
    loop = 0; if (!root) return;
    if (fly) {
      var t = Math.min(1, (now - fly.t0) / fly.ms), e = 1 - Math.pow(1 - t, 3);
      ["tx", "ty", "tz", "k", "yaw", "pitch"].forEach(function (k) { cam[k] = fly.from[k] + (fly.to[k] - fly.from[k]) * e; });
      if (t >= 1) fly = null;
    } else if (!focusId && performance.now() - lastInput > 2500) {
      cam.yaw += Math.cos(now / 5200) * 0.0016;   // slow orbit, about ±0.5 rad
      cam.pitch += Math.sin(now / 7000) * 0.00012;
    }
    draw(); loop = requestAnimationFrame(frame);
  }
  function flyTo(to, ms) {
    if (ms && !(to && to.yaw === 0 && to.pitch === 0 && to.k === liveK)) liveK = 0;
    var from = { tx: cam.tx, ty: cam.ty, tz: cam.tz, k: cam.k, yaw: cam.yaw, pitch: cam.pitch };
    fly = { from: from, to: Object.assign({}, from, to), t0: performance.now(), ms: ms };
  }
  function liveFocus(n) {
    var W = window.innerWidth, H = window.innerHeight;
    // the conversation takes roughly a third of the screen and stays readable; the branches around it keep their room
    var sw = Math.max(Math.min(W * 0.5, 500), W * 0.33), k = sw / n.w;
    liveK = k; liveSW = sw;
    return { tx: n.x, ty: n.y, tz: n.z || 0, k: k, yaw: 0, pitch: 0 };
  }
  function focus(id, zoom) {
    var n0 = data && data.cards.get(id);
    if (!n0) return;
    if (n0.type === "snap") {
      // make it the live conversation: DSH mounts it in the real pane, then we centre on it
      var row = document.querySelector('[data-row-key="session:' + (window.CSS && CSS.escape ? CSS.escape(n0.sid) : n0.sid) + '"]');
      if (row) { pendingCenter = n0.sid; setTimeout(function () { pendingCenter = null; }, 4000); row.click(); return; }
    }
    if (n0.type === "live") { focusId = id; mark(); showDetail(); if (zoom) flyTo(liveFocus(n0), 700); return; }
    if (n0.type === "core" || n0.type === "sat" || n0.type === "branch" || n0.type === "leaf" || n0.type === "wsnode" || n0.type === "folder") { focusId = id; mark(); showDetail(); if (zoom) flyTo({ tx: n0.x, ty: n0.y, tz: n0.z || 0, k: 1.5, yaw: -0.05, pitch: 0.05 }, 700); return; }
    if (n0.type !== "hub" && HSTATE.big !== id) { HSTATE.big = id; focusId = id; build(); }
    focusId = id; mark(); showDetail();
    var n = data && data.cards.get(id);
    if (n && zoom) flyTo({ tx: n.x, ty: n.y, tz: n.z || 0, k: 1.25, yaw: -0.05, pitch: 0.05 }, 700);
  }
  function openSession(sidv) {
    var row = document.querySelector('[data-row-key="session:' + (window.CSS && CSS.escape ? CSS.escape(sidv) : sidv) + '"]');
    if (row) { row.click(); close(); }
  }
  function showDetail() {
    detail.textContent = "";
    var n = focusId && data && data.cards.get(focusId);
    detail.classList.remove("on");
    return;
    el("div", "k", detail, n.type === "agent" ? "子代理" : "对话");
    el("div", "t", detail, n.title);
    var st = el("div", "s", detail); st.setAttribute("data-state", n.state); st.textContent = "● " + stateName(n.state);
    var nb = Array.from(adj.get(n.id) || []).map(function (i) { return data.cards.get(i); }).filter(function (m) { return m && m.type !== "list"; });
    if (nb.length) {
      el("div", "h", detail, "相连（" + nb.length + "）");
      nb.slice(0, 12).forEach(function (m) { var b = el("button", "nb", detail, m.title); b.type = "button"; b.addEventListener("click", function () { focus(m.id, true); }); });
    }
    var open = el("button", "go", detail, "打开此会话"); open.type = "button"; open.addEventListener("click", function () { openSession(n.sid); });
    var all = el("button", "nb", detail, "← 回到全图"); all.type = "button"; all.addEventListener("click", function () { unfocus(); });
  }
  function fitView() {
    var W = window.innerWidth, H = window.innerHeight, list = Array.from(data.cards.values());
    var cx = 0, cy = 0, cz = 0;
    list.forEach(function (n) { cx += n.x; cy += n.y; cz += n.z || 0; });
    cx /= list.length; cy /= list.length; cz /= list.length;
    var saved = cam; cam = { tx: cx, ty: cy, tz: cz, yaw: -0.36, pitch: 0.26, k: 1 };
    var x0 = 1e9, x1 = -1e9, y0 = 1e9, y1 = -1e9, ss = 0;
    list.forEach(function (n) {
      var p = proj(n, W, H); ss += p.s; var h = ((els.get(n.id) && els.get(n.id).h) || n.h) * p.s / 2, w = n.w * p.s / 2;
      x0 = Math.min(x0, p.x - w); x1 = Math.max(x1, p.x + w); y0 = Math.min(y0, p.y - h); y1 = Math.max(y1, p.y + h);
    });
    cam = saved;
    var k = Math.max(0.06, Math.min(1.1, (W * 0.8) / Math.max(1, x1 - x0), (H * 0.72) / Math.max(1, y1 - y0)));
    // the graph is lopsided (orb far left, workspaces on top): move the target to the middle of the bounding box, not the centroid
    ss = Math.max(0.05, ss / list.length);
    cx += ((x0 + x1) / 2 - W / 2) / (Math.cos(-0.36) * ss); cy += ((y0 + y1) / 2 - H / 2) / (Math.cos(0.26) * ss);
    return { tx: cx, ty: cy, tz: cz, k: k, yaw: -0.36, pitch: 0.26 };
  }
  function unfocus() { var had = HSTATE.big; focusId = null; HSTATE.big = null; if (had) build(); mark(); showDetail(); flyTo(fitView(), 700); }
  function onSearch() {
    var q = search.value.trim().toLowerCase(); if (!q || !data) return;
    var hit = Array.from(data.cards.values()).filter(function (n) { return n.type !== "list" && n.title.toLowerCase().indexOf(q) !== -1; })[0];
    if (hit) { focus(hit.id, true); return; }
    var s = data.sessions.filter(function (x) { return x.title.toLowerCase().indexOf(q) !== -1; })[0];
    if (s) openSession(s.id);
  }
  function openHolo() {
    if (root) return;
    HOLO.open = true;
    paneEl = findPane();
    if (paneEl && !PANE.lifted) {
      var pr = paneEl.getBoundingClientRect(); PANE.w = pr.width; PANE.h = pr.height;
      paneSaved = paneEl.getAttribute("style");
      paneEl.style.cssText = (paneSaved ? paneSaved + ";" : "") + "position:fixed !important;left:0 !important;top:0 !important;right:auto !important;bottom:auto !important;margin:0 !important;width:" + pr.width + "px !important;height:" + pr.height + "px !important;z-index:2147483200 !important;transform-origin:50% 50%;border-radius:18px;overflow:hidden;box-shadow:0 24px 80px rgba(0,0,0,.55),0 0 0 1px rgba(127,188,255,.35);visibility:hidden" + (paneBg(paneEl) ? ";background:" + paneBg(paneEl) + " !important" : "");
      PANE.lifted = true;
    }
    root = el("div", "dsr-holo", document.body); root.setAttribute("data-dsr-holo", "");
    hudRoot = el("div", "dsr-holo-hudroot", document.body);
    paneRead = false; paneLay = null; liveK = 0;
    liveFrame = el("div", "dsr-liveframe", document.body); liveFrame.style.width = PANE.w + "px"; liveFrame.style.height = PANE.h + "px"; liveFrame.style.display = "none";
    el("div", "dsr-holo-grid", root); el("div", "dsr-holo-scan", root);
    svg = sv("svg", { class: "dsr-holo-svg" }, root);
    gF = sv("g", { class: "floor" }, svg); gE = sv("g", { class: "edges" }, svg);
    layer = el("div", "dsr-holo-cards", root);
    frontLayer = el("div", "dsr-holo-front", hudRoot);
    var hud = el("div", "dsr-holo-hud", hudRoot);
    var top = el("div", "dsr-holo-top", hud);
    el("div", "dsr-holo-title", top, "全息星图");
    el("div", "dsr-holo-count", top);
    search = el("input", "dsr-holo-search", top); search.placeholder = "搜索对话、子代理…（回车）";
    search.addEventListener("keydown", function (e) { e.stopPropagation(); if (e.key === "Enter" && !e.isComposing) onSearch(); if (e.key === "Escape") search.blur(); });
    var x = el("button", "dsr-holo-x", top, "×"); x.type = "button"; x.addEventListener("click", close);
    detail = el("div", "dsr-holo-detail", hud);
    el("div", "dsr-holo-foot", hud, "拖动旋转 · Shift/右键拖动平移 · 滚轮缩放 · 点卡片标题聚焦 · 双击打开 · Esc 退出");
    cam = { tx: -300, ty: 0, tz: 0, yaw: -0.8, pitch: 0.45, k: 0.3 };
    build();
    flyTo(fitView(), 1100);
    var drag = null;
    root.addEventListener("contextmenu", function (e) { e.preventDefault(); });
    root.addEventListener("pointerdown", function (e) {
      if (e.target.closest(".dsr-hc")) return;
      drag = { x: e.clientX, y: e.clientY, pan: e.button === 2 || e.shiftKey, moved: false }; dragMoved = false; lastInput = performance.now(); fly = null;
      root.setPointerCapture(e.pointerId); root.classList.add("pan");
    });
    root.addEventListener("pointermove", function (e) {
      if (!drag) return;
      var dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      if (Math.abs(dx) + Math.abs(dy) > 3) { drag.moved = true; dragMoved = true; }
      drag.x = e.clientX; drag.y = e.clientY; lastInput = performance.now();
      if (drag.pan) {
        var cy = Math.cos(cam.yaw), sy = Math.sin(cam.yaw);
        cam.tx -= (dx * cy) / cam.k; cam.tz -= (-dx * sy) / cam.k; cam.ty -= dy / cam.k;
      } else {
        cam.yaw += dx * 0.004; cam.pitch = Math.max(-0.9, Math.min(0.9, cam.pitch + dy * 0.004));
      }
    });
    function endDrag() { if (drag && !drag.moved && focusId) unfocus(); drag = null; root && root.classList.remove("pan"); setTimeout(function () { dragMoved = false; }, 0); }
    root.addEventListener("pointerup", endDrag); root.addEventListener("pointercancel", endDrag);
    root.addEventListener("wheel", function (e) {
      var lst = e.target.closest && e.target.closest(".lst");
      if (lst && lst.scrollHeight > lst.clientHeight) return; // let the conversation list scroll
      e.preventDefault(); fly = null; lastInput = performance.now();
      cam.k = Math.min(2.4, Math.max(0.06, cam.k * Math.exp(-e.deltaY * 0.0015)));
    }, { passive: false });
    function onPaneDown(e) {
      if (!root || !paneEl || !paneEl.contains(e.target)) return;
      var liveCard = null; data.cards.forEach(function (c) { if (c.type === "live") liveCard = c; });
      var o = liveCard && els.get(liveCard.id);
      if (o && o.ps < 0.72) { e.preventDefault(); e.stopPropagation(); if (e.type === "pointerdown") focus(liveCard.id, true); }
    }
    document.addEventListener("pointerdown", onPaneDown, true); document.addEventListener("click", onPaneDown, true);
    paneGuard = function () { document.removeEventListener("pointerdown", onPaneDown, true); document.removeEventListener("click", onPaneDown, true); };
    unsubStore = function () { STORE.subs.delete(onStore); };
    STORE.subs.add(onStore);
    requestAnimationFrame(function () { root && root.classList.add("in"); hudRoot && hudRoot.classList.add("in"); });
    loop = requestAnimationFrame(frame);
  }
  function onStore() { clearTimeout(thr); thr = setTimeout(function () { if (root) build(); }, pendingCenter ? 350 : 900); }
  function close() {
    if (!root) return;
    if (unsubStore) unsubStore(); unsubStore = null;
    cancelAnimationFrame(loop); loop = 0; clearTimeout(thr);
    if (paneGuard) { paneGuard(); paneGuard = null; }
    if (paneEl && PANE.lifted) { if (paneSaved === null) paneEl.removeAttribute("style"); else paneEl.setAttribute("style", paneSaved); PANE.lifted = false; }
    paneEl = null; paneSaved = null;
    if (liveFrame) { liveFrame.remove(); liveFrame = null; } paneRead = false; paneLay = null; liveK = 0;
    var r = root, h = hudRoot; root = null; hudRoot = null; HOLO.open = false; focusId = null; hoverId = null; fly = null;
    r.classList.remove("in"); if (h) h.classList.remove("in"); setTimeout(function () { r.remove(); if (h) h.remove(); }, 260);
  }
  function onKey(e) {
    if (e.isComposing || e.keyCode === 229) return;
    if (e.altKey && !e.ctrlKey && !e.metaKey && (e.key === "h" || e.key === "H")) { e.preventDefault(); HOLO.toggle(); return; }
    if (root && e.key === "Escape" && paneEl && document.activeElement && paneEl.contains(document.activeElement) && (/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName) || document.activeElement.isContentEditable)) { e.preventDefault(); e.stopPropagation(); document.activeElement.blur(); return; }
    if (root && e.key === "Escape" && document.activeElement !== search && !(paneEl && paneEl.contains(document.activeElement) && /^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName) || (document.activeElement && document.activeElement.isContentEditable))) { e.preventDefault(); e.stopPropagation(); if (focusId) unfocus(); else if (HSTATE.ws) { HSTATE.ws = null; build(); flyTo(fitView(), 600); } else close(); }
  }
  HOLO.toggle = function () { if (root) close(); else openHolo(); };
  document.addEventListener("keydown", onKey, true);
  function trackStore() { trackRecents(STORE.current()); }
  STORE.subs.add(trackStore); trackStore();
  return function () {
    document.removeEventListener("keydown", onKey, true); STORE.subs.delete(trackStore);
    cancelAnimationFrame(loop); clearTimeout(thr);
    if (root) close();
    HOLO.open = false; HOLO.toggle = function () {};
  };
}

function registerBridge(ctx) {
  if (!ctx || !ctx.slots || typeof ctx.slots.inject !== "function") return;
  var React = require("react");
  var Slot = makeBridge(React);
  ctx.slots.inject("conversation.session.header.actions", function () {
    return ctx.slots.register({ name: "conversation.session.header.actions", id: "refined-ui-bridge", order: 30 }, Slot);
  });
}

function apply(ctx) {
  // Everything is tied to the plugin lifecycle: disabling the plugin removes the
  // style tag, the observer and the attribute.
  ctx.effect(function () { return injectCss(); }, PLUGIN + ": style");
  ctx.effect(function () { return watchSurfaces(); }, PLUGIN + ": surface tags");
  ctx.effect(function () { return watchPalette(); }, PLUGIN + ": command palette");
  ctx.effect(function () { return watchFx(); }, PLUGIN + ": cosmic fx");
  ctx.effect(function () { return watchInteractions(); }, PLUGIN + ": interactions");
  ctx.effect(function () { return watchRunState(); }, PLUGIN + ": run state");
  ctx.effect(function () { return watchHolo(); }, PLUGIN + ": hologram");
  ctx.effect(function () { return watchGraph(); }, PLUGIN + ": task constellation");
  ctx.effect(function () { return watchDiagnostics(); }, PLUGIN + ": diagnostics");
  try { registerBridge(ctx); } catch (err) { console.warn("[dsh-refined-ui] run-state bridge unavailable, using DOM detection:", err); }
}

module.exports = { name: name, apply: apply, inject: inject };
return module.exports; } });
