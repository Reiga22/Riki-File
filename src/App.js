import { Routes, Route } from "react-router-dom";
import Beranda from "./Beranda";
import Berita from "./BagianNavbar/Berita";
import Dokumen from "./BagianNavbar/Dokumen";
import Galeri from "./BagianNavbar/Galeri";
import Foto from "./BagianNavbar/Foto";
import Vidio from "./BagianNavbar/Vidio";
import Artikel from "./BagianNavbar/Artikel";
import ShowFoto from "./Detail/ShowFoto";
import ShowVidio from "./Detail/ShowVidio";
import HalamanStatis from "./BagianNavbar/HalamanStatis";
import ShowArtikel from "./Detail/ShowArtikel";
import ShowBerita from "./Detail/ShowBerita";
import ShowDokumen from "./Detail/ShowDokumen";

function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<Beranda/>} />
      <Route path="/Artikel" element={<Artikel/>}/>
      <Route path="/Dokumen" element={<Dokumen/>}/>
      <Route path="/Berita" element={<Berita/>}/>
      <Route path="/Galeri" element={<Galeri/>}/>
      <Route path="/Foto" element={<Foto/>}/>
      <Route path="/Vidio" element={<Vidio/>}/>
      <Route path="/ShowBerita/:id" element={<ShowBerita/>}/>
      <Route path="/ShowArtikel/:id" element={<ShowArtikel/>}/>
      <Route path="/ShowDokumen/:slug" element={<ShowDokumen/>}/>
      <Route path="/ShowFoto/:slug" element={<ShowFoto/>}/>
      <Route path="/ShowVidio/:slug" element={<ShowVidio/>}/>
      <Route path="/HalamanStatis" element={<HalamanStatis/>}/>
    </Routes>
    </> 
  );
}

export default App;