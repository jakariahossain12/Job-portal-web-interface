import React from 'react';
import { createBrowserRouter } from "react-router";
import MainLayout from '../layouts/MainLayout/MainLayout';
import Home from '../pages/Home/Home';
import SignUp from '../pages/SignUp/SignUp';
import Login from '../pages/Login/Login';
import JobDetails from '../pages/JobDetails/JobDetails';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import JobApply from '../pages/JobApply/JobApply';
import MyApplications from '../pages/MyApplications\'/MyApplications';
import JobAdd from '../pages/JobAdd/JobAdd';
import MyJobPost from '../pages/MyJobsPost/MyJobPost';
export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/jobs"),
        Component: Home,
      },
      {
        path: "sign-up",
        element: <SignUp></SignUp>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
        element: (
          <PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "job-apply/:id",
        element: (
          <PrivateRoute>
            <JobApply></JobApply>
          </PrivateRoute>
        ),
      },

      {
        path: "my-application",
        element: (
          <PrivateRoute>
            <MyApplications></MyApplications>
          </PrivateRoute>
        ),
      },

      {
        path: "job-add",
        element: (
          <PrivateRoute>
            <JobAdd></JobAdd>
          </PrivateRoute>
        ),
      },
      {
        path: "my-job-post",
        element:<PrivateRoute><MyJobPost></MyJobPost></PrivateRoute>
      },
    ],
  },
]);

export default router;