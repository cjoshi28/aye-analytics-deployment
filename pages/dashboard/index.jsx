import React from 'react'
import StatsWidget from '../../components/common/StatsWidget'
import dynamic from 'next/dynamic';
import Referrers from '../../components/dashboard/Referrers'
import UserTable from '../../components/dashboard/UserTable/UserTable'
import Sidebar from '../../components/dashboard/Sidebar';
import Header from '../../components/dashboard/Header';

const Chart = dynamic(() => { return import('../../components/dashboard/Chart') }, { ssr: false });

export default function index() {

    const dashboardStats = [
        {
            heading:"Total Visitors",
            value:"10K",
            percentage:"-10",
            icon:"",
        },
        {
            heading:"Wallet Connected",
            value:"120",
            percentage:"20",
            icon:"",
        },
        {
            heading:"NFT Holders",
            value:"1.2K",
            percentage:"0.5",
            icon:"",
        },
        {
            heading:"Wallet Worth",
            value:"2K",
            percentage:"40",
            icon:"",
        }
    ]
    return (
        <div className="flex bg-[#F8FAFC] max-h-screen ">
            <Sidebar/>
            <div className="flex-grow text-gray-800 mt-[-5px] max-h-[100vh] overflow-scroll overflow-x-hidden">
                <Header/>
                <main className="p-6 sm:p-10 space-y-6 ">
                    <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                        {
                            dashboardStats && dashboardStats.map((stats,index) => {
                                return (
                                    <StatsWidget heading={stats.heading} value={stats.value} percentage={stats.percentage} icon={""} key={index} />
                                )
                            })
                        }
                    </section>
                    <section className='flex flex-col lg:flex-row bg-[#F8FAFC] lg:space-x-6'>
                        <div className='basis-full lg:basis-1/2 rounded-lg bg-'>
                            <div className='mt-5 font-[DM-sans] first-letter flex flex-row justify-between '>
                                <span className='ml-4'>Visitors</span>
                                <div className='te items-end'>
                                    <span className='mr-4'>
                                        <select className="flat-select bg-white border border-black rounded-xl text-xs">
                                            <option className="text-xs">05-10 May</option>
                                            <option className="text-xs" >16-25 Jun</option>
                                            <option className="text-xs" >20-30 Jul</option>
                                        </select>                 
                                    </span>
                                </div>
                            </div>
                            <Chart />
                        </div>
                        <div className='basis-full lg:basis-1/2 rounded-lg bg-[#F8FAFC  ] mt-6 lg:mt-0'>
                            <div className='mt-5 font-[DM-sans] first-letter  flex flex-row  justify-between '>
                                <span className='ml-4'>Recent Wallet Worth</span>
                                <div className='text-[#EE61C9]  items-end'>
                                    <span className='mr-4'>View all</span>
                                </div>
                            </div>
                            <UserTable />
                        </div>
                    </section>
                    <section className='w-full'>
                        <Referrers />
                    </section>
                </main>
            </div>
        </div >
    )
}
