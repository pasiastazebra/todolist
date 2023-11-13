function TasksBar() {
  return (
    <div className="flex flex-1">
      <aside className="flex-col bg-cyan-700 text-gray-200 py-3 px-7  min-w-[20vw]">
        <div className="flex flex-col items-left">
          <h1 className="text-2xl font-bold">Planned</h1>
        </div>
        <div className="flex flex-col items-left mt-4">
          <div className="inline-flex flex-col items-start bg-cyan-600/50 rounded-lg p-3 my-2 ">
            <div className="inline-flex flex-col items-start ml-5">
              <button className="bg-green-600/50 hover:bg-green-500/50 duration-150 w-[100%] text-left px-2 rounded-md grid grid-cols-2 justify-items-end">
                <p>Add</p>
                <p>+</p>
              </button>
              <button className="hover:bg-cyan-500/50 duration-150 w-[100%] text-left px-2 rounded-md grid grid-cols-2 justify-items-end">
                <p>task1</p>
                <p>1</p>
              </button>
              <button className="hover:bg-cyan-500/50 duration-150 w-[100%] text-left px-2 rounded-md grid grid-cols-2 justify-items-end">
                <p>task2</p>
                <p>2</p>
              </button>
              <button className="hover:bg-cyan-500/50 duration-150 w-[100%] text-left px-2 rounded-md grid grid-cols-2 justify-items-end">
                <p>task3</p>
                <p>3</p>
              </button>
              <button className="hover:bg-cyan-500/50 duration-150 w-[100%] text-left px-2 rounded-md grid grid-cols-2 justify-items-end">
                <p>task4</p>
                <p>4</p>
              </button>
              <button className="hover:bg-cyan-500/50 duration-150 w-[100%] text-left px-2 rounded-md grid grid-cols-2 justify-items-end">
                <p>task5</p>
                <p>5</p>
              </button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default TasksBar;
