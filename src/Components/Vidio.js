import Footer from "../Components/Footer";
import Header from "../Components/Header";
import React from "react";
import './css/vidio.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {useState, useEffect} from "react";

const Vidio = () => {
  const [DataResponse, setDataResponse] = useState(null);

  useEffect(() => {
    Vidio();
    return () => {
      setDataResponse(null);
    };
  }, []);

  function Vidio() {
    const axios = require('axios');
    axios.get('http://adminmesuji.embuncode.com/api/video-gallery?instansi_id=2').then(function (response) {
    setDataResponse(response.data.data.data);
    }).catch(function (error) {

    }).then(function () {

    });
  }

  console.log(DataResponse)
    return (
    <>
      {
        (DataResponse != null) ? 
        <div className='card-berita-all'>
              <div className="row">
                <div className="container-fluid mt-5">
             <div className="container">
            
               <div className="row">
                 <div className='berita'>
                     <h2>VIDIO TERBARU</h2>
                     </div>
                
        {
          DataResponse && DataResponse.map((index) => {
            return (
              <div className="card-vidio">
                    <Card className="pembungkus">
                  <Card.Img className="img-vidio" variant="top" src={index.image_gallery_item[0].thumbnail_url} />
                                <Card.Body>
                                <Card.Text>
                                      {index.description}
                                </Card.Text>
                                <Button variant="link" href={`/ShowVidio/${index.slug}`}>Read More</Button>
                                </Card.Body>
                            </Card>
          </div>
            )
          })
        }
        </div>
             </div>
             </div>
             </div>
        </div>: ''
      }
      <div className='see-more'>
                  <a href="/Vidio">
                    <h5>
                      See More Vidio
                    </h5>
                  </a>
                </div> 
        </>
    );
};

export default Vidio;