// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection,doc,getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwzh57gLN-OHRUQ7qiFVlaZHwnmk3LXK8",
  authDomain: "notepad-e7fd4.firebaseapp.com",
  projectId: "notepad-e7fd4",
  storageBucket: "notepad-e7fd4.appspot.com",
  messagingSenderId: "61828373416",
  appId: "1:61828373416:web:962a63cb6a24c7e406db9d",
  measurementId: "G-2MZPZLCM20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const colRef = collection(db, "notes");
// console.log(citiesRef);
//const analytics = getAnalytics(app);
getDocs(colRef).then((snapshot)=>{
    tasks=[]
    
    snapshot.docs.forEach((doc)=>{
        tasks.push({id:doc.id})
    })
    console.log(tasks);
    console.log(tasks); 
})

