import React from "react";
import CashBoard from "./CashBoard";
import CategorySlider from "./CategorySlider";
import Graph from "./Graph";

const Dashboard = () => {
  return (
    <div className="ms-[88px] grid grid-cols-3 gap-8 p-7">
      <CashBoard />
      <Graph />
      <CategorySlider />
      <Graph />
    </div>
  );
};

export default Dashboard;
