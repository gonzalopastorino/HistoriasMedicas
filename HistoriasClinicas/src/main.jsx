import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home';
import About from './pages/About/About';

const router  = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Navigate replace to="home" />,
      },
      {
        path: "home",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      }
    ]
  },
  {
    path: "*",
    element: <Navigate replace to="home" />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
