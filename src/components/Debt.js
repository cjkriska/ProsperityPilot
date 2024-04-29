function Debt({ debt }) {
  return (
    <div className="m-1 rounded bg-slate-100 p-3 text-lg shadow-lg">
      <div className="flex justify-between">
        <div className="text-xl">{debt.DebtName}</div>
        <div className="">${debt.Balance.toLocaleString()}</div>
      </div>
      <div className="flex justify-between">
        <div className="text-sm font-thin">{debt.DebtType}</div>
        <div className="text-sm font-thin">APR: {debt.APR}%</div>
      </div>
    </div>
  );
}

export default Debt;
