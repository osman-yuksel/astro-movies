import { For } from "solid-js";
import Card from "./BigMovieCard";
import type { ResultPM } from "./types";

import { Swiper, SwiperSlide } from "swiper/solid";
import { Navigation, Pagination, Autoplay, Virtual, Lazy } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function PopularMovies(props: { results: ResultPM[] }) {
  let swiperRef: any;

  return (
    <div class="swipper-wrapper">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
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
                rd={movie.release_date}
                rating={movie.vote_average}
              />
            </SwiperSlide>
          )}
        </For>
      </Swiper>
    </div>
  );
}
