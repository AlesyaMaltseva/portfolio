import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider, } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Projects from './components/Projects.jsx'
import IqMillion from './pages/iq-million/iq-million.jsx'

const router = createBrowserRouter([
	{
		path: '/portfolio/',
		element: <App />,
	},
  {
		path: '/portfolio/:dyson/',
		element: <Projects />,
	},
    {
		path: '/portfolio/:iq-million/',
		element: <IqMillion />,
	},
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>    
     <RouterProvider router={router} />
  </StrictMode>,
);
