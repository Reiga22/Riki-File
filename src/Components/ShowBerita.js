import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import './style.css';
import Footer from './Footer';
import Header from './Header';



function ShowBerita() {
    const [DataShowBerita, setDataShowBerita] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        getShowBerita();
      }, [])

      function getShowBerita(){
        const axios = require('axios');
    axios.get("http://adminmesuji.embuncode.com/api/news/" + id).then(function (response) {
        setDataShowBerita(response.data.data);
        console.log(response.data)
    }).catch(function (error) {

    }).then(function () {

    });
    }
    
  console.log(DataShowBerita)
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
                      {DataShowBerita.title}
                  </h1>
                    </div>
                   
                      <img className='mt-5'
                          src={DataShowBerita.image_file_data}>
                      </img>
                    </div>
                    <div className='text-berita'>
                      <p className='font-isi mt-5 mb-5'>
                        {DataShowBerita.content}
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

export default ShowBerita;