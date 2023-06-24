import { useEffect, useState } from "react";

type user = {
  id: string;
  name: string;
  email: string;
  role: "memmer" | "admin";
};

const Home = () => {
  const [users, setUsers] = useState<Array<user>>([]);

  const getUsers = async () => {
    const response = await fetch(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    );
    const json = await response.json();
    setUsers(json);
  };

  // const selectUser = () => {};
  // const deleteUser = () => {};

  // const [editId, setEditId] = useState<string | null>();
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <main>
      <table>
        {users.map((user) => {
          return (
            <tr>
              <th>
                <input type="text" />
              </th>
              <th>{user.id}</th>
              <th>{user.name}</th>
              <th>{user.email}</th>
              <th>{user.role}</th>
              <th>
                <button>edit</button>
                <button>remove</button>
              </th>
            </tr>
          );
        })}
      </table>
    </main>
  );
};

export default Home;
