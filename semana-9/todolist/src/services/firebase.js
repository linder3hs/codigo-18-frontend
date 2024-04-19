import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBlWDKtkbgcHds1vyO13xev36wCI-NbCaM",
  authDomain: "react-codigo-g18-todolist.firebaseapp.com",
  projectId: "react-codigo-g18-todolist",
  storageBucket: "react-codigo-g18-todolist.appspot.com",
  messagingSenderId: "306360316725",
  appId: "1:306360316725:web:f88013f274d1687648127c",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const storage = getStorage(app);

// function to create an user
export async function createUser(email, password) {
  try {
    const authentication = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    return authentication.user;
  } catch (error) {
    console.log(error.code);
    console.log(error.message);
    return null;
  }
}

export async function signIn(email, password) {
  try {
    const authentication = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    return authentication.user;
  } catch (error) {
    console.log(error.code);
    console.log(error.message);
    return null;
  }
}

export async function storeFile(file) {
  try {
    const storageRef = ref(storage, `images/${file.name}`);

    const snapshot = await uploadBytes(storageRef, file);
    const url = await getDownloadURL(snapshot.ref);

    return url;
  } catch (error) {
    console.log(error.code);
    console.log(error.message);
    return null;
  }
}
