import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
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
        <div className="container-fluid mt-5">
            <div className="container">
              <div className='text-center'>
        <div className='show-artikel' >
        <h1>{id}</h1>
        <p>{DataShowArtikel.title}</p>
        <img src={DataShowArtikel.image_file_data}></img>
        <p>{DataShowArtikel.content}</p>     
        </div>    
        </div>    
        </div>
        </div>
        <Footer/>
        </>
      );
    }

export default ShowArtikel;