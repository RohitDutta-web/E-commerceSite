import { useLocation } from "react-router-dom"

export default function OrderPage() {
  const location = useLocation()
  const data = location.state
  return (
    <>
      <p className="w-full max-w-screen text-center text-2xl mt-2 mb-5">Order id: <span className="font-bold text-blue-500">{data.id}</span></p>
      <div className="p-5">
      <h1 className="text-2xl font-bold mb-5 text-center">Order Details</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead >
          <tr>
            <th className="border border-gray-300 p-2">Order Item</th>
            <th className="border border-gray-300 p-2">Ordered By</th>
            <th className="border border-gray-300 p-2">Order Quantity</th>
            <th className="border border-gray-300 p-2">Order Amount</th>
            <th className="border border-gray-300 p-2">Expected Delivery</th>
          </tr>
        </thead>
        <tbody>
          
            <tr
             
              
            >
              <td className="border border-gray-300 p-2">{data.title}</td>
              <td className="border border-gray-300 p-2">{data.orderedBy}</td>
              <td className="border border-gray-300 p-2">{data.piece}</td>
              <td className="border border-gray-300 p-2">${data.price}</td>
              <td className="border border-gray-300 p-2">
                {data.expectedDelivery}
              </td>
            </tr>
         
        </tbody>
      </table>
    </div>
    </>
  )
}
