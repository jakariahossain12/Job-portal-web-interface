import React from 'react';
import { createBrowserRouter } from "react-router";
import MainLayout from '../layouts/MainLayout/MainLayout';
import Home from '../pages/Home/Home';
import SignUp from '../pages/SignUp/SignUp';
import Login from '../pages/Login/Login';
import JobDetails from '../pages/JobDetails/JobDetails';
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
          },
          {
            path: 'login',
            element:<Login></Login>
          },
          {
            path: 'details/:id',
            loader:({params})=> fetch(`http://localhost:3000/jobs/${params.id}`),
            element:<JobDetails></JobDetails>
          }
    ]
  },
]);

export default router;