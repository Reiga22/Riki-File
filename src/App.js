import {Routes, Route} from "react-router-dom";
import Profil from './Profil';
import Beranda from "./Beranda";
import Berita from "./Berita";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Beranda/>} />
      <Route path="/Profil" element={<Profil/>} />
      <Route path="/Berita" element={<Berita/>}/>
    </Routes>
    </> 
  );
}

export default App;