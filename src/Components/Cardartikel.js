import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
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
    axios.get('http://adminmesuji.embuncode.com/api/news?instansi_id=5&per_page=4').then(function (response) {
    setDataResponse(response.data.data.data);
    }).catch(function (error) {

    }).then(function () {

    });
  }

  return (
    <>
   {
        (DataResponse != null) ?
        <div>
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
          && DataResponse.map((item, index) => {
            return (
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <Card className='card-beranda'>
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
                        </div>
            )
          })
        }
                </div>
            </div>
            </div>
        </div>: ''
      }
    
    </>
  );
};

export default Cardartikel;