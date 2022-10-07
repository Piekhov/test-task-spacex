import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDkRA74vbSVzxA5ljfkSCnMwbAN3Ia9CX4",
  authDomain: "test-task-spacex.firebaseapp.com",
  projectId: "test-task-spacex",
  storageBucket: "test-task-spacex.appspot.com",
  messagingSenderId: "1084484718348",
  appId: "1:1084484718348:web:9b5e2c24a008b890144329"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)