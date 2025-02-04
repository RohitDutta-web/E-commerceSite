import { useLocation } from "react-router-dom"
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
              <td className="border-2 p-2 text-center">{item?.price}</td>
              <td className="border-2 p-2 text-center">{item?.rating || "No ratings yet"}</td>
              <td className="border-2 p-2 text-center">{item?.stock}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
