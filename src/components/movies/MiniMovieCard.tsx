export default function Card(props: {
  title: string;
  backdrop: string;
  overview: string;
}) {
  return (
    <div class="flex w-full items-center text-white">
      <div class="ml-4">
        <h3 class="w-64 text-xl mb-2">{props.title}</h3>
        <p>{props.overview}</p>
      </div>
      <div>
        <div class="absolute h-full w-full bg-gradient-to-r from-black via-black/0" />
        <img
          class=""
          src={`https://image.tmdb.org/t/p/original/${props.backdrop}`}
          alt="Movie backdrop image"
        />
      </div>
    </div>
  );
}
