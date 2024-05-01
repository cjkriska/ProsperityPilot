import PaymentStage from "./PaymentStage";

function PayoffPlan({ data }) {
  return (
    <div className="text-bold flex grow flex-col rounded bg-slate-200 p-3 text-lg shadow-lg">
      <h1 className="mb-3">Payoff Plan</h1>
      <div className="grow rounded bg-slate-100 p-3 shadow-inner">
        <div className="mb-3 flex justify-center">
          <div>Total Monthly Payment:</div>
          <div className="ml-2 font-thin">
            ${569.72} + $
            <input className="w-12" value={200} /> = ${769.72}
          </div>
        </div>
        {data.map((stage, index) => {
          return <PaymentStage key={index} stage={stage} />;
        })}
      </div>
    </div>
  );
}

export default PayoffPlan;
