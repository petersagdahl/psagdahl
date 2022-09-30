import {getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDPqdTvtsAV8LJCk2Ypx5kUfar_2jx_h0c",
    authDomain: "petersagdahl-c662f.firebaseapp.com",
    databaseURL: "https://petersagdahl-c662f-default-rtdb.firebaseio.com",
    projectId: "petersagdahl-c662f",
    storageBucket: "petersagdahl-c662f.appspot.com",
    messagingSenderId: "488744007604",
    appId: "1:488744007604:web:b5a0c9d26a8df4f65024e1"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, firestore, storage};
