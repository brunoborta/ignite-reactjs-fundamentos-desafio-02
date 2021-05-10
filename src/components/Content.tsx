import { useState, useEffect } from "react";
import { api } from "../services/api";

import { MovieCard } from "./MovieCard";
import { Header } from "./Header";

import { GenreResponseProps as SelectedGenre } from "../App";

interface ContentProps {
  selectedGenre: SelectedGenre;
}
interface Movie {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function Content(props: ContentProps) {
  const { selectedGenre } = props;
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    api
      .get<Movie[]>(`movies/?Genre_id=${selectedGenre.id}`)
      .then((response) => {
        setMovies(response.data);
      });
  }, [selectedGenre]);

  return (
    <div className="container">
      <Header selectedGenre={selectedGenre} />

      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
