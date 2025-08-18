import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

export default function Dashboard() {
  return (
    <div className="px-12 py-10 w-full">
      <div className="grid grid-cols-4 gap-4 mb-9">
        <div className="flex items-center">
          <h1 className="text-4xl font-bold ">Dashboard</h1>
        </div>
        <button className="bg-[#F4F4F4] rounded-2xl flex gap-4 py-6 px-4 cursor-pointer">
          <img src="/images/dashboard-top-placeholder.svg" alt="" />
          <div className="text-left">
            <p className="text-xl leading-5 mb-2">Create New Event</p>
            <p className="">Set up a new event</p>
          </div>
        </button>
        <button className="bg-[#F4F4F4] rounded-2xl flex gap-4 py-6 px-4 cursor-pointer">
          <img src="/images/dashboard-top-placeholder.svg" alt="" />
          <div className="text-left">
            <p className="text-xl leading-5 mb-2">Scan Badge</p>
            <p className="">Generate or scan badges</p>
          </div>
        </button>
        <button className="bg-[#F4F4F4] rounded-2xl flex gap-4 py-6 px-4 cursor-pointer">
          <img src="/images/dashboard-top-placeholder.svg" alt="" />
          <div className="text-left">
            <p className="text-xl leading-5 mb-2">Check-In User</p>
            <p className="">Mark attendees as checked in</p>
          </div>
        </button>
      </div>
      <div className="rounded-2xl border border-[#EEE] bg-[#FAFAFA]">
        <p>Content</p>
        <div className="">
          {/* <Swiper
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            <SwiperSlide>1</SwiperSlide>
            <SwiperSlide>2</SwiperSlide>
            <SwiperSlide>3</SwiperSlide>
          </Swiper> */}
        </div>
      </div>
    </div>
  );
}
