import Footer from "./Components/Footer";
import Header from "./Components/Header";
import React from "react";
import './foto-style.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {useState, useEffect} from "react";

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
    <Header/>
      {
        (DataResponse != null) ? 
         
              <div className="row">
                <div className="berita-halaman">
                  <h1>Halaman Foto</h1>
                  <br></br>
                  <br></br>
                </div>
                
        {
          DataResponse && DataResponse.map((index) => {
            return (
              <div className="card-foto">
              <div className="bg container-fluid mt-5">
                <div className="container">
                  <div className="text-center">
                  <div className="row">
                    <Card style={{ width: '25rem' }}>
                  <Card.Img variant="top" src={index.image_gallery_item[0].image_file_data} />
                                <Card.Body>
                                <Card.Text>
                                      {index.description}
                                </Card.Text>
                                <Button variant="link" href={`/ShowFoto/${index.slug}`}>Read More</Button>
                                </Card.Body>
                            </Card>
          </div>
          </div>
          </div>
          </div>
          </div>
            )
          })
        }
        </div>: ''
      }
      <br></br>
      <Footer/>
        </>
    );
};

export default Foto;