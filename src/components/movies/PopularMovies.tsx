import { For } from "solid-js";
import Card from "./MiniMovieCard";
import type { ResultPM } from "./types";

export default function PopularMovies(props: { results: ResultPM[] }) {
  return (
    <ul>
      <For each={props.results}>
        {(movie, i) => (
          <li>
            <Card title={movie.title} />
          </li>
        )}
      </For>
    </ul>
  );
}
