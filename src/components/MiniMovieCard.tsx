import { createSignal } from "solid-js";

export default function Card(props: { title: string }) {
  const [likes, setLikes] = createSignal(0);
  return (
    <div class="flex w-full flex-col items-center border-2 border-black p-2">
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
