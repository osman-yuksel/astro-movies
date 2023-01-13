import { createSignal } from "solid-js";

export default function Card(props: { title: string; backdrop: string }) {
  const [likes, setLikes] = createSignal(0);
  return (
    <div class="flex w-full flex-col items-center border-2 border-black p-2">
      <img
        class=""
        src={`https://image.tmdb.org/t/p/original/${props.backdrop}`}
      ></img>
      <h3 class="w-64 text-center">
        {props.title} Likes:{likes()}
      </h3>
      <button
        class="w-32 border-2 border-black text-center active:border-red-600"
        onclick={() => setLikes((l) => l + 1)}
      >
        Like
      </button>
    </div>
  );
}
