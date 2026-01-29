import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,  createHashRouter, RouterProvider, } from 'react-router-dom';

import './index.css';
import App from './App.jsx';
import ErrorPage404 from './error-page-404.jsx';
import Projects from './components/Projects.jsx';

import Dyson from './pages/dyson/Dyson.jsx';
import DysonWashAndDry from './pages/dyson/parts/DysonWashAndDry.jsx';
import Dyson9kJ from './pages/dyson/parts/Dyson9kJ.jsx';
import DysonV from './pages/dyson/parts/DysonV.jsx';
import DysondB from './pages/dyson/parts/DysondB.jsx';
import IqMillion from './pages/iq-million/IqMillion.jsx';
import Tork from './pages/tork/Tork.jsx';
import Dezobrabotka from './pages/dezobrabotka/Dezobrabotka.jsx';
import Folders from './pages/folders/Folders.jsx';
import IqSummer from './pages/iq-summer/IqSummer.jsx';



const router = createHashRouter([
	
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage404 />,
		},
		{
		path: "dyson/",
		element: <Dyson />,
		},
		{
		path: "dyson/wash-and-dry/",
		element: <DysonWashAndDry />,
		},
		{
		path: "dyson/9kJ/",
		element: <Dyson9kJ />,
		},
		{
		path: "dyson/V/",
		element: <DysonV />,
		},
		{
		path: "dyson/dB",
		element: <DysondB />,
		},
		{
		path: "iq-million/",
		element: <IqMillion />,
		},
		{
		path: "tork/",
		element: <Tork />,
		},
		{
		path: "dezobrabotka/",
		element: <Dezobrabotka />,
		},
		{
		path: "folders/",
		element: <Folders />,
		},
		{
		path: "iq-summer/",
		element: <IqSummer />,
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
