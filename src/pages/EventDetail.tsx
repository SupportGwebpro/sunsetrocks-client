import { Link } from "react-router";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Edit,
  LocationPin,
} from "../components/SVG";
import * as Dialog from "@radix-ui/react-dialog";

export default function EventDetail() {
  return (
    <div className="px-12 py-10">
      <div className="p-8 rounded-2xl border border-white bg-[#FFFFFF80]">
        <div>
          <Link
            to="/"
            className="flex items-center gap-4 text-[22px] font-bold mb-5"
          >
            <ArrowLeft />
            <span>Back to main Event</span>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-12">
          <div>
            <img src="/images/event-detail.webp" alt="" />
          </div>

          <div>
            <div className="flex items-center gap-8 justify-between">
              <div>
                <h1 className="text-[#F9298C] text-center text-[30px] md:text-[35px] lg:text-[40px] font-bold leading-12 mb-0">
                  Annual Gala 2025
                </h1>
                <p className="text-[#000]/50">
                  Event ID: <strong className="font-bold">5454FUHG55</strong>
                </p>
              </div>
              <div>
                <button>
                  <Edit /> <span>Edit</span>
                </button>
              </div>
            </div>
            <hr className="border-t border-[#EAF0FF] mt-6 mb-7.5" />

            <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-7 mb-4 flex gap-6 items-center">
              <Calendar />
              <span>October 26, 2025 | 7:00 PM onwards</span>
            </p>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-7 mb-4 flex gap-6 items-center">
              <LocationPin />
              <span>The Grand Ballroom, Downtown</span>
            </p>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-7 mb-4 flex gap-6 items-center">
              <Clock />
              <span>43 Days Remaining</span>
            </p>

            <p className="text-[#000]/50 mt-9 mb-2.5">Event Details</p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Purus euismod turpis
              feugiat nisl tortor amet sit. Iaculis leo nisi volutpat mattis
              aliquam at in.
            </p>
            <p className="text-[#000]/50 mt-6 mb-2.5">Miscellaneous Details</p>
            <ul className="list-disc space-y-2 mb-9">
              <li className="relative before:absolute before:left-0 before:top-1/2 before:w-2 before:h-2 before:rounded-full before:bg-[#F9298C] before:-translate-y-1/2 list-none pl-4">
                Lorem ipsum dolor sit amet.
              </li>
              <li className="relative before:absolute before:left-0 before:top-1/2 before:w-2 before:h-2 before:rounded-full before:bg-[#F9298C] before:-translate-y-1/2 list-none pl-4">
                Lorem ipsum dolor sit amet consectetur. Purus euismod turpis
                feugiat nisl tortor amet sit.
              </li>
            </ul>
            <Link
              to="/"
              className="text-[16px] md:text-[18px] leading-7 underline underline-offset-4"
            >
              View Terms & Conditions
            </Link>
            <div className="flex gap-4 mt-11">
              <div className="flex-grow-1">
                <input
                  type="text"
                  readOnly
                  value="https://domain_name/event/invite?token=xxxxx"
                  className="w-full bg-[#FBFBFB] rounded-lg py-3.5 px-4 focus:border-[#F9298C] border border-[#EAF0FF] transition-colors outline-none"
                />
              </div>

              <button className="text-white text-center font-bold py-3.5 px-4 bg-[#F9298C] rounded-xl cursor-pointer">
                Copy Link
              </button>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <div
                className={` bg-white border border-white shadow-[8px_8px_16px_0_rgba(0,0,0,0.02)] p-4 rounded-2xl mt-16`}
              >
                <p className="text-[#00000080] font-medium mb-4">
                  User Registration Status...
                </p>
                <div className="flex gap-10 items-center justify-between">
                  <div className="flex gap-10">
                    <p className="text-xl font-medium">Pending: 12</p>
                    <p className="text-xl font-medium">Approved: 120</p>
                    <p className="text-xl font-medium">Badge Collected: 10</p>
                    <p className="text-xl font-medium">Checked-In: 0</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <button className="text-white text-center font-bold py-3.5 px-4 bg-[#F9298C] rounded-xl cursor-pointer">
                      Download Reports
                    </button>
                    <Dialog.Root>
                      <Dialog.Trigger>
                        <button className="text-white text-center font-bold py-3.5 px-4 bg-[#F9298C] rounded-xl cursor-pointer">
                          Copy Link
                        </button>
                      </Dialog.Trigger>
                      <Dialog.Portal>
                        <Dialog.Overlay className="fixed inset-0 bg-[#00001D99] animate-fadeIn" />
                        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white shadow-lg focus:outline-none animate-scaleIn w-[617px] p-12 ">
                          <Dialog.Title />
                          <Dialog.Description />
                          <div className="flex gap-4">
                            <div className="flex-grow-1">
                              <input
                                type="text"
                                readOnly
                                value="https://domain_name/event/invite?token=xxxxx"
                                className="w-full bg-[#F4F4F4] rounded-lg py-3.5 px-4 focus:border-[#F9298C] border border-[#F4F4F4] transition-colors outline-none"
                              />
                            </div>
                            <Dialog.Close>
                              <button className="text-white text-center font-bold py-3.5 px-4 bg-[#F9298C] rounded-xl cursor-pointer">
                                Copy Link
                              </button>
                            </Dialog.Close>
                          </div>
                        </Dialog.Content>
                      </Dialog.Portal>
                    </Dialog.Root>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
