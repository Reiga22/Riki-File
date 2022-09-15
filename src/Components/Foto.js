import './css/foto.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {useState, useEffect} from "react";
import React from "react";

const Foto = () => {
  const [DataResponse, setDataResponse] = useState(null);

  useEffect(() => {
    Foto();
    return () => {
      setDataResponse(null);
    };
  }, []);

  function Foto() {
    const axios = require('axios');
    axios.get('http://adminmesuji.embuncode.com/api/image-gallery?instansi_id=8').then(function (response) {
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
                     <h2>FOTO TERBARU</h2>
                     </div>
                
        {
          DataResponse && DataResponse.map((index) => {
            return (
              <div className="card-foto">
                    <Card className="pembungkus">
                  <Card.Img className="img-foto" variant="top" src={index.image_gallery_item[0].image_file_data} />
                                <Card.Body>
                                <Card.Text>
                                      {index.description}
                                </Card.Text>
                                <Button variant="link" href={`/ShowFoto/${index.slug}`}>Read More</Button>
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
                  <a href="Foto/">
                    <h5>
                      See More Foto
                    </h5>
                  </a>
                </div>
        </>
    );
};

export default Foto;