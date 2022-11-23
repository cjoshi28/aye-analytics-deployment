import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import RealStatsWidget from '../../components/Real-Time-Dashboard/RealStatsWidget'
import dynamic from 'next/dynamic';
import PageTable from '../../components/dashboard/UserTable/PageTable'
import RealtimeTable from '../../components/dashboard/UserTable/RealtimeTable'
import ReferrerTable from '../../components/dashboard/UserTable/ReferrerTable'
import Map from '../../components/Real-Time-Dashboard/Map';
import RealTimeLogs from "../../components/Real-Time-Dashboard/RealTimeLogs";


const RealChart = dynamic(() => { return import('../../components/Real-Time-Dashboard/RealChart') }, { ssr: false });

export default function index() {
	const [content, setContent] = useState("");

	const realStats = [
		{
			heading: "Views",
			value: "596",
		},
		{
			heading: "Events",
			value: "4536",
		},
		{
			heading: "Visitors",
			value: "142",
		},
		{
			heading: "Countries",
			value: "5",
		}
	]
	return (
		<main className="p-6 sm:p-10 space-y-6 dark:bg-light-black ">
			<section className='xl:flex'>
				<div className="w-full xl:w-8/12  2xl:w-9/12 dark:bg-[#0C0234] pt-5 rounded-xl">
					<div className=' flex flex-row justify-between '>
						<span className='ml-4 heading-widgets dark:text-white font-[DM-sans]'>RealTime</span>
						<div className='items-end'>
							<div className='mr-4 dark:bg-light-black  bg-gray-light-2  border-[1px] border-black  dark:border-white rounded-xl px-2' >
								<select className="flat-select font-[DM-Sans] dark:bg-light-black  dark:text-white dark:focus:shadow-white text-xs max-h-[20px] focus:outline-none focus:shadow-white bg-gray-light-2 ">
									<option className="text-xs dark:text-white">All Websites</option>
									<option className="text-xs dark:text-white" >16-25 Jun</option>
									<option className="text-xs dark:text-white" >20-30 Jul</option>
								</select>
							</div>
						</div>
					</div>
					<RealChart />
				</div>
				<div className=" w-full flex-wrap md:flex-nowrap gap-4 md:gap-6 xl:gap-2 flex xl:flex-wrap xl:w-4/12 pt-5 xl:pt-0  justify-evenly">
					<RealStatsWidget heading={realStats[0].heading} value={realStats[0].value} />
					<RealStatsWidget heading={realStats[1].heading} value={realStats[1].value} />
					<RealStatsWidget heading={realStats[2].heading} value={realStats[2].value} />
					<RealStatsWidget heading={realStats[3].heading} value={realStats[3].value} />
				</div>
			</section>

			<section className='w-full'>
				<div className="bg-white rounded-md dark:bg-light-black">
					<div className="w-full  rounded-md  flex justify-between">
						<h1 className="ml-4 heading-widgets  dark:text-white mt-4" >Recent Wallet Worth</h1>
						<h1 className="ml-4 heading-widgets  mt-4 mr-5 text-fusicia-color dark:text-fusicia-color" >View all</h1>
					</div>
					<RealtimeTable />
				</div>
			</section>

			<section className='xl:flex md:gap-6'>
				<div className='basis-full  sm:w-full xl:w-4/12 lg:basis-1/2 rounded-lg dark:bg-black-color bg-white mt-6 lg:mt-0 px-5 xl:px-2'>
					<div className='mt-5 font-[DM-sans] first-letter  flex flex-row  justify-between  '>
						<span className='ml-4 heading-widgets pt-5 xl:pt-0 dark:text-white'>Referrer Report</span>
					</div >
					<ReferrerTable />
				</div>
				<div className='basis-full sm:w-full xl:w-4/12 lg:basis-1/2 rounded-lg dark:bg-black-color bg-white mt-6 lg:mt-0 px-5 xl:px-2'>
					<div className='mt-5 font-[DM-sans] first-letter  flex flex-row  justify-between '>
						<span className='ml-4 heading-widgets pt-5 xl:pt-0 dark:text-white'>Pages Report</span>
					</div >
					<PageTable />
				</div>
				<div className='basis-full sm:w-full xl:w-4/12 lg:basis-1/2 rounded-lg dark:bg-black-color bg-white mt-6 lg:mt-0 px-5 xl:px-2'>
					<div className='mt-5 font-[DM-sans] first-letter sm:mb-10  flex flex-row  justify-between '>
						<span className='ml-4 heading-widgets pt-5 xl:pt-0 dark:text-white'>Real Time Logs</span>
						<div className="mr-5">
							<EllipsisHorizonatal />
						</div>
					</div >
					<RealTimeLogs />
				</div>
			</section>

			<section className='w-full lg:flex'>
				<div className="lg:w-8/12 w-full">
					<Map setTooltipContent={setContent} />
					<ReactTooltip>{content}</ReactTooltip>
				</div>
				<div className="lg:w-4/12  w-full">
					<div className=" flex justify-center">
						<div className=" w-10/12 lg:w-10/12 lg:py-10 xl:w-8/12  xl:py-5">
							<div className="bg-white flex justify-center py-8 rounded-xl dark:bg-black-color">
								<div className="w-9/12  border-l-4 border-l-light-purple">
									<div className="px-6 lg:px-5 font-[DM-sans]" >
										<div className="my-2 font-bold  dark:text-white">Countries</div>
										<span className="bg-gray-light4 mr-4 text-light-purple p-1 rounded">
											Russia
										</span>
										<span className="bg-gray-light4 p-1 text-light-purple rounded">
											Australia
										</span>
										<div className="py-16" >
											<div className="font-bold dark:text-white " >50 Visitors</div>
											<div className="flex justify-between pt-3">
												<span className="text-gray-light-3" >Russia</span>
												<span className="text-gray-light-3" >30</span>
											</div>
											<div className="flex justify-between">
												<span className="text-gray-light-3" >Australia</span>
												<span className="text-gray-light-3" >20</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}

function EllipsisHorizonatal() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 dark:fill-white">
			<path fillRule="evenodd" d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clipRule="evenodd" />
		</svg>
	)
}