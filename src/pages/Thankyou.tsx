import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import GuestRegisterInfo from "../components/GuestRegisterInfo";

export default function GuestRegister() {
  return (
    <main>
      <section className="flex min-h-dvh">
        <GuestRegisterInfo />
        <div className="w-1/2 py-20 px-36">
          <div className="flex max-w-[483px] min-h-dvh flex-col items-center mx-auto text-center justify-center">
            <img
              src="/images/thankyou-checkmark.svg"
              alt=""
              className="mb-14"
            />
            <p className="text-[32px] leading-12">
              Your registration is accepted and will be approved by the event
              team shortly
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
