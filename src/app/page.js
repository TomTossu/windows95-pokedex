"use client";
import { useEffect, useState } from "react";
import Pokemon from "./pokemon/Pokemon";
import { getAllPokemons } from "./pokemon/api";
import { Hourglass } from "react95";
import { useGeneration } from "./hooks/hooks";

export default function Home() {
  const [status, setStatus] = useState("pending");
  const [pokemonList, setPokemonList] = useState([]);
  const [disableCursor, setDisableCursor] = useState(false);
  const [generation] = useGeneration();

  useEffect(() => {
    const fetchPokemonList = async () => {
      const result = await getAllPokemons(generation);
      setPokemonList(result);
      setStatus("resolved");
    };

    fetchPokemonList();
  }, [generation]);

  const handleSelect = (id) => {
    const data = pokemonList.map((i) => {
      return {
        ...i,
        selected: false,
      };
    });
    const idx = data.findIndex((i) => i.id === +id);
    data[idx].selected = true;
    setPokemonList(data);
  };

  if (!pokemonList || status === "pending") {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "90vh",
        }}>
        <Hourglass size={40} />
      </div>
    );
  }
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(6, 100px)",
        gap: "3rem 8rem",
      }}>
      {pokemonList.map((pokemon) => (
        <Pokemon
          key={pokemon.id}
          pokemon={pokemon}
          handleSelect={handleSelect}
          disableCursor={disableCursor}
          setDisableCursor={setDisableCursor}
        />
      ))}
    </div>
  );
}
