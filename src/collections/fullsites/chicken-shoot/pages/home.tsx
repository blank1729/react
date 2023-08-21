import { useEffect } from "react";
import bullet from "../assets/bullet.jpg";
import chicken from "../assets/chicken.jpg";

const Home = () => {
  
  useEffect(() => {}, []);

  return (
    <main className="w-screen h-screen">
      {/* bullets */}
      <div className="fixed bottom-0 right-0 flex gap-x-4 m-4">
        <img src={bullet} className="w-8 h-auto" alt="" />
        <img src={bullet} className="w-8 h-auto" alt="" />
        <img src={bullet} className="w-8 h-auto" alt="" />
      </div>
    </main>
  );
};

export default Home;
