export default function Card(props: {
  id: number;
  title: string;
  backdrop: string;
}) {
  return (
    <div class="relative flex h-32 justify-center m-2 overflow-hidden">
      <picture>
        <source
          srcset={`https://image.tmdb.org/t/p/w342/${props.backdrop}`}
          media="(min-width: 840px)"
        />
        <source
          srcset={`https://image.tmdb.org/t/p/w185/${props.backdrop}`}
          media="(min-width: 640px)"
        />
        <source
          srcset={`https://image.tmdb.org/t/p/w342/${props.backdrop}`}
          media="(min-width: 605px)"
        />
        <source
          srcset={`https://image.tmdb.org/t/p/w185/${props.backdrop}`}
          media="(min-width: 510px)"
        />
        <source
          srcset={`https://image.tmdb.org/t/p/w154/${props.backdrop}`}
          media="(min-width: 300px)"
        />
        <img
          alt={props.title}
          loading="eager"
          src={`htps://image.tmdb.org/t/p/w92/${props.backdrop}`}
          width="342"
          height="556"
        />
      </picture>
      <h3 class="absolute z-10 text-white">{props.title}</h3>
    </div>
  );
}
