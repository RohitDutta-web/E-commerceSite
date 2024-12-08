import Nav from "./nav"
import CategoryMenu from "./categoryMenu"
import ProductBanner from "./productBanner"
import ProductsHome from "./productsHome"
import BaseMenu from "./baseMenu"
import SaleBanner from "./saleBanner"



export default function Home() {
  return (
    <>
      <Nav />
      <CategoryMenu />
      <ProductBanner /> 
      <ProductsHome />
      <BaseMenu />
      <SaleBanner/>
    </>
  )
}
