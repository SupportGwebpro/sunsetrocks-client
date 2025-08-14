import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function GuestRegisterInfo() {
  return (
    <div className="w-1/2 bg-[#d9d9d999] py-20 px-36">
      <Link
        to="/"
        className="text-black text-center text-3xl font-bold leading-12 mb-20 hover:text-gray-600 transition-colors block "
      >
        Sunset Rocks Logo
      </Link>
      <Swiper
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <img
            src="/images/placeholder-slider.png"
            alt=""
            className="rounded-2xl w-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/placeholder-slider.png"
            alt=""
            className="rounded-2xl w-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/placeholder-slider.png"
            alt=""
            className="rounded-2xl w-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
      <div className="custom-pagination text-center mb-11 mt-1"></div>

      <h1 className="text-black text-center text-[40px] font-bold leading-12 mb-11">
        Annual Gala 2025
      </h1>
      <p className="text-[20px] leading-7 mb-7">
        <img
          src="/images/placeholder-icon.svg"
          alt=""
          className="inline-block mr-5"
        />
        October 26, 2025 | 7:00 PM onwards
      </p>
      <p className="text-[20px] leading-7 mb-7">
        <img
          src="/images/placeholder-icon.svg"
          alt=""
          className="inline-block mr-5"
        />
        The Grand Ballroom, Downtown
      </p>
      <div className="mt-5 mb-10">
        <p className="text-[20px] leading-7">
          Lorem ipsum dolor sit amet consectetur. Nisl diam ut scelerisque dui.
          Sem nunc amet augue odio ultricies augue ut ornare. Lorem mauris at
          sem et. Amet nam pellentesque venenatis enim pellentesque vulputate.
          Nec non porta luctus ridiculus eget porta. Consectetur egestas ac.
        </p>
      </div>
      <Link
        to="/terms-and-conditions"
        className="text-[20px] leading-7 underline underline-offset-4"
      >
        View Terms & Conditions
      </Link>
    </div>
  );
}
