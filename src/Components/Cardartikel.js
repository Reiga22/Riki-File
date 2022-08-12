import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from "react";
import "./style.css";

function Cardartikel() {
  const [DataResponse, setDataResponse] = useState(null);

  useEffect(() => {
    Cardartikel();
    return () => {
      setDataResponse(null);
    };
  }, []);


  function Cardartikel() {
    const axios = require('axios');
    axios.get('http://adminmesuji.embuncode.com/api/article?instansi_id=5&per_page=4').then(function (response) {
      
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
        <div className='card-artikel-all'>
          <div className="container-fluid mt-5">
            <div className="container">
           
              <div className="row">
                <div className='sub col-lg-6  col-md-6 col-sm-6'>
                    <h2>ARTIKEL</h2>
                </div>
                <div className='sub col-lg-6  col-md-6 col-sm-6 text-end'>
                
                </div>
                
        {
          DataResponse 
          && DataResponse.map((item) => {
            return (
                            <Card className='card-beranda'>
                                <Card.Img variant="top" src={item.image_file_data} />
                                <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                        
                                </Card.Text>
                                <p className='read-more'>
                                  <a href={`/ShowArtikel/${item.id}`}>Read More</a>
                                </p>                                
                                </Card.Body>
                            </Card>
            )
          })
        }
                </div>
            </div>
            </div>
        </div>: ''
      }
    <div className='sub col-lg-12  col-md-12 col-sm-12 text-center'>
                  <a href="/Artikel">
                    <h5>
                      See More Artikel
                    </h5>
                  </a>
                </div>    
    </>
  );
};

export default Cardartikel;