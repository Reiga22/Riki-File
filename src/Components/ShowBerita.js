import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import Footer from './Footer';
import Header from './Header';

function ShowBerita() {
    const [DataShowBerita, setDataShowBerita] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        getShowBerita();
        //return () => {
        //    setDataShowArtikel(null);
        //}
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
        <div className="container-fluid mt-5">
            <div className="container"></div>
        <div className='show-artikel' >
        <h1>{id}</h1>
        <p>{DataShowBerita.title}</p>
        <img src={DataShowBerita.image_file_data}></img>
        <p>{DataShowBerita.content}</p>     
        </div>    
        </div>    

        <Footer/>
        </>
      );
    }

export default ShowBerita;