import { useState } from "react";
import "./App.css";
import { MotionConfig, animate, motion, transform } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

export const navLinks = [
  { to: "/febaradio", text: "FebaRadio" },
  { to: "/timeline", text: "Timeline" },
  { to: "/dd", text: "DragDrop" },
  { to: "/studio", text: "Studio" },
  { to: "/courses", text: "Courses" },
  { to: "/pokimon", text: "Pokimon" },
  { to: "/jokes", text: "Jokes" },
  { to: "/random", text: "Random" },
  { to: "/try", text: "Try" },
  { to: "/shop", text: "SHOP" },
  { to: "/state", text: "STATE" },
];

function App() {
  return (
    <>
      <main className="w-screen h-screen flex justify-center items-center bg-pink-400 text-white">
        <div className="flex flex-col text-6xl gap-y-4 text-center font-bold uppercase">
          {navLinks.map((link) => {
            return <NavLink to={link.to}>{link.text}</NavLink>;
          })}
        </div>
      </main>
    </>
  );
}

export default App;
