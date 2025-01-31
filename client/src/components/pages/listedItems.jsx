import { MdDelete } from "react-icons/md";
export default function ListedItems() {
  return (
    <>
      <p className=" w-full max-w-screen font-bold text-2xl text-center mt-3 mb-5">Your Listings</p>
      <div className="w-full max-w-screen border-2 h-[600px] overflow-scroll overflow-x-hidden  p-2">
        <div className="flex items-center justify-between w-full border-2 h-auto ">
          <p className="p-2">Product Name</p>
          <MdDelete className=" rounded text-4xl bg-zinc-900 text-zinc-200 w-12 hover:bg-white hover:text-zinc-900 hover:border-2 hover:border-zinc-900  cursor-pointer " />
        </div>

      </div>
    </>
  )
}
