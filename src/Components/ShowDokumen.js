import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import Footer from './Footer';
import Header from './Header';

function ShowDokumen() {
    const [DataShowDokumen, setDataShowDokumen] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        getShowDokumen();
        //return () => {
        //    setDataShowArtikel(null);
        //}
      }, [])

      function getShowDokumen(){
        const axios = require('axios');
    axios.get("http://adminmesuji.embuncode.com/api/dokumen/" + id).then(function (response) {
        setDataShowDokumen(response.data.data);
        console.log(response.data)
    }).catch(function (error) {

    }).then(function () {

    });
    }
    
  console.log(DataShowDokumen)
    return (
        <>
        <Header/>
        <div className="container-fluid mt-5">
            <div className="container"></div>
        <div className='show-dokumen' >
        <h1>{id}</h1>
        <p>{DataShowDokumen.title}</p>
        <img src={DataShowDokumen.image_file_data}></img>
        <p>{DataShowDokumen.content}</p>     
        </div>    
        </div>    

        <Footer/>
        </>
      );
    }

export default ShowDokumen;