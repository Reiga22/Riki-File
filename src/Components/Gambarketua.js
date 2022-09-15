import './css/gambar.css';
import wakil from './image/wakil.jpg';
import React from "react";

function Gambarketua(){
    return(
        <>
        <div className="foto">
            <div className="row">

                <div className="col-lg-6 mt-5">
                    <img className="image" src={wakil} />
                    <h3 style={{paddingLeft:'105px'}}>KETUA</h3>
                </div>
                <div className="col-lg-6 mt-5">
                    <img className="image" src={wakil}/>
                    <h3 style={{paddingLeft:'73px'}}>WAKIL KETUA</h3>
               </div>
                </div>
        </div>
        </>
    )
}
export default Gambarketua;