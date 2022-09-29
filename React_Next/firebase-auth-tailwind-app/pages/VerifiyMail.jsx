import {BackSvg} from './Images'

export default function(props) {

  return(
  <div className="flex flex-col justify-center w-full p-4 h-full lg:w-100">

    <div className='flex items-center gap-x-3 mb-6'>
      <BackSvg onClick={()=>props.navigate(0)}/>
      <p>Go Back to Login</p>
    </div>

  <h5 className="text-medium font-semibold mb-3 ">Reset Password </h5>

      <p>Verification Email is sent to your email ID. <br/> Check your Spam folder, also.</p>
      <h5 className='mt-2'>Your email id is <span className='font-bold text-xl'>{props.email}</span></h5>
  </div>
)
}