import { For } from "solid-js";
import Card from "./MiniMovieCard";
import type { ResultPM } from "./types";

import { Swiper, SwiperSlide } from "swiper/solid";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function PopularMovies(props: { results: ResultPM[] }) {
  let swiperRef: any;

  return (
    <div class="swipper-wrapper">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => (swiperRef = swiper)}
      >
        <For each={props.results}>
          {(movie, i) => (
            <SwiperSlide>
              <Card
                title={movie.title}
                backdrop={movie.backdrop_path}
                overview={movie.overview}
              />
            </SwiperSlide>
          )}
        </For>
      </Swiper>
    </div>
  );
}
