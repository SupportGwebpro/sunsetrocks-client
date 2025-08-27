"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import GuestRegisterInfo from "../components/GuestRegisterInfo";

// ✅ Define schema for validation
const guestSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .regex(/^[0-9]{10,15}$/, "Phone must be 10–15 digits")
    .optional()
    .or(z.literal("")),
  company: z.string().min(2, "Company name is required"),
});

type GuestFormData = z.infer<typeof guestSchema>;

export default function GuestRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<GuestFormData>({
    resolver: zodResolver(guestSchema),
    mode: "onBlur", // validates on blur
  });

  const onSubmit = async (data: GuestFormData) => {
    try {
      const res = await fetch("https://api.example.com/guests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to register guest");
      }

      // reset form on success
      reset();
      alert("Registration successful!");
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <main>
      <section className="flex min-h-dvh flex-col lg:flex-row">
        <GuestRegisterInfo />
        <div className="w-full lg:w-1/2 py-8 px-4 md:py-20 md:px-36 lg:px-4 xl:px-36">
          <h2 className="text-black text-center text-2xl md:text-3xl font-bold mb-8 md:mb-14 lg:mb-20">
            Register
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* First + Last Name */}
            <div className="flex gap-4 md:gap-5 lg:gap-7">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="First Name*"
                  {...register("firstName")}
                  className="w-full py-2 px-2 lg:py-7 lg:px-5 bg-[#E8E8E8] text-black 
                  text-[18px] lg:text-[22px] font-bold rounded-lg lg:rounded-3xl mb-2 
                  focus:outline-1 focus:outline-slate-700"
                />
                {errors.firstName && (
                  <p className="text-red-600 text-sm">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Last Name*"
                  {...register("lastName")}
                  className="w-full py-2 px-2 lg:py-7 lg:px-5 bg-[#E8E8E8] text-black 
                  text-[18px] lg:text-[22px] font-bold rounded-lg lg:rounded-3xl mb-2 
                  focus:outline-1 focus:outline-slate-700"
                />
                {errors.lastName && (
                  <p className="text-red-600 text-sm">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email ID*"
                {...register("email")}
                className="w-full py-2 px-2 lg:py-7 lg:px-5 bg-[#E8E8E8] text-black 
                text-[18px] lg:text-[22px] font-bold rounded-lg lg:rounded-3xl mb-2 
                focus:outline-1 focus:outline-slate-700"
              />
              {errors.email && (
                <p className="text-red-600 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                {...register("phone")}
                className="w-full py-2 px-2 lg:py-7 lg:px-5 bg-[#E8E8E8] text-black 
                text-[18px] lg:text-[22px] font-bold rounded-lg lg:rounded-3xl mb-2 
                focus:outline-1 focus:outline-slate-700"
              />
              {errors.phone && (
                <p className="text-red-600 text-sm">{errors.phone.message}</p>
              )}
            </div>

            {/* Company */}
            <div>
              <input
                type="text"
                placeholder="Company Name*"
                {...register("company")}
                className="w-full py-2 px-2 lg:py-7 lg:px-5 bg-[#E8E8E8] text-black 
                text-[18px] lg:text-[22px] font-bold rounded-lg lg:rounded-3xl mb-2 
                focus:outline-1 focus:outline-slate-700"
              />
              {errors.company && (
                <p className="text-red-600 text-sm">{errors.company.message}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 px-2 lg:py-7 lg:px-5 text-[18px] lg:text-[22px] 
              font-bold rounded-lg lg:rounded-3xl border-0 bg-[#F9298C] text-white 
              hover:bg-[#e0257e] transition-colors cursor-pointer disabled:opacity-60"
            >
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
