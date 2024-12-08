import ProductCard from "./productCard"


export default function ProductsHome() {



  return (
    <>
      <div className="w-screen max-w-screen  ">
        <div className="flex w-4/5 flex-wrap mt-10 ml-10 gap-10 font-bold text-zinc-500   ">
          <button className="focus:text-black focus:border-b-2 focus:border-black " >New Arrival</button>
          <button className="focus:text-black focus:border-b-2 focus:border-black" >Bestseller</button>
          <button className="focus:text-black focus:border-b-2 focus:border-black" >Featured Products</button>
        </div>
        <div className="flex flex-wrap ml-10  mt-5 w-4/5 gap-10 ">
          <ProductCard
            image={"https://m.media-amazon.com/images/I/81SigpJN1KL._SX522_.jpg"}
            name={"Apple iPhone 15pro (1TB)"}
            price={"$1000"}
          />
          <ProductCard
            image={"https://m.media-amazon.com/images/I/31ogOjiaPdL._SY445_SX342_QL70_FMwebp_.jpg"}
            name={"Apple 2024 MacBook Pro"}
            price={"$2000"}
          />
          <ProductCard
            image={"https://m.media-amazon.com/images/I/51afJC92cgL._SX342_.jpg"}
            name={"Sony PlayStation®5"}
            price={"$900"}
            />
        </div>
      </div>
    </>
  )
}
