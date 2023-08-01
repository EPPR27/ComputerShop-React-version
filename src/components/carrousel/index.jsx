import Carousel from "react-bootstrap/Carousel";

function CarouselFade() {
  return (
    <Carousel className="container my-4">
      <Carousel.Item interval={1000}>
        <img
          style={{ verticarAlign: "top", width: "1000px", height: "250px" }}
          src={require("../imgs/carrusel/carousel-4.png")}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          style={{ verticarAlign: "top", width: "1000px", height: "250px" }}
          src={require("../imgs/carrusel/carousel-5.jpg")}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          style={{ verticarAlign: "top", width: "1000px", height: "250px" }}
          src={require("../imgs/carrusel/carousel-6.png")}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;
