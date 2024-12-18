import Nav from "./nav";
import AllProductsCard from "./allProductsCard";

export default function Products() {
  return (
    <>
      <Nav />
      <div className="flex w-full max-w-screen">
        <div className="w-60 h-[600px] shadow-2xl outline outline-zinc-100 overflow-scroll overflow-x-hidden ml-2">

          <div className="w-full mt-5 mb-2">
            <p className="w-full text-center font-bold text-xl">Brand</p>
            <div >
              <input type="checkbox" value="Apple" />
              <label> Apple</label>
            </div>
            <div >
              <input type="checkbox" value="Apple" />
              <label> Hp</label>
            </div>
            <div >
              <input type="checkbox" value="Apple" />
              <label> Dell</label>
            </div>
            <div >
              <input type="checkbox" value="Apple" />
              <label> Asus</label>
            </div>
            <div >
              <input type="checkbox" value="Apple" />
              <label> Acer</label>
            </div>
            <div >
              <input type="checkbox" value="Apple" />
              <label> Apple</label>
            </div>
            <div >
              <input type="checkbox" value="Apple" />
              <label> Lenovo</label>
            </div>
          </div>


          <div className="w-full mt-5 mb-2">
            <p className="w-full text-center font-bold text-xl">Products</p>
            <div >
              <input type="checkbox" value="Apple" />
              <label> Phone</label>
            </div>
            <div >
              <input type="checkbox" value="Apple" />
              <label> Laptops</label>
            </div>
            <div >
              <input type="checkbox" value="Apple" />
              <label> TV</label>
            </div>
            <div >
              <input type="checkbox" value="Apple" />
              <label> Headphones</label>
            </div>
            <div >
              <input type="checkbox" value="Apple" />
              <label> Smart watches</label>
            </div>
            <div >
              <input type="checkbox" value="Apple" />
              <label> Cameras</label>
            </div>
            <div >
              <input type="checkbox" value="Apple" />
              <label> Gaming</label>
            </div>
            <div >
              <input type="checkbox" value="Apple" />
              <label> PC</label>
            </div>
          </div>


          <div className="w-full mt-5 mb-2">
            <p className="w-full text-center font-bold text-xl">Price</p>
            <div >
              <input type="checkbox" value="Apple" />
              <label> under 10,000</label>
            </div>
            <div >
              <input type="checkbox" value="Apple" />
              <label> 10,000 - 20,000</label>
            </div>
            <div >
              <input type="checkbox" value="Apple" />
              <label> 20,000 - 30,000</label>
            </div>
            <div >
              <input type="checkbox" value="Apple" />
              <label> 30,000 - 40,000</label>
            </div>
            <div >
              <input type="checkbox" value="Apple" />
              <label> 40,000 - 50,000</label>
            </div>
            <div >
              <input type="checkbox" value="Apple" />
              <label> above 50,000</label>
            </div>
          </div>





        </div>
        <div className="w-full p-10 flex flex-col gap-10">
          <AllProductsCard image={"https://m.media-amazon.com/images/I/316ArzLeJ2L._SX300_SY300_QL70_FMwebp_.jpg"}
            title={"Apple MacBook Air Laptop: Apple M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Grey"}

            price={"₹56,990"}

            rating={4}
          />

          <AllProductsCard image={"https://m.media-amazon.com/images/I/41aMmUR-6ZL._SX300_SY300_QL70_FMwebp_.jpg"}
            title={"HP Pavilion x360 Intel Core i5 13th Gen (16GB Ram/512GB SSD/Fhd/Windows 11/Ms Office/Touchscreen/5MP Camera/Backlit Keyboard/Audio by B&O/14 (35.6Cm)/Silver/1.51Kg) Ek1074Tu Laptop"}

            price={"₹69,990"}

            rating={3}
          />


          <AllProductsCard image={"https://m.media-amazon.com/images/I/615aEAC5aZL._AC_UY327_FMwebp_QL65_.jpg"}
            title={"Sony PlayStation®5 Console (slim)"}

            price={"₹54,990"}

            rating={5}
          />
        </div>

      </div>

    </>
  )
}
