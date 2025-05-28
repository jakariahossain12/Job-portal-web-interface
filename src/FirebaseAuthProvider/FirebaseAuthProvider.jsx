import React, { useEffect, useState } from "react";
import { AuthContext } from "../context/Context";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const FirebaseAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const newUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUserInfo = (updataInfo) => {
    return updateProfile(auth.currentUser, updataInfo);
  };
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const userSignOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const userInfo = {
    user,
    newUser,
    updateUserInfo,
    userLogin,
    userSignOut,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default FirebaseAuthProvider;
