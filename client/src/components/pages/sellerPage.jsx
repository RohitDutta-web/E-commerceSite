import ProductListingForm from "../productListingForm";
import { FaPlus } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";
import {Link} from "react-router-dom";



export default function SellerPage() {
  const [listingForm, setListingForm] = useState(false);
  const orderData = [{
    title: "Order1",
    id: "qwertyu",
    piece: 2,
    price: 50000,
    orderedBy: "Rohit Dutta",
    expectedDelivery: "7 days"
  }, {
    title: "Order2",
    id: "poiuyt",
    piece: 5,
    price: 5400,
    orderedBy: "Rohit ",
    expectedDelivery: "2 days"
  }]


  return (
    <>
      <p className="w-full max-w-screen text-center font-bold text-4xl mt-2 mb-10">ESSCOM</p>
      <div className="w-full max-w-screen flex justify-between p-5 items-center" >
        <p className="text-2xl">Seller name</p>
        <div className="flex gap-5 items-center">
          <p className=" hover:text-blue-400 cursor-pointer">Listed items</p>
          <p className=" hover:text-blue-400 cursor-pointer">sold items</p>
          <p className="flex items-center border-2 rounded p-2 gap-2 text-zinc-500 hover:text-zinc-700 border-zinc-400 hover:border-zinc-700 cursor-pointer" onClick={() => setListingForm(true)}><FaPlus /> New listing</p>
        </div>
      </div>

      <div className="w-full max-w-screen p-5">
        <p className="w-full text-center font-bold  text-2xl mb-5">Orders</p>
        <div className="border-2 w-full h-screen">
          {
            orderData.map((data) => (
              <div className="border-2 m-2 p-2 flex items-center justify-between" key={data.id}>
                <p className="overflow-hidden max-w-96">{data.title}</p>
                <Link to={`/order/${data.id}` } state={data}>
                  <FaExternalLinkAlt className="hover:text-blue-500 cursor-pointer" />
                </Link>
              </div>
            ))
          }




        </div>
      </div>

      {
        listingForm ? <ProductListingForm close={() => setListingForm(false)} /> : null
      }

    </>
  )
}
