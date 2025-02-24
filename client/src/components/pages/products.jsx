import { toast } from "sonner"
import ProductCard from "../productCard"
import { Link } from "react-router-dom"
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Skeleton from '@mui/material/Skeleton';
export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
 

  const getProductDetails = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:3000/api/product/allProducts");
      setProducts(res.data.products); 
      setLoading(false);
    } catch (e) {
      toast.error(e.response?.data?.message || "Failed to fetch products");
    }
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  useEffect(() => {
    getProductDetails()
  },[])
  return (
    <>
      <p className="w-full text-center font-bold text-xl mt-5 mb-5">All Products</p>
      <div className="flex">
        <div className=" xl:1/3 2xl:1/3 lg:w-1/3 md:w-2/3 sm:w-2/3 h-auto  ">
          <form className="p-4 bg-gray-100 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-4">Filter Products</h2>

            {/* Category Filter */}
            <div className="mb-4">
              <label htmlFor="category" className="block text-sm font-medium mb-1">
                Category
              </label>
              <select
                id="category"
                name="category"

                className="w-full p-2 border rounded"
              >
                <option value="">All Categories</option>
                <option value="electronics">Electronics</option>
                <option value="fashion">Fashion</option>
                <option value="home-appliances">Home Appliances</option>
                <option value="books">Books</option>
              </select>
            </div>

            {/* Price Range Filter */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Price Range</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  name="minPrice"

                  className="w-1/2 p-2 border rounded"
                  placeholder="Min Price"
                />
                <input
                  type="number"
                  name="maxPrice"

                  className="w-1/2 p-2 border rounded"
                  placeholder="Max Price"
                />
              </div>
            </div>

            {/* Rating Filter */}
            <div className="mb-4">
              <label htmlFor="rating" className="block text-sm font-medium mb-1">
                Rating
              </label>
              <select
                id="rating"
                name="rating"

                className="w-full p-2 border rounded"
              >
                <option value="">All Ratings</option>
                <option value="4">4 Stars & Up</option>
                <option value="3">3 Stars & Up</option>
                <option value="2">2 Stars & Up</option>
                <option value="1">1 Star & Up</option>
              </select>
            </div>

            {/* Availability Filter */}
            <div className="mb-4">
              <label className="flex items-center text-sm font-medium">
                <input
                  type="checkbox"
                  name="availability"

                  className="mr-2"
                />
                Show only available products
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Apply Filters
            </button>
          </form>


        </div>
        <div className="flex flex-wrap gap-5">
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
        
      </div>
      <div className="w-full max-w-screen flex justify-center mt-10 mb-10">
          <button className="border-2 border-zinc-800 pl-7 pr-7 pt-3 pb-3 font-bold text-xl bg-zinc-800 text-white rounded hover:bg-white hover:text-zinc-800">load more</button>
        </div>
    </>
  )
}
