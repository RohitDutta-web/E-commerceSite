import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


export default function CategoryCrousel() {
  return (
    <>
      <Carousel responsive={responsive} className="mt-10 mb-10 br-transparent z-30">
        <div >
          <div className="w-[90%] cursor-pointer bg-zinc-300 h-48 bg-[url('https://th.bing.com/th/id/OIP.m5Y6dWxHZBbFsXem7dYh_gHaHV?rs=1&pid=ImgDetMain')] bg-center bg-cover  ">
            <p className="bg-transparent font-bold text-xl text-center relative top-1/2  text-white ">Phones</p>
            

          </div>
        </div>
        <div>
          <div className="w-[90%] cursor-pointer bg-zinc-300 h-48 bg-[url('https://th.bing.com/th/id/OIP.7xULg0DqkXm3n1jpq7hW_AAAAA?rs=1&pid=ImgDetMain')] bg-center bg-cover">
            <p className="bg-transparent font-bold text-xl text-center relative top-1/2  text-white ">Laptops</p>
            

          </div>
        </div>
        <div>
          <div className="w-[90%] cursor-pointer bg-zinc-300 h-48 bg-[url('https://fs.npstatic.com/userfiles/7687254/image/NextPit_2022_Best_Smartwatches-w810h462.jpg')] bg-center bg-cover">
            <p className="bg-transparent font-bold text-xl text-center relative top-1/2  text-white ">Smart <br/> Watches</p>
            

          </div>
        </div>
        <div>
          <div className="w-[90%] cursor-pointer bg-zinc-300 h-48 bg-[url('https://th.bing.com/th/id/OIP.X5F3dkPHvh6y3-yOHckYEQHaDt?w=1800&h=900&rs=1&pid=ImgDetMain')] bg-center bg-cover">
            <p className="bg-transparent font-bold text-xl text-center relative top-1/2  text-white ">Gaming</p>
            

          </div>
        </div>
        <div>
          <div className="w-[90%] cursor-pointer bg-zinc-300 h-48 bg-[url('https://th.bing.com/th/id/OIP.gUx3njC3uUZ_YMBU4x4pHAHaJQ?w=1490&h=1862&rs=1&pid=ImgDetMain')] bg-center bg-cover">
            <p className="bg-transparent font-bold text-xl text-center relative top-1/2  text-white ">Headphones</p>
            

          </div>
        </div>
        <div>
          <div className="w-[90%] cursor-pointer bg-zinc-300 h-48 bg-[url('https://th.bing.com/th/id/OIP.74uTpkryPZkT2mLmh9UvSwHaFj?w=287&h=215&c=7&r=0&o=5&dpr=1.3&pid=1.7')] bg-center bg-cover">
            <p className="bg-transparent font-bold text-xl text-center relative top-1/2  text-white ">Camera</p>
            

          </div>
        </div>
        <div>
          <div className="w-[90%] cursor-pointer bg-zinc-300 h-48 bg-[url('https://media.istockphoto.com/id/1400570284/photo/old-computers-digital-tablets-mobile-phones-many-used-electronic-gadgets-devices-broken.jpg?s=612x612&w=0&k=20&c=YwPxokR3ZAz2B4ZDx4TRniJElSBXRbodefQn0C6ORYc=')] bg-center bg-cover">
            <p className="bg-transparent font-bold text-xl text-center relative top-1/2  text-white ">Others</p>
            

          </div>
        </div>
       

        
      </Carousel>;

    </>
  )
}



