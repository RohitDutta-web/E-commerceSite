import Nav from "./nav"
import { FaEdit } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

export default function Profile() {
  const [open, setOpen] = useState(false);
  const [addressOpen, setAddressOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  }


  const handleAddress = () => {
    setAddressOpen(!addressOpen);
  }
  let before = "flex flex-col pl-10 pt-10 gap-5  w-full  items-center blur-0"
  let after = "flex flex-col pl-10 pt-10 gap-5  w-full  items-center blur-sm"
  return (
    <>
      <Nav />
      <div className={open || addressOpen ? after : before}>
        <div className="bg-zinc-300 w-96 p-2 rounded-xl">
          <div><p>User name : <span className="font-bold">Rohit Dutta</span></p></div>
          <div><p>Email : <span className="font-bold">duttarohit754@gmail.com</span></p></div>
          <div><p>Phone Number: <span className="font-bold">1234567890</span></p></div>
          <div className="w-full flex justify-center mt-5">
            <button className="flex gap-2 justify-center items-center text-xl border-2 border-black rounded-full pl-3 pr-3 pt-2 pb-2 hover:border-white hover:text-white hover:bg-black " onClick={handleOpen}>Update info! <FaEdit /></button>
          </div>
        </div>

        <div className="w-1/3 bg-zinc-800 text-white p-2 rounded-xl pb-3">

          <p className="font-bold text-xl border-b-2 border-b-white rounded-xl p-2 m-2 flex justify-between items-center">Address <FaRegEdit className="cursor-pointer" onClick={handleAddress} /></p>
          <div className="pl-2">
            <p>Street : <span>some main rd</span></p>
            <p>Landmark : <span>Famous mark</span></p>
            <p>City : <span>Some City</span></p>
            <p>State : <span>Some State</span></p>
            <p>Zipcode : <span>some ZipCode</span></p>
            <p>Country : <span>India</span></p>
          </div>
        </div>


        <div>
          <button className="outline-2 outline pt-2 pb-2 pl-5 pr-5 font-bold hover:bg-black hover:text-white">Log Out</button>
        </div>
      </div>


      {(open) ? <div className="shadow-xl w-96 bg-zinc-300 rounded-xl absolute left-1/3 top-40">
        <form className="flex flex-col items-center mt-2 mb-2">
          <input type="text" placeholder="Name" className="w-4/5 bg-zinc-200 outline-none p-2  m-2 rounded-2xl" />
          <input type="email" placeholder="email" className="w-4/5 bg-zinc-200 outline-none p-2  m-2 rounded-2xl" />
          <input type="number" placeholder="City" className="w-4/5 bg-zinc-200 outline-none p-2 m-2 rounded-2xl" />
          <input type="submit" value="Update" className=" w-36 font-bold " />
        </form>

        <div className="w-full flex  justify-center mt-5 text-2xl font-bold  mb-2">
          <IoCloseSharp className="hover:text-red-600 cursor-pointer" onClick={handleOpen} />
        </div>
      </div> : null}


      {(addressOpen) ? <div className="shadow-xl w-96 bg-zinc-300 rounded-xl absolute left-1/3 top-40">
        <form className="flex flex-col items-center mt-2 mb-2">
          <input type="text" placeholder="Street" className="w-4/5 bg-zinc-200 outline-none p-2  m-2 rounded-2xl" />
          <input type="email" placeholder="Landmark" className="w-4/5 bg-zinc-200 outline-none p-2  m-2 rounded-2xl" />
          <input type="number" placeholder="City" className="w-4/5 bg-zinc-200 outline-none p-2 m-2 rounded-2xl" />
          <input type="number" placeholder="State" className="w-4/5 bg-zinc-200 outline-none p-2 m-2 rounded-2xl" />
          <input type="number" placeholder="Zipcode" className="w-4/5 bg-zinc-200 outline-none p-2 m-2 rounded-2xl" />
          <input type="number" placeholder="Country" className="w-4/5 bg-zinc-200 outline-none p-2 m-2 rounded-2xl" />
          <input type="submit" value="Update" className=" w-36 font-bold " />
        </form>

        <div className="w-full flex  justify-center mt-5 text-2xl font-bold  mb-2">
          <IoCloseSharp className="hover:text-red-600 cursor-pointer" onClick={handleAddress} />
        </div>
      </div> : null}

    </>
  )
}
