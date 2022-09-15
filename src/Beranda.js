import Header from './Components/Header';
import Footer from './Components/Footer';
import Kart from './Components/Card';
import Gambarketua from './Components/Gambarketua';
import Cardartikel from './Components/Cardartikel';
import Carousel from './Components/Carousel';
import Foto from './Components/Foto';
import Vidio from './Components/Vidio';
import React from "react";

function Beranda() {
  return (
    <>
    <Header/>
    <br></br>
    <Carousel/>
    <Gambarketua/>
    <Kart/>
    <Cardartikel/>
    <Foto/>
    <Vidio/>
    <Footer/>

  </> 
  );
}

export default Beranda;