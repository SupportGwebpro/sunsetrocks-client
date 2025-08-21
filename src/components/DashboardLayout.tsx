import { useState } from "react";
import { NavLink, Outlet } from "react-router";
import { Configuration, Events, IconDashboard, RegisteredUsers } from "./SVG";

export default function Layout() {
  const [open, setOpen] = useState(true);

  return (
    <div className="max-w-full bg-[#F5F8FF]">
      <header className="h-20  flex items-center justify-between pr-7 bg-white rounded-b-2xl">
        <NavLink
          to="/"
          className={`flex w-96  justify-center items-center h-20`}
        >
          <img
            src="/images/sunset-rocks-logo.webp"
            alt=""
            className="w-[248px]"
          />
        </NavLink>
        <div className="flex gap-7">
          <button className=" rounded-2xl px-5 py-2 flex items-center gap-3.5 cursor-pointer hover:bg-gray-300 transition-colors">
            <img src="/images/scan-qr.svg" alt="" /> <span>Scan QR Code</span>
          </button>
          <button className="flex items-center gap-1">
            <img src="/images/icon-user.svg" alt="" />
            <img src="/images/chevron-down.svg" alt="" />
          </button>
        </div>
      </header>
      {/* min-h-[calc(100dvh-5rem)]  mt-6  mb-6 */}
      <div className="flex max-w-full w-full mt-6 min-h-[calc(100dvh-6.5rem)]">
        {/* Sidebar */}
        <aside
          className={`bg-[#FEEE95] overflow-hidden rounded-tr-2xl
                    transition-[width] duration-300 ease-in-out flex flex-col justify-between py-4 shrink-0
                    ${open ? "w-96" : "w-16"}`}
        >
          {/* Sidebar content (optional) */}
          <div className={`transition-opacity duration-200`}>
            {/* ... */}
            <nav>
              <ul className="flex flex-col gap-14 mt-5">
                <li>
                  <NavLink to="/dashboard" end>
                    {({ isActive }) => (
                      <div
                        className={`text-2xl flex items-center pl-4 pr-4 leading-6 ${
                          open ? "gap-4" : "gap-0 justify-center"
                        } ${isActive ? "font-bold" : "font-normal"}`}
                      >
                        <IconDashboard color={isActive ? "#F9298C" : "#000"} />
                        {open ? <span>Dashboard</span> : null}
                      </div>
                    )}
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/events">
                    {({ isActive }) => (
                      <div
                        className={`text-2xl flex items-center pl-4 pr-4 leading-6 ${
                          open ? "gap-4" : "gap-0 justify-center"
                        } ${isActive ? "font-bold" : "font-normal"}`}
                      >
                        <Events color={isActive ? "#F9298C" : "#000"} />
                        {open ? <span>Events</span> : null}
                      </div>
                    )}
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/registered-users">
                    {({ isActive }) => (
                      <div
                        className={`text-2xl flex items-center pl-4 pr-4 leading-6 ${
                          open ? "gap-4" : "gap-0 justify-center"
                        } ${isActive ? "font-bold" : "font-normal"}`}
                      >
                        <RegisteredUsers
                          color={isActive ? "#F9298C" : "#000"}
                        />
                        {open ? <span>Registered Users</span> : null}
                      </div>
                    )}
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/config">
                    {({ isActive }) => (
                      <div
                        className={`text-2xl flex items-center pl-4 pr-4 leading-6 ${
                          open ? "gap-4" : "gap-0 justify-center"
                        } ${isActive ? "font-bold" : "font-normal"}`}
                      >
                        <Configuration color={isActive ? "#F9298C" : "#000"} />
                        {open ? <span>Configuration</span> : null}
                      </div>
                    )}
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <button
            onClick={() => setOpen((o) => !o)}
            className="ml-auto m-3 rounded-lg px-3 py-1 bg-black/10 hover:bg-black/20 inline-block"
            aria-label="Toggle sidebar"
          >
            {open ? <>&larr;</> : <>&rarr;</>}
          </button>
        </aside>

        {/* Main */}
        <main className="flex-grow overflow-hidden ">
          {/* your content */}
          <div>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
