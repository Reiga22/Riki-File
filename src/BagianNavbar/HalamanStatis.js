import React from "react";
import { Container } from "react-bootstrap";
import './css/halaman-statis.css';
import { useState, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";


const HalamanStatis = () => {
  const [DataResponse, setDataResponse] = useState(null);
  useEffect(() => {
    getStatis();
    return () => {
      setDataResponse(null);
    };
  }, []);

  function getStatis() {
    const axios = require("axios");
    axios
      .get(process.env.REACT_APP_STATIS)
      .then(function(response) {
        setDataResponse(response.data.data.data);
      })
      .catch(function(error) {})
      .then(function() {});
  }

  return (
    <>
    <Header/>
      <div className="body">


        <div className="judul">Halaman Statis</div>
        <Container></Container>
        <div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default HalamanStatis;