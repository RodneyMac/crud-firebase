import firebaseApp from "../firebase/credenciales";
import {getFirestore, collection, query, where, getDocs} from "firebase/firestore";

const db = getFirestore();

async function filtrarDatos(stringBusqueda) {
    const docusFiltrado = [];
    const coleccionRef = collection(db, "productos");
    const queryTitulo = query(coleccionRef, where("titulo", "==", stringBusqueda));
    const querySku = query(coleccionRef, where("sku", "==", stringBusqueda));
    
    const arraySnapshots = await Promise.all([getDocs(queryTitulo), getDocs(querySku,)]);
    arraySnapshots.forEach((snapshot) => {
        snapshot.forEach((doc) => {
            docusFiltrado.push(doc.data());
        });
    });
    console.log(docusFiltrado);
    return docusFiltrado;
}

export default filtrarDatos;