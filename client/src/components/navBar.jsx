import { ImMenu } from "react-icons/im";
import { FaSearch } from "react-icons/fa";

export default function NavBar() {
  return (
    <>
      <div className="w-full flex items-center bg-white/10 max-w-screen text-zinc-300 sticky top-0 ">
        
        <div className="w-4/5 flex justify-center bg-transparent ">
          <div className="flex m-2 items-center gap-2 bg-white/10 w-3/5 rounded-full">
            <FaSearch className="text-2xl bg-transparent ml-5" />
            <input type="text" name="" id="" className="outline-none  p-2 pl-2 bg-transparent w-4/5" placeholder="type and press enter to search" />

          </div>
        </div>


      <ImMenu className=" absolute right-5 w-auto text-4xl bg-transparent" />
     </div>
    </>
  )
}
