import ProductCard from "./productCard"


export default function ProductsHome() {



  return (
    <>
      <div className="w-screen max-">
        <div className="flex w-1/2 flex-wrap mt-10 ml-10 gap-10 font-bold text-zinc-500  ">
          <button className="focus:text-black focus:border-b-2 focus:border-black " >New Arrival</button>
          <button className="focus:text-black focus:border-b-2 focus:border-black" >Bestseller</button>
          <button className="focus:text-black focus:border-b-2 focus:border-black" >Featured Products</button>
        </div>
        <div className="flex flex-wrap">
        <ProductCard />
        </div>
      </div>
    </>
  )
}
