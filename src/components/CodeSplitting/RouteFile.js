import React, {Component, lazy, Suspense} from 'react'
import { Link, Outlet, Route, Routes, BrowserRouter } from 'react-router-dom';
// import Home from './Home';
// import About from './About';
// import Store from './Store';

const Home = React.lazy(() => import('./Home'));
const Store = React.lazy(() => import('./Store'));
const About = React.lazy(() => import('./About'));

const RouteFile = () => {
    return (
        <BrowserRouter>
            <Routes>
              {/* Define the main route with a wrapper */}
                <Route path="/" element={<NavWrapper />}>
                <Route index element={<Home />} /> {/* Default child route */}
                <Route path="about" element={<About />} />
                <Route path="store" element={<Store />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

function NavWrapper() {
    return (
        <>
            <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/store">Store</Link>
            </nav>
        <Suspense fallback={<h1>Loading...</h1>}>
            <Outlet /> {/* Render the nested route components here */}
        </Suspense>
        </>
    )
}

export default RouteFile
