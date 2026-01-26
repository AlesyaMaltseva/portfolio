import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,  createHashRouter, RouterProvider, } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import {
  createContext,
  RouterContextProvider,
} from "react-router";

import './index.css';
import App from './App.jsx';
import Projects from './components/Projects.jsx';
import IqMillion from './pages/iq-million/iq-million.jsx';


// import { HashRouter, Route } from 'react-router-dom';

// <HashRouter>
//   {<Route path='/portfolio/' component={ App } exact />}
//   {/* {<Route path='/portfolio/dyson' component={ Projects } exact /> */} 
  
// </HashRouter>

const router = createBrowserRouter([
	{
		path: '/portfolio/',
		element: <App />,
	},
//   {
// 		path: '/portfolio/dyson/',
// 		element: <Projects />,
// 	},
//     {
// 		path: '/portfolio/iq-million/',
//     element: <IqMillion />,
// 	},
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
