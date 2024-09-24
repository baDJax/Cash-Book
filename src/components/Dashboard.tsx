import React from "react";
import CashBoard from "./CashBoard";
import CategorySlider from "./CategorySlider";

const Dashboard = () => {
  return (
    <div className="ms-[88px] max-w-[856px]">
      <div className="p-7">
        <CashBoard />
        <CategorySlider />
      </div>
    </div>
  );
};

export default Dashboard;
