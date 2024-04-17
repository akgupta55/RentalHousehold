import { useState, useEffect } from "react";
import axios from "axios";
import "./Try.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from "../NextArrow/NextArrow";
import PrevArrow from "../PrevArrow/PrevArrow";
import Item from "../Item/Item";

const Try = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/product/get-product"
      );
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllProducts();
  }, []);

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
          {products?.map((p) => (
            <Item
              key={p._id}
              id={p._id}
              image={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
              name={p.name}
              new_price={p.price}
              quantity={p.quantity}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Try;
