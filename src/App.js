import { Routes, Route } from "react-router-dom";
import Beranda from "./Beranda";
import Berita from "./Berita";
import Artikel from "./Artikel";
import Dokumen from "./Dokumen";
import Galeri from "./Galeri";
import Foto from "./Foto";
import Vidio from "./Vidio";
import ShowArtikel from "./Components/ShowArtikel";
import ShowBerita from "./Components/ShowBerita";
import ShowDokumen from "./Components/ShowDokumen";

function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<Beranda/>} />
      <Route path="/Dokumen" element={<Dokumen/>}/>
      <Route path="/Berita" element={<Berita/>}/>
      <Route path="/Artikel" element={<Artikel/>}/>
      <Route path="/Galeri" element={<Galeri/>}/>
      <Route path="/Foto" element={<Foto/>}/>
      <Route path="/Vidio" element={<Vidio/>}/>
      <Route path='/ShowArtikel/:id' element={<ShowArtikel />} />
      <Route path='/ShowBerita/:id' element={<ShowBerita/>} />
      <Route path="/ShowDokumen/:slug" element={<ShowDokumen/>}/>
    </Routes>
    </> 
  );
}

export default App;