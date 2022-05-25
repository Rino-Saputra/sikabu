import HeroSection from "../component/template/herosection/Index"
import Facility from "../component/template/facility/Index"
import Carousel from "../component/template/moreProduct"
import Footer from "../component/template/footer"
import Data from "../component/template/data"

export default function Home() {
  return (
    <>
      <HeroSection/>
      <Facility />
      <Data />
      <Carousel />
    </>
  )
}
