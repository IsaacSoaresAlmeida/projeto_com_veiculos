import { db } from "../firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore";

export async function addVehicle(data: any) {
  const ref = collection(db, "vehicles");
  await addDoc(ref, data);
}

export async function getVehicles() {
  const snapshot = await getDocs(collection(db, "vehicles"));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}
