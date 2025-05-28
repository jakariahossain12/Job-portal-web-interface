import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from "react-router";
import router from './router/Router.jsx';
import FirebaseAuthProvider from './FirebaseAuthProvider/FirebaseAuthProvider.jsx';
import ImgProvider from './ImgProvider/ImgProvider.jsx';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FirebaseAuthProvider>
      <ImgProvider>
        <RouterProvider router={router} />
      </ImgProvider>
    </FirebaseAuthProvider>
  </StrictMode>
);
