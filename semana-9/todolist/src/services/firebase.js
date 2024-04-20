import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBlWDKtkbgcHds1vyO13xev36wCI-NbCaM",
  authDomain: "react-codigo-g18-todolist.firebaseapp.com",
  projectId: "react-codigo-g18-todolist",
  storageBucket: "react-codigo-g18-todolist.appspot.com",
  messagingSenderId: "306360316725",
  appId: "1:306360316725:web:f88013f274d1687648127c",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
