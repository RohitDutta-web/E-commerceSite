import "./banner.css"
import { MarqueeDemo } from "./slider"

export default function Banner() {
  return (
    <>
      <div className="w-full max-w-screen h-[80vh] bg-cover bg-[url('https://img.freepik.com/premium-photo/shopping-cart-online-shopping-concept_220873-17272.jpg?w=1380')] bg-center ">
      </div>

      <div className="banner bg-transparent">
        <p className="banner-text absolute top-[30%] bg-transparent left-[5%] xl:text-[200px] lg:text-[200px] md:text-[100px] sm:text-[50px]  text-white">
          ESSCOM
        </p>
      </div>

      <div>
        <MarqueeDemo/>
      </div>
    
    </>
  )
}
