import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import './css/foto.css';


function ShowFoto() {
  const [DataShowFoto, setDataShowFoto] = useState(null);
    const { slug } = useParams();


    useEffect(() => {
        getShowFoto();
    }, [])

    function getShowFoto() {
        const axios = require('axios');
        axios.get("http://adminmesuji.embuncode.com/api/image-gallery/" + slug).then(function (response) {
            setDataShowFoto(response.data.data);
            console.log(response.data)
        }).catch(function (error) {

        }).then(function () {

        });
    }

    console.log(DataShowFoto)
    return (
        <>
        <Header/>
        { console.log('DataShowFoto', DataShowFoto) }
        {
            (DataShowFoto != null) ? 
            <>
            <div className='foto-img'>
            <img
                src={DataShowFoto[0].image_file_data}>
            </img>
            <p className='mt-5'>test
                {DataShowFoto[0].description_gallery}
            </p>
        </div></>  : ''
        }
            <Footer/>
        </>
    );
}
export default ShowFoto;