# React Testing - Jest

1. Testing components

# REACT OPTIMIZATION TECHNIQUES

    - # virtualization or windowing
        - Windowing is a technique that ensures that our lists only render items visible in the viewport.
        As the user scrolls, we calculate which elements we should display based on the position of the scrollbar and then add and remove those elements as they enter and exit the viewport.

        Rendering DOM elements is one of the most expensive operations web applications perform, and with windowing, we ensure that we render them only when needed.

        - Though it can improve performance, windowing is not a silver bullet. Windowing improves performance because it delays writing your entire list to the DOM, but the reality is that those items have to be written to the DOM eventually if you want the user to see them. If you don’t pay for the rendering time upfront, then you’ll have to pay for it later.

        Sometimes, windowing can actually decrease perceived performance because the user has to wait for each individual list item to load on scroll instead of waiting for one eager load of the entire list on mount.

        npm install react-virtualized --save
        npm install --save react-window
        npm install --save react-virtualized-auto-sizer

    - # lazy loading images
        Since images out of the viewport are not downloaded immediately, lazy loading conserves extra bandwidth usage. This is good for performance, especially for mobile users.

        

    - useMemo Hook
    - useCallback hook
    - # optimizing calls

        Scenario: 
        on every search (user typing (onChange)) the dev is sending the request for the text and trying to get the data from server whatever is possible
        This is the horrible approach since when doing this the dev is trafficing the network

        Solution: 
        1. Rather than making multiple calls axios gives us cancellationToken which will cancel the previous request and then send the new one or if the user is requesting the same URL again, it will go ahead and cancel the previous request and process the new one
        2. throttling & debouncing

    - # code splitting

        Code splitting is a technique used in React applications to improve performance and user experience by splitting the application’s bundle into smaller chunks that are loaded dynamically as needed.

        - `Faster Initial Page Load`: By splitting the application bundle into smaller chunks, only the necessary code for the initial view is loaded, reducing the initial download size and improving the time it takes for the page to load. 
        - `Optimized for Dynamic Routes or Views`: In applications with dynamic routing or views, code splitting allows you to load only the code necessary for each route or view when it is accessed
        -`1Reduced Memory Usage`: Loading smaller chunks of code dynamically as needed can help reduce the memory footprint of the application, especially for larger applications with many components and dependencies. 
        - `Better Caching and Resource Management`: Code splitting can also improve caching and resource management by allowing the browser to cache individual chunks of code separately.

    - react fragments
    - web workers
    - useTransition hook
    - use production build
    - server side scripting
    - use react profiler
    - concurrent rendering (React 18)

# conceptual Topics

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
