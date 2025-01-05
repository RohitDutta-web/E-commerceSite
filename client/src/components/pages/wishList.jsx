import { Link } from "react-router-dom"
import NavBar from "../navBar"
import ProductCard from "../productCard"

export default function WishList() {

  const wishListedItems = [{
    id: "d415ad7a6d83aw",
    category: "Laptop",
    picture: "https://m.media-amazon.com/images/I/41jw6pxGqQL._SX300_SY300_QL70_FMwebp_.jpg",
    price: 2000,
    name: "MSI Raider GE78 HX",
    rating: 4
  }]
  return (
    <>
      <NavBar />
      <p className="w-full max-w-screen  font-bold text-2xl text-center mt-20">
        wish listed items
      </p>
      <div>
        {wishListedItems.map((product) => (
          <Link key={product.id} to={`/${product.id}`} state={{product}}>

            <ProductCard name={product.name} picture={product.picture} category={product.category} price={product.price} />
          </Link>

        ))}
      </div>

    </>
  )
}