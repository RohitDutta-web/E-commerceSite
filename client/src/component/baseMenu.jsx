

export default function BaseMenu() {
  return (
    <div className="flex lg:flex-row w-screen max-w-screen mt-32 flex-wrap md:flex-col sm:flex-col">
      <div className="bg-[url('https://i.pinimg.com/originals/2b/8a/f3/2b8af3d4c89a1db9d7b6df722e9d87cc.jpg')] bg-cover bg-center text-white w-1/4 h-[400px] sm:w-full md:w-full lg:w-1/4 ">
        <p className="w-full h-[200px] flex  justify-center items-end font-bold">Popular Products</p>
        <button className="w-full h-[200px] flex  justify-center items-start  text-center  font-bold"><span className="border-2 pt-2 pb-2 pr-4 pl-4 hover:text-black hover:bg-white mt-3">Shop now</span></button>
      </div>
      <div className="bg-[url('https://www.macprices.net/blog/wp-content/uploads/2021/04/apple_ipad-pro-spring21_hero_04202021.jpg')] bg-cover bg-center text-white w-1/4 h-[400px] sm:w-full md:w-full lg:w-1/4">
      <p className="w-full h-[200px] flex  justify-center items-end font-bold">Tabs</p>
      <button className="w-full h-[200px] flex  justify-center items-start  text-center  font-bold"><span className="border-2 pt-2 pb-2 pr-4 pl-4 hover:text-black hover:bg-white mt-3">Shop now</span></button>
      </div>
      <div className="bg-[url('https://s3-prod.adage.com/s3fs-public/styles/1200x630/public/20210914_appleIphone-b_3x2.jpg')] bg-cover bg-center text-white w-1/4 h-[400px] sm:w-full md:w-full lg:w-1/4">
      <p className="w-full h-[200px] flex  justify-center items-end font-bold">Phones</p>
      <button className="w-full h-[200px] flex  justify-center items-start  text-center  font-bold"><span className="border-2 pt-2 pb-2 pr-4 pl-4 hover:text-black hover:bg-white mt-3">Shop now</span></button>
      </div>
      <div className="bg-[url('https://9to5toys.com/wp-content/uploads/sites/5/2023/07/macbook-pro-2023-02.jpg')] bg-cover bg-center text-white w-1/4 h-[400px] sm:w-full md:w-full lg:w-1/4">
      <p className="w-full h-[200px] flex  justify-center items-end font-bold">Laptops</p>
      <button className="w-full h-[200px] flex  justify-center items-start  text-center  font-bold"><span className="border-2 pt-2 pb-2 pr-4 pl-4 hover:text-black hover:bg-white mt-3">Shop now</span></button>
      </div>
    </div>
  )
}
