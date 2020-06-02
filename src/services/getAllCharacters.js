const API_URL = "https://rickandmortyapi.com/api";

const getAllCharacters = async () => {
  const res = await fetch(`${API_URL}/character/`);
  const data = await res.json();
  return data.results;
};

export default getAllCharacters;
