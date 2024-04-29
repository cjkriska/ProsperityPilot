import "./App.css";
import Sidebar from "./components/Sidebar";
import Summary from "./components/Summary";
import Debts from "./components/Debts";
import PayoffPlan from "./components/PayoffPlan";
import DebtsData from "./data.json";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex grow flex-col p-2.5">
        <div className="text-bold text-lg">Debt Free By</div>

        <div className="flex grow flex-col gap-5 p-2.5">
          <Summary />

          <div className="flex grow gap-5">
            <Debts data={DebtsData} />
            <PayoffPlan />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
