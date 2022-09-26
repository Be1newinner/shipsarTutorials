import { useState } from "react"
import Registration from './registration'
import Login from './login'
import ResetPassword from './resetpassword'
import BabyBg from "./Images"

export default function() {
const [pageState,setPageState] = useState(0)

return(
  <div className="h-auto min-h-screen max-h-full w-full flex flex-row justify-center items-center">

  <div className="flex flex-row bg-white max-h-120 w-full lg:w-auto rounded-xl bg shadow-xl">

    <img src={BabyBg} className="max-h-auto rounded-l-xl" />
      
    <div className="w-full min-w-100 ">
        {pageState===0? 
          <Login navigate={e=>setPageState(e)}/> : 
          pageState===1?<Registration navigate={e=>setPageState(0)}/> : 
          <ResetPassword navigate={e=>setPageState(0)}/>
          }
        </div>
        </div>
      </div>
      )} 