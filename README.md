# React Testing - Jest

1. Testing components

# REACT OPTIMIZATION TECHNIQUES

- # List virtualization or windowing 
    - Windowing is a technique that ensures that our lists only render items visible in the viewport.
    As the user scrolls, we calculate which elements we should display based on the position of the scrollbar and then add and remove those elements as they enter and exit the viewport.

    Rendering DOM elements is one of the most expensive operations web applications perform, and with windowing, we ensure that we render them only when needed.

    - Though it can improve performance, windowing is not a silver bullet. Windowing improves performance because it delays writing your entire list to the DOM, but the reality is that those items have to be written to the DOM eventually if you want the user to see them. If you don’t pay for the rendering time upfront, then you’ll have to pay for it later.

    Sometimes, windowing can actually decrease perceived performance because the user has to wait for each individual list item to load on scroll instead of waiting for one eager load of the entire list on mount.
    
    npm install react-virtualized --save
    npm install --save react-window
    npm install --save react-virtualized-auto-sizer

- # lazy loading images
- memoization
- useMemo Hook
- useCallback hook
- throttling debouncing events
- optimizing calls
- code splitting
- react fragments
- web workers
- useTransition hook
- use production build
- server side scripting
- use react profiler

# conceptual Topics

- createRoot
- Vitual DOM (not using now)
- Reconciliation
- Diffing algorithm
- React fibre
- server side and client side rendering in react
- synthetic events in react
- client side routing / server side routing
- SPA
- SPA/Server side rendering
- Analytics
- React Lifecycle

# React Topics

- https://www.javatpoint.com/react-interview-questions
- REACT HOOKS => https://medium.com/womenintechnology/what-are-the-different-types-of-hooks-in-react-470fdeb86b9
