import React from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import FormSingIn from './FormSignIn';

function SingIn() {

    const hadleEmail = ((email, password) => {
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
 });
   })
  return (
   <FormSingIn
   handleClick={hadleEmail}
   />
  )
}

export default SingIn