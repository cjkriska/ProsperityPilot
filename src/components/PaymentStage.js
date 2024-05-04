function PaymentStage({ stage }) {
  return (
    <div className="m-1 rounded bg-white p-3 text-lg shadow-lg">
      <div className="flex justify-between">
        <div className="">{stage.months}</div>
        <div className="">{stage.debtName}</div>
      </div>
      <div className="flex justify-between font-thin">
        <div className="">Monthly Payments</div>
        <div className="">APR: {stage.APR}%</div>
      </div>
    </div>
  );
}

export default PaymentStage;
