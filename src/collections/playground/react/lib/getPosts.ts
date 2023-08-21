export const getPokimons = async (limit: number, offset: number) => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  return res.json();
};
