import Nav from "./nav"
import CategoryMenu from "./categoryMenu"
import ProductBanner from "./productBanner"
import ProductsHome from "./productsHome"



export default function Home() {
  return (
    <>
      <Nav />
      <CategoryMenu />
      <ProductBanner /> 
      <ProductsHome/>
    </>
  )
}
