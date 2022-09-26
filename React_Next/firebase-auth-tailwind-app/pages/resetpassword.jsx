import { useState } from 'react'
import {BackSvg, EmailSvg} from './Images'

export default function(props) {

  const [email, setEmail] = useState("")

  return(
  <div className="flex flex-col justify-center w-full p-4 h-full lg:w-100">

    <div className='flex items-center gap-x-3 mb-6'>
      <BackSvg onClick={()=>props.navigate(0)}/>
      <p>Go Back to Login</p>
    </div>

  <h5 className="text-medium font-semibold mb-3 ">Reset Password </h5>

    <form className="mb-3" >

      {/* email */}
      <label htmlFor="email" className="font-medium text-gray-700">Email ID</label>
        <div className="relative mb-3 rounded-md shadow-sm">
        <div className="rounded-l-md p-3 bg-zinc-300 absolute">
          <EmailSvg />
        </div>
        <input type="email" name="email" 
          onChange={e=>setEmail(e.target.value)} 
          id="email" 
          value={email}
          className="block w-full rounded-md border-gray-300 pl-12 py-2 border pr-6 focus:outline-none" 
          required={true} maxLength={35} placeholder="abc@gmail.com" />
          </div>

      {/* Submit button */}
      <div className="pt-1 mb-4">
        <button className="bg-green-600 px-5 py-1.5 rounded-lg cursor-pointer hover:bg-green-700">Reset Password</button>
      </div>

    </form>

      <p>Reset Password link will be sent to your email ID. <br/> Check your Spam folder, also.</p>

  </div>
)
}