import { Link } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <h1>MIZU</h1>
        <Link to={"/mizu/store"} className="text-4xl font-bold text-blue-400">
          STORE
        </Link>
      </main>
      <Footer />
    </>
  );
};

export default Home;
