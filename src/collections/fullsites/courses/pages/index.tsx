import React, { useState } from "react";
import Card from "../components/Card";
import Nav from "../components/Nav";

export default function Home() {
  const [text, setText] = useState("");
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    localStorage.setItem("propety", text);
    setText("");
  }

  return (
    <>
      <Nav />
      <main>
        <h1 className="text-4xl underline text-gray-800">Hello!</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} value={text} />
          <button>submit</button>
        </form>
        <div>
          <Card id="name" />
        </div>
      </main>
    </>
  );
}
