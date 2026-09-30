# dsh-refined-ui

[简体中文](README.zh.md)

A CSS-only polish plugin for the [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) desktop/web UI. It keeps DSH's own brand blue and layout, and refines everything around it.

- **Calmer neutrals** for light and dark themes (backgrounds, surfaces, three text levels, borders, hover fills, status colors, user bubble, shadows), set through DSH's official `--dsw-*` tokens.
- **Composer**: a floating, large-radius card with a soft shadow; on focus a slowly flowing blue gradient hairline and glow appear.
- **Send button**: a bright blue gradient when usable, lifts on hover, springs on press.
- **Your messages**: the same soft blue wash as the selected sidebar row, dark text, a small tail corner, rises in on arrival.
- **Assistant replies**: 15px text, 1.82 line height, roomier paragraphs, rounder code blocks.
- **Sidebar**: smooth light-blue hover, selected row with a right-fading blue wash.
- **Quiet motion**: 120–200 ms hover/press feedback at specificity 0, so transitions a component already defines keep winning. All motion is disabled under `prefers-reduced-motion`.
- **Slim scrollbars** via DSH's scrollbar tokens.

It injects one `<style data-plugin="dsh-refined-ui">` and adds `data-dsr-*` attributes to the composer card, send button and user bubble. No DOM is restructured, no events are intercepted, no messages are read. Disabling or uninstalling the plugin removes everything.

Works alongside [dsh-lingdong](https://github.com/lishize20040802-rgb/dsh-lingdong) and other UI plugins: it does not touch their classes, pseudo-elements or animations.

## Playful interactions (v0.4.0)

- **Ctrl/Cmd+K command palette**: fuzzy-jump to sessions or run New session / Plugins / Automations; arrows, Enter, Esc (IME-safe).
- **Pointer spotlight** on session rows and the composer.
- **Breathing glow** on the composer while the agent works, and a completion ring when it finishes.
- **Click ripple** and a **magnetic send button**.
- **Keyboard**: `/` focuses the composer; Alt+Up/Down switches sessions.

All of it honors reduced-motion and is fully removed on disable.

## Bolder (v0.6.0)

- **Edge glow** along the top/left/right of the conversation while the agent runs (thinking, commands and sub-agents all count — it reads DSH's own run state).
- **Working state**: spinning ring on the send button, embers from the composer, send burst and completion sparkle.
- **Task windows**: draggable glass windows linked by flowing lines while sub-agents run (Alt+G).
- **Hologram mode**: the "全息模式" button in the conversation header (or Alt+H) opens a 3D universe. A core sphere (DeepSeek Harness) connects every workspace plus plugins, settings, automations, new session and new workspace; each workspace connects its conversations (collapsed ones are small moons). Open conversations are the real UI — small cards keep the original look, click to centre one and chat in it (about a third of the screen, so branches keep their room). Every conversation forks into commands / sub-agents / changed files, and sub-agents fork the same three ways. It orbits slowly; drag to rotate, Shift/right-drag to pan, wheel to zoom, search to jump. Cards that are working carry a flowing colour edge. Commands and files are read from tool calls DSH already rendered; other sessions appear after they've been opened once.
- Ctrl+K palette, pointer spotlight, click ripple, magnetic send button, `/` and Alt+Up/Down shortcuts.

## Install

In the desktop app: **Plugins → Install plugin → Local directory**, choose this folder, then restart. The prebuilt `lib/` is included; no build step.

## Compatibility

Targets DSH `>=0.1.7`. Component selectors use only stable data markers (`data-composer-input`, `data-chat-flow-kind`) that dsh-lingdong verified against official 0.1.7-rc.2. Color values were chosen from token names DSH already uses and should be visually checked in both themes after each host upgrade.

## License

MIT
