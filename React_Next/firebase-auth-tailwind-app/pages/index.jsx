import { useEffect, useState } from "react"
import Registration from './registration'
import Login from './login'
import ResetPassword from './resetpassword'
import BabyBg from "./Images"
import VerifiyMail from "./VerifiyMail"
import {initializeApp} from 'firebase/app'
import firebaseconfig from '../firebaseconfig'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from 'next/router';

export default function() {
const app = initializeApp(firebaseconfig);
const auth = getAuth();
const router = useRouter();

useEffect(()=>onAuthStateChanged(auth, (user) => {
if(user){
  user.emailVerified & router.push('/Dashboard')
} 
}),[]);

const [pageState,setPageState] = useState(0)
const [emailVerified, setEmailVerified] = useState(""); 
return(
  <div className="h-auto min-h-screen max-h-full w-full flex flex-row justify-center items-center">

  <div className="flex flex-row max-h-120 rounded-xl shadow-xl w-11/12 sm:w-120 lg:w-auto" style={{background:'rgba(250, 250, 250, 0.4)',backdropFilter: 'blur(10px)'}}>

    <img src={BabyBg}  className="max-h-auto rounded-l-xl opacity-70 hidden lg:flex" />
      
    <div className="w-full flex items-center min-w-0 lg:min-w-0">
        {pageState===0? 
          <Login navigate={e=>setPageState(e)}/> : 
          pageState===1?<Registration setEmail={e=>setEmailVerified(e)} navigate={e=>setPageState(e)}/> : 
          pageState===2?<ResetPassword navigate={e=>setPageState(0)}/> :
          <VerifiyMail navigate={e=>setPageState(0)} email={emailVerified}/> 
          }
        </div>
        </div>
      </div>
      )} 