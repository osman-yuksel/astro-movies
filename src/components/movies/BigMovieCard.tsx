export default function Card(props: {
  title: string;
  backdrop: string;
  overview: string;
}) {
  return (
    <div class="relative flex h-[45rem] w-full items-center text-white">
      <div class="z-10 ml-14 flex h-full w-4/12 items-center">
        <div>
          <h3 class="mb-14 w-full text-5xl">{props.title}</h3>
          <p class="w-full">{props.overview}</p>
        </div>
      </div>
      <div class="absolute right-0 z-0 h-full w-9/12">
        <div class="absolute h-full w-full bg-gradient-to-r from-black via-black/0" />
        <picture class="flex h-full justify-end">
          <source
            srcset={`https://image.tmdb.org/t/p/w1280/${props.backdrop}`}
            media="(min-width: 780px)"
          />
          <source
            srcset={`https://image.tmdb.org/t/p/w780/${props.backdrop}`}
            media="(min-width: 300px)"
          />
          <img
            alt={props.title}
            style="min-height: 100%; min-width: 100%; object-fit: cover;"
            src={`https://image.tmdb.org/t/p/w300/${props.backdrop}`}
          />
        </picture>
      </div>
    </div>
  );
}
