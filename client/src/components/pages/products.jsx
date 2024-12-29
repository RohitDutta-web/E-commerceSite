
import ProductCard from "../productCard"
import { Link } from "react-router-dom"
export default function AllProducts() {

  const products = [
    {
      id: "5w6ds8e7wd23a7ws64",
      name: "Iphone",
      description: "iphone 16, newly launched 256 gb , blue , retina display bla bla bla bla",
      category: "phones",
      rating: 4.5,
      picture: "https://m.media-amazon.com/images/I/31lr3Ij6iBL._SY445_SX342_QL70_FMwebp_.jpg",
      price: 1000
    },
    {
      id: "5w6dsawdsdt765e7wd23a7ws64",
      name: "Mac Book",
      description: "Apple MacBook Air Laptop: Apple M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Grey",
      category: "laptop",
      rating: 4,
      picture: "https://m.media-amazon.com/images/I/316ArzLeJ2L._SX300_SY300_QL70_FMwebp_.jpg",
      price: 2800
    }
  ];
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
            products.map((product) => (
              <Link to={`/${product.id}`}
                state={{ product }}
                key={product.id}>
              <ProductCard {...product} /> 
              </Link>
            ))
 }
        </div>
      </div>
    </>
  )
}
