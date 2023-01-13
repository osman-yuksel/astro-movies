import { For } from "solid-js";
import Card from "./MiniMovieCard";
import type { ResultPM } from "./types";

import { Swiper, SwiperSlide } from "swiper/solid";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function PopularMovies(props: { results: ResultPM[] }) {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <For each={props.results}>
          {(movie, i) => (
            <SwiperSlide>
              <Card title={movie.title} />
            </SwiperSlide>
          )}
        </For>
      </Swiper>
    </>
  );
}
