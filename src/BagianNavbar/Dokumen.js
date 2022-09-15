import Footer from "../Components/Footer";
import Header from "../Components/Header";
import "./css/berita-style.css";
import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {useState, useEffect} from "react";

function Dokumen() {
  const [DataResponse, setDataResponse] = useState(null);

  useEffect(() => {
    Dokumen();
    return () => {
      setDataResponse(null);
    };
  }, []);

  function Dokumen() {
    const axios = require('axios');
    axios.get('http://adminmesuji.embuncode.com/api/dokumen?instansi_id=8').then(function (response) {
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
                  <h1>Halaman Dokumen</h1>
                </div>
                
        {
          DataResponse && DataResponse.map((index) => {
            return (
              <div className="bg container-fluid mt-5">
                <div className="container">
                  <div className="row">
                    <Card>
                <Card.Body>
                    <Card.Title>{index.dokumen_item[0].dokumen_file_name}</Card.Title>
                    <Card.Text>{index.description}</Card.Text>  
                    <Button variant="link" href={`/ShowDokumen/${index.slug}`}>Read More</Button>
                </Card.Body>

          </Card>
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
  
}

export default Dokumen;