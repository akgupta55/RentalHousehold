import { useState } from "react";
import "./Registration.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Layout from "../../Components/Layout/Layout";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/register",
        {
          name,
          email,
          password,
          phone,
          address,
        }
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout className="main1">
      <form className="main" onSubmit={handleSubmit}>
        <div className="cn">
          <h1>CREATE AN ACCOUNT</h1>
          <div className="box">
            <label htmlFor="fname">Enter Name:</label>
            <input
              className="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="fname"
              name="fname"
              required
            />
          </div>
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
          <div className="box">
            <label htmlFor="mobil">Enter Phone no.:</label>
            <input
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              id="fname"
              name="fname"
              required
            />
          </div>
          <div className="box">
            <label htmlFor="fname">Enter Address:</label>
            <input
              className="name"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              id="fname"
              name="fname"
              required
            />
          </div>

          <button type="submit" className="button">
            Submit
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default Registration;
