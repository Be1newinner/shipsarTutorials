import {initializeApp} from 'firebase/app'
import firebaseconfig from '../firebaseconfig'
import { getAuth, signOut } from "firebase/auth";
import { useEffect } from 'react';

export default function(props){
  const app = initializeApp(firebaseconfig);
  const auth = getAuth();
  // localStorage.getItem("emailLogin");

  useEffect(e=>{
    console.log(localStorage.getItem("emailLogin"));
  })

    return(<div className="  flex justify-center items-center">
        <div className="p-10 w-11/12 sm:w-120 lg:w-auto w-full shadow-xl rounded-xl text-center backdrop-blur-sm text-xl font-bold" style={{background:'rgba(250, 250, 250, 0.6)'}}>
        Welcome! {props.uName}, you are Logged In. <br/>
        {/* Your Email Id is {localStorage.getItem("emailLogin")} . */}
        <br />
        <div className="pt-1 mb-4">
        <button onClick={e=>{
          signOut(auth).then(()=>{});
          localStorage.setItem("emailLogin","");
          localStorage.setItem("emailUID","");
        }} 
        className="bg-green-600 px-5 py-1.5 rounded-lg cursor-pointer hover:bg-green-700">Log Out</button>
      </div>
        </div>
    </div>)
}