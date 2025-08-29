import { Link } from "react-router";

interface GuestRegisterInfoProps {
  EventData: {
    eventName: string;
    eventStartDate: string;
    eventTime: string;
    eventLocation: string;
    eventDescription: string;
    eventImages: string[];
  };
}

export default function GuestRegisterInfo({ EventData }: GuestRegisterInfoProps) {
  function formatDate(dateString: string) {
    const date = new Date(dateString);
    if (isNaN(date?.getTime())) {
      return 'Invalid date';
    }
    const formatter = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    return formatter.format(date);
  }

  function convertTo12Hour(time24: string) {
    if (typeof time24 !== 'string' || !time24.includes(":")) {
      return "Invalid time format";
    }
    const [hourStr, minuteStr] = time24.split(":");
    const hours = parseInt(hourStr, 10);
    const minutes = parseInt(minuteStr, 10);
    if (isNaN(hours) || isNaN(minutes)) {
      return "Invalid time";
    }
    const period = hours >= 12 ? "PM" : "AM";
    const hour12 = hours % 12 || 12;
    return `${hour12}:${minuteStr.padStart(2, '0')} ${period}`;
  }
  return (
    <div className="w-full min-h-screen  lg:w-1/2 bg-[#FDE34E99] py-4 px-4 md:py-10 md:px-36 lg:px-4 xl:px-28">
      <div className="flex justify-center">
        <Link
          to="/"
          className="text-black text-center text-2xl md:text-3xl font-bold leading-12 mb-5 sm:mb-10 md:mb-10  hover:text-gray-600 transition-colors block max-w-[326px]"
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
        <img src={EventData?.eventImages?.length == 0 ? "/images/guest-register-ufo.webp" : EventData?.eventImages[0]} alt="" className="block w-[100%]" />
      </div>
      <div className="custom-pagination text-center mb-11 mt-1"></div>

      <h1 className="text-black text-center text-[30px] md:text-[35px] lg:text-[40px] font-bold leading-12 mb-11">
        {EventData?.eventName || "No Event Name"}
      </h1>
      <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-7 mb-7">
        <img
          src="/images/placeholder-icon.svg"
          alt=""
          className="inline-block mr-2 lg:mr-5"
        />
        {formatDate(EventData?.eventStartDate) || "No Date Available"} | {convertTo12Hour(EventData?.eventTime)} onwards
      </p>
      <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-7 mb-7">
        <img
          src="/images/placeholder-icon.svg"
          alt=""
          className="inline-block mr-2 lg:mr-5"
        />
        {EventData?.eventLocation || "No Location Available"}
      </p>
      <div className="mt-5 mb-10">
        <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-7">
          {EventData?.eventDescription || "No description available."}
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
