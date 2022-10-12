import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAvoXPd4LzA4O6Ee9CbakzvWTQ6rirCpmo",
    authDomain: "my-site-710d2.firebaseapp.com",
    databaseURL: "https://my-site-710d2-default-rtdb.firebaseio.com",
    projectId: "my-site-710d2",
    storageBucket: "my-site-710d2.appspot.com",
    messagingSenderId: "1049374597868",
    appId: "1:1049374597868:web:e6071f25a10991056f7bc9",
    measurementId: "G-QMVDQ44478"
};

const app = initializeApp(config);
const db = getFirestore(app);

export default db;