import React, { createContext, useEffect, useState } from 'react'
export const AuthContext=createContext();
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import {auth} from "../utils/firebase.init"
import axios from "axios";
function AuthProvider({children}) {
const[user,setUser]=useState(null);
const[loader,setLoader]=useState(true)

//Register user
const registerUser=(email,password)=>{
  return createUserWithEmailAndPassword(auth,email,password);
}
//google login 
const loginWithGoogle=(provider)=>{
  return signInWithPopup(auth, provider)
}
//email login
const emailSignIn=(email,password)=>{
  return signInWithEmailAndPassword(auth, email, password)
}

//Auth observer
useEffect(()=>{
  const unsubscribe=onAuthStateChanged(auth, async(currentUser) => {
    if(currentUser?.email){
      setUser(currentUser);
      const {data}=await axios.post(`${import.meta.env.VITE_API_URL}/jwt`,{email:currentUser?.email},{withCredentials: true })
    }else{
      setUser(currentUser)
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/logout`,
        { withCredentials: true }
      )
    }


    setLoader(false)   
    
   
 
     });
     return ()=>{
       return unsubscribe()
     }
},[])

// Logout
const logOutUser = () => {
  return signOut(auth)
    .then(() => {
      setLoader(false)  
    })
    .catch((error) => {
      console.error("Error logging out:", error);
    });
};

//forget password
const forgetPassword=(email)=>{
  return sendPasswordResetEmail(auth,email)
}

const authInfo={
user,loader,registerUser,loginWithGoogle,emailSignIn,logOutUser,forgetPassword
}
  return (
    <>

    <AuthContext.Provider value={authInfo}>
    {children}
    </AuthContext.Provider>
        
    </>
  )
}

export default AuthProvider;