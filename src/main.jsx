import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import {useState, Suspense, lazy} from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,  createHashRouter, HashRouter, RouterProvider, Router, BrowserRouter, StaticRouter} from 'react-router-dom';
import App from './App.jsx';
import Loader from './parts/Loader.jsx';
import ErrorPage404 from './error-page-404.jsx';

//const App = lazy(() => import ('./App.jsx'));
const Dyson = lazy(() => import ('./pages/dyson/Dyson.jsx'));
const DysonWashAndDry = lazy(() => import ('./pages/dyson/parts/DysonWashAndDry.jsx'));
const Dyson9kJ = lazy(() => import ('./pages/dyson/parts/Dyson9kJ.jsx'));
const DysonV = lazy(() => import ('./pages/dyson/parts/DysonV.jsx'));
const DysondB = lazy(() => import ('./pages/dyson/parts/DysondB.jsx'));
const IqMillion = lazy(() => import ('./pages/iq-million/IqMillion.jsx'));
const Tork = lazy(() => import ('./pages/tork/Tork.jsx'));
const Dezobrabotka = lazy(() => import ('./pages/dezobrabotka/Dezobrabotka.jsx'));
const Folders = lazy(() => import ('./pages/folders/Folders.jsx'));
const IqSummer = lazy(() => import ('./pages/iq-summer/IqSummer.jsx'));


//import Dyson from './pages/dyson/Dyson.jsx';
// import DysonWashAndDry from './pages/dyson/parts/DysonWashAndDry.jsx';
// import Dyson9kJ from './pages/dyson/parts/Dyson9kJ.jsx';
// import DysonV from './pages/dyson/parts/DysonV.jsx';
// import DysondB from './pages/dyson/parts/DysondB.jsx';
// import IqMillion from './pages/iq-million/IqMillion.jsx';
// import Tork from './pages/tork/Tork.jsx';
// import Dezobrabotka from './pages/dezobrabotka/Dezobrabotka.jsx';
// import Folders from './pages/folders/Folders.jsx';
// import IqSummer from './pages/iq-summer/IqSummer.jsx';


function SuspenseWrap(component) {	
	return <>
	<Suspense fallback={<Loader />}>{component}</Suspense>
	</>
}

const router = createHashRouter([
	
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage404 />,
		},
		{
		path: "dyson/",
		element: SuspenseWrap(<Dyson />),
		},
		{
		path: "dyson/wash-and-dry/",
		element: SuspenseWrap(<DysonWashAndDry />),
		},
		{
		path: "dyson/9kJ/",
		element: SuspenseWrap(<Dyson9kJ />),
		},
		{
		path: "dyson/V/",
		element: SuspenseWrap(<DysonV />),
		},
		{
		path: "dyson/dB",
		element: SuspenseWrap(<DysondB />),
		},
		{
		path: "iq-million/",
		element: SuspenseWrap(<IqMillion />),
		},
		{
		path: "tork/",
		element: SuspenseWrap(<Tork />),
		},
		{
		path: "dezobrabotka/",
		element: SuspenseWrap(<Dezobrabotka/>),
		},
		{
		path: "folders/",
		element: SuspenseWrap(<Folders />),
		},
		{
		path: "iq-summer/",
		element: SuspenseWrap(<IqSummer />),
		},	
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />			
	</React.StrictMode>
);


// const router = createBrowserRouter([
// 	{
// 		path: '/portfolio/',
// 		element: <App />,
//		errorElement: <ErrorPage404 />,
// 	},
//   {
// 		path: '/portfolio/dyson/',
// 		element: <Projects />,
// 	},
//     {
// 		path: '/portfolio/iq-million/',
//     element: <IqMillion />,
// 	},
// ]);


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>    
//      <RouterProvider router={router} />
//   </React.StrictMode>
// );

// function delayForDemo(promise) {
//   return new Promise(resolve => {
//     setTimeout(resolve, 2000);
//   }).then(() => promise);
// }


