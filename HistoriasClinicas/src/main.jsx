import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Error from './pages/ErrorPage/ErrorPage';
import CreateAccount from './pages/CreateAccount/CreateAccount';
import Welcome from './pages/Welcome/Welcome';

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
      },
      {
        path: "createAccount",
        element: <CreateAccount />
      },
      {
        path: "welcome",
        element: <Welcome />
      }
    ]
  },
  {
    path: "*",
    element: <Error/>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);