import { useEffect } from "react";
import Container from "../Container";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useDispatch } from "react-redux";
import { addMenuItems } from "../../features/Menu/MenuSlice";
import MenuItem from "./MenuItem";

const Menu = () => {
  // const [menuItems, setMenuItems] = useState<menuItem[]>([]);
  const menu = useSelector((state: RootState) => state.menu.menu);
  const dispatch = useDispatch();
  const getMenuItems = async () => {
    try {
      const response = await fetch("http://localhost:8080/menu");
      const data = await response.json();
      return data; // Return the data so that it can be used in the next .then() block
    } catch (error) {
      console.error("Error fetching menu items:", error);
      return []; // Return an empty array in case of an error
    }
  };

  useEffect(() => {
    getMenuItems().then((data) => {
      // setMenuItems(data); // Update state with fetched menu items
      dispatch(addMenuItems(data));
      console.log(data);
    });
  }, []);

  return (
    <div className="py-6">
      <Container>
        <div className="grid grid-cols-4 gap-2">
          {menu.map((item) => (
            <MenuItem item={item} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Menu;
