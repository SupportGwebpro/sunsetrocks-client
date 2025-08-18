import GuestRegisterInfo from "../components/GuestRegisterInfo";

export default function GuestRegister() {
  return (
    <main>
      <section className="flex min-h-dvh flex-col lg:flex-row">
        <GuestRegisterInfo />
        <div className="w-full lg:w-1/2 py-8 px-4 md:py-20 md:px-36 lg:px-4 xl:px-36">
          <h2 className="text-black text-center text-2xl md:text-3xl font-bold leading-12 mb-8 sm:mb-10 md:mb-14 lg:mb-20">
            Register
          </h2>

          <form action="">
            <div className="flex gap-4 md:gap-5 lg:gap-7">
              <input
                type="text"
                placeholder="First Name*"
                className="w-full py-2 px-2 lg:py-7 lg:px-5 bg-[#E8E8E8] text-black text-[18px] lg:text-[22px] leading-7 font-bold placeholder:text-black  placeholder:text-[16px] md:placeholder:text-[18px] placeholder:lg:text-[22px] placeholder:leading-7 placeholder:font-bold rounded-lg lg:rounded-3xl mb-5 border-0  focus:outline-1 focus:outline-offset-1 focus:outline-slate-700"
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="w-full py-2 px-2 lg:py-7 lg:px-5 bg-[#E8E8E8] text-black text-[18px] lg:text-[22px] leading-7 font-bold placeholder:text-black  placeholder:text-[16px] md:placeholder:text-[18px] placeholder:lg:text-[22px] placeholder:leading-7 placeholder:font-bold rounded-lg lg:rounded-3xl mb-5 border-0  focus:outline-1 focus:outline-offset-1 focus:outline-slate-700"
              />
            </div>
            <input
              type="email"
              placeholder="Email ID*"
              className="w-full py-2 px-2 lg:py-7 lg:px-5 bg-[#E8E8E8] text-black text-[18px] lg:text-[22px] leading-7 font-bold placeholder:text-black  placeholder:text-[16px] md:placeholder:text-[18px] placeholder:lg:text-[22px] placeholder:leading-7 placeholder:font-bold rounded-lg lg:rounded-3xl mb-5 border-0  focus:outline-1 focus:outline-offset-1 focus:outline-slate-700"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full py-2 px-2 lg:py-7 lg:px-5 bg-[#E8E8E8] text-black text-[18px] lg:text-[22px] leading-7 font-bold placeholder:text-black  placeholder:text-[16px] md:placeholder:text-[18px] placeholder:lg:text-[22px] placeholder:leading-7 placeholder:font-bold rounded-lg lg:rounded-3xl mb-5 border-0  focus:outline-1 focus:outline-offset-1 focus:outline-slate-700"
            />
            <input
              type="text"
              placeholder="Company Name*"
              className="w-full py-2 px-2 lg:py-7 lg:px-5 bg-[#E8E8E8] text-black text-[18px] lg:text-[22px] leading-7 font-bold placeholder:text-black  placeholder:text-[16px] md:placeholder:text-[18px] placeholder:lg:text-[22px] placeholder:leading-7 placeholder:font-bold rounded-lg lg:rounded-3xl mb-5 border-0  focus:outline-1 focus:outline-offset-1 focus:outline-slate-700"
            />
            <button
              type="submit"
              className=" w-full py-2 px-2 lg:py-7 lg:px-5  text-[18px] lg:text-[22px] leading-7 font-bold rounded-lg lg:rounded-3xl border-0 bg-[#F9298C] text-white hover:bg-[#e0257e] transition-colors cursor-pointer"
            >
              Register
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
