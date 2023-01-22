import type { ResultNP } from "../../movie";
import { For } from "solid-js";
import Card from "./MiniMovieCard";

export default function NowPlaying(props: { results: ResultNP[] }) {
  return (
    <div class="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
      <For each={props.results}>
        {(movie, i) => (
          <Card title={movie.title} id={movie.id} poster={movie.poster_path} />
        )}
      </For>
    </div>
  );
}
