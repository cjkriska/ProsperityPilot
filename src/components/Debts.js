import Debt from "./Debt";

function Debts({ data }) {
  return (
    <div className="text-bold w-1/2 rounded bg-slate-200 p-3 text-lg shadow-lg">
      <h1 className="mb-3">Debts</h1>
      {data.map((debt, index) => {
        return <Debt key={index} debt={debt} />;
      })}
      <div className="">Total Debt: </div>
    </div>
  );
}

export default Debts;
