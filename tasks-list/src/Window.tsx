function Window() {
  return (
    <div className="bg-stone-300 h-[250px] w-[250px] rounded-lg grid grid-cols-1">
      <div className="bg-amber-500 rounded-t-lg flex">
        <p>task1</p>
        <button>🗑️</button>
        <button>✏️</button>
        <button>❌</button>
      </div>
      <div>
        <div>
          <p>Status:</p>
          <input list="Status" value="Planned" />
          <datalist id="Status">
            <option value="Planned" />
            <option value="Ongoing" />
            <option value="Completed" />
          </datalist>
        </div>
        <div>
          <p>Priority:</p>
          <input list="Priority" value="OOO" />
          <datalist id="Priority">
            <option value="OOO" />
            <option value="OO" />
            <option value="O" />
          </datalist>
        </div>
        <div>
          <p>Description:</p>
          <textarea value="Lorem ipsum dolor sit amet."></textarea>
        </div>
      </div>
    </div>
  );
}

export default Window;
