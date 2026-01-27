import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,  createHashRouter, RouterProvider, } from 'react-router-dom';

import './index.css';
import App from './App.jsx';
import ErrorPage404 from './error-page-404.jsx';
import Projects from './components/Projects.jsx';

import Dyson from './pages/dyson/dyson.jsx';
import IqMillion from './pages/iq-million/iq-million.jsx';
import Tork from './pages/tork/tork.jsx';



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
		path: "iq-million/",
		element: <IqMillion />,
		},
		{
		path: "tork/",
		element: <Tork />,
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
