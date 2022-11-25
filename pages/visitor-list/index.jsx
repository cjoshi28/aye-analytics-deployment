import React from "react";
import StatsWidget from "../../components/common/StatsWidget";
import VisitorTable from "../../components/dashboard/UserTable/VisitorTable";

export default function Index() {
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
    <main className="p-6 sm:p-10 space-y-6 dark:bg-light-black">
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
        <div className="bg-white rounded-md dark:bg-light-black">
          <div className="w-full  rounded-md  flex justify-between">
            <h1 className="ml-4 heading-widgets  dark:text-white mt-4" >Recent Wallet Worth</h1>
            <h1 className="ml-4 heading-widgets  mt-4 mr-5 text-fusicia-color dark:text-fusicia-color" >View all</h1>
          </div>
          <VisitorTable />
        </div>
      </section>
    </main>
  );
}
