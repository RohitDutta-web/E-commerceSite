import Nav from "./nav"
import AllProductsCard from "./allProductsCard"

export default function WishlistedItems() {
  return (
    <>
      <Nav />
      <div className="p-5 flex flex-col gap-5 w-full max-w-screen">
        <p className="w-full text-center font-bold text-2xl">Your Wishlist</p>
        <AllProductsCard image={"https://m.media-amazon.com/images/I/615aEAC5aZL._AC_UY327_FMwebp_QL65_.jpg"}
          title={"Sony PlayStation®5 Console (slim)"}

          price={"₹54,990"}

          rating={5}
        />


        <AllProductsCard image={"https://m.media-amazon.com/images/I/41aMmUR-6ZL._SX300_SY300_QL70_FMwebp_.jpg"}
          title={"HP Pavilion x360 Intel Core i5 13th Gen (16GB Ram/512GB SSD/Fhd/Windows 11/Ms Office/Touchscreen/5MP Camera/Backlit Keyboard/Audio by B&O/14 (35.6Cm)/Silver/1.51Kg) Ek1074Tu Laptop"}

          price={"₹69,990"}

          rating={3}
        />

      </div>

    </>
  )
}
