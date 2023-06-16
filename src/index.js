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
import {Provider} from "react-redux";
import store from "./store/store";
import UserPage from "./pages/UserPage";

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
            },
            {
                path: '/users',
                element: <UserPage/>
            }
        ]
    }
])

const root = ReactDOM.createRoot(
    document.getElementById('root')
);

root.render(
  <React.StrictMode>
      <Provider store={store}>
          <RouterProvider router={router}/>
      </Provider>
  </React.StrictMode>
);
