import { useState } from 'react'
import {EmailSvg, PassSvg} from './Images'
import {initializeApp} from 'firebase/app'
import { getDatabase, ref, set } from "firebase/database";
import firebaseconfig from '../firebaseconfig'

export default function(props) {

  const app = initializeApp(firebaseconfig);
  const database = getDatabase();


  console.log(app);

  const [formEmailPassword] = useState({
    email     : "",
    password  : ""
  })

return(
<form className="flex flex-col justify-center w-full p-4 h-full lg:w-100">

    <div>
    <span className="text-2xl text-green-500 font-bold">Shipsar.in</span>
      <h5 className="font-medium mt-1">Sign into your account</h5>
    </div>
    
    <div className="mt-6" >
      {/* email */}
      <label htmlFor="email" className="font-medium text-gray-700">Email ID</label>
        <div className="relative mb-3 rounded-md shadow-sm">
        <div className="rounded-l-md p-3 bg-zinc-300 absolute">
          <EmailSvg />
        </div>
        <input type="email" name="email" 
          onChange={e=>{ 
            formEmailPassword['email'] = e.target.value
          }} 
          id="email" 
          className="block w-full rounded-md border-gray-300 pl-12 py-2 border pr-6 focus:outline-none" 
          required={true} maxLength={35} placeholder="abc@gmail.com" />
      </div>
    
      {/* Password  */}
      <label htmlFor="password" className="mt-6 font-medium text-gray-700">Password</label>
        <div className="relative mb-3 rounded-md shadow-sm">
        <div className="rounded-l-md p-3 bg-zinc-300 absolute">
          <PassSvg />
        </div>
        <input type="password" name="password" id="password"
          onChange={e=>{ 
            formEmailPassword['password'] = e.target.value
          }}
          className="block w-full rounded-md border-gray-300 pl-12 py-2 border pr-6 focus:outline-none" 
          placeholder="password" required={true} minLength={8} maxLength={21}/>
      </div>
    
      <div className="pt-1 mb-4">
        <button className="bg-green-600 px-5 py-1.5 rounded-lg cursor-pointer hover:bg-green-700">Login</button>
      </div>
    </div>
    
      <div className="mt-5" >
      
      <p className="cursor-pointer text-zinc-600 hover:text-green-600"  
        onClick={(e)=>{
          props.navigate(2); 
        }}>Reset Password</p>

        <p>Don't have an account?  
        <span className="cursor-pointer text-zinc-600 hover:text-green-600"  
        onClick={(e)=>{
          props.navigate(1); 
        }} > Register here</span>
        </p>

      </div>
  
        </form>)
} 