import React from "react";
import StatsWidget from "../../components/common/StatsWidget";
import VisitorTable from "../../components/dashboard/UserTable/VisitorTable";

export default function index() {
  const visitorsStats = [
    {
      heading: "Total Visitors",
      value: "10K",
      percentage: "-10",
      icon: "",
    },
    {
      heading: "24 Hr Visitors",
      value: "1.3k",
      percentage: "21",
      icon: "",
    },
    {
      heading: "Visitors for a week",
      value: "1.3K",
      percentage: "21",
      icon: "",
    },
    {
      heading: "Visitors for a month",
      value: "1.3k",
      percentage: "21",
      icon: "",
    },
  ];
  return (
    <main className="p-6 sm:p-10 space-y-6 ">
      <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        {visitorsStats &&
          visitorsStats.map((stats, index) => {
            return (
              <StatsWidget
                heading={stats.heading}
                value={stats.value}
                percentage={stats.percentage}
                icon={""}
                key={index}
              />
            );
          })}
      </section>
      <section>
        <div className="w-full bg-white rounded-md ">
          <h1 className="ml-4 heading-widgets" >Recent Wallet Worth</h1>
          <VisitorTable/>
        </div>
      </section>
    </main>
  );
}
