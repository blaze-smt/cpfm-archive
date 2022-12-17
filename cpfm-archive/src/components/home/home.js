import "./home.css";
import Product from "../product/product";

function Home() {
  return (
    <div className="container home">
      <div className="home-wrapper">
        <div className="home-content">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
