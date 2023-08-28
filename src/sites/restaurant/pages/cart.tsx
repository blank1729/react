import { RootState } from "../app/store";
import { useSelector } from "react-redux";
import MenuItem from "../components/home/MenuItem";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { selectTotalPrice } from "../features/Cart/CartSlice";

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const totalCost = useSelector(selectTotalPrice);
  return (
    <Container>
      <div>
        <Link to={"/foodplace"} className="bg-blue-400 rounded-md">
          Go back to Home
        </Link>
      </div>
      <div className="mt-10 grid grid-cols-3 gap-2">
        {cart.map((item) => (
          <div key={item.id}>
            <MenuItem item={item} />
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-2xl font-semibold">
          Total Price : {`${totalCost}`}
        </h2>
      </div>
    </Container>
  );
};

export default Cart;
