import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex grow flex-col p-2.5">
        <div className="">Debt Free By</div>

        <div className="flex grow flex-col gap-5 p-2.5">
          <div className="flex h-1/2 flex-col rounded bg-slate-200 p-3 shadow-lg">
            Summary
          </div>

          <div className="flex grow gap-5">
            <div className="w-1/2 rounded bg-slate-200 p-3 shadow-lg">
              Debts
            </div>
            <div className="grow rounded bg-slate-200 p-3 shadow-lg">
              Payoff Plan
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
