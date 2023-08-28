import { useDispatch, useSelector } from "react-redux";
import { menuItem } from "../../types/types";
import { addItem, selectItemById } from "../../features/Cart/CartSlice";

const MenuItem = ({ item }: { item: menuItem }) => {
  const dispatch = useDispatch();
  const itemCount = useSelector(selectItemById(item.id));
  return (
    <div
      className="rounded-md overflow-hidden border border-black/20 shadow-sm h-[300px]"
      key={item.id}
    >
      <div className="py-2  h-[200px] relative overflow-hidden flex justify-center items-center">
        <img
          src={item.image_url}
          alt=""
          className="object-cover absolute w-full h-auto origin-center"
        />
      </div>

      <div className="p-2">
        <div className="flex justify-between">
          <h2 className="uppercase font-semibold text-xl">{item.name}</h2>
          <p className="text-xl">Rs.{item.price}</p>
        </div>
        <div className="flex">
          <p className="italic">{item.category}</p>
          <p className="text-xl">{`Count ${itemCount}`}</p>
          <button onClick={() => dispatch(addItem(item))}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
