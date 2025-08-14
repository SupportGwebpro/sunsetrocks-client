import { Link } from "react-router";
import GuestRegisterInfo from "../components/GuestRegisterInfo";

export default function GuestRegister() {
  return (
    <main>
      <section className="flex min-h-dvh">
        <GuestRegisterInfo />
        <div className="w-1/2 py-20 px-36">
          <h2 className="text-black text-center text-3xl font-bold leading-12 mb-20">
            Register
          </h2>

          <form action="">
            <div className="flex gap-7">
              <input
                type="text"
                placeholder="First Name*"
                className=" w-full py-7 px-5 bg-[#E8E8E8] text-black text-[22px] leading-7 font-bold placeholder:text-black placeholder:text-[22px] placeholder:leading-7 placeholder:font-bold rounded-3xl mb-5 border-0  focus:outline-1 focus:outline-offset-1 focus:outline-slate-700"
              />
              <input
                type="text"
                placeholder="Last Name*"
                className=" w-full py-7 px-5 bg-[#E8E8E8] text-black text-[22px] leading-7 font-bold placeholder:text-black placeholder:text-[22px] placeholder:leading-7 placeholder:font-bold rounded-3xl mb-5 border-0  focus:outline-1 focus:outline-offset-1 focus:outline-slate-700"
              />
            </div>
            <input
              type="email"
              placeholder="Email ID*"
              className=" w-full py-7 px-5 bg-[#E8E8E8] text-black text-[22px] leading-7 font-bold placeholder:text-black placeholder:text-[22px] placeholder:leading-7 placeholder:font-bold rounded-3xl mb-5 border-0  focus:outline-1 focus:outline-offset-1 focus:outline-slate-700"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className=" w-full py-7 px-5 bg-[#E8E8E8] text-black text-[22px] leading-7 font-bold placeholder:text-black placeholder:text-[22px] placeholder:leading-7 placeholder:font-bold rounded-3xl mb-5 border-0  focus:outline-1 focus:outline-offset-1 focus:outline-slate-700"
            />
            <input
              type="text"
              placeholder="Company Name*"
              className=" w-full py-7 px-5 bg-[#E8E8E8] text-black text-[22px] leading-7 font-bold placeholder:text-black placeholder:text-[22px] placeholder:leading-7 placeholder:font-bold rounded-3xl mb-5 border-0  focus:outline-1 focus:outline-offset-1 focus:outline-slate-700"
            />
            <button
              type="submit"
              className=" w-full py-7 px-5 text-[22px] leading-7 font-bold rounded-3xl border-0 bg-[#808080] text-white hover:bg-[#707070] transition-colors cursor-pointer"
            >
              Register
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
