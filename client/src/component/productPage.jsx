import Nav from "./nav"
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export default function ProductPage() {
  return (
    <>
      <Nav />
      <div className="flex flex-col  items-center mt-10 w-full max-w-screen">
        <img className="w-2/3" src="https://m.media-amazon.com/images/I/316ArzLeJ2L._SX300_SY300_QL70_FMwebp_.jpg" alt="" />
        <div className="text-left p-5 flex flex-col gap-5">
          <h1 className="text-xl font-bold ">Apple MacBook Air Laptop: Apple M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Grey</h1>
          <p>rating</p>
          <p>Price</p>
          <p>Colour: Space Grey
            Size: 256 GB
            Brand	Apple
            Model Name	MacBook Air
            Screen Size	13 Inches
            Colour	Space Grey
            Hard Disk Size	256 GB
            CPU Model	Core M Family
            RAM Memory Installed Size	8 GB
            Operating System	macOS 10.14 Mojave
            Special Feature	Portable
            Graphics Card Description	Integrated</p>
        </div>
      </div>

      <div className="text-2xl m-5 flex justify-between  ">
        <div className="flex gap-10 ">
        <button className="outline outline-white p-3 rounded-full hover:text-white hover:bg-zinc-900"><FaShoppingCart /></button>
        <button className="outline p-3 rounded-full hover:text-white hover:bg-zinc-900 outline-white">
          <FaHeart />
        </button>
        </div>
        
        <div>
          <button className="outline pt-2 pb-2 pl-4 pr-4 rounded hover:text-white hover:outline-none hover:bg-zinc-900">Buy now</button>
        </div>
      </div>
    </>
  )
}
