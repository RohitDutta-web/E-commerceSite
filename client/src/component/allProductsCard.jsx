
import { FaStar } from "react-icons/fa";



export default function AllProductsCard({ image, title, price, rating }) {


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
       
      </div>
    </>
  )
}
