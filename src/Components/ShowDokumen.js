import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import "./style.css";
import Footer from './Footer';
import Header from './Header';


function ShowDokumen() {
  const [DataShowDokumen, setDataShowDokumen] = useState(null);
    const { slug } = useParams();


    useEffect(() => {
        getShowDokumen();
    }, [])

    function getShowDokumen() {
        const axios = require('axios');
        axios.get("http://adminmesuji.embuncode.com/api/dokumen/" + slug).then(function (response) {
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
            {
                (DataShowDokumen != null) ?
                <div className="container py-5 mt-5">
                    <div className='container'>
                    <div className='row'>
                        <article>
                            {DataShowDokumen[0].description_dokumen}
                        </article>
                    </div>
                    <div className='dokumen-card'>
                        <iframe
                            src={"data:application/pdf;base64," + DataShowDokumen[0].dokumen_file_data}
                            frameBorder="0"
                            title={DataShowDokumen[0].dokumen_file_data}
                            scrolling="auto"
                            height="100%"
                            width="100%"
                        ></iframe>
                    </div>
                    </div>
                </div> : ''
            }
            <Footer/>
        </>
    );
}
export default ShowDokumen;