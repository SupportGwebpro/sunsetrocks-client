import * as Tabs from "@radix-ui/react-tabs";
import { ChevronDown, Edit, IconEye } from "../components/SVG";
import { useState } from "react";
export default function Events() {
  return (
    <div className="px-12 py-10">
      <Tabs.Root defaultValue="0">
        <div className="flex justify-between mb-10">
          <div className="flex gap-14 items-center">
            <h1 className="text-4xl font-bold ">Events</h1>
            <Tabs.List className="flex gap-4">
              <Tabs.Trigger
                value="0"
                className="border border-[#F9298C] bg-white text-lg text-[#F9298C] font-medium py-4 px-8 data-[state=active]:bg-[#F9298C] data-[state=active]:text-white transition-colors cursor-pointer"
              >
                Upcoming Events
              </Tabs.Trigger>
              <Tabs.Trigger
                value="1"
                className="border border-[#F9298C] bg-white text-lg text-[#F9298C] font-medium py-4 px-8 data-[state=active]:bg-[#F9298C] data-[state=active]:text-white transition-colors cursor-pointer"
              >
                Past Events
              </Tabs.Trigger>
            </Tabs.List>
          </div>
          <div>
            <button className="border border-[#F9298C] py-4 px-8 rounded-full flex items-center gap-4 bg-white cursor-pointer">
              <span className="text-[#F9298C] text-[28px] leading-7">+</span>{" "}
              <span>Create New Event</span>
            </button>
          </div>
        </div>
        <div>
          <Tabs.Content value="0">
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
                      <th className="p-4 font-bold "></th>
                      <th className="p-4 font-bold text-right">Actions</th>
                    </tr>
                  </thead>

                  {/* Body */}
                  <tbody className="text-sm">
                    {/* Active Row */}
                    <EventsTableRow />
                    {/* Other Rows */}
                    <EventsTableRow />
                    <EventsTableRow />
                  </tbody>
                </table>
              </div>
            </div>
          </Tabs.Content>
          <Tabs.Content value="1">Hello</Tabs.Content>
        </div>
      </Tabs.Root>
    </div>
  );
}
function EventsTableRow() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <tr
        className={` font-medium hover:bg-[#FEEE95] transition-colors group ${
          open ? "bg-[#FEEE95]" : "bg-white"
        }`}
      >
        <td className={`p-4 ${open ? "rounded-tl-2xl" : "rounded-l-2xl"}`}>
          <div className="flex gap-4 items-center">
            <button
              className="w-6 h-6 flex items-center justify-center cursor-pointer"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? (
                <span>
                  <ChevronDown />
                </span>
              ) : (
                <span className="-rotate-90">
                  <ChevronDown />
                </span>
              )}
            </button>
            <span>Tech Summit'25</span>
          </div>
        </td>
        <td className="p-4">24 Aug' 25 8.00 PM</td>
        <td className="p-4">Toronto, CA</td>
        <td className="p-4">544HGJGJ47G</td>
        <td className="p-4">
          <button>Copy Event</button>
        </td>
        <td className={`p-4 ${open ? "rounded-tr-2xl" : "rounded-r-2xl"}`}>
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
      {open && (
        <tr>
          <td colSpan={6}>
            <div
              className={`-mt-4 bg-white border border-white shadow-[8px_8px_16px_0_rgba(0,0,0,0.02)] p-4 rounded-b-2xl`}
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
                  <button className="text-white text-center font-bold py-3.5 px-4 bg-[#F9298C] rounded-xl">
                    Download Reports
                  </button>
                  <button className="text-white text-center font-bold py-3.5 px-4 bg-[#F9298C] rounded-xl">
                    Copy Link
                  </button>
                </div>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}
