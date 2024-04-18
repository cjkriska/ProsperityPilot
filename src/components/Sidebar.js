import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";

import { useState } from "react";

function Sidebar() {
  const [open, setOpen] = useState(true);

  const openClosedStyling = {
    open: "w-64 transition ease-in-out duration-300 h-lvh bg-slate-900 pt-7",
    closed: "w-16 transition ease-in-out duration-300 h-lvh bg-slate-900 pt-7",
  };

  const handleToggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <div className={open ? openClosedStyling.open : openClosedStyling.closed}>
      <button
        className="self-start self-center justify-self-end bg-transparent pl-5 text-gray-400"
        onClick={handleToggleSidebar}
      >
        {open ? (
          <KeyboardDoubleArrowLeftIcon />
        ) : (
          <KeyboardDoubleArrowRightIcon />
        )}
      </button>
      <div className="flex cursor-pointer items-center px-5 py-2.5 text-gray-400">
        <HomeIcon />
        <span className={open ? "pl-4" : "invisible pl-4"}>Home</span>
      </div>
      <div className="flex cursor-pointer items-center px-5 py-2.5 text-gray-400">
        <SettingsIcon />
        <span className={open ? "pl-4" : "invisible pl-4"}>Settings</span>
      </div>
    </div>
  );
}

export default Sidebar;
