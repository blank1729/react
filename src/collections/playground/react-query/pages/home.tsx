import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const todoQuery = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos`
      );
      const json = await response.json();
      return json;
    },
  });

  if (todoQuery.isLoading) {
    return (
      <main>
        <h1>Loading......</h1>
      </main>
    );
  }

  if (todoQuery.isError) {
    return (
      <main>
        <h1>There is an erros</h1>
      </main>
    );
  }

  return (
    <main>
      {/* <pre>{JSON.stringify(todoQuery.data, null, 2)}</pre> */}
      <section>
        {todoQuery.data.map((todo: { title: string; completed: boolean }) => {
          return (
            <div>
              <p>
                {todo.title}
                {todo.completed && "✅"}
              </p>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Home;
