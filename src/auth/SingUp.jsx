import React from 'react'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import FormSingUp from './FormSingUp';


function SingUp() {
  const EmailSignUp = (email, password) => {
  
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            
          const user = userCredential.user;
          const email = userCredential.email;
          const password = userCredential.password;
            
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
      }
  return (
   <div>
    <FormSingUp
    handleClick={EmailSignUp}
    />
   </div>
  )
}

export default SingUp