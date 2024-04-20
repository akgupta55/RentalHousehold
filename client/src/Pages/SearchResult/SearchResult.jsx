import { useSearch } from "../../Context/Search";
import Layout from "../../Components/Layout/Layout";
import "./SearchResult.css";
import { useNavigate } from "react-router-dom";

const SearchResult = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="container SearchResult">
        <div className="text-center">
          <h1
            style={{
              fontSize: "28px",
              fontWeight: "600",
              textDecoration: "underline",
            }}
          >
            Search Resuts
          </h1>
          <h6>
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length}`}
          </h6>
          <div className="d-flex flex-wrap">
            {values?.results.map((p) => (
              <div key={p._id} className="card m-5" style={{ width: "15rem" }}>
                <img
                  src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name.substring(0, 30)}...</h5>
                  <p className="card-text">
                    {p.description.substring(0, 29)}...
                  </p>
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
      </div>
    </Layout>
  );
};

export default SearchResult;
