import { useState } from "react";
import { NavLink, Outlet } from "react-router";

export default function Layout() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <header className="h-20 border-b border-b-gray-400 flex items-center justify-between pr-7">
        <NavLink
          to="/"
          className={`flex w-96 border-r border-r-gray-400 justify-center items-center h-20`}
        >
          <img
            src="/images/sunset-rocks-logo.webp"
            alt=""
            className="w-[248px]"
          />
        </NavLink>
        <div className="flex gap-7">
          <button className="border border-gray-400 rounded-2xl px-5 py-2 flex items-center gap-3.5 cursor-pointer hover:bg-gray-300 transition-colors">
            <img src="/images/scan-qr.svg" alt="" /> <span>Scan QR Code</span>
          </button>
          <button className="flex items-center gap-1">
            <img src="/images/icon-user.svg" alt="" />
            <img src="/images/chevron-down.svg" alt="" />
          </button>
        </div>
      </header>
      <div className="flex w-full">
        {/* Sidebar */}
        <aside
          className={`bg-[#FEEE95] overflow-hidden border-r border-r-gray-400
                    transition-[width] duration-300 ease-in-out flex flex-col justify-between py-4 
                    ${open ? "w-96" : "w-16"}`}
        >
          {/* Sidebar content (optional) */}
          <div className={`transition-opacity duration-200`}>
            {/* ... */}
            <nav>
              <ul className="flex flex-col gap-5 mt-5">
                <li>
                  <NavLink
                    to="/dashboard"
                    className={`text-2xl flex pl-4 pr-4 leading-6 ${
                      open ? "gap-4" : "gap-0 justify-center"
                    }`}
                  >
                    <img src="/images/icon-nav-config.svg" alt="" />
                    {open ? <span>Dashboard</span> : null}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/events"
                    className={`text-2xl flex pl-4 pr-4 leading-6 ${
                      open ? "gap-4" : "gap-0 justify-center"
                    }`}
                  >
                    <img src="/images/icon-nav-config.svg" alt="" />
                    {open ? <span>Events</span> : null}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/registered-users"
                    className={`text-2xl flex pl-4 pr-4 leading-6 ${
                      open ? "gap-4" : "gap-0 justify-center"
                    }`}
                  >
                    <img src="/images/icon-nav-config.svg" alt="" />
                    {open ? <span>Registered Users</span> : null}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/config"
                    className={`text-2xl flex pl-4 pr-4 leading-6 ${
                      open ? "gap-4" : "gap-0 justify-center"
                    }`}
                  >
                    <img src="/images/icon-nav-config.svg" alt="" />
                    {open ? <span>Configuration</span> : null}
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
        <main className="flex-1 min-h-[calc(100dvh-5rem)]">
          {/* your content */}
          <Outlet />
        </main>
      </div>
    </>
  );
}
