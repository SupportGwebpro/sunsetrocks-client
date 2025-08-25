import * as Tabs from "@radix-ui/react-tabs";
import { ChevronDown, Edit, IconEye } from "../components/SVG";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import DatePicker from "react-datepicker";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

// Custom styles using Tailwind classes
const customStyles = {
  container: (provided) => ({
    ...provided,
    flexGrow: 1, // <-- make the wrapper grow
  }),
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "#FBFBFB",
    borderColor: state.isFocused ? "#F9298C" : "#EAF0FF",
    borderRadius: "0.75rem", // Tailwind rounded-xl
    padding: "0.5rem 1rem", // Tailwind py-2 px-4
    boxShadow: "none",
    "&:hover": {
      borderColor: "#F9298C",
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#A0AEC0", // Tailwind text-gray-400
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "0.75rem",
    backgroundColor: "#FBFBFB",
    marginTop: 4,
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused
      ? "#FCE4EC" // Tailwind pink-100
      : "transparent",
    color: "#1A202C", // Tailwind text-gray-900
    cursor: "pointer",
    padding: "0.5rem 1rem",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#1A202C",
  }),
};

export default function Events() {
  const [selectedDate, setSelectedDate] = useState();
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
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button className="border border-[#F9298C] py-4 px-8 rounded-full flex items-center gap-4 bg-white cursor-pointer">
                  <span className="text-[#F9298C] text-[28px] leading-7">
                    +
                  </span>
                  <span>Create New Event</span>
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                {/* Overlay */}
                <Dialog.Overlay className="fixed inset-0 bg-[#00001D99] animate-fadeIn" />

                {/* Content */}
                <Dialog.Content className="fixed left-1/2 top-1/2 w-[95vw] max-w-[1406px] -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white shadow-lg focus:outline-none animate-scaleIn">
                  {/* Title */}
                  <div className="py-11 pl-20 pr-32 overflow-y-auto scrollbar-thin max-h-[calc(100dvh-250px)]">
                    <Dialog.Title className="text-black font-bold text-4xl leading-12 mb-5">
                      Create Event
                    </Dialog.Title>
                    {/* Description */}
                    <Dialog.Description className="mb-12 leading-6 text-black">
                      Lorem ipsum dolor sit amet consectetur. Purus euismod
                      turpis feugiat nisl tortor amet sit. Iaculis leo nisi
                      volutpat mattis aliquam at in. Eu pulvinar nec enim
                      fermentum vestibulum dolor turpis convallis.
                    </Dialog.Description>
                    <div className="flex gap-4 items-center mb-5">
                      <label
                        htmlFor="create-event-name"
                        className="text-xl w-[170px] flex-shrink-0"
                      >
                        Event Name
                        <span className="text-[#F9298C] ">*</span>
                      </label>
                      <input
                        type="text"
                        name="create-event-name"
                        id="create-event-name"
                        placeholder="Event Name"
                        className="border py-4.5 px-8 border-[#EAF0FF] focus:border-[#F9298C] transition-colors flex-grow bg-[#FBFBFB] outline-none rounded-xl"
                      />
                    </div>

                    <div className="flex gap-4 items-center mb-5">
                      <label
                        htmlFor="create-event-description"
                        className="text-xl w-[170px] flex-shrink-0"
                      >
                        Description
                        <span className="text-[#F9298C] ">*</span>
                      </label>
                      <textarea
                        name="create-event-description"
                        id="create-event-description"
                        placeholder="Add Description"
                        className="border py-4.5 px-8 border-[#EAF0FF] focus:border-[#F9298C] transition-colors flex-grow bg-[#FBFBFB] outline-none rounded-xl min-h-[107px]"
                      />
                    </div>

                    <div className="flex gap-4 items-center mb-5">
                      <label className="text-xl w-[170px] flex-shrink-0">
                        Date
                        <span className="text-[#F9298C] ">*</span>
                      </label>
                      <div className="flex-grow">
                        <div className="grid gap-4 grid-cols-3">
                          <div>
                            <DatePicker
                              selected={selectedDate}
                              onChange={(date) => setSelectedDate(date)}
                              dateFormat="MMMM d, yyyy"
                              className="border py-4.5 px-8 border-[#EAF0FF] focus:border-[#F9298C] transition-colors bg-[#FBFBFB] outline-none rounded-xl cursor-pointer text-left relative w-full"
                              placeholderText="Event Start Date"
                            />
                          </div>
                          <div>
                            <DatePicker
                              selected={selectedDate}
                              onChange={(date) => setSelectedDate(date)}
                              dateFormat="MMMM d, yyyy"
                              className="border py-4.5 px-8 border-[#EAF0FF] focus:border-[#F9298C] transition-colors bg-[#FBFBFB] outline-none rounded-xl cursor-pointer text-left relative w-full"
                              placeholderText="Event End Date"
                            />
                          </div>
                          <div>
                            <DatePicker
                              selected={selectedDate}
                              onChange={(date) => setSelectedDate(date)}
                              dateFormat="MMMM d, yyyy"
                              className="border py-4.5 px-8 border-[#EAF0FF] focus:border-[#F9298C] transition-colors bg-[#FBFBFB] outline-none rounded-xl cursor-pointer text-left relative w-full"
                              placeholderText="Registration Closing Date"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4 items-center mb-5">
                      <label className="text-xl w-[170px] flex-shrink-0">
                        Time
                        <span className="text-[#F9298C] ">*</span>
                      </label>
                      <div className="flex-grow">
                        <div className="grid gap-4 grid-cols-3">
                          <div>
                            <DatePicker
                              selected={selectedDate}
                              onChange={(date) => setSelectedDate(date)}
                              // dateFormat="MMMM d, yyyy"
                              className="border py-4.5 px-8 border-[#EAF0FF] focus:border-[#F9298C] transition-colors bg-[#FBFBFB] outline-none rounded-xl cursor-pointer text-left relative w-full"
                              placeholderText="Select Time"
                              showTimeSelect
                              showTimeSelectOnly
                              timeIntervals={1}
                              timeCaption="Time"
                              dateFormat="h:mm aa"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4 items-center mb-5">
                      <label className="text-xl w-[170px] flex-shrink-0">
                        Country
                        <span className="text-[#F9298C] ">*</span>
                      </label>
                      <div className="flex-grow">
                        <div className="grid gap-4 grid-cols-3">
                          <div>
                            <Select
                              options={options}
                              placeholder="Select Country"
                              styles={customStyles}
                            />
                          </div>
                          <div className="flex items-center gap-4">
                            <label htmlFor="" className="text-xl flex-shrink-0">
                              State<span className="text-[#F9298C] ">*</span>
                            </label>
                            <Select
                              options={options}
                              placeholder="Select State"
                              styles={customStyles}
                            />
                          </div>
                          <div className="flex items-center gap-4">
                            <label htmlFor="" className="text-xl flex-shrink-0">
                              City<span className="text-[#F9298C] ">*</span>
                            </label>
                            <Select
                              options={options}
                              placeholder="Select City"
                              styles={customStyles}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4 items-center mb-5">
                      <label className="text-xl w-[170px] flex-shrink-0">
                        Terms and Conditions
                      </label>
                      <div className="flex-grow">
                        <textarea
                          name=""
                          id=""
                          className="border py-4.5 px-8 border-[#EAF0FF] focus:border-[#F9298C] transition-colors flex-grow bg-[#FBFBFB] outline-none rounded-xl min-h-[184px] w-full"
                          placeholder="Terms and Conditions"
                        ></textarea>
                      </div>
                    </div>

                    <div className="flex gap-4 items-center mb-5">
                      <label className="text-xl w-[170px] flex-shrink-0">
                        Miscellaneous Details
                      </label>
                      <div className="flex-grow">
                        <textarea
                          name=""
                          id=""
                          className="border py-4.5 px-8 border-[#EAF0FF] focus:border-[#F9298C] transition-colors flex-grow bg-[#FBFBFB] outline-none rounded-xl min-h-[184px] w-full"
                          placeholder="Miscellaneous Details"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-[#FFFAE3] py-12 px-24 rounded-b-3xl">
                    <p>
                      All fields marked with an asterisk (*) are required and
                      cannot be left blank.
                    </p>
                    <div className="flex gap-5">
                      <Dialog.Close asChild>
                        <button className="text-[#F9298C] font-semibold px-6 py-2.5 border border-black/50 rounded-xl hover:text-white hover:border-[#F9298C] hover:bg-[#F9298C] transition-colors">
                          Cancel
                        </button>
                      </Dialog.Close>
                      <Dialog.Close asChild>
                        <button className="text-[#F9298C]/50 bg-[#FFE6EB] font-semibold px-6 py-2.5 border border-[#FFE6EB] rounded-xl hover:text-white hover:border-[#F9298C] hover:bg-[#F9298C] transition-colors">
                          Create Event
                        </button>
                      </Dialog.Close>
                    </div>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
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
          <button className="cursor-pointer">Copy Event</button>
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
          </td>
        </tr>
      )}
    </>
  );
}
