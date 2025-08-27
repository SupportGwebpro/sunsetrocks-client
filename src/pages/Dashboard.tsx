import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import {
  ArrowRight,
  ArrowUp,
  BadgesCollected,
  CheckedIn,
  CreateNewEvent,
  Edit,
  ErrorExclamation,
  IconEye,
  PendingApprovals,
  RoundExclamation,
  ScanBadge,
  TicketsApproved,
  TotalRegistrations,
} from "../components/SVG";
import { Link } from "react-router";
import * as Tabs from "@radix-ui/react-tabs";

export default function Dashboard() {
  return (
    <div className="px-12 py-10">
      <div className="grid grid-cols-4 gap-4 mb-9">
        <div className="flex items-center">
          <h1 className="text-4xl font-bold ">Dashboard</h1>
        </div>
        <button className="bg-[#F9298C] rounded-2xl flex gap-4 py-6 px-4 cursor-pointer text-white">
          <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center">
            <CreateNewEvent />
          </div>
          <div className="text-left">
            <p className="text-xl leading-5 mb-2">Create New Event</p>
            <p className="">Set up a new event</p>
          </div>
        </button>
        <button className="bg-[#F9298C] rounded-2xl flex gap-4 py-6 px-4 cursor-pointer text-white">
          <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center">
            <ScanBadge />
          </div>
          <div className="text-left">
            <p className="text-xl leading-5 mb-2">Scan Badge</p>
            <p className="">Generate or scan badges</p>
          </div>
        </button>
        <button className="bg-[#F9298C] rounded-2xl flex gap-4 py-6 px-4 cursor-pointer text-white">
          <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center">
            <CheckedIn />
          </div>
          <div className="text-left">
            <p className="text-xl leading-5 mb-2">Check-In User</p>
            <p className="">Mark attendees as checked in</p>
          </div>
        </button>
      </div>
      <div className="">
        <Swiper
          pagination={{
            clickable: true,
            el: ".custom-pagination",
            bulletClass:
              "swiper-pagination-bullet inline-block !w-3 !h-3 rounded-full mx-1",
            bulletActiveClass: "swiper-pagination-bullet-active !bg-black",
          }}
          modules={[Pagination]}
          slidesPerView={1}
        >
          <SwiperSlide>
            <div className="p-8 rounded-2xl border border-white bg-[#FFFFFF80]">
              <div className="flex gap-9">
                <div className="flex-1/3 rounded-2xl border border-white bg-white shadow-[16px_16px_32px_0_rgba(0,0,0,0.02)] py-4 px-10">
                  <p className="text-[#F9298C] text-3xl font-bold leading-12 mb-1">
                    Annual Gala 2025
                  </p>
                  <p className="text-black opacity-50 leading-6 mb-4">
                    Event ID: <strong>5454FUHG55</strong>
                  </p>
                  <hr className="border-t border-[#D9D9D9] mb-6" />
                  <p className="flex items-center gap-5 mb-4">
                    <img src="/images/icon-calendar.svg" alt="" /> October 26,
                    2025 | 7:00 PM onwards
                  </p>
                  <p className="flex items-center gap-5 mb-4">
                    <img src="/images/icon-location-pin.svg" alt="" /> The Grand
                    Ballroom, Downtown
                  </p>
                  <p className="flex items-center gap-5 mb-4">
                    <img src="/images/icon-clock.svg" alt="" /> 43 Days
                    Remaining
                  </p>
                </div>
                <div className="flex-2/3">
                  <div className="grid grid-cols-3 gap-5">
                    <Link
                      to="/"
                      className="bg-[#FFE6EB] rounded-2xl p-3.5 pl-6"
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-black text-[32px] font-medium leading-12">
                          154
                        </p>
                        <div className="rounded-full w-14 h-14 bg-white items-center justify-center flex">
                          <TotalRegistrations />
                        </div>
                      </div>
                      <p className="mb-2.5">Total Registrations</p>
                      <p className="text-[12px] text-[#FF839C] flex items-center gap-1.5">
                        <ArrowUp /> <span>+12 this week</span>
                      </p>
                    </Link>
                    <Link
                      to="/"
                      className="bg-[#FFE6EB] rounded-2xl p-3.5 pl-6"
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-black text-[32px] font-medium leading-12">
                          121
                        </p>
                        <div className="rounded-full w-14 h-14 bg-white items-center justify-center flex">
                          <TicketsApproved />
                        </div>
                      </div>
                      <p className="mb-2.5">Tickets Approved</p>
                      <p className="text-[12px] text-[#FF839C] flex items-center gap-1.5">
                        <ArrowUp /> <span>+8 today</span>
                      </p>
                    </Link>
                    <Link
                      to="/"
                      className="bg-[#FFE6EB] rounded-2xl p-3.5 pl-6"
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-black text-[32px] font-medium leading-12">
                          11
                        </p>
                        <div className="rounded-full w-14 h-14 bg-white items-center justify-center flex">
                          <PendingApprovals />
                        </div>
                      </div>
                      <p className="mb-2.5">Pending Approvals</p>
                      <p className="text-[12px] text-[#FF839C] flex items-center gap-1.5">
                        <ErrorExclamation /> <span>Needs attention</span>
                      </p>
                    </Link>
                    <Link
                      to="/"
                      className="bg-[#FFE6EB] rounded-2xl p-3.5 pl-6"
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-black text-[32px] font-medium leading-12">
                          10
                        </p>
                        <div className="rounded-full w-14 h-14 bg-white items-center justify-center flex">
                          <BadgesCollected />
                        </div>
                      </div>
                      <p className="mb-2.5">Badges Collected</p>
                      <p className="text-[12px] text-[#FF839C] flex items-center gap-1.5">
                        <ArrowRight /> <span>10 / 120 approved</span>
                      </p>
                    </Link>
                    <Link
                      to="/"
                      className="bg-[#FFE6EB] rounded-2xl p-3.5 pl-6"
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-black text-[32px] font-medium leading-12">
                          0
                        </p>
                        <div className="rounded-full w-14 h-14 bg-white items-center justify-center flex">
                          <CheckedIn />
                        </div>
                      </div>
                      <p className="mb-2.5">Checked In</p>
                      <p className="text-[12px] text-[#FF839C] flex items-center gap-1.5">
                        <RoundExclamation /> <span>Event not started</span>
                      </p>
                    </Link>
                    <Link
                      to={"/"}
                      className="rounded-2xl p-3.5 pl-6 border border-[#EAF0FF]"
                    >
                      <div className="flex items-center justify-center">
                        <div className="rounded-full w-14 h-14 items-center justify-center flex">
                          <IconEye />
                        </div>
                      </div>
                      <p className="mb-2.5 text-center">View Event details</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-8 rounded-2xl border border-white bg-[#FFFFFF80] w-">
              <div className="flex gap-9">
                <div className="flex-1/3 rounded-2xl border border-white bg-white shadow-[16px_16px_32px_0_rgba(0,0,0,0.02)] py-4 px-10">
                  <p className="text-[#F9298C] text-3xl font-bold leading-12 mb-1">
                    Annual Gala 2025
                  </p>
                  <p className="text-black opacity-50 leading-6 mb-4">
                    Event ID: <strong>5454FUHG55</strong>
                  </p>
                  <hr className="border-t border-[#D9D9D9] mb-6" />
                  <p className="flex items-center gap-5 mb-4">
                    <img src="/images/icon-calendar.svg" alt="" /> October 26,
                    2025 | 7:00 PM onwards
                  </p>
                  <p className="flex items-center gap-5 mb-4">
                    <img src="/images/icon-location-pin.svg" alt="" /> The Grand
                    Ballroom, Downtown
                  </p>
                  <p className="flex items-center gap-5 mb-4">
                    <img src="/images/icon-clock.svg" alt="" /> 43 Days
                    Remaining
                  </p>
                </div>
                <div className="flex-2/3">
                  <div className="grid grid-cols-3 gap-5">
                    <Link
                      to="/"
                      className="bg-[#FFE6EB] rounded-2xl p-3.5 pl-6"
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-black text-[32px] font-medium leading-12">
                          154
                        </p>
                        <div className="rounded-full w-14 h-14 bg-white items-center justify-center flex">
                          <TotalRegistrations />
                        </div>
                      </div>
                      <p className="mb-2.5">Total Registrations</p>
                      <p className="text-[12px] text-[#FF839C] flex items-center gap-1.5">
                        <ArrowUp /> <span>+12 this week</span>
                      </p>
                    </Link>
                    <Link
                      to="/"
                      className="bg-[#FFE6EB] rounded-2xl p-3.5 pl-6"
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-black text-[32px] font-medium leading-12">
                          121
                        </p>
                        <div className="rounded-full w-14 h-14 bg-white items-center justify-center flex">
                          <TicketsApproved />
                        </div>
                      </div>
                      <p className="mb-2.5">Tickets Approved</p>
                      <p className="text-[12px] text-[#FF839C] flex items-center gap-1.5">
                        <ArrowUp /> <span>+8 today</span>
                      </p>
                    </Link>
                    <Link
                      to="/"
                      className="bg-[#FFE6EB] rounded-2xl p-3.5 pl-6"
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-black text-[32px] font-medium leading-12">
                          11
                        </p>
                        <div className="rounded-full w-14 h-14 bg-white items-center justify-center flex">
                          <PendingApprovals />
                        </div>
                      </div>
                      <p className="mb-2.5">Pending Approvals</p>
                      <p className="text-[12px] text-[#FF839C] flex items-center gap-1.5">
                        <ErrorExclamation /> <span>Needs attention</span>
                      </p>
                    </Link>
                    <Link
                      to="/"
                      className="bg-[#FFE6EB] rounded-2xl p-3.5 pl-6"
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-black text-[32px] font-medium leading-12">
                          10
                        </p>
                        <div className="rounded-full w-14 h-14 bg-white items-center justify-center flex">
                          <BadgesCollected />
                        </div>
                      </div>
                      <p className="mb-2.5">Badges Collected</p>
                      <p className="text-[12px] text-[#FF839C] flex items-center gap-1.5">
                        <ArrowRight /> <span>10 / 120 approved</span>
                      </p>
                    </Link>
                    <Link
                      to="/"
                      className="bg-[#FFE6EB] rounded-2xl p-3.5 pl-6"
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-black text-[32px] font-medium leading-12">
                          0
                        </p>
                        <div className="rounded-full w-14 h-14 bg-white items-center justify-center flex">
                          <CheckedIn />
                        </div>
                      </div>
                      <p className="mb-2.5">Checked In</p>
                      <p className="text-[12px] text-[#FF839C] flex items-center gap-1.5">
                        <RoundExclamation /> <span>Event not started</span>
                      </p>
                    </Link>
                    <Link
                      to={"/"}
                      className="rounded-2xl p-3.5 pl-6 border border-[#EAF0FF]"
                    >
                      <div className="flex items-center justify-center">
                        <div className="rounded-full w-14 h-14 items-center justify-center flex">
                          <IconEye />
                        </div>
                      </div>
                      <p className="mb-2.5 text-center">View Event details</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-8 rounded-2xl border border-white bg-[#FFFFFF80] w-">
              <div className="flex gap-9">
                <div className="flex-1/3 rounded-2xl border border-white bg-white shadow-[16px_16px_32px_0_rgba(0,0,0,0.02)] py-4 px-10">
                  <p className="text-[#F9298C] text-3xl font-bold leading-12 mb-1">
                    Annual Gala 2025
                  </p>
                  <p className="text-black opacity-50 leading-6 mb-4">
                    Event ID: <strong>5454FUHG55</strong>
                  </p>
                  <hr className="border-t border-[#D9D9D9] mb-6" />
                  <p className="flex items-center gap-5 mb-4">
                    <img src="/images/icon-calendar.svg" alt="" /> October 26,
                    2025 | 7:00 PM onwards
                  </p>
                  <p className="flex items-center gap-5 mb-4">
                    <img src="/images/icon-location-pin.svg" alt="" /> The Grand
                    Ballroom, Downtown
                  </p>
                  <p className="flex items-center gap-5 mb-4">
                    <img src="/images/icon-clock.svg" alt="" /> 43 Days
                    Remaining
                  </p>
                </div>
                <div className="flex-2/3">
                  <div className="grid grid-cols-3 gap-5">
                    <Link
                      to="/"
                      className="bg-[#FFE6EB] rounded-2xl p-3.5 pl-6"
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-black text-[32px] font-medium leading-12">
                          154
                        </p>
                        <div className="rounded-full w-14 h-14 bg-white items-center justify-center flex">
                          <TotalRegistrations />
                        </div>
                      </div>
                      <p className="mb-2.5">Total Registrations</p>
                      <p className="text-[12px] text-[#FF839C] flex items-center gap-1.5">
                        <ArrowUp /> <span>+12 this week</span>
                      </p>
                    </Link>
                    <Link
                      to="/"
                      className="bg-[#FFE6EB] rounded-2xl p-3.5 pl-6"
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-black text-[32px] font-medium leading-12">
                          121
                        </p>
                        <div className="rounded-full w-14 h-14 bg-white items-center justify-center flex">
                          <TicketsApproved />
                        </div>
                      </div>
                      <p className="mb-2.5">Tickets Approved</p>
                      <p className="text-[12px] text-[#FF839C] flex items-center gap-1.5">
                        <ArrowUp /> <span>+8 today</span>
                      </p>
                    </Link>
                    <Link
                      to="/"
                      className="bg-[#FFE6EB] rounded-2xl p-3.5 pl-6"
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-black text-[32px] font-medium leading-12">
                          11
                        </p>
                        <div className="rounded-full w-14 h-14 bg-white items-center justify-center flex">
                          <PendingApprovals />
                        </div>
                      </div>
                      <p className="mb-2.5">Pending Approvals</p>
                      <p className="text-[12px] text-[#FF839C] flex items-center gap-1.5">
                        <ErrorExclamation /> <span>Needs attention</span>
                      </p>
                    </Link>
                    <Link
                      to="/"
                      className="bg-[#FFE6EB] rounded-2xl p-3.5 pl-6"
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-black text-[32px] font-medium leading-12">
                          10
                        </p>
                        <div className="rounded-full w-14 h-14 bg-white items-center justify-center flex">
                          <BadgesCollected />
                        </div>
                      </div>
                      <p className="mb-2.5">Badges Collected</p>
                      <p className="text-[12px] text-[#FF839C] flex items-center gap-1.5">
                        <ArrowRight /> <span>10 / 120 approved</span>
                      </p>
                    </Link>
                    <Link
                      to="/"
                      className="bg-[#FFE6EB] rounded-2xl p-3.5 pl-6"
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-black text-[32px] font-medium leading-12">
                          0
                        </p>
                        <div className="rounded-full w-14 h-14 bg-white items-center justify-center flex">
                          <CheckedIn />
                        </div>
                      </div>
                      <p className="mb-2.5">Checked In</p>
                      <p className="text-[12px] text-[#FF839C] flex items-center gap-1.5">
                        <RoundExclamation /> <span>Event not started</span>
                      </p>
                    </Link>
                    <Link
                      to={"/"}
                      className="rounded-2xl p-3.5 pl-6 border border-[#EAF0FF]"
                    >
                      <div className="flex items-center justify-center">
                        <div className="rounded-full w-14 h-14 items-center justify-center flex">
                          <IconEye />
                        </div>
                      </div>
                      <p className="mb-2.5 text-center">View Event details</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="custom-pagination text-center mt-6"></div>
      </div>
      <div>
        <Tabs.Root defaultValue="tab1" orientation="horizontal">
          <div className="flex justify-between items-center">
            <p className="text-black text-2xl font-bold leading-12">
              All Events Overview
            </p>
            <Tabs.List className="flex gap-4 mb-3.5" aria-label="tabs">
              <Tabs.Trigger
                className="py-2.5 px-6 border border-[#E0E0E0] rounded-xl text-black font-bold data-[state=active]:text-white data-[state=active]:border-black data-[state=active]:bg-black"
                value="tab1"
              >
                Upcoming
              </Tabs.Trigger>
              <Tabs.Trigger
                className="py-2.5 px-6 border border-[#E0E0E0] rounded-xl text-black font-bold data-[state=active]:text-white data-[state=active]:border-black data-[state=active]:bg-black"
                value="tab2"
              >
                Past
              </Tabs.Trigger>
              <Tabs.Trigger
                className="py-2.5 px-6 border border-[#E0E0E0] rounded-xl text-black font-bold data-[state=active]:text-white data-[state=active]:border-black data-[state=active]:bg-black"
                value="tab3"
              >
                All
              </Tabs.Trigger>
            </Tabs.List>
          </div>
          <Tabs.Content className="" value="tab1">
            <div className="p-8 rounded-2xl border border-white bg-[#FFFFFF80]">
              <div className="overflow-x-auto">
                <table className="w-full border-separate border-spacing-y-3.5">
                  {/* Header */}
                  <thead>
                    <tr className="text-left text-black">
                      <th className="p-4 font-bold ">Event Name</th>
                      <th className="p-4 font-bold ">Date & time</th>
                      <th className="p-4 font-bold ">Location</th>
                      <th className="p-4 font-bold ">Event ID</th>
                      <th className="p-4 font-bold text-right">Actions</th>
                    </tr>
                  </thead>

                  {/* Body */}
                  <tbody className="text-sm">
                    {/* Active Row */}
                    <tr className="bg-white font-medium hover:bg-[#FEEE95] transition-colors group ">
                      <td className="p-4 rounded-l-2xl">Tech Summit'25</td>
                      <td className="p-4">24 Aug' 25 8.00 PM</td>
                      <td className="p-4">Toronto, CA</td>
                      <td className="p-4">544HGJGJ47G</td>
                      <td className="p-4 rounded-r-2xl">
                        <div className="flex items-center gap-5 justify-end">
                          <button className="w-9 h-9 rounded-full bg-[#E9E9E999] flex items-center justify-center cursor-pointer group-hover:bg-white transition-colors">
                            <IconEye color="#000" />
                          </button>
                          <button className="flex items-center gap-1 cursor-pointer">
                            <Edit color={"#000"} /> Edit
                          </button>
                        </div>
                      </td>
                    </tr>

                    {/* Other Rows */}
                    <tr className="bg-white font-medium hover:bg-[#FEEE95] transition-colors group mb-3.5">
                      <td className="p-4 rounded-l-2xl">Tech Summit'25</td>
                      <td className="p-4">24 Aug' 25 8.00 PM</td>
                      <td className="p-4">Toronto, CA</td>
                      <td className="p-4">544HGJGJ47G</td>
                      <td className="p-4 rounded-r-2xl">
                        <div className="flex items-center gap-5 justify-end">
                          <button className="w-9 h-9 rounded-full bg-[#E9E9E999] flex items-center justify-center cursor-pointer group-hover:bg-white transition-colors">
                            <IconEye color="#000" />
                          </button>
                          <button className="flex items-center gap-1 cursor-pointer">
                            <Edit color={"#000"} /> Edit
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr className="bg-white font-medium hover:bg-[#FEEE95] transition-colors group mb-3.5">
                      <td className="p-4 rounded-l-2xl">Tech Summit'25</td>
                      <td className="p-4">24 Aug' 25 8.00 PM</td>
                      <td className="p-4">Toronto, CA</td>
                      <td className="p-4">544HGJGJ47G</td>
                      <td className="p-4 rounded-r-2xl">
                        <div className="flex items-center gap-5 justify-end">
                          <button className="w-9 h-9 rounded-full bg-[#E9E9E999] flex items-center justify-center cursor-pointer group-hover:bg-white transition-colors">
                            <IconEye color="#000" />
                          </button>
                          <button className="flex items-center gap-1 cursor-pointer">
                            <Edit color={"#000"} /> Edit
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Tabs.Content>
          <Tabs.Content className="" value="tab2">
            <p>Past</p>
          </Tabs.Content>
          <Tabs.Content className="" value="tab3">
            <p>All</p>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  );
}
