import firebaseApp from "../firebase/credenciales";
import {getFirestore, collection, doc, setDoc} from "firebase/firestore";

const db = getFirestore();

function aniadirProducto(infoProducto) {
    const collectionRef = collection(db, "producto");
    const docRef = doc(collectionRef, infoProducto.sku);
    setDoc(docRef, infoProducto);
}

export default aniadirProducto;