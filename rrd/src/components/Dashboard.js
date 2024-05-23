import React from "react";
import { useLocation } from "react-router-dom";
import TopNavigation from "./TopNavigation";

function Dashboard() {
  let loc = useLocation();

  return (
    <div>
      <TopNavigation />
      <h2>Welcome User</h2>
      <h3>
        {loc && loc.state && loc.state.msg ? loc.state.msg : "Invalid Entry"}
      </h3>
    </div>
  );
}

export default Dashboard;
