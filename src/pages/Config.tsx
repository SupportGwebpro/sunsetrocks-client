import * as Tabs from "@radix-ui/react-tabs";
export default function Config() {
  return (
    <div className="px-12 py-10">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-4xl font-bold">Configuration</h1>
        <div className="flex items-center gap-5">
          <button className="border border-[#15CD37] py-4 px-8 rounded-full flex items-center gap-4 bg-white cursor-pointer cursor-pointer">
            <span className="text-[#15CD37] text-[28px] leading-7">+</span>
            <span>Add New User Type</span>
          </button>
          <button className="border border-[#F9298C] py-4 px-8 rounded-full flex items-center gap-4 bg-white cursor-pointer cursor-pointer">
            <span className="text-[#F9298C] text-[28px] leading-7">-</span>
            <span>Delete User Type</span>
          </button>
        </div>
      </div>
      <div>
        <Tabs.Root defaultValue="0" orientation="vertical">
          <Tabs.List aria-label="tabs" className="flex items-center gap-4">
            <Tabs.Trigger
              value="0"
              className="border border-[#F9298C] bg-white text-lg text-[#F9298C] font-medium py-4 px-8 data-[state=active]:bg-[#F9298C] data-[state=active]:text-white transition-colors cursor-pointer min-w-[226px]"
            >
              VIP
            </Tabs.Trigger>
            <Tabs.Trigger
              value="1"
              className="border border-[#F9298C] bg-white text-lg text-[#F9298C] font-medium py-4 px-8 data-[state=active]:bg-[#F9298C] data-[state=active]:text-white transition-colors cursor-pointer min-w-[226px]"
            >
              Regular
            </Tabs.Trigger>
            <Tabs.Trigger
              value="2"
              className="border border-[#F9298C] bg-white text-lg text-[#F9298C] font-medium py-4 px-8 data-[state=active]:bg-[#F9298C] data-[state=active]:text-white transition-colors cursor-pointer min-w-[226px]"
            >
              Guest
            </Tabs.Trigger>
          </Tabs.List>
          <div className="flex justify-end mb-4">
            <button className="bg-white border border-[#EAF0FF] rounded-xl py-2 px-7 cursor-pointer">
              Add Badge category
            </button>
          </div>
          <div className="p-8 rounded-2xl border border-white bg-[#FFFFFF80]">
            <Tabs.Content value="0">
              <p className="mb-3.5 text-black/50">Description</p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Purus euismod turpis
                feugiat nisl tortor amet sit. Iaculis leo nisi volutpat mattis
                aliquam at in. Eu pulvinar nec enim fermentum vestibulum dolor
                turpis convallis.
              </p>
              <div className="grid grid-cols-2 gap-x-5 gap-y-4 mt-9">
                <div className="py-4 px-9 bg-white shadow-[8px_8px_16px_0_rgba(0,0,0,0.02)] border border-white flex items-center justify-between rounded-2xl">
                  <div>
                    <p className="text-xl font-bold">Blue</p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <button className="bg-[#F9298C] border border-[#F9298C] rounded-xl py-2 px-7 hover:bg-[#e0257e] hover:border-[#e0257e] transition-colors text-white cursor-pointer">
                      Edit
                    </button>
                    <button className="bg-[#F5F8FF] border border-[#EAF0FF] rounded-xl py-2 px-7 hover:bg-[#d3d8e6] hover:border-[#d3d8e6] transition-colors text-black cursor-pointer">
                      Delete
                    </button>
                  </div>
                </div>

                <div className="py-4 px-9 bg-white shadow-[8px_8px_16px_0_rgba(0,0,0,0.02)] border border-white flex items-center justify-between rounded-2xl">
                  <div>
                    <p className="text-xl font-bold">Red</p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <button className="bg-[#F9298C] border border-[#F9298C] rounded-xl py-2 px-7 hover:bg-[#e0257e] hover:border-[#e0257e] transition-colors text-white cursor-pointer">
                      Edit
                    </button>
                    <button className="bg-[#F5F8FF] border border-[#EAF0FF] rounded-xl py-2 px-7 hover:bg-[#d3d8e6] hover:border-[#d3d8e6] transition-colors text-black cursor-pointer">
                      Delete
                    </button>
                  </div>
                </div>

                <div className="py-4 px-9 bg-white shadow-[8px_8px_16px_0_rgba(0,0,0,0.02)] border border-white flex items-center justify-between rounded-2xl">
                  <div>
                    <p className="text-xl font-bold">Yellow</p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <button className="bg-[#F9298C] border border-[#F9298C] rounded-xl py-2 px-7 hover:bg-[#e0257e] hover:border-[#e0257e] transition-colors text-white cursor-pointer">
                      Edit
                    </button>
                    <button className="bg-[#F5F8FF] border border-[#EAF0FF] rounded-xl py-2 px-7 hover:bg-[#d3d8e6] hover:border-[#d3d8e6] transition-colors text-black cursor-pointer">
                      Delete
                    </button>
                  </div>
                </div>

                <div className="py-4 px-9 bg-white shadow-[8px_8px_16px_0_rgba(0,0,0,0.02)] border border-white flex items-center justify-between rounded-2xl">
                  <div>
                    <p className="text-xl font-bold">Green</p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <button className="bg-[#F9298C] border border-[#F9298C] rounded-xl py-2 px-7 hover:bg-[#e0257e] hover:border-[#e0257e] transition-colors text-white cursor-pointer">
                      Edit
                    </button>
                    <button className="bg-[#F5F8FF] border border-[#EAF0FF] rounded-xl py-2 px-7 hover:bg-[#d3d8e6] hover:border-[#d3d8e6] transition-colors text-black cursor-pointer">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </Tabs.Content>
            <Tabs.Content value="1">
              <p className="mb-3.5 text-black/50">Description</p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Purus euismod turpis
                feugiat nisl tortor amet sit. Iaculis leo nisi volutpat mattis
                aliquam at in. Eu pulvinar nec enim fermentum vestibulum dolor
                turpis convallis.
              </p>
            </Tabs.Content>
            <Tabs.Content value="2">
              <p className="mb-3.5 text-black/50">Description</p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Purus euismod turpis
                feugiat nisl tortor amet sit. Iaculis leo nisi volutpat mattis
                aliquam at in. Eu pulvinar nec enim fermentum vestibulum dolor
                turpis convallis.
              </p>
            </Tabs.Content>
          </div>
        </Tabs.Root>
      </div>
    </div>
  );
}
