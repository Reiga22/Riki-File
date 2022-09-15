import Footer from "../Components/Footer";
import Header from "../Components/Header";
import React from "react";
import './css/vidio-style.css';
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
    <Header/>
      {
        (DataResponse != null) ? 
         
              <div className="row">
                <div className="berita-halaman">
                  <h1>Halaman Vidio</h1>
                </div>
                <div className="container-fluid mt-5">
          <div className="container">
          <div className="row">

                
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
        </div>: ''
      }
      <br></br>
      <Footer/>
        </>
    );
};

export default Vidio;