import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
//import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from './pages/Home.jsx';
// import DashboardLayout from './pages/DashboardLayout.jsx';
// import Root from './routes/Root.jsx';
// import Dashboard from './pages/Dashboard.jsx';
import App from './App.jsx';

//Instanciamos rutas:
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/dashboard",
//         element: < DashboardLayout />,
//         children: [
//           {
//             path: "/dashboard",
//             element: <Dashboard />,
//           },
//         ]
//       },
//     ]

//   },

// ])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <RouterProvider router={router} /> */}
  </StrictMode>,
)
