import Nav from "./nav"
import CategoryMenu from "./categoryMenu"
import ProductBanner from "./productBanner"
import ProductsHome from "./productsHome"
import BaseMenu from "./baseMenu"

import Footer from "./footer"



export default function Home() {
  return (
    <>
      <Nav />
      <CategoryMenu />
      <ProductBanner /> 
      <ProductsHome />
      <BaseMenu />
  
      <Footer/>
    </>
  )
}
