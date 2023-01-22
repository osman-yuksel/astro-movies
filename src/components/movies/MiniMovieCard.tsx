export default function Card(props: {
  id: number;
  title: string;
  poster: string;
}) {
  return (
    <div class="relative m-2 flex h-min max-w-max justify-center overflow-hidden rounded-md">
      <picture>
        <source
          srcset={`https://image.tmdb.org/t/p/w342${props.poster}`}
          media="(min-width: 768px)"
        />
        <img
          alt={props.title}
          loading="eager"
          src={`https://image.tmdb.org/t/p/w185${props.poster}`}
          style="min-height: 100%; min-width: 100%; object-fit: cover;"
        />
      </picture>
    </div>
  );
}
