import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import ShinyButton from "@/components/ui/shiny-button";
import NavBar from '../navBar';
import { useLocation } from 'react-router-dom';
import { toast } from 'sonner';
import { useSelector } from 'react-redux';
import axios from 'axios';



export default function ProductInfo() {
  const location = useLocation();
  const { product } = location.state;
  const { user, isLoggedin } = useSelector(store => store.user)


  const handleAddToCart = async (e) => {
    e.preventDefault();
    try {
      if (!user && !isLoggedin) return toast.error("Please login as a user")
      const res = await axios.get(`http://localhost:3000/api/product/addToCart/${product._id}`, { withCredentials: true })
      if (res.data.success) {
        toast.success(res.data.message)
        return;
      }

    } catch (e) {
      toast.error(e.response.data.message);
      return;
    }
  }


  const handleAddToWishList = async (e) => {
    e.preventDefault();
    try {
      if (!user && !isLoggedin) return toast.error("Please login as a user")
      const res = await axios.get(`http://localhost:3000/api/product/addToWishList/${product._id}`, { withCredentials: true })
      if (res.data.success) {
        toast.success(res.data.message)
        return;
      }
    } catch (e) {
      toast.error(e.response.data.message);
      return;
    }
  }

  const handleBuyNow = async (e) => {
    e.preventDefault();
    try {
      if (!user && !isLoggedin) return toast.error("Please login as a user")

    } catch (e) {
      toast.error(e.response.data.message);
      return;
    }
  }



  return (
    <>
      <NavBar />
      <div className="w-full flex flex-col gap-5 p-10 max-w-screen items-center">
        <img src={product.picture} alt="" className="shadow-2xl m-5 w-[30%] h-[30%]" />
        <div>
          <h1 className='font-bold text-2xl'>{product.title}</h1>
          <p className='text-xl'>
            {product.description}
          </p>
          <Box sx={{ '& > legend': { mt: 2 } }}>
            <Rating name="read-only" value={product.rating} readOnly />
          </Box>
          <p className={product.afterDiscountAmt ? 'text-xl line-through' : 'text-xl'}>${product.price}</p>
          {product.discount > 0 ? <p>{product.discount} % discount</p> : null}
          { product.discount > 0 ? <p className='text-2xl font-bold'>{`$${product.afterDiscountAmt}`}</p> : null }
        </div>
      </div>

      <div className='flex justify-between mb-10'>
        <div className='flex gap-5 ml-5'>
          <button className='outline pt-2 pb-2 pl-4 pr-4 rounded font-bold text-white bg-zinc-900 hover:bg-white hover:text-zinc-900 ' onClick={handleAddToWishList}>Add to wishlist</button>
          <button className='outline pt-2 pb-2 pl-4 pr-4 rounded font-bold text-white bg-zinc-900 hover:bg-white hover:text-zinc-900 ' onClick={handleAddToCart}>Add to cart</button>

        </div>
        <ShinyButton className="font-bold mr-10" onClick={handleBuyNow}>Buy Now</ShinyButton>

      </div>
    </>
  )
}
