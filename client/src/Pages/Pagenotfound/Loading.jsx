import { Link } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";
import "./Pagenotfound.css";
const Loading = () => {
  return (
    <Layout title={"go back- page not found"}>
      <div className="pnf">
        <h1 className="pnf-title">😎😍😎</h1>
        <h2 className="pnf-heading">wait for a mintues its loding !!! 🚀</h2>
        <Link to="/login" className="pnf-btn">
          Go Back
        </Link>
      </div>
    </Layout>
  );
};

export default Loading;
