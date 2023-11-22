import "./Home.css";
import banner from "../../Components/assets/banner.png";
import Services from "../../Components/Services/Services";
import Categories from "../../Components/Categories/Categories";

function Home() {
  return (
    <div className="home">
      <img src={banner} alt="" />
      <Categories />
      <h2>more trading products</h2>
      <Services />
    </div>
  );
}

export default Home;
