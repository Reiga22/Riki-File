import "./css/Footer.css";
import React from "react";

function Footer() {
  return (
    <div className="sub col-lg-12  col-md-12 col-sm-12">
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Riki Riyanto</h4>
            <h1 className="list-unstyled">
              <li>19312021</li>
              <li>Informatika</li>
              <li>Universitas Teknokrat Indonesia</li>
            </h1>
          </div>
          {/* Column2 */}
          
          {/* Column3 */}
          <div className="col">
            <h4>Tentang Kami</h4>
            <ui className="list-unstyled">
              <li>“Tentang Kami”, atau dalam Bahasa Inggris biasa dengan “About Us”, 
                merupakan halaman pada website yang menjelaskan tentang latar belakang perusahaan
                 atau bisnis dari sebuah brand. Pada halaman ini biasanya dijelaskan awal mula bisnis 
                 berdiri hingga bagaimana struktur organisasi pada bisnis tersebut.</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} PT. MICRODATA INDONESIA 
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Footer;