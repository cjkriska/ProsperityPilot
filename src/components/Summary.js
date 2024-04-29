function Summary() {
  return (
    <div className="text-bold flex h-1/3 flex-col rounded bg-slate-200 p-3 text-lg shadow-lg">
      <h1 className="mb-3">Summary</h1>
      <div className="grow rounded bg-slate-100 shadow-inner">
        <div className="w-1/4 p-3">
          <div className="flex justify-between">
            <div className="">Total Balance: </div>
            <div className="font-thin">${"40,347"}</div>
          </div>
          <div className="flex justify-between">
            <div className="">Monthly Payment: </div>
            <div className="font-thin">${769.72}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
