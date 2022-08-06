import {Routes, Route} from "react-router-dom";
import Profil from './Profil';
import Beranda from "./Beranda";
import Berita from "./Berita";
import Artikel from "./Artikel";
import Galeri from "./Galeri";
import Foto from "./Foto";
import Vidio from "./Vidio";
import ShowArtikel from "./Components/ShowArtikel";
import ShowBerita from "./Components/ShowBerita";

function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<Beranda/>} />
      <Route path="/Profil" element={<Profil/>} />
      <Route path="/Berita" element={<Berita/>}/>
      <Route path="/Artikel" element={<Artikel/>}/>
      <Route path="/Galeri" element={<Galeri/>}/>
      <Route path="/Foto" element={<Foto/>}/>
      <Route path="/Vidio" element={<Vidio/>}/>
      <Route path='/ShowArtikel/:id' element={<ShowArtikel />} />
      <Route path='/ShowBerita/:id' element={<ShowBerita/>} />

    </Routes>
    </> 
  );
}

export default App;