import { For, createSignal } from "solid-js";
import Card from "./BigMovieCard";
import type { ResultPM } from "../../movie";

import { Swiper, SwiperSlide } from "swiper/solid";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function PopularMovies(props: { results: ResultPM[] }) {
  let swiperRef: any;

  const delay = 10000;
  const [progress, setProgress] = createSignal(false);

  const twclass = () => (progress() ? `w-full duration-[10000ms]` : `w-0`);

  const ProgressHandler = () => {
    setProgress(false);
    setTimeout(() => setProgress(true), 10);
  };

  return (
    <div
      class="swipper-wrapper relative"
      onMouseEnter={() => {
        swiperRef.autoplay.start();
      }}
    >
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: delay, disableOnInteraction: false }}
        onSlideChange={() => {
          console.log("slide change");
          ProgressHandler();
        }}
        onSwiper={(swiper) => (swiperRef = swiper)}
      >
        <For each={props.results}>
          {(movie, i) => (
            <SwiperSlide>
              <Card
                id={movie.id}
                title={movie.title}
                backdrop={movie.backdrop_path}
                overview={movie.overview}
                rd={movie.release_date}
                rating={movie.vote_average}
              />
            </SwiperSlide>
          )}
        </For>
      </Swiper>
      <div class={`absolute h-1 bg-orange-800 ease-linear ${twclass()}`}></div>
    </div>
  );
}
