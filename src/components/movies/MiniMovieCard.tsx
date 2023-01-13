export default function Card(props: { title: string; backdrop: string }) {
  return (
    <div class="flex w-full flex-col items-center border-2 border-black p-2">
      <img
        class=""
        src={`https://image.tmdb.org/t/p/original/${props.backdrop}`}
      ></img>
      <h3 class="w-64 text-center">{props.title}</h3>
    </div>
  );
}
