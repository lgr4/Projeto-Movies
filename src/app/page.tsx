"use client"

import { Movie } from "./data";
import { api } from "./services/api";
import { useState } from "react";
import { formularioEnvio } from "./sendForms";

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);

  async function showMovies() {
    try {
      const moviesData = await api.get("/movies");
      console.log(moviesData.data);
      setMovies(moviesData.data);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex justify-between">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4">Adicionar Filme</button>
        <button onClick={showMovies} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4">Mostrar Filmes</button>
      </div>
      <h1>Filmes Disponíveis</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}> {movie.name}, dirigido por {movie.director}</li>
         ))}
      </ul>

      {formularioEnvio()}
    </main>
  )
}
