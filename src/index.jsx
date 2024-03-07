import React from "react";
import { createRoot } from 'react-dom/client';
import Root from './routes/root.jsx';
import Parent from './parent.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const root = createRoot(document.getElementById("root"));

const router = createBrowserRouter([{
  path: "/",
  element: <Parent />,
},]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



