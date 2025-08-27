import { Link } from "react-router";

export default function GuestRegisterInfo() {
  return (
    <div className="w-full lg:w-1/2 bg-[#FDE34E99] py-8 px-4 md:py-20 md:px-36 lg:px-4 xl:px-36">
      <div className="flex justify-center">
        <Link
          to="/"
          className="text-black text-center text-2xl md:text-3xl font-bold leading-12 mb-8 sm:mb-10 md:mb-14 lg:mb-20 hover:text-gray-600 transition-colors block max-w-[326px]"
        >
          <img src="/images/sunset-rocks-logo.webp" alt="" className="w-100" />
        </Link>
      </div>
      {/* <Swiper
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
      </Swiper> */}
      <div className="flex justify-center">
        <img src="/images/guest-register-ufo.webp" alt="" className="block" />
      </div>
      <div className="custom-pagination text-center mb-11 mt-1"></div>

      <h1 className="text-black text-center text-[30px] md:text-[35px] lg:text-[40px] font-bold leading-12 mb-11">
        Annual Gala 2025
      </h1>
      <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-7 mb-7">
        <img
          src="/images/placeholder-icon.svg"
          alt=""
          className="inline-block mr-2 lg:mr-5"
        />
        October 26, 2025 | 7:00 PM onwards
      </p>
      <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-7 mb-7">
        <img
          src="/images/placeholder-icon.svg"
          alt=""
          className="inline-block mr-2 lg:mr-5"
        />
        The Grand Ballroom, Downtown
      </p>
      <div className="mt-5 mb-10">
        <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-7">
          Lorem ipsum dolor sit amet consectetur. Nisl diam ut scelerisque dui.
          Sem nunc amet augue odio ultricies augue ut ornare. Lorem mauris at
          sem et. Amet nam pellentesque venenatis enim pellentesque vulputate.
          Nec non porta luctus ridiculus eget porta. Consectetur egestas ac.
        </p>
      </div>
      <Link
        to="/terms-and-conditions"
        className="text-[16px] md:text-[18px] lg:text-[20px] leading-7 underline underline-offset-4"
      >
        View Terms & Conditions
      </Link>
    </div>
  );
}
