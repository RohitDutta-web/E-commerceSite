import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaAnchor } from "react-icons/fa";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";

export default function Nav() {

  const [isOpen, setIsOpen] = useState(false);
  

  const handleMenu = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div className="flex w-screen h-auto bg-transparent  items-center sm:justify-center ">
        <div className="text-2xl font-bold w-1/4 flex justify-end pr-5 sm:justify-end sm:w-1/6">
          <div className="flex items-center gap-1">
            <FaAnchor />Esite
          </div>
        </div>


        <div className="w-1/4 flex bg-zinc-200 rounded m-2 items-center p-2 sm:w-1/2" >
          <IoSearch className="text-xl text-zinc-400" />
          <input type="text" className="w-2/3 bg-transparent outline-none pl-3" placeholder="Search" />
        </div>

       
        <CiMenuFries  className="lg:hidden md:flex absolute top-2 text-4xl right-2 cursor-pointer" onClick={handleMenu} />
        {
          isOpen ?  <div className=" w-64 rounded-xl shadow-2xl absolute top-16 right-5 bg-white">
      <div className="w-full text-center">
          <p className="pt-2 pb-2 cursor-pointer font-semibold ">Home</p>
          <p className="pt-2 pb-2 cursor-pointer font-semibold ">About</p>
          <p className="pt-2 pb-2 cursor-pointer font-semibold ">Contact</p>
          <p className="pt-2 pb-2 cursor-pointer font-semibold ">Blog</p>
        </div>


        <div className="flex w-full justify-around p-2  text-xl border-2 border-zinc-300 rounded-b-lg  bg-white">
          <div className=" hover:text-blue-600 cursor-pointer "><FaRegHeart /></div>
          <div className=" hover:text-blue-600 cursor-pointer text-2xl"><IoCartOutline /></div>
          <div className=" hover:text-blue-600 cursor-pointer text-xl "><FaRegUser  /></div>
        </div>
      </div>: null
        }


        <div className="md:flex lg:flex justify-evenly w-1/4 items-center gap-2  sm:hidden">
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
          <p>Blog</p>
        </div>


        <div className="md:flex lg:flex sm:hidden justify-center gap-5  w-1/4 text-xl">
          <div><FaRegHeart /></div>
          <div className="text-2xl"><IoCartOutline /></div>
          <div className="text-2xl"><FaRegUser  /></div>
        </div>


      </div>


     
    </>
  )
}
