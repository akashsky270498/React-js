1 - npm create vite@latest || npx create-react-app "project name";
2 - npm intsall
3 - npm run dev || npm run start || npm run build
4 - npm install tailwindcss @tailwindcss/vite


Notes:
1. Virtual DOM: React uses(creates) a copy of DOM called virtual DOM & compares it with real (previous || browser DOM) to detect changes & only the changed parts of real DOM are updated (improving performance).

2. Browser DOM: In case of browser DOM, on each change (like a n/w call || state update) the entire DOM gets recreated & re-rendered this is expensive & leads to full page reloads.

3. React Fibre: The algorithm behind VDOM updates:-
- React fibre is the re-implementation of react core reconciliation algorithm allows:
- Pausing & Resuming rendering work.
- Aborting the updates if they no longer needed.
- Reusing the previously completed work.
- Enabling concurrent rendering.
- Assigning priority to different updates (animations v/s data fetches)

4. Reconciliation: The process of comparing the current VDOM tree with the previous VDOM tree & deciding what changes to apply in the real DOM is called reconciliation. This is the essence of the "Virtual DOM" optimization.

5. React seprates reconciliation & rendering:-
- Reconcilier decides what to change.
- Renderer (like React DOM || React Native) decides how to apply the changes.