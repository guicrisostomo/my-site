import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const config = {
    apiKey: process.env.REACT_APP_VERCEL_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_VERCEL_FIREBASE_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_VERCEL_FIREBASE_DATABASEURL,
    projectId: process.env.REACT_APP_VERCEL_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_VERCEL_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_VERCEL_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_VERCEL_FIREBASE_APPID,
    measurementId: process.env.REACT_APP_VERCEL_FIREBASE_MEASUREMENTID
};

const app = initializeApp(config);
const db = getFirestore(app);

export default db;