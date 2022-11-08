import React from 'react'
import StatsWidget from '../../components/common/StatsWidget'
import dynamic from 'next/dynamic';
import Referrers from '../../components/dashboard/Referrers'
import UserTable from '../../components/dashboard/UserTable/UserTable';

const Chart = dynamic(() => { return import('../../components/dashboard/Chart') }, { ssr: false });

export default function index() {

  const dashboardStats = [
    {
      heading: "Total Visitors",
      value: "10K",
      percentage: "-10",
    },
    {
      heading: "Wallet Connected",
      value: "120",
      percentage: "20",
    },
    {
      heading: "NFT Holders",
      value: "1.2K",
      percentage: "0.5"
    },
    {
      heading: "Wallet Worth",
      value: "2K",
      percentage: "40",
    }
  ]
  return (
    <main className="p-6 sm:p-10 space-y-6 ">
      <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* {
          dashboardStats && dashboardStats.map((stats, index) => {
            return (
              <StatsWidget heading={stats.heading} value={stats.value} percentage={stats.percentage} icon={stats.icon} key={index} />
            )
          })
        } */}
        <StatsWidget heading={dashboardStats[0].heading} value={dashboardStats[0].value} percentage={dashboardStats[0].percentage} />
        <StatsWidget heading={dashboardStats[1].heading} value={dashboardStats[1].value} percentage={dashboardStats[1].percentage} />
        <StatsWidget heading={dashboardStats[2].heading} value={dashboardStats[2].value} percentage={dashboardStats[2].percentage} />
        <StatsWidget heading={dashboardStats[3].heading} value={dashboardStats[3].value} percentage={dashboardStats[3].percentage} />



      </section>
      <section className='flex flex-col lg:flex-row lg:space-x-6'>
        <div className='basis-full lg:basis-1/2 rounded-lg bg-white'>
          <div className='mt-5 flex flex-row justify-between'>
            <span className='ml-4 heading-widgets'>Visitors</span>
            <div className='items-end'>
              <div className='mr-4 bg-white border-[1px] border-gray px-4 py-2 rounded-xl' >
                <select className="flat-select font-[DM-Sans] bg-white text-xs max-h-[20px] focus:outline-none focus:shadow-white">
                  <option className="text-xs">05-10 May</option>
                  <option className="text-xs" >16-25 Jun</option>
                  <option className="text-xs" >20-30 Jul</option>
                </select>
              </div>
            </div>
          </div>
          <Chart />
        </div>
        <div className='basis-full lg:basis-1/2 rounded-lg bg-white mt-6 lg:mt-0'>
          <div className='mt-5 font-[DM-sans] first-letter  flex flex-row  justify-between '>
            <span className='ml-4 heading-widgets'>Recent Wallet Worth</span>
            <div className='text-voilet-light-8  items-end'>
              <span className='mr-4 heading-widgets'>View all</span>
            </div>
          </div>
          <UserTable />
        </div>
      </section>
      <section className='w-full'>
        <Referrers />
      </section>
    </main>
  )
}
