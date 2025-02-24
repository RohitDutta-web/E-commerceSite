import { useState } from "react";
import { toast } from "sonner";
import axios from "axios";

export default function ProductListingForm({ close }) {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    brand: "",
    category: "",
    stock: "",
    discount: 0
  });


  const handleProductFormChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleProductFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(product).forEach((key) => {
      formData.append(key, product[key]);
    });


    const fileInput = document.getElementById("picture");
    if (fileInput.files.length > 0) {
      formData.append("picture", fileInput.files[0]);
    } else {
      toast.error("Please select an image");
      return;
    }

    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    try {
      const res = await axios.post("http://localhost:3000/api/product/register", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });

      if (res.data.success) {
        toast.success(res.data.message);
        return;
      }
    } catch (e) {
      console.log(e);

      return toast.error(e.response?.data?.message || "An error occurred");
    }
  };

  return (
    <>
      <div className="border-2 w-96 absolute top-[10%] z-40 left-[40%] shadow-2xl p-5">
        <p className="w-full text-end font-bold mb-5">
          <span className="cursor-pointer" onClick={() => close()}>
            Close
          </span>
        </p>
        <form className="w-full flex flex-col items-center rounded-xl" onSubmit={handleProductFormSubmit}>
          <input type="text" name="title" placeholder="Title" value={product.title} onChange={handleProductFormChange} className="w-full border-2 m-2 rounded-full p-3 outline-none text-zinc-400" />
          <input type="text" name="description" placeholder="Description" value={product.description} onChange={handleProductFormChange} className="w-full border-2 m-2 rounded-full p-3 outline-none text-zinc-400" />
          <input type="text" name="price" placeholder="Price" value={product.price} onChange={handleProductFormChange} className="w-full border-2 m-2 rounded-full p-3 outline-none text-zinc-400" />
          <input type="text" name="brand" placeholder="Brand" value={product.brand} onChange={handleProductFormChange} className="w-full border-2 m-2 rounded-full p-3 outline-none text-zinc-400" />
          <input type="number" name="discount" placeholder="discount if not place 0" min={0} onChange={handleProductFormChange} className="w-full border-2 m-2 rounded-full p-3 outline-none text-zinc-400" />

          <label htmlFor="category" className="text-zinc-400">Select product category</label>
          <select name="category" id="category" value={product.category} onChange={handleProductFormChange} className="w-full border-2 m-2 rounded-full p-3 outline-none text-zinc-400">
            <option value="not selected">Not selected</option>
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

          <input type="number" name="stock" placeholder="Stock" min={0} value={product.stock} onChange={handleProductFormChange} className="w-full border-2 m-2 rounded-full p-3 outline-none text-zinc-400" />
          <input type="file" name="picture" id="picture" className="w-full border-2 m-2 rounded-full p-3 outline-none text-zinc-400" />
          <input type="submit" value="Create" className="font-bold border-2 m-2 rounded text-zinc-500 hover:text-zinc-700 hover:border-zinc-700 cursor-pointer pl-5 pb-2 pr-5 pt-2" />
        </form>
      </div>
    </>
  );
}
