import GuestRegisterInfo from "../components/GuestRegisterInfo";

export default function GuestRegister() {
  return (
    <main>
      <section className="flex min-h-dvh flex-col lg:flex-row">
        <GuestRegisterInfo />
        <div className="w-full lg:w-1/2 py-8 px-4 md:py-20 md:px-36 lg:px-4 xl:px-36">
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
