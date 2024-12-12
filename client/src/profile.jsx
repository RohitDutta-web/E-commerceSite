import Nav from "./component/nav"
import { FaEdit } from "react-icons/fa";

export default function Profile() {
  return (
    <>
      <Nav />
      <div className="flex flex-col items-start pl-10 pt-10 gap-5  w-full">
        <div><p>User name : <span>Rohit Dutta</span></p></div>
        <div><p>Email : <span>duttarohit754@gmail.com</span></p></div>
        <div><p>Phone Number: <span>1234567890</span></p></div>

        <div>
          <p>Address :</p>
          <div>
            <p>Street - <span>some main rd</span></p>
            <p>Landmark - <span>Famous mark</span></p>
            <p>City - <span>Some City</span></p>
            <p>State - <span>Some State</span></p>
            <p>Zipcode - <span>some ZipCode</span></p>
            <p>Country - <span>India</span></p>
          </div>
        </div>
        
      </div>
      <div className="w-full flex justify-center mt-5">
      <button className="flex gap-2 justify-center items-center text-xl border-2 border-black rounded-full pl-3 pr-3 pt-2 pb-2 hover:border-white hover:text-white hover:bg-black ">Update info! <FaEdit /></button>
      </div>
    </>
  )
}
