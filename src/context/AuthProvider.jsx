import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const createUserWithEmailAndPasswordFun = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInWithEmailAndPasswordFun = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // const signInWithPopupFun = () => {
  //   return signInWithPopup(auth, googleProvider);
  // };
  const handleSignoutFun = () => {
    return signOut(auth);
  };
  const autInfo = {
    user,
    setUser,
    createUserWithEmailAndPasswordFun,
    signInWithEmailAndPasswordFun,
    handleSignoutFun,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currUser) => {
      setUser(currUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return <AuthContext value={autInfo}>{children}</AuthContext>;
};

export default AuthProvider;
