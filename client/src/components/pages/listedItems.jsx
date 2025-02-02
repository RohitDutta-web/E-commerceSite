import { useEffect, useState } from "react";
import axios from "axios"
import { toast } from "sonner"
import { MdEditDocument } from "react-icons/md";

import { MdDelete } from "react-icons/md";
export default function ListedItems() {


  const [list, setList] = useState([])

  const deleteProduct = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/api/product/delete/${id}`, {
        withCredentials: true
      })

      if (res.data.success) {
        toast.success(res.data.message)
        setList((prevList) => prevList.filter((item) => item._id !== id));
        return 
      }
     } catch (e) {
      return toast.error(e.response.data.message)
    }
  }

  const fetchingListedItems = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/seller/listedItems", {
        withCredentials: true
      })
      setList(res.data.items)
      return;
    } catch (e) {
      return toast.error(e.response.data.message)
    }
  }

  useEffect(() => {
    fetchingListedItems()
  }, [])
  return (
    <>
      <p className=" w-full max-w-screen font-bold text-2xl text-center mt-3 mb-5">Your Listings</p>
      <div className="w-full max-w-screen border-2 h-[600px] overflow-scroll overflow-x-hidden  p-2">
        <div >
          {list.map((item) => (
            <div key={item._id} className="flex items-center justify-between w-full border-2 h-auto rounded  mb-2">
              <p className="p-2">
                <span className="font-bold">{item.title}</span>
                <br />
                stock : {item.stock}</p>
              <div className="flex gap-2 mr-2">
              <MdDelete className=" rounded text-4xl bg-zinc-900 text-zinc-200 w-12 hover:bg-white hover:text-zinc-900 hover:border-2 hover:border-zinc-900  cursor-pointer " onClick={()=>{
                  deleteProduct(item._id)
                }} />
                <MdEditDocument className=" rounded text-4xl bg-zinc-900 text-zinc-200 w-12 hover:bg-white hover:text-zinc-900 hover:border-2 hover:border-zinc-900  cursor-pointer " />
              </div>
            </div>
          ))}
          {list.length < 1 ? <div className="w-full max-w-screen text-center text-4xl text-zinc-200">
            <p>No items listed yet</p>
          </div>: null }
        </div>

      </div>
    </>
  )
}
