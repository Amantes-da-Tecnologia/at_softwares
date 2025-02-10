import Benefits from "./pages/benefits/benefits";
import Footer from "./pages/footer/footer";
import Navbar from "./pages/navbar/navbar";
import Newsletter from "./pages/newsletter/newsletter";
import ProductShots from "./pages/productShots/productsShots";
import TitleHero from "./pages/Title Hero/titlehero";

export default function Home() {
  return (
      <main>
        <Navbar/>
        <div className="px-10 lg:px-40 xl:px-80">
          <TitleHero />  
          <Benefits />
          <ProductShots/>
          <Newsletter/>
        </div>
        <Footer/>
      </main>
  );
}