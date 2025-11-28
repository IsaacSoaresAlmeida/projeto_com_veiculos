import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase/firebase";

export function useFirebaseAuth() {
  const auth = getAuth(app);

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);

  return { login, logout };
}
