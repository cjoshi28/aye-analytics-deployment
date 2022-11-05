import React from 'react'
import Logo from '../../components/Logo'


export default function index() {
  return (
    <div className="min-h-screen bg-cover md:bg-cover flex flex-col lg:flex-row bg-[url('/images/mobileResponsive.png')] md:bg-[url('/images/MicrosoftTeams-image.png')]">
      <div className='md:basis-1/3 lg:basis-1/2 flex justify-center lg:items-center pt-[50px] md:pt-[100px] lg:pt-0'>
        <div className='w-60 sm:w-80 sm:h-64 md:h-34'>
          <Logo />
        </div>
      </div>
      <div className='md:basis-2/3 lg:basis-1/2 py-4 md:py-2 mid-xl:py-12 flex justify-center lg:items-center lg:mt-0'>
        <div className='w-full md:w-6/12 lg:w-8/12 h-full flex flex-col justify-center'>
          <h2 className='text-white flex justify-center mt-8 heading-forms '>Site Configuration</h2>
          <SiteConfigurationForm />
          {/* <SiteURLView /> */}
        </div>
      </div>
    </div>
  )
}

function SiteConfigurationForm() {
  return (
    <div className='text-center '>
      <form action="" >
        <h2 className='flex justify-center m-6 font-[DM-sans] text-sm sm:text-base lg:text-xs xl:text-base text-gray-400'>To get a tracking code enter your website information</h2>
        <div>
          <input className='input-css' placeholder='Website name' type="text" />
        </div>
        <div>
          <input className='input-css' placeholder='Website URL' type="text" />
        </div>
        <div>
          <input type="submit" value="Submit" className="btn-css" />
        </div>
      </form>
    </div>
  )
}

// function SiteURLView() {
//   return (
//     <div className='text-center'>
//       <form action="" >
//         <h2 className='flex justify-center m-6 font-[DM-sans] text-sm sm:text-base lg:text-xs xl:text-xl text-gray-400'>{`To track stats for CoinMarket, place the following code in the <head> section of your website`}</h2>
//         <div className='flex justify-center'>
//           <div className='backdrop-blur bg-white/20 font-[DM-sans] mt-4 text-left text-white text-base md:lg break-words outline-none rounded p-6 pb-8 w-10/12 lg:w-full sm:w-9/12 md:w-11/12'>
//             {`<script async defer data-website-id = "197d3fbb-3973-48cb-b91-54cab980a284" src="http:localhost:3000/ayeanayltics.js"></script>`}
//           </div>
//         </div>

//         <div className=' flex flex-col xl:flex-row'>
//           <div className='w-full mr-4'>
//             <input type="submit" value="Copy to clipboard" className="btn-css" />
//           </div>
//           <div className='w-full'>
//             <input type="submit" value="Continue" className="btn-css" />
//           </div>
//         </div>
//       </form>
//     </div>
//   )
// }
