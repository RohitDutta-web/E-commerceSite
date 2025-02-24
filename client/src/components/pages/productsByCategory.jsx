import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Skeleton from '@mui/material/Skeleton';
import { Link } from "react-router-dom";
import ProductCard from "../productCard";

import NavBar from "../navBar";
import { toast } from "sonner";
import axios from "axios";

export default function ProductsByCategory() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const { category } = useParams();

  const productsByCategory = async () => {
    try {
      setLoading(true)
      const res = await axios.get(`http://localhost:3000/api/product/${category}`)
      setProducts(res.data.products)
      setLoading(false)
      return
    }
    catch (e) {
      toast.error(e.response?.data?.message || "Failed to fetch products")
    }
  }

  useEffect(() => { productsByCategory() }, [])
  return (
    <>
      <NavBar />
      <div className="w-full max-w-screen flex justify-center font-2xl font-bold">
        <p>Category : {category}</p>
      </div>
      <div className="flex flex-wrap gap-5 mt-20 ml-5 mr-5">
        {
          loading ? (<>
            <Skeleton variant="rectangular" width={210} height={118} />
            <Skeleton variant="rectangular" width={210} height={118} />
            <Skeleton variant="rectangular" width={210} height={118} />
          </>) : (products.map((product) => (
            <Link to={`/${product._id}`}
              state={{ product }}
              key={product._id}>
              <ProductCard {...product} />
            </Link>
          )))
        }
      </div>
      {products.length < 1 ? (
        <div className="w-full max-w-screen flex justify-center">
          <p className="text-4xl font-bold text-zinc-300">No products to show</p>
        </div>
      ) : (null)}

    </>
  )
}
