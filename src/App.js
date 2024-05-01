import "./App.css";
import Sidebar from "./components/Sidebar";
import Summary from "./components/Summary";
import Debts from "./components/Debts";
import PayoffPlan from "./components/PayoffPlan";

import DebtsData from "./DebtsData.json";
import PayoffData from "./PayoffData.json";

function App() {
  return (
    <div className="flex font-mono">
      <Sidebar />
      <main className="flex grow flex-col p-2.5">
        <div className="m-3 flex p-3 text-lg">
          <div className="text-bold mr-2">Debt Free By: </div>
          <div className="">August 23rd 2032</div>
        </div>

        <div className="flex grow flex-col gap-5 p-2.5">
          <Summary />

          <div className="flex grow gap-5">
            <Debts data={DebtsData} />
            <PayoffPlan data={PayoffData} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
