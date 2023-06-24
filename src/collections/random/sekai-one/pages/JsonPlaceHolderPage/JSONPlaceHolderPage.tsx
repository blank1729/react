import axios from "axios";
import { useEffect, useState } from "react";
import NavbarComponent from "../../common/components/NavbarComponent";

function JSONPlaceHolderPage() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((data) => {
      setUsers(data.data);
    });
  }, []);
  return (
    <div>
      <NavbarComponent />
      {users.map((user: { id: number; title: string; body: string }) => {
        return (
          <>
            <p>
              {" "}
              <b>{user.id}</b> : {user.title} , {user.body}
            </p>{" "}
            <br />
          </>
        );
      })}
    </div>
  );
}

export default JSONPlaceHolderPage;
