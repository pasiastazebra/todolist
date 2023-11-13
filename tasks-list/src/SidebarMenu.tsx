function SidebarMenu() {
  return (
    <div className="flex flex-1">
      <aside className="flex-col bg-sky-700 text-gray-200 py-3 px-7  min-w-[230px]">
        <div className="flex flex-col items-left">
          <h1 className="text-2xl font-bold">Tasks system</h1>
        </div>
        <div className="flex flex-col items-left mt-4">
          <div className="inline-flex flex-col items-start bg-sky-600/50 rounded-lg p-3 my-2 w-[100%]">
            <h2 className="select-none text-lg font-semibold">Tasks</h2>
            <div className="inline-flex flex-col items-start ml-5">
              <button className="hover:bg-sky-500/50 duration-150 w-[100%] text-left px-2 rounded-md">
                Planed
              </button>
              <button className="hover:bg-sky-500/50 duration-150 w-[100%] text-left px-2 rounded-md">
                Ongoing
              </button>
              <button className="hover:bg-sky-500/50 duration-150 w-[100%] text-left px-2 rounded-md">
                Completed
              </button>
            </div>
          </div>
          <div className="inline-flex flex-col items-start bg-sky-600/50 rounded-lg p-3 my-2 ">
            <h2 className="select-none text-lg font-semibold">Setting</h2>
            <div className="inline-flex flex-col items-start ml-5">
              <button className="hover:bg-sky-500/50 duration-150 w-[100%] text-left px-2 rounded-md">
                Dark mode
              </button>
              <button className="hover:bg-sky-500/50 duration-150 w-[100%] text-left px-2 rounded-md">
                Statuses
              </button>
              <button className="hover:bg-sky-500/50 duration-150 w-[100%] text-left px-2 rounded-md">
                Clear all data
              </button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default SidebarMenu;
