import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Carousel } from "react-bootstrap";
import { useState, useEffect } from "react";

function CarouselBerita() {
    const [DataResponse, setDataResponse] = useState(null);
    useEffect(() => {
      getCarouselBerita();
      return () => {
        setDataResponse(null);
      };
    }, []);
  
    function getCarouselBerita() {
      const axios = require("axios");
      axios
        .get("http://adminmesuji.embuncode.com/api/news?instansi_id=5&per_page=4")
        .then(function(response) {
          setDataResponse(response.data.data.data);
        })
        .catch(function(error) {})
        .then(function() {});
    }
  
    return (
      <>
        {DataResponse != null ? (
          <Carousel variant="dark">
            {DataResponse &&
              DataResponse.map((item, index) => {
                return (
                  <Carousel.Item>
                    <a href={`/ShowBerita/${item.id}`} >
                    <img
                      className="d-block w-100"
                      src={item.image_file_data}
                      style={{ width: 500, height: 500 }}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h5 className="text-white">{item.title}</h5>
                    </Carousel.Caption>
                    </a>
                  </Carousel.Item>
                  
                );
              })}
          </Carousel>
        ) : (
          ""
        )}
      </>
    );
  };

export default CarouselBerita;