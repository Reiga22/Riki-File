import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from "react";
import "./style.css";
import { useParams } from 'react-router-dom';

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
                            <Card className='card-beranda'>
                                <Card.Img variant="top" src={item.image_file_data} />
                                <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                        
                                </Card.Text>
                                <p className='read-more'>
                                  <a href='/artikel/Cardartikel/$item.id'>Read More</a>
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
    
    </>
  );
};

export default Cardartikel;