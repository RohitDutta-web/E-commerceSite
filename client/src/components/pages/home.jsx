import NavBar from "../navBar"
import Banner from "../banner"
import CategoryCrousel from "../categoryCrousel"
import { Bento } from "../bento"
import Footer from "../footer"

export default function Home() {
  return (
    <>
      <NavBar />
      <Banner />
      <CategoryCrousel />
      <Bento />
      <Footer/>
    </>
  )
}
