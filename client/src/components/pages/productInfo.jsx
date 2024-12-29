import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import ShinyButton from "@/components/ui/shiny-button";
import NavBar from '../navBar';



export default function ProductInfo() {
  return (
    <>
      <NavBar />
      <div className="w-full lg:flex xl:flex 2xl:flex md:flex sm:flex xs:flex-col gap-5 p-10 max-w-screen items-center">
        <img src="https://m.media-amazon.com/images/I/316ArzLeJ2L._SX300_SY300_QL70_FMwebp_.jpg" alt="" className="shadow-2xl m-5 w-auto h-auto" />
        <div>
          <h1 className='font-bold text-2xl'>Title</h1>
          <p className='text-xl'>
            Lorem ipsum
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id optio, assumenda soluta unde quod repellat dolores eius reiciendis iure maiores inventore sed possimus hic distinctio atque nisi expedita aperiam error.
            dolor sit amet consectetur, adipisicing elit. Iure, odit doloribus. Vel consectetur omnis, eaque necessitatibus sunt reprehenderit excepturi nam quis. Deleniti suscipit, eligendi h
            ic laboriosam ab repellat quae impedit!
          </p>
          <Box sx={{ '& > legend': { mt: 2 } }}>
            <Rating name="read-only" value={4} readOnly />
          </Box>
        </div>
      </div>

      <div className='flex justify-between'>
        <div className='flex gap-5 ml-5'>
          <button className='outline pt-2 pb-2 pl-4 pr-4 rounded font-bold text-white bg-zinc-900 hover:bg-white hover:text-zinc-900 '>Add to wishlist</button>
          <button className='outline pt-2 pb-2 pl-4 pr-4 rounded font-bold text-white bg-zinc-900 hover:bg-white hover:text-zinc-900 '>Add to cart</button>

        </div>
        <ShinyButton className="font-bold mr-10">Buy Now</ShinyButton>

      </div>
    </>
  )
}
