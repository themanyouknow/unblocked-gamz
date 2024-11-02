import "./home.scss";
import { data } from "../../data";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      {
        data.map((item, index) => (
          <Link to={`/game/${item.name}`} key={index}>
            <h2>{item.name}</h2>
            <img src={item.image} alt={item.name} />
          </Link>
        ))
      }
    </div>
  );
};

export default Home;
