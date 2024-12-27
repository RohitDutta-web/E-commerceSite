import { ImMenu } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function NavBar() {
  return (
    <>
      <div className="w-full z-40 flex items-center bg-white/20 max-w-screen text-zinc-400 sticky top-0 ">
        
        <div className="w-4/5 flex justify-center bg-transparent ">
          <div className="flex m-2 items-center gap-2 bg-white/30 w-3/5 rounded-full">
            <FaSearch className="text-2xl bg-transparent ml-5" />
            <input type="text" name="" id="" className="outline-none  p-2 pl-2 bg-transparent w-4/5" placeholder="type and press enter to search" />

          </div>
        </div>


        <Popover >
          <PopoverTrigger  className=" absolute right-5 w-auto text-4xl bg-transparent  " >
          <ImMenu className="bg-transparent"/>
          </PopoverTrigger>

          <PopoverContent>
            <div className="flex flex-col pb-5 mt-2 border-b-2 items-center gap-2">
              <Link to={"/"}>
              <p className="cursor-pointer">Home</p>
              </Link>
              <Link to={"/about"}>
              <p className="cursor-pointer">About</p>
             </Link>
              <Link to={'/blog'}>
              <p className="cursor-pointer">Blog</p>
              </Link>
              <Link to={'/contact'}>
              <p className="cursor-pointer">Contact</p>
              </Link>
            </div>
            <div className="flex w-full justify-around text-2xl  mt-2 ">
              <FaShoppingCart className="cursor-pointer"/>
              <FaHeart className="cursor-pointer"/>
              <FaUser className="cursor-pointer"/>
            </div>
          </PopoverContent>
      </Popover>
     </div>
    </>
  )
}
