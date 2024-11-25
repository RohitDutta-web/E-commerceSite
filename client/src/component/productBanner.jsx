import { Carousel } from 'antd';
const contentStyle1 = {
  height: '500px',
  color: '#fff',
  lineHeight: '800px',
  textAlign: 'center',
  background: 'url("https://cdn.shopify.com/s/files/1/2532/7020/articles/must_have_gaming_accessories_gadgeticloud_blog_banner_1024x1024.jpg?v=1554088621") center',
};


const contentStyle2 = {
  height: '500px',
  color: '#fff',
  lineHeight: '800px',
  textAlign: 'center',
  background: 'url("https://i.pinimg.com/originals/bd/98/35/bd983558d61361e66f41c5b9c622ea99.jpg") center ',
};



const contentStyle3 = {
  height: '500px',
  color: '#fff',
  lineHeight: '800px',
  textAlign: 'center',
  background: 'url("https://m-cdn.phonearena.com/images/article/155866-wide-two_1200/New-Apple-Watch-ads-replay-real-life-situations-where-the-timepiece-saved-the-users-life.jpg")  center',
};

const contentStyle4 = {
  height: '500px',
  color: '#fff',
  lineHeight: '800px',
  textAlign: 'center',
  background: 'url("https://sm.pcmag.com/t/pcmag_au/review/r/razer-opus/razer-opus_f5e5.1200.jpg")  center',
};
export default function ProductBanner() {
  return (
    <>
      <Carousel autoplay >
    <div >
          <h3 style={contentStyle1} className=''>
            <span className='border-2 p-3 font-bold  hover:bg-white hover:text-black cursor-pointer rounded-md'>Shop now</span>
          </h3>
    </div>
    <div>
          <h3 style={contentStyle2}>
            <span className='border-2 p-3 font-bold  hover:bg-white hover:text-black cursor-pointer rounded-md'>Shop now</span>
          </h3>
    </div>
    <div>
          <h3 style={contentStyle3}>
          <span className='border-2 p-3 font-bold  hover:bg-white hover:text-black cursor-pointer rounded-md'>Shop now</span>
      </h3>
    </div>
    <div>
          <h3 style={contentStyle4}>
          <span className='border-2 p-3 font-bold  hover:bg-white hover:text-black cursor-pointer rounded-md'>Shop now</span>
          </h3>
    </div>
  </Carousel>
    </>
  )
}
