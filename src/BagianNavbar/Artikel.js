import Footer from "../Components/Footer";
import Header from "../Components/Header";
import './css/artikel-style.css';
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
    axios.get('http://adminmesuji.embuncode.com/api/article?instansi_id=7&per_page=6').then(function (response) {
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
         
        <div className='card-artikel-all'>
          <div className="artikel-halaman">
            <h1>Halaman Artikel</h1>
          </div>
        <div className="container-fluid mt-5">
          <div className="container">
         
            <div className="row">
              
              
                
        {
          DataResponse && DataResponse.map((item) => {
            return (
              <div className='card-beranda' >
                             <Card className='pembungkus'>
                                 <Card.Img  className='img-article'variant="top" src={item.image_file_data} />
                                 <Card.Body>
                                 <Card.Title className='title'>{item.title}</Card.Title>
                                 <Card.Text>
                                 </Card.Text>
                                 <p className='read-more'>
                                   <a href={`/ShowArtikel/${item.id}`}>Read More</a>
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
      <Footer/>
      </>
  );
  
}

export default Berita;