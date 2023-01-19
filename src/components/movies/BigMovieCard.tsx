export default function Card(props: {
  id: number;
  title: string;
  backdrop: string;
  overview: string;
  rd: string;
  rating: number;
}) {
  return (
    <div class="relative flex h-[45rem] w-full items-center text-white">
      <div class="z-10 ml-14 flex h-full w-4/12 items-center">
        <div>
          <h1 class="mb-4 w-full text-5xl">{props.title}</h1>
          <div class="mb-4 flex h-12 flex-row items-center text-xl">
            <div class="relative flex h-12 w-12 items-center justify-center">
              <h3 class="absolute">{props.rating}</h3>
              <svg class="transition-all" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 
                    a 15.9155 15.9155 0 0 1 0 31.831 
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke={
                    props.rating > 7
                      ? "#39fc03"
                      : props.rating > 4
                      ? "#9a3412"
                      : "#fc0303"
                  }
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-dasharray={`${props.rating * 10}, 100`}
                />
              </svg>
            </div>
            <h3 class="ml-4">{props.rd.slice(0, 4)}</h3>
          </div>
          <p class="mb-4 w-full">{props.overview}</p>
          <div class="group flex w-24 justify-center rounded-md border border-white bg-wtbgradiant bg-[length:200%_100%] bg-right transition-all hover:bg-left hover:text-black">
            <a class="m-1 block p-1 transition-all" href={`/movie/${props.id}`}>
              See more
            </a>
          </div>
        </div>
      </div>
      <div class="absolute right-0 z-0 h-full w-9/12">
        <div class="absolute h-full w-full bg-gradient-to-r from-black via-black/40 to-black/0" />
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
