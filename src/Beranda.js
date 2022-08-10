import Header from './Components/Header';
import Footer from './Components/Footer';
import Kart from './Components/Card';
import Gambarketua from './Components/Gambarketua';
import Cardartikel from './Components/Cardartikel';
import Carousel from './Components/Carousel';

function Beranda() {
  return (
    <>
    <Header/>
    <Carousel/>
    <Gambarketua/>
    <Kart/>
    <Cardartikel/>
    <Footer/>

  </> 
  );
}

export default Beranda;