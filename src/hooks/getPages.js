import axios from "axios";

const fetchData = async (page) => {
  try {
    const response = await axios.get(
      `https://swapi.dev/api/people/?page=${page}`
    );
    const { results } = response.data;
    return results;
  } catch (e) {
    console.log(e);
  }
};

export default fetchData;
