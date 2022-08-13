import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import './style.css';
import Footer from './Footer';
import Header from './Header';

function ShowArtikel() {
    const [DataShowArtikel, setDataShowArtikel] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        getShowArtikel();
        //return () => {
        //    setDataShowArtikel(null);
        //}
      }, [])

      function getShowArtikel(){
        const axios = require('axios');
    axios.get("http://adminmesuji.embuncode.com/api/article/" + id).then(function (response) {
        setDataShowArtikel(response.data.data);
        console.log(response.data)
    }).catch(function (error) {

    }).then(function () {

    });
    }
    
  console.log(DataShowArtikel)
    return (
        <>
        <Header/>
        <div className="container-fluid py-5">
          <div className="container">
            <div className="row">
            <div className='text-center'>
              <div className="col-12">
                <div className='font-judul'>
                  <h1>
                      {DataShowArtikel.title}
                  </h1>
                    </div>
                      <img className='mt-5'
                          src={DataShowArtikel.image_file_data}>
                      </img>
                    </div>
                    <div className='text-artikel'>
                      <p className='font-isi mt-5 mb-5'>
                        {DataShowArtikel.content}
                      </p>
                      </div>
                  </div>
                </div>
                <div>
               
            </div>
          </div>
        </div>  
        <Footer/>
        </>
      );
    }

export default ShowArtikel;