import type { ResultNP } from "../../movie";
import { For } from "solid-js";
import Card from "./MiniMovieCard";

export default function NowPlaying(props: { results: ResultNP[] }) {
  return (
    <div class="grid grid-cols-4">
      <For each={props.results}>
        {(movie, i) => (
          <Card
            title={movie.title}
            id={movie.id}
            backdrop={movie.backdrop_path}
          />
        )}
      </For>
    </div>
  );
}
