import "./Home.css";
import Services from "../../Components/Services/Services";
import Categories from "../../Components/Categories/Categories";
import Collections from "../../Components/Collections/Collections";
import Banner from "../../Components/Banner/Banner";

function Home() {
  return (
    <div className="home">
      <Banner />
      <Categories />
      <Collections />
      <Services />
    </div>
  );
}

export default Home;
