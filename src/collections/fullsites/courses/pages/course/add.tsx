import React, { useState } from "react";
import Navbar from "../../components/Navbar";

function Add() {
  // const [courses, setCourses] = useState([])
  const [name, setName] = useState("");
  function handleName(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
  }

  return (
    <>
      <Navbar />
      <main className="mx-[20%]">
        <form
          className="flex-col flex w-[300px] border shadow-md p-5 space-y-3"
          onSubmit={handleSubmit}
        >
          <label htmlFor="name">Name</label>
          <input
            className="shadow-md border h-8 rounded-md px-2 text-lg"
            type="text"
            id="name"
            value={name}
            onChange={handleName}
          />

          <label htmlFor="lectures">Lectures Link</label>
          <input
            className="shadow-md border h-8 rounded-md px-2 text-lg"
            type="text"
            id="lectures"
          />

          <label htmlFor="by">By</label>
          <input
            className="shadow-md border h-8 rounded-md px-2 text-lg"
            type="text"
            id="by"
          />

          <label htmlFor="tags">Tags</label>
          <input
            className="shadow-md border h-8 rounded-md px-2 text-lg"
            type="text"
            id="tags"
          />

          <label htmlFor="img">Image</label>
          <input type="file" name="image" id="img" />

          <button
            type="submit"
            className="border rounded-sm bg-blue-400 inline-block mx-auto px-2 py-1 hover:scale-110 text-white font-bold"
          >
            Submit
          </button>
        </form>
        <h1>{name}</h1>
      </main>
    </>
  );
}

export default Add;
