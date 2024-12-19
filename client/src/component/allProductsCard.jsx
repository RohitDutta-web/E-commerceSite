
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";


export default function AllProductsCard({ image, title, price, rating }) {

  const [wishListed, setWishlisted] = useState(false);
 const [carted,setCarted] = useState(false);

  const handleWishlisting = () => {
    setWishlisted(!wishListed);
  }

  const handleCarted = () => {
    setCarted(!carted);
  }
  return (
    <>
      <div className="flex">
      <div className="flex items-center bg-zinc-200 rounded-xl p-5 gap-5 cursor-pointer w-full ">
        <div className="w-[400px] h-auto ">
          <img src={image} alt="" className="rounded-xl w-full h-auto "  />
        </div>
        <div>
          <h1 className="font-bold text-xl">{title}</h1>
          <p className="text-xl mt-2">{price}</p>
          <div className="flex">
          {Array.from({ length: rating }).map((_, index) => (
          <div key={index} className="flex justify-center text-xl mt-2">
            <FaStar
            />
          </div>
        ))}
        </div>
        </div>
        
      </div>
        <FaHeart className={wishListed ? "relative right-10 text-2xl top-10 text-red-500 cursor-pointer" : "relative right-10 text-2xl top-10 text-black cursor-pointer"} onClick={handleWishlisting} />
        <FaCartShopping  className={carted ? "relative right-40 text-2xl top-10 text-green-600 cursor-pointer" : "relative right-40 text-2xl top-10 text-black cursor-pointer"} onClick={handleCarted}  />
      </div>
    </>
  )
}
