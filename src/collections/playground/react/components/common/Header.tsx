import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <p>header</p>
      <nav>
        <Link to={"/react"}>Home</Link>
        <Link to={"/react/suspense"}>Suspense</Link>
      </nav>
    </header>
  );
};

export default Header;
