import { useQuery } from "@tanstack/react-query";

interface user {
  id: number;
  name: string;
}

const Albums = () => {
  const { data } = useQuery(["users"], async () => {
    const resposnse = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await resposnse.json();
    console.log(data);
    return data;
  });

  return (
    <div>
      <div>
        {(data as Array<user>).map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
    </div>
  );
};

export default Albums;
