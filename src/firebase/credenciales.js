import {initializeApp} from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDVXs6RfdHx7Hj6pIlPRnTHkOtQLkZVZF4",
    authDomain: "crud-fire-ab2fe.firebaseapp.com",
    projectId: "crud-fire-ab2fe",
    storageBucket: "crud-fire-ab2fe.appspot.com",
    messagingSenderId: "323654520553",
    appId: "1:323654520553:web:acf2f560f1f456f78aea78",
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;