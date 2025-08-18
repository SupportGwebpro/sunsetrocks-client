import { Link } from "react-router";

export default function Login() {
  return (
    <main>
      <section className="flex min-h-dvh flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 py-8 px-4 md:py-20 md:px-36 lg:px-4 xl:px-36 relative">
          <img
            src="/images/login-page-banner.webp"
            alt=""
            className="w-full h-full object-cover absolute inset-0"
          />
        </div>
        <div className="w-full lg:w-1/2 py-8 px-4 md:py-20 md:px-36 lg:px-4 xl:px-36">
          <Link
            to="/"
            className="text-black text-center text-2xl md:text-3xl font-bold leading-12 mb-8 sm:mb-10 md:mb-14 lg:mb-20 hover:text-gray-600 transition-colors block"
          >
            Sunset Rocks Logo
          </Link>
          <h1 className="text-black text-center text-[30px] md:text-[35px] lg:text-[40px] font-bold leading-12 mb-11">
            Ready to Rock with SUNSET®?
          </h1>
          <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-7 max-w-[507px] mx-auto text-center mb-6 sm:mb-8 md:mb-16 lg:mb-20">
            Lorem ipsum dolor sit amet consectetur. Nisl diam ut scelerisque
            dui.
          </p>
          <button className="w-full py-2 px-2 lg:py-7 lg:px-5  text-[18px] lg:text-[22px] leading-7 font-bold rounded-lg lg:rounded-3xl border-0 bg-[#F9298C] text-white hover:bg-[#e0257e] transition-colors cursor-pointer">
            Login
          </button>
        </div>
      </section>
    </main>
  );
}
