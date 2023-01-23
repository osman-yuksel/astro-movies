import { For, createSignal, lazy } from "solid-js";
import Card from "./BigMovieCard";
import type { ResultPM } from "../../movie";

import { Swiper, SwiperSlide } from "swiper/solid";
import { Autoplay, Pagination, Lazy } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default function PopularMovies(props: { results: ResultPM[] }) {
  let swiperRef: any;

  const delay = 2000000;
  const [progress, setProgress] = createSignal(false);

  const twclass = () => (progress() ? `w-full duration-[20000ms]` : `w-0`);

  const ProgressHandler = () => {
    setProgress(false);
    setTimeout(() => setProgress(true), 10);
  };

  return (
    <div class="w-11/12 overflow-hidden rounded-md border-2 border-gray-900 sm:w-5/6">
      <div
        class="swipper-wrapper relative"
        onMouseEnter={() => {
          swiperRef.autoplay.start();
        }}
      >
        <Swiper
          modules={[Autoplay, Pagination, Lazy]}
          pagination={{ clickable: true }}
          preloadImages={false}
          lazy={{ enabled: true, loadPrevNext: true }}
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
        <div
          class={`absolute bottom-0 z-10 h-1 bg-orange-800 ease-linear sm:bottom-1 ${twclass()}`}
        ></div>
      </div>
    </div>
  );
}
