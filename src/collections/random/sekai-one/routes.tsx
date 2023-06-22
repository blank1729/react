import React from "react"; 
import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import HomePage from "./pages/HomePage/HomePage";
import JSONPlaceHolderPage from "./pages/JsonPlaceHolderPage/JSONPlaceHolderPage";

const router = createBrowserRouter([
    {
      path: "/blog",
      element: <BlogPage/>,
    },{
      path: "/",
      element: <HomePage/>,
      errorElement: <ErrorPage/>   
    },{
        path: "/json",
        element: (
          <div>
            <h1>This is JSON place holder page</h1>
            <JSONPlaceHolderPage/>
          </div>
        ),
        errorElement: <ErrorPage/>   
      }
  ]);

export default router;