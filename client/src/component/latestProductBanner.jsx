

export default function LatestProductBanner() {
  return (
    <>
      <div className="bg-[url('https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.medium.jpg')] w-screen h-[550px] bg-cover bg-center  bg-fixed text-white flex flex-col justify-center">
        <div className="ml-20 text-2xl">Pro.Beyond</div>
        <div className="ml-20 text-5xl font-bold mt-2">IPhone 15 Pro</div>
        <div className="ml-20 ">A Stunning, Lightweight, and Durable Design</div>
        <div className="ml-20 m-5">
          <button className="border-2 bg-transparent w-36 h-14 font-bold hover:bg-white hover:text-black">Shop now</button>
        </div>

      </div>

      <div className="w-screen flex flex-wrap">
        <div>
          <div className="bg-[url('https://assets.gamingdeals.com/storage/ps5-banner-image-1602769710cDvYX.jpg')]"></div>
          <div></div>
        </div>
        <div></div>
      </div>
    </>
  )
}
