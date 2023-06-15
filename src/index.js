import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter} from 'react-router-dom'
import ErrorPage from "./pages/Error/ErrorPage";
import {RouterProvider} from "react-router";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Post from "./pages/Post";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/blog',
                element: <Posts/>
            },
            {
                path: '/post/:id',
                element: <Post/>
            }
        ]
    }
])

const root = ReactDOM.createRoot(
    document.getElementById('root')
);

root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);
