import React from "react";
import "./Footer.css";

function Footer() {
  return (
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
          <div className="col">
            <h4>YAHUHUHUHUHUHU</h4>
            <ui className="list-unstyled">
              <li>BAKSO</li>
              <li>BAKSO</li>
              <li>BAKSO</li>
              <li>BAKSO</li>
              <li>BAKSO</li>
              <li>BAKSO</li>
              <li>BAKSO</li>
              <li>BAKSO</li>
              <li>BAKSO</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>YAHAHAHAHAHAHA</h4>
            <ui className="list-unstyled">
              <li>GORENG</li>
              <li>GORENG</li>
              <li>GORENG</li>
              <li>GORENG</li>
              <li>GORENG</li>
              <li>GORENG</li>
              <li>GORENG</li>
              <li>GORENG</li>
              <li>GORENG</li>
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
  );
}

export default Footer;