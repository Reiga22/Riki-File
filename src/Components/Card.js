import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from "react";
import './css/card.css';
import React from "react";


function Kart() {
  const [DataResponse, setDataResponse] = useState(null);

  useEffect(() => {
    Kart();
    return () => {
      setDataResponse(null);
    };
  }, []);

  function Kart() {
    const axios = require('axios');
    axios.get('http://adminmesuji.embuncode.com/api/news?instansi_id=44&per_page=3').then(function (response) {
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
          <div className="container-fluid mt-5">
            <div className="container">
           
              <div className="row">
                <div className='berita'>
                    <h2>BERITA TERBARU</h2>
                    </div>
                
                
        {
          DataResponse 
          && DataResponse.map((item) => {
            return (
              
                          <div className='card-beranda' >
                            <Card className='pembungkus'>
                                <Card.Img  className='img-news'variant="top" src={item.image_file_data} />
                                <Card.Body>
                                <Card.Title className='title'>{item.title}</Card.Title>
                                <p className='read-more'>
                                  <a href={`/ShowBerita/${item.id}`}>Read More</a>
                                </p>
                                </Card.Body>
                            </Card>       
                            </div>  
                                                                     
            )
          })
        }

                </div>
            </div>
            </div>
        </div>: ''
      }
<div className='see-more'>
                  <a href="/Berita">
                    <h5>
                      See More Berita
                    </h5>
                  </a>
                </div>  
                </>
  );
};

export default Kart;