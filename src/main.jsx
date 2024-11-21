import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Grid from './components/Grid/grid.jsx';
import Root from './routes/Root.jsx';


//Instanciamos rutas:
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: < Dashboard />,
      },
      {
        path: "/",
        element: <Grid />,
      }
    ]

  },

])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
