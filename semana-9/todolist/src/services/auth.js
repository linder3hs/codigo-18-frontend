import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./firebase";

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

export function getCurrentUser() {
  return new Promise((resolve, reject) => {
    const observer = onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(user);
      } else {
        reject("User not found");
      }
    });

    return observer;
  });
}

export async function updateUser(name, photoURL) {
  const currentUser = auth.currentUser;

  const user = await updateProfile(currentUser, {
    displayName: name,
    photoURL: photoURL,
  });

  return user;
}
