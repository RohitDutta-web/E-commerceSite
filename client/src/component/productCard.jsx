import { FaRegHeart } from "react-icons/fa6";
import PropTypes from 'prop-types';
import { useState } from "react";

export default function ProductCard({ image, name, price }) {
  const [wishListed, setwishListed] = useState(false)
  const handleWishList = () => { 
    setwishListed(!wishListed)
  }



  return (
    <>
      <div className="bg-zinc-100 w-40 h-[340px] flex-col justify-between">
        <div>
        <div className="w-full flex justify-end p-2 bg-transparent text-zinc-400"><FaRegHeart onClick={handleWishList} className={wishListed ? " text-red-600" : ""} /></div>
        <div className="p-2"><img src={image} alt="" /></div>
        <div className="w-full text-center font-semibold p-2">
          <p>{name }</p>
        </div>
        <div className="w-full text-center p-2 font-bold">
          <p>{price }</p>
        </div>
       </div>
        <div className="w-full text-center p-2 flex justify-center h-14 ">
          <button className="bg-zinc-700 text-white font-semibold p-2 rounded w-4/5 hover:bg-zinc-900">Buy Now</button>
        </div>
      </div>
    </>
  )
}

ProductCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string
};
