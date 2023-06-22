import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black py-6 lg:py-10">
      <div className="grid md:grid-cols-2">
        <div className="flex justify-center items-center">
          <div className="grid gap-2">
            <Link to={"/gsap"}>GSAP</Link>
            <Link to={"/gsap"}>GSAP</Link>
            <Link to={"/gsap"}>GSAP</Link>
            <Link to={"/gsap"}>GSAP</Link>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="grid gap-2">
            <Link to={"/gsap"}>GSAP</Link>
            <Link to={"/gsap"}>GSAP</Link>
            <Link to={"/gsap"}>GSAP</Link>
            <Link to={"/gsap"}>GSAP</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
