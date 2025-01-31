import { useState } from "react"
import { toast } from "sonner";
import axios from "axios";

export default function ProductListingForm({ close }) {

  const [product, setProduct] = useState({})

  const handleProductFormChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleProductFormSubmit = async (e) => {
    e.preventDefault();
    try { 
      const res = await axios.post("http://localhost:3000/api/product/register", product, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      })
      if (res.data.success) {
        toast.success(res.data.message);

      }
    } catch (e) {
      return toast.error(e.response.data.message);
    }
  }



  return (
    <>
      <div className=" border-2 w-96 fixed  top-[10%] z-40 left-[40%] shadow-2xl p-5">
        <p className="w-full text-end  font-bold mb-5" ><span className="cursor-pointer" onClick={() => close()}>Close</span></p>
        <form className="w-full flex flex-col items-center  rounded-xl" onSubmit={handleProductFormSubmit}>
          <input type="text" className="w-full border-2 m-2  rounded-full p-3 outline-none text-zinc-400 " placeholder="title" name="title" id="title" onChange={handleProductFormChange} />
          <input type="text" className="w-full border-2 m-2  rounded-full p-3 outline-none text-zinc-400 " placeholder="description" name="description" id="description" onChange={handleProductFormChange} />
          <input type="text" className="w-full border-2 m-2  rounded-full p-3 outline-none text-zinc-400 " placeholder="price" name="price" id="price" onChange={handleProductFormChange} />
          <input type="text" className="w-full border-2 m-2  rounded-full p-3 outline-none text-zinc-400 " placeholder="brand" name="brand" id="brand" onChange={handleProductFormChange} />
          <label htmlFor="" className="text-zinc-400">Select product category</label>
          <select name="category" id="category" className="w-full border-2 m-2  rounded-full p-3 outline-none text-zinc-400 " onChange={handleProductFormChange}>
            <option value="phone">Phone</option>
            <option value="desktop accessories">Desktop accessories</option>
            <option value="laptop">Laptop</option>
            <option value="smart watch">Smart watch</option>
            <option value="camera">Camera</option>
            <option value="desktop">Desktop</option>
            <option value="headphones">Headphones</option>
            <option value="gaming">Gaming</option>
            <option value="others">Others</option>

          </select>
          <input type="number" placeholder="stock" min={0} className="w-full border-2 m-2  rounded-full p-3 outline-none text-zinc-400 " name="stock" id="stock" onChange={handleProductFormChange} />
          <input type="submit" value="Create" className=" font-bold border-2 m-2 rounded text-zinc-500 hover:text-zinc-700 hover:border-zinc-700 cursor-pointer pl-5 pb-2 pr-5 pt-2" onChange={handleProductFormChange} />
        </form>
      </div>

    </>
  )
}
