import { item } from "../types/item";
import MenuItem from "../components/MenuItem";
import Search from "../components/Search";
import "./App.css";
import HomeLink from "../../../common/components/common/homelink";

const items: Array<item> = [
  {
    id: "carrot",
    name: "a crazy carrot",
    price: 15,
    img: "carrot.svg",
  },
  {
    id: "pizza",
    name: "a papparoni pizza",
    price: 300,
    img: "pizza.svg",
  },
  {
    id: "corn",
    name: "a corny corn",
    price: 40,
    img: "corn.svg",
  },
  {
    id: "meatball",
    name: "a spicy meatball",
    price: 15,
    img: "meatball.svg",
  },
];

function Home() {
  return (
    <>
      <main className="left">
        {/* seconday nav */}
        <div className="px-16 flex items-center">
          <div>
            <h1 className="text-2xl font-bold">SEKAI</h1>
            <p className=" flex gap-2 group">
              <p className="group-hover:underline">pragathi nagar, Bangalore</p>{" "}
              <img className="w-4" src="/arrow-down.svg" alt="" />{" "}
            </p>
          </div>
          <Search />
        </div>
        <section className="menu mt-8">
          <div className="grid gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            {items.map((item) => (
              <MenuItem
                name={item.name}
                img={`/imgs/foodsite/${item.img}`}
                price={item.price}
                key={item.id}
                id={item.id}
              />
            ))}
          </div>
        </section>
      </main>
      <HomeLink />
    </>
  );
}

export default Home;
