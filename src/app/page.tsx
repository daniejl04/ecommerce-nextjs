import BrandLogos from "@/components/BrandCompanies";
import Collections from "@/components/colections";
import FeactureProduct from "@/components/featuredProduct";
import Footer from "@/components/footer";
import LocationMap from "@/components/locationMap";
import Menu from "@/components/menu";
import Slider from "@/components/slider";

export default function Home() {
  return (
   <>
    <Menu/>
    <Slider/>
    <Collections/>
    <FeactureProduct/>
    <LocationMap/>
    <BrandLogos/>
    <Footer/>
   </>
  );
}
