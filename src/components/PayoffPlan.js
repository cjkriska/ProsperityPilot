import PaymentStage from "./PaymentStage";

function PayoffPlan() {
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
        <PaymentStage months={12} debtName={"Discover"} APR={18.1} />
        <PaymentStage months={10} debtName={"Earnest"} APR={4.09} />
        <PaymentStage months={11} debtName={"FedLoan"} APR={3.39} />
      </div>
    </div>
  );
}

export default PayoffPlan;
