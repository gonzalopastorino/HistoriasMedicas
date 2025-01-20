import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Carrusel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../../public/imagenes/img1.jpg"
          alt="Imagen 1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../../public/imagenes/img2.jpg"
          alt="Imagen 2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../../public/imagenes/img3.jpg"
          alt="Imagen 3"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Carrusel;
