import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import ShinyButton from "@/components/ui/shiny-button";
import NavBar from '../navBar';
import { useLocation } from 'react-router-dom';



export default function ProductInfo() {
  const location = useLocation();
  const { product } = location.state;
  

  return (
    <>
      <NavBar />
      <div className="w-full flex flex-col gap-5 p-10 max-w-screen items-center">
        <img src={product.picture} alt="" className="shadow-2xl m-5 w-auto h-auto" />
        <div>
          <h1 className='font-bold text-2xl'>{product.title}</h1>
          <p className='text-xl'>
            {product.description}
          </p>
          <Box sx={{ '& > legend': { mt: 2 } }}>
            <Rating name="read-only" value={product.rating} readOnly />
          </Box>
          <p className='text-xl'>${product.price}</p>
        </div>
      </div>

      <div className='flex justify-between mb-10'>
        <div className='flex gap-5 ml-5'>
          <button className='outline pt-2 pb-2 pl-4 pr-4 rounded font-bold text-white bg-zinc-900 hover:bg-white hover:text-zinc-900 '>Add to wishlist</button>
          <button className='outline pt-2 pb-2 pl-4 pr-4 rounded font-bold text-white bg-zinc-900 hover:bg-white hover:text-zinc-900 '>Add to cart</button>

        </div>
        <ShinyButton className="font-bold mr-10">Buy Now</ShinyButton>

      </div>
    </>
  )
}
