import Footer from "./Components/Footer";
import Header from "./Components/Header";
import "./Components/style.css";
import React from "react";
import {Card, Button} from "react-bootstrap";
import {useState, useEffect} from "react";

function Artikel() {
  const [DataResponse, setDataResponse] = useState(null);

  useEffect(() => {
    Artikel();
    return () => {
      setDataResponse(null);
    };
  }, []);

  function Artikel() {
    const axios = require('axios');
    axios.get('http://adminmesuji.embuncode.com/api/news?instansi_id=9&per_page=8').then(function (response) {
    setDataResponse(response.data.data.data);
    }).catch(function (error) {

    }).then(function () {

    });
  }

    return (
    <>
    <Header/>
      {
        (DataResponse != null) ? 
         
              <div className="row">
        {
          DataResponse && DataResponse.map((item, index) => {
            return (
              
              <div className='col-lg-3 col-md-6 col-sm-12'>
                            <Card className='mt-4'>
                                <Card.Img variant="top" src={item.image_file_data} />
                                <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                        {item.content}
                                </Card.Text>
                                <Button variant="outline-success">Baca Selengkapnya..</Button>{' '}
                                </Card.Body>
                            </Card>
                        </div>
            )
          })
        }
        </div>: ''
      }
      <Footer/>
      </>
  );
  
}

export default Artikel;