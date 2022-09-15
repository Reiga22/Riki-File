import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import Footer from '../Components/Footer';
import Header from '../Components/Header';


function ShowVidio() {
  const [DataShowVidio, setDataShowVidio] = useState(null);
    const { slug } = useParams();


    useEffect(() => {
        getShowVidio();
    }, [])

    function getShowVidio() {
        const axios = require('axios');
        axios.get("http://adminmesuji.embuncode.com/api/video-gallery/" + slug).then(function (response) {
            setDataShowVidio(response.data.data);
            console.log(response.data)
        }).catch(function (error) {

        }).then(function () {

        });
    }

    console.log(DataShowVidio)
    return (
        <>
        <Header/>
        { console.log('DataShowVidio', DataShowVidio) }
        {
            (DataShowVidio != null) ? 
            <>
            <div>
            <img
                src={DataShowVidio[0].image_file_data}>
            </img>
        </div>
        <div className='text-center'>
        <iframe
                    width="860"
                    height="615"
                    src={DataShowVidio[0].video_url}
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
            </iframe>
        </div></>  : ''
        }
            <Footer/>
        </>
    );
}
export default ShowVidio;