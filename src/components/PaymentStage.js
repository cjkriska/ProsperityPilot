function PaymentStage({ months, debtName, APR }) {
  return (
    <div className="m-1 rounded bg-white p-3 text-lg shadow-lg">
      <div className="flex justify-between">
        <div className="">{months}</div>
        <div className="">{debtName}</div>
      </div>
      <div className="flex justify-between font-thin">
        <div className="">Monthly Payments</div>
        <div className="">APR: {APR}%</div>
      </div>
    </div>
  );
}

export default PaymentStage;
