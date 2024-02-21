import "./Collections.css";
import all_product from "../assets/all_product";
import Item from "../Item/Item";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from "../NextArrow/NextArrow";
import PrevArrow from "../PrevArrow/PrevArrow";

function Collections() {
  const settings = {
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="collections">
      <h1>Our Tranding Collections</h1>
      <div className="card">
        <Slider {...settings}>
          {all_product.map((data, index) => {
            return (
              <Item
                key={index}
                id={data.id}
                image={data.image}
                name={data.name}
                new_price={data.new_price}
                old_price={data.old_price}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Collections;
