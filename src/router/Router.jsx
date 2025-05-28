import React from 'react';
import { createBrowserRouter } from "react-router";
import MainLayout from '../layouts/MainLayout/MainLayout';
import Home from '../pages/Home/Home';
import SignUp from '../pages/SignUp/SignUp';
export const router = createBrowserRouter([
  {
    path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component:Home
          },
          {
            path: 'sign-up',
            element:<SignUp></SignUp>
          }
    ]
  },
]);

export default router;