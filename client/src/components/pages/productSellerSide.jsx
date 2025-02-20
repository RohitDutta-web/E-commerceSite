import { useLocation } from "react-router-dom"
import { FaInfoCircle } from "react-icons/fa";
import { useState } from "react";
import { toast } from "sonner";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ProductSellerSide() {
  const navigate = useNavigate()
  const location = useLocation()
  const item = location.state?.item
  const [updateForm, setUpdateForm] = useState(false)
  const [updateFormInfo, setUpdateFormInfo] = useState({
    title: "",
    description: "",
    price: "",
    stock: ""
  })

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setUpdateFormInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
 
    
    try {
     
      const res = await axios.patch(`http://localhost:3000/api/product/update/${item?._id}`, updateFormInfo, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      })
      if (res.data.success) {
        toast.success(res.data.message)
        navigate("/seller/listedItems")
        return
      }
    } catch (e) {
      toast.error(e.response.data.message)
      return
    }
  }
  const handleUpdateForm = () => {
    setUpdateForm(!updateForm)
  }

  return (
    <>
      <p className="w-full max-w-screen text-center font-bold text-2xl mt-2 mb-2">ESSCOM</p>

      <div className="w-full max-w-screen p-2">
        <table className="w-full   ">
          <thead>
            <tr className="">
              <th className="bg-zinc-300">Title</th>
              <th className="bg-zinc-300">Brand</th>
              <th className="bg-zinc-300">Description</th>
              <th className="bg-zinc-300">Price</th>
              <th className="bg-zinc-300">Ratings</th>
              <th className="bg-zinc-300">Stock</th>
            </tr>
          </thead>
          <tbody className="w-full">
            <tr>
              <td className="border-2 p-2 text-center">{item?.title}</td>
              <td className="border-2 p-2 text-center">{item?.brand}</td>
              <td className="border-2 p-2 text-center">{item?.description}</td>
              <td className="border-2 p-2 text-center">$ {item?.price}</td>
              <td className="border-2 p-2 text-center">{item?.rating || "No ratings yet"}</td>
              <td className="border-2 p-2 text-center">{item?.stock}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-full max-w-screen flex justify-center items-center mt-10 flex-col">
        <button className="flex items-center gap-2 text-2xl border-2 pl-5 pr-5 pt-2 pb-2 rounded border-black" onClick={handleUpdateForm}>Update info <FaInfoCircle /></button>
        {
          updateForm ? (<div className="shadow-xl p-5 rounded-xl w-96 fixed top-[20%] border-2 border-zinc-300 flex flex-col items-center">
            <p className="mb-2 text-zinc-400">Update product details from here</p>
            <form className="w-full h-full flex flex-col bg-transparent gap-2 items-center" onSubmit={handleSubmit}>
              <input className="border-none outline-none p-3 bg-zinc-200 rounded-xl  w-full" type="text" name="title" id="title" placeholder={item?.title} onChange={handleFormChange} />
              <textarea className="border-none outline-none p-3 bg-zinc-200 rounded-xl  w-full overflow-hidden" type="text" name="description" id="description" placeholder={item?.description} onChange={handleFormChange} />
              <input className="border-none outline-none p-3 bg-zinc-200 rounded-xl  w-full" type="text" name="price" id="price" placeholder={item?.price} onChange={handleFormChange} />
              <input className="border-none outline-none p-3 bg-zinc-200 rounded-xl  w-full" min={0} type="number" name="stock" id="stock" placeholder={item?.stock} onChange={handleFormChange} />
              <input type="submit" value="update" className="border-2 w-24 p-2 rounded-xl bg-zinc-900 text-white hover:bg-white hover:text-black cursor-pointer font-bold" />
            </form>
            <div className=" flex w-full justify-center items-center">
              <button className="border-2 pl-5 pt-2 pb-2 pr-5 mt-5 text-white font-bold cursor-pointer rounded bg-zinc-800 " onClick={handleUpdateForm}>Close</button>
            </div>
          </div>
          ) : null
        }


      </div>


    </>
  )
}
