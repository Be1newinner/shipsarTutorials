export default function(props){
    return(<div className="  flex justify-center items-center h-screen">
        <div className="p-10 w-11/12 sm:w-120 lg:w-auto w-full shadow-xl rounded-xl text-center backdrop-blur-sm text-xl font-bold" style={{background:'rgba(250, 250, 250, 0.6)'}}>
        Welcome! {props.uName}, you are Logged In. <br/>
        Your Email Id is {props.email} .
        <br />
        <div className="pt-1 mb-4">
        <button className="bg-green-600 px-5 py-1.5 rounded-lg cursor-pointer hover:bg-green-700">Log Out</button>
      </div>
        </div>
    </div>)
}