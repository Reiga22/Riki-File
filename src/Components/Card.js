import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from "react";
import "./style.css";

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
    axios.get('http://adminmesuji.embuncode.com/api/news?instansi_id=7&per_page=4').then(function (response) {
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
                <div className='sub col-lg-6  col-md-6 col-sm-6'>
                    <h2>BERITA</h2>
                </div>
                <div className='sub col-lg-6  col-md-6 col-sm-6 text-end'></div>
             
                
                
        {
          DataResponse 
          && DataResponse.map((item, index) => {
            return (
              
                          <Card className='card-beranda' >
                            <Card className='mt-4'>
                                <Card.Img variant="top" src={item.image_file_data} />
                                <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
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
      <div>
<div className='sub col-lg-12  col-md-12 col-sm-12 text-center'>
                  <a href="/Berita">
                    <h5>
                      See More Berita
                    </h5>
                  </a>
                </div>  
                </div>
                </>
  );
};

export default Kart;