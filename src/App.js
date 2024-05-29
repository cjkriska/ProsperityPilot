import "./App.css";
import Sidebar from "./components/Sidebar";
import Summary from "./components/Summary";
import Debts from "./components/Debts";
import PayoffPlan from "./components/PayoffPlan";

import PayoffData from "./PayoffData.json";
import DebtsData from "./DebtsData.json";
import { useEffect, useState } from "react";

function App() {
  const [debtsData, setDebtsData] = useState([]);
  const [payoffData, setPayoffData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/debts")
      .then((res) => res.json())
      .then((json) => setDebtsData(json))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/testCalculatePayoffStages/100")
      .then((res) => res.json())
      .then((json) => setPayoffData(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex grow flex-col p-2.5">
        <div className="m-3 flex p-3 text-lg">
          <div className="text-bold mr-2">Debt Free By: </div>
          <div className="">August 23rd 2032</div>
        </div>

        <div className="flex grow flex-col gap-5 p-2.5">
          <Summary />

          <div className="flex grow gap-5">
            <Debts data={debtsData} />
            <PayoffPlan data={payoffData} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
