import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDn-Hg-pxca8m8f1VgORZzfHF6gRf4porA",
  authDomain: "fir-tuts-81352.firebaseapp.com",
  projectId: "fir-tuts-81352",
  storageBucket: "fir-tuts-81352.appspot.com",
  messagingSenderId: "139734127876",
  appId: "1:139734127876:web:77faabb83a9bf2b677ac51"
};

const app=initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);
const googleProvider=new GoogleAuthProvider();

const signInWithGoogle = async () =>{
  try{
    const response=await signInWithPopup(auth,googleProvider);
    const user=response.user;
    const q=query(collection(db,"users"),where("uid","==",user.id));
    const docs=await getDocs(q);
    
    if(docs.docs.length == 0){
      await addDoc(collection(db,"users"),{
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  }
  catch(error){
    console.log(error.message);
    alert(error.message);
  }
};

const logInWithEmailAndPassword = async (email,password)=>{
  try{

    await signInWithEmailAndPassword(auth,email,password)

  }
  catch(error){
    console.log(error.message);

  }
}

const registerWithEmailAndPassword = async(name,email,password) => {
  try{
    const response=await createUserWithEmailAndPassword(auth,email,password);
    const user= response.user;
    await addDoc(collection(db,"users"),{
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });

  }
  catch(error){
    console.log(error.message);
  }
};

const sendPasswordReset = async(email)=>{
  try{
    await sendPasswordResetEmail(auth,email);
    alert("Password reset email is sent ")
  }
  catch(error){
      console.log(error.message);
  }
}

const logOut = () => {
  signOut(auth);
}
export{
  auth,db,signInWithGoogle,signInWithEmailAndPassword,logInWithEmailAndPassword,registerWithEmailAndPassword,sendPasswordReset,logOut
}