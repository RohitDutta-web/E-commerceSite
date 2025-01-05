import NavBar from "../navBar"
import ProductCard from "../productCard"
import { Link } from "react-router-dom"

export default function Cart() {

  const cartedProducts = [
    {id: "d415ad7a6d83aw",
      category: "Laptop",
      picture: "https://m.media-amazon.com/images/I/41jw6pxGqQL._SX300_SY300_QL70_FMwebp_.jpg",
      price: 2000,
      name: "MSI Raider GE78 HX",
      rating: 4
    }
  ]
  return (
    <>
      <NavBar />
      <h1 className="w-full h-auto font-bold text-2xl text-center pt-10">
        Your shopping cart
      </h1>
      <div className="w-full max-w-screen p-4">
      {
        cartedProducts.map((product) => (
          <Link key={product.id} to={`/${product.id}`} state={{ product }}>
          <ProductCard category={product.category}  picture={product.picture} price={product.price} name={product.name} />
          </Link>
        ))
      }

      </div>

      <div className="w-full max-w-screen text-center mt-5">
        <button className="outline pl-10 pr-10 pt-3 pb-3 font-bold text-xl rounded text-white bg-zinc-800 hover:text-zinc-900 hover:bg-white mt-10">Buy carted items</button>
      </div>

    </>
  )
}
