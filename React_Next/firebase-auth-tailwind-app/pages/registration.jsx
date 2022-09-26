import { useState } from 'react'
import {EmailSvg, PassSvg, UserSvg} from './Images'

export default function(props) {
  const [formData] = useState({
    name      : "",
    email     : "",
    password  : "" ,
    password2 : ""
  })
    return(
    <form className="flex flex-col justify-center w-full p-4 h-full lg:w-100">


    <div>
      <span className="text-2xl text-green-500 font-bold">Shipsar.in</span>
      <h5 className="font-medium mt-1">Register for New Account</h5>
    </div>
    
    <div className="mt-6" >

        {/* Name */}
        <label htmlFor="name" className="font-medium text-gray-700">Name</label>
        <div className="relative mb-3 rounded-md shadow-sm">
        <div className="rounded-l-md p-3 bg-zinc-300 absolute">
          <UserSvg />
        </div>
        <input type="text" name="name" 
          onChange={e=>formData['name'] = e.target.value} 
          id="name" 
          className="block w-full rounded-md border-gray-300 pl-12 py-2 border pr-6 focus:outline-none" 
          required={true} maxLength={35} placeholder="Your Name" />
      </div>
      
      {/* email */}
      <label htmlFor="email" className="font-medium text-gray-700">Email ID</label>
        <div className="relative mb-3 rounded-md shadow-sm">
        <div className="rounded-l-md p-3 bg-zinc-300 absolute">
          <EmailSvg />
        </div>
        <input type="email" name="email" 
          onChange={e=>formData['email'] = e.target.value} 
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
          onChange={e=>formData['password'] = e.target.value}
          className="block w-full rounded-md border-gray-300 pl-12 py-2 border pr-6 focus:outline-none" 
          placeholder="password" required={true} minLength={8} maxLength={21}/>
      </div>
    
        {/* Confirm Password  */}
        <label htmlFor="password2" className="mt-6 font-medium text-gray-700">Confirm Password</label>
        <div className="relative mb-3 rounded-md shadow-sm">
        <div className="rounded-l-md p-3 bg-zinc-300 absolute">
          <PassSvg />
        </div>
        <input type="password" name="password2" id="password2"
          onChange={e=>formData['password2'] = e.target.value}
          className="block w-full rounded-md border-gray-300 pl-12 py-2 border pr-6 focus:outline-none" 
          placeholder="Confirm Password" required={true} minLength={8} maxLength={21}/>
      </div>

  {/* Submit button */}
      <div className="pt-1 mb-4">
        <button className="bg-green-600 px-5 py-1.5 rounded-lg cursor-pointer hover:bg-green-700">Register Now</button>
      </div>


    </div>

{/* bottom Content     */}
    <p>Already have an account? 
        <span onClick={(e)=>props.navigate()} 
          className="ml-2 text-zinc-500 cursor-pointer hover:text-green-600">Login here</span>
    </p>
      
    
    </form>)
} 