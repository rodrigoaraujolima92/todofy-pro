import firebaseConfig from "@/const/key.js";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();

export const createUser = async (email, senha) => {
  return await createUserWithEmailAndPassword(auth, email, senha);
};

export const signIn = async (email, senha) => {
  return await signInWithEmailAndPassword(auth, email, senha);
};
