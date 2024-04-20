import Layout from "../../Components/Layout/Layout";
import "./ProductDetails.css";
import { useState, useEffect } from "react";

import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  //initalp details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };
  //get similar product
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="row container productDetails">
        <div className="col-md-6">
          <img
            src={`http://localhost:8080/api/v1/product/product-photo/${product._id}`}
            className="card-img-top"
            alt={product.name}
            height="400"
            width={"350px"}
          />
        </div>
        <div className="col-md-6 ">
          <h1
            className="text-center"
            style={{
              fontSize: "28px",
              fontWeight: "600",
              textDecoration: "underline",
            }}
          >
            Product Details
          </h1>
          <h5>
            <span style={{ fontSize: "28px", fontWeight: "600" }}> Name :</span>
            {product.name}
          </h5>
          <h5>
            <span style={{ fontSize: "28px", fontWeight: "600" }}>
              Description :
            </span>
            {product.description}
          </h5>
          <h5>
            <span style={{ fontSize: "28px", fontWeight: "600" }}>Price :</span>
            {product.price}
          </h5>
          <h5>
            <span style={{ fontSize: "28px", fontWeight: "600" }}>
              Category :
            </span>
            {product?.category?.name}
          </h5>
          <button className="btn btn-secondary ms-1">ADD TO CART</button>
        </div>
      </div>
      <hr />
      <div className="row container prdown">
        <h2>Similar Products</h2>
        {relatedProducts.length < 1 && (
          <p className="text-center">No Similar Products found</p>
        )}
        <div className="d-flex flex-wrap">
          {relatedProducts?.map((p) => (
            <div key={p._id} className="card m-2" style={{ width: "18rem" }}>
              <img
                src={`http://localhost:8080/api/v1/product/product-photo/${p?._id}`}
                className="card-img-top"
                alt={p.name}
              />
              <div className="card-body">
                <h5 className="card-title">{p.name.substring(0, 40)}...</h5>
                <p className="card-text">{p.description.substring(0, 29)}...</p>
                <p className="card-text"> $ {p.price}</p>
                <div className="btn-f">
                  <button
                    className="btn btn-primary "
                    style={{
                      width: "8rem",
                      height: "4rem",
                    }}
                    onClick={() => {
                      navigate(`/product/${p.slug}`);
                      window.scrollTo(0, 0);
                    }}
                  >
                    More Details
                  </button>
                  <button
                    className="btn btn-secondary "
                    style={{
                      width: "8rem",
                      height: "4rem",
                      marginLeft: "2px",
                    }}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
