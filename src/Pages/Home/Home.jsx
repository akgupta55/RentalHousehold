import "./Home.css";
import banner from "../../Components/assets/banner.png";
import Services from "../../Components/Services/Services";
import Categories from "../../Components/Categories/Categories";
import Collections from "../../Components/Collections/Collections";

function Home() {
  return (
    <div className="home">
      <img src={banner} alt="" />
      <Categories />
      <Collections />
      <Services />
    </div>
  );
}

export default Home;
