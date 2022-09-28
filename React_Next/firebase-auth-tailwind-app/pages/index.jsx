import { useState } from "react"
import Registration from './registration'
import Login from './login'
import ResetPassword from './resetpassword'
import BabyBg from "./Images"

export default function() {
const [pageState,setPageState] = useState(0)

return(
  <div className="h-auto min-h-screen max-h-full w-full flex flex-row justify-center items-center">

  <div className="flex flex-row max-h-120 rounded-xl shadow-xl w-11/12 sm:w-120 lg:w-auto" style={{background:'rgba(250, 250, 250, 0.4)',backdropFilter: 'blur(10px)'}}>

    <img src={BabyBg}  className="max-h-auto rounded-l-xl opacity-70 hidden lg:flex" />
      
    <div className="w-full min-w-0 lg:min-w-0">
        {pageState===0? 
          <Login navigate={e=>setPageState(e)}/> : 
          pageState===1?<Registration navigate={e=>setPageState(0)}/> : 
          <ResetPassword navigate={e=>setPageState(0)}/>
          }
        </div>
        </div>
      </div>
      )} 