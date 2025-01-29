import ProductListingForm from "../productListingForm";
import { FaPlus } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { LuCircleUser } from "react-icons/lu";
import axios from "axios";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setSeller, setSellerLoggedIn } from "../../../features/auth/seller.slice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


export default function SellerPage() {

  const { seller } = useSelector((store) => store.seller);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [listingForm, setListingForm] = useState(false);

  const handleLogOut = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/seller/logOut", {
        withCredentials: true
      });
      if (res.data.success) {
        toast.success(res.data.message);
        dispatch(setSeller(null));
        dispatch(setSellerLoggedIn(false));
        navigate('/')
        return

      }
    }
    catch (e) {
      return toast.error(e.response.data.message);
    }
  }
  const orderData = [{
    title: "Order1",
    id: "qwertyu",
    piece: 2,
    price: 50000,
    orderedBy: "Rohit Dutta",
    expectedDelivery: "7 days",
    address: {
      street:
        "West Chayanpara, Ghogomali Main rd",
      landMark:
        "Nagaland building",
      city:
        "Siliguri",
      district:
        "Darjeeling",
      state:
        "West Bengal",
      zipCode:
        734006,
      country:
        "India"
    }
  }, {
    title: "Order2",
    id: "poiuyt",
    piece: 5,
    price: 5400,
    orderedBy: "Rohit ",
    expectedDelivery: "2 days",
    address: {
      street:
        "West Chayanpara, Ghogomali Main rd",
      landMark:
        "Nagaland building",
      city:
        "Siliguri",
      district:
        "Darjeeling",
      state:
        "West Bengal",
      zipCode:
        734006,
      country:
        "India"
    }
  }]


  return (
    <>
      <p className="w-full max-w-screen text-center font-bold text-4xl mt-2 mb-10">ESSCOM</p>
      <div className="w-full max-w-screen flex justify-between p-5 items-center" >
        <p className="text-2xl">{seller?.name }</p>
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
                <Link to={`/order/${data.id}`} state={data}>
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

      <div className="absolute top-5 right-5">
        <Popover>
          <PopoverTrigger><LuCircleUser className="text-5xl" /></PopoverTrigger>
          <PopoverContent className="shadow-xl border-zinc-400" >
            <div className="w-full flex justify-around">
              <button className="bg-zinc-900 text-white p-3 rounded font-bold " onClick={() => navigate("/seller/updateInfo")}>Update info</button>
              <button className="bg-zinc-900 text-white p-3 rounded font-bold " onClick={handleLogOut}>Log out</button>
            </div>
          </PopoverContent>
        </Popover>
      </div>

    </>
  )
}
