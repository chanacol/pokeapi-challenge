import { useState, useEffect } from "react";
import Card from "./components/Card";
import pokeClient from "./service";
import "./styles.css";

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    const getPokemons = async () => {
      const temp = await pokeClient.listPokemons(
        itemsPerPage,
        (page - 1) * itemsPerPage
      );
      console.log("pokemons", temp);
      setPokemons(temp.results);
    };
    getPokemons();
  }, []);

  return (
    <div className="App">
      <h1>Pokemon</h1>
      <button>See Pokemons Type Fire</button>

      <section>
        {pokemons.map((item, index) => (
          <div key={index}>
            <Card pokemon={item.name} />
            <Card pokemon={item.index} />
          </div>
        ))}
      </section>
    </div>
  );
}
