import {Routes, Route} from "react-router-dom";
import Profil from './Profil';
import Beranda from "./Beranda";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Beranda/>} />
      <Route path="/Profil" element={<Profil/>} />
    </Routes>
    </> 
  );
}

export default App;