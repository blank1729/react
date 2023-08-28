import { Table, Th, Td, Tr } from "@chakra-ui/react";

const users = [
  {
    id: 1,
    user: "peter",
    password: "1231234132qwerqe",
    age: 24,
  },
  {
    id: 2,
    user: "robert",
    password: "1231234132qwerqe",
    age: 45,
  },
  {
    id: 3,
    user: "black widow",
    password: "1231234asdfa132qwerqe",
    age: 30,
  },
  {
    id: 4,
    user: "huld",
    password: "hulk1231234132qwerqe",
    age: 45,
  },
];

const AdminUI = () => {
  return (
    <main>
      <div className="p-10">
        <Table className="table text-xl">
          <Tr>
            <Th>Username</Th>
            <Th>age</Th>
            <Th>Password</Th>
          </Tr>
          {users.map((user) => (
            <Tr key={user.id}>
              <Td>{user.user}</Td>
              <Td>{user.password}</Td>
              <Td>{user.age}</Td>
            </Tr>
          ))}
        </Table>
      </div>
      <div className="flex justify-center">
        <div className="join">
          <button className="join-item btn">1</button>
          <button className="join-item btn">2</button>
          <button className="join-item btn btn-disabled">...</button>
          <button className="join-item btn">99</button>
          <button className="join-item btn">100</button>
        </div>
      </div>
    </main>
  );
};

export default AdminUI;
