import Nav from "./nav";
import AllProductsCard from "./allProductsCard";

export default function Cart() {
  return (
    <>
      <Nav />
            <div className="p-5 flex flex-col gap-5 w-full max-w-screen">
              <p className="w-full text-center font-bold text-2xl">Your Cart</p>
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
      
      <div className="w-full mt-5 mb-5 pl-5 text-xl ">
        <p>Total items : <span>2</span></p>
        <p>Total amt : <span>₹1,24,980</span></p>
        <p>Discount : <span>10%</span></p>
        <p>After discount amt : <span>₹1,12,428</span></p>
      </div>

      <div className="w-full text-center mt-5 mb-5">
        <button className="bg-black text-white font-bold text-xl pl-2 pr-2 pt-5 pb-5 rounded hover:outline outline-2 hover:bg-white hover:text-black">Proceed to buy!</button>
      </div>
    </>
  )
}
