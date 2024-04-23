import axios from "axios";
import "./CategoryForm.css";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../../Context/Search";
const SearchInput = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/product/search/${values.keyword}`
      );
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form className="d-flex btn-size" role="search" onSubmit={handleSubmit}>
        <input
          className="form-control me-2 btn-inp"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={values.keyword}
          onChange={(e) => setValues({ ...values, keyword: e.target.value })}
        />
        <button className="btn btn-outline btn-d" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
export default SearchInput;