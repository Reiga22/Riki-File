import Footer from "./Components/Footer";
import Header from "./Components/Header";
import "./Components/style.css";
import React from "react";
import {Card} from "react-bootstrap";
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
    axios.get('http://adminmesuji.embuncode.com/api/news?instansi_id=5&per_page=20').then(function (response) {
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
              
                <Card className="card-artikel-berita">
                            <Card className='mt-4'>
                                <Card.Img variant="top" src={item.image_file_data} />
                                <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                        {item.content}
                                </Card.Text>
                                <p className='read-more'>
                                  <a href=''>Read More</a>
                                </p>                                
                                </Card.Body>
                            </Card>
                            </Card>
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