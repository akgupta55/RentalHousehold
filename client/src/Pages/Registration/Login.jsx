import { useState } from "react";
import "./Registration.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Layout from "../../Components/Layout/Layout";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const handleClick = () => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };

  return (
    <Layout className="main1">
      <form className="main" onSubmit={handleSubmit}>
        <div className="cn">
          <h1>LOGIN YOUR ACCOUNT</h1>

          <div className="box">
            <label htmlFor="fname">Enter Email:</label>
            <input
              className="name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="fname"
              name="fname"
              required
            />
          </div>
          <div className="box">
            <label htmlFor="password">Enter Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              name="password"
              required
            />
          </div>

          <button type="submit" className="button">
            Submit
          </button>
          <br />
          <br />
          <div className="notice">
            If you have not an account{" "}
            <span>
              <Link to="/register" onClick={handleClick}>
                Register here
              </Link>
            </span>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default Registration;
