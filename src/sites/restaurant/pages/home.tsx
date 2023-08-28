import Sidebar from "../components/sidebar";
import Menu from "../components/home/Menu";
import Header from "../components/common/Header";
import Modal from "../components/Modal";
import { useState } from "react";

const Home = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1">
        <Header />
        <Menu />
      </main>
      <Modal
        isOpen={show}
        actionLabel="something"
        onClose={() => setShow(!show)}
        onSubmit={() => {}}
        body={<p>something</p>}
      />
    </div>
  );
};

export default Home;
