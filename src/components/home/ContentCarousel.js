import React from "react";
import Carousel from "react-bootstrap/Carousel";

function ContentCarousel() {
  return (
    <Carousel className="carousel carousel-slide" interval={null}>
      <Carousel.Item className="d-block w-100 carousel-item carousel__item" style={{ backgroundImage: "url(images/carousel/carousel-1.jpg)" }}></Carousel.Item>
      <Carousel.Item>
        <Carousel.Item className="d-block w-100 carousel-item carousel__item" style={{ backgroundImage: "url(images/carousel/carousel-2.jpg)" }}></Carousel.Item>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Item className="d-block w-100 carousel-item carousel__item" style={{ backgroundImage: "url(images/carousel/carousel-3.jpg)" }}></Carousel.Item>
      </Carousel.Item>
    </Carousel>
  );
}

export default ContentCarousel;
