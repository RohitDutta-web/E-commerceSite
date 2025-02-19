import { useLocation } from "react-router-dom"
import { FaInfoCircle } from "react-icons/fa";
export default function ProductSellerSide() {
  const location = useLocation()
  const item = location.state?.item


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
        <button className="flex items-center gap-2 text-2xl border-2 pl-5 pr-5 pt-2 pb-2 rounded border-black">Update info <FaInfoCircle /></button>
        <div className="shadow-xl p-5 rounded-xl w-96">
          <form className="w-full h-full flex flex-col bg-transparent gap-2 items-center">
            <input className="border-none outline-none p-3 bg-zinc-200 rounded-xl  w-full" type="text" name="title" id="title" placeholder={item?.title} />
            <textarea className="border-none outline-none p-3 bg-zinc-200 rounded-xl  w-full overflow-hidden" type="text" name="description" id="description" placeholder={item?.description} />
            <input className="border-none outline-none p-3 bg-zinc-200 rounded-xl  w-full" type="text" name="price" id="price" placeholder={item?.price} />
            <input className="border-none outline-none p-3 bg-zinc-200 rounded-xl  w-full" min={0} type="number" name="stock" id="stock" placeholder={item?.stock} />
            <input type="submit" value="update" className="border-2 w-24 p-2 rounded-xl bg-zinc-900 text-white hover:bg-white hover:text-black cursor-pointer font-bold" />
          </form>
          <div>
            <button>Close</button>
          </div>
        </div>



      </div>


    </>
  )
}
