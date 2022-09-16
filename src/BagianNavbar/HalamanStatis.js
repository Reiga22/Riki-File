import React from "react";
import Header from "../Components/Header";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Footer from "../Components/Footer";

const HalamanStatis = () => {
  const [GetData, SetData] = useState(null);
  useEffect(() => {
    getStatic();
    return () => {
      SetData(null);
    };
  }, []);
  function getStatic() {
    const axios = require("axios");
    axios
      .get('http://adminmesuji.embuncode.com/api/static-page?instansi_id=43')
      .then(function (response) {
        SetData(response.data.data.items);
      })
      .catch(function (error) {})
      .then(function () {});
  }
  console.log(GetData);
  return (
    <>
    <Header/>
      {GetData != null ? (
        <Container>
          <div style={{paddingBottom:"300px"}}>
            {GetData &&
              GetData.map((item) => {
                return (
                  <>
                    <h2
                      style={{
                        textAlign: "center",
                        paddingTop: "40px",
                        width: "100%",
                        borderBottom: "solid 5px",
                        marginBottom: "20px",
                      }}
                    >
                      Halaman Statis
                    </h2>
                    <h3 style={{textAlign:"center"}}>{item.title}</h3>
                    <p style={{textAlign:"justify"}}>{item.content}</p>
                  </>
                );
              })}
          </div>
        </Container>
      ) : (
        ""
      )}
      <Footer/>
    </>
  );
};

export default HalamanStatis;