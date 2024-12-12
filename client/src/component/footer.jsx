import { IoIosMail } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <div className="w-full bg-zinc-900 flex justify-around items-center text-zinc-400 mt-20 pb-20">
        <div>
          <p className="mt-5 font-bold text-xl  cursor-pointer ">Contact</p>
          <div className="flex flex-col items-start mt-2">
          <button className="flex items-center text-xl cursor-pointer gap-2"> <IoIosMail className="text-2xl" /> Email </button>
          <button className="flex items-center text-xl cursor-pointer gap-2"> <BsLinkedin className="text-xl"  />Linked In</button>
          </div>

        </div>
        <div className="text-xl h-full">
        <div className=" cursor-pointer">About</div>
        <div className="flex-col flex items-start ">
          <button>Business</button>
          <button>Admin</button>
        </div>
        </div>
     

      </div>
    </>
  )
}
