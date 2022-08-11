import Footer from "./Components/Footer";
import Header from "./Components/Header";
import "./Components/style.css";
import "./berita-style.css";
import React from "react";
import Card from 'react-bootstrap/Card';
import {useState, useEffect} from "react";

function Berita() {
  const [DataResponse, setDataResponse] = useState(null);

  useEffect(() => {
    Berita();
    return () => {
      setDataResponse(null);
    };
  }, []);

  function Berita() {
    const axios = require('axios');
    axios.get('http://adminmesuji.embuncode.com/api/news?instansi_id=7&per_page=20').then(function (response) {
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
                <div className="container">
                <div className="berita-halaman">
                  <h1>Halaman Berita</h1>
                  <br></br>
                  <br></br>
                </div>
                <br></br>
                <br></br>
                <div className="container">
                  <div className="row">
                
        {
          DataResponse && DataResponse.map((item) => {
            return (
              
                <Card className="card-berita-halaman">
                            <Card className='mt-4'>
                                <Card.Img variant="top" src={item.image_file_data} />
                                <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                  {item.content}
                                </Card.Text>
                                <p className='read-more'>
                                  <a href={`/ShowBerita/${item.id}`}>Read More</a>
                                </p>                                
                                </Card.Body>
                            </Card>
                            </Card>
            )
          })
        }
        </div>
        </div>
        </div>
        </div>: ''
      }
      <Footer/>
      </>
  );
  
}

export default Berita;