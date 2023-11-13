function SidebarMenu() {
  return (
    <div className="flex flex-1">
      <aside className="flex-col bg-indigo-600 text-white py-3 pl-7 min-w-[200px] w-[200px] ">
        <div className="flex flex-col items-left">
          <h1 className="text-2xl font-bold">Menu</h1>
        </div>
        <div className="flex flex-col items-left mt-4">
          <div className="inline-flex flex-col items-start">
            <button>Tasks</button>
            <div className="inline-flex flex-col items-start ml-5">
              <button>Planed</button>
              <button>Ongoing</button>
              <button>Completed</button>
            </div>
          </div>
          <div className="inline-flex flex-col items-start">
            <button>Settings</button>
            <div className="inline-flex flex-col items-start ml-5">
              <button>Dark mode</button>
              <button>Custom statuses</button>
              <button>Clear all data</button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default SidebarMenu;
