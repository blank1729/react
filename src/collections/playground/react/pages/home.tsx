import { useQuery } from "@tanstack/react-query";

interface user {
  id: number;
  title: string;
}

const Home = () => {
  const { data, isLoading, isError } = useQuery(["users"], () =>
    fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <div>is loading</div>;
  }
  if (isError) {
    return <div>EROOR LOADING!!!</div>;
  }

  return (
    <main>
      <h1>React Playground</h1>
      <div>
        {(data as Array<user>).map((user) => (
          <p key={user.id}>{user.title}</p>
        ))}
      </div>
    </main>
  );
};

export default Home;
