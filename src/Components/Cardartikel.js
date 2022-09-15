import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from "react";
import './css/cardartikel.css';

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
    axios.get('http://adminmesuji.embuncode.com/api/article?instansi_id=5&per_page=3').then(function (response) {
      
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
                 <div className='berita'>
                     <h2>ARTIKEL TERBARU</h2>
                     </div>
                 
                 
         {
           DataResponse 
           && DataResponse.map((item) => {
             return (
               
                           <div className='card-beranda' >
                             <Card className='pembungkus'>
                                 <Card.Img  className='img-article'variant="top" src={item.image_file_data} />
                                 <Card.Body>
                                 <Card.Title className='title'>{item.title}</Card.Title>
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
 <div className='see-more'>
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