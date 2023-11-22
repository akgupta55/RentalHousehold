import "./Home.css";
import banner from "../../Components/assets/banner.png";
import Services from "../../Components/Services/Services";

function Home() {
  return (
    <div className="home">
      <img src={banner} alt="" />
      <Services />
    </div>
  );
}

export default Home;
