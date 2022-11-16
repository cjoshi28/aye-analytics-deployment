import React from 'react'
import { useState } from 'react'
import VisitorDetails from '../Details/VisitorDetails'
import Table from '../../common/Table'


export default function VisitorTable() {

    const [visitor, setVisitor] = useState(VisitorDetails)
    // const level = visitor.map((value, index) => {
    //     return (value)
    // })
    // console.log(level)
    const columns = [{
        Header: 'Wallet Address',
        accessor: 'walletAddress', // String-based value accessors!
        Cell: props => <span className=' font-bold'>{props.value}</span> // Custom cell components!
    },
    {
        Header: 'Levels',
        accessor: 'levels',
        Cell: props => <span className='rounded-2xl bg-[#EFBA27] px-2 py-[2px] text-sm'>{props.value}</span>


    },
    // <span className='rounded-2xl bg-[#EFBA27] px-2 py-[2px] text-sm'>{props.value}</span>

    {
        Header: 'Eth Balance',
        accessor: 'ethBalance',
        Cell: props => <span className='number font-bold'>{props.value + "Eth"}</span> // Custom cell components!
    },
    {
        Header: 'Ecr20 Token Worth',
        accessor: 'ecr20TokenWorth',
        Cell: props => <span className='number font-bold'>{props.value + "Eth"}</span> // Custom cell components!
    },
    {
        Header: 'NFT Count',
        accessor: 'nftCount',
        Cell: props => <span className='number font-bold'>{props.value + "NFT"}</span> // Custom cell components!
    },
    {
        Header: 'Chat',
        Cell: () => <svg xmlns="http://www.w3.org/2000/svg" width="23.073" height="23.073" viewBox="0 0 23.073 23.073">
            <path id="Icon_material-chat_bubble_outline" data-name="Icon material-chat_bubble_outline" d="M22.932,2.167H4.474A2.314,2.314,0,0,0,2.167,4.474V25.239l4.615-4.615H22.932a2.314,2.314,0,0,0,2.307-2.307V4.474a2.314,2.314,0,0,0-2.307-2.307Zm0,16.151H6.781L4.474,20.625V4.474H22.932V18.318Z" transform="translate(-2.167 -2.167)" className='dark:fill-white' />
        </svg>

    },
    {
        Header: 'Info',
        Cell: () => <div className='flex justify-end'>
            <svg xmlns="http://www.w3.org/2000/svg" width="22.917" className='' height="22.917" viewBox="0 0 22.917 22.917">
                <g id="Icon_feather-info" data-name="Icon feather-info" transform="translate(-1.042 -1.042)">
                    <path id="Path_41246" data-name="Path 41246" d="M22.917,12.5A10.417,10.417,0,1,1,12.5,2.083,10.417,10.417,0,0,1,22.917,12.5Z" fill="none" stroke="#000" className='dark:stroke-white ' stroke-linecap="round" stroke-linejoin="round" stroke-width="2.083" />
                    <path id="Path_41247" data-name="Path 41247" d="M12.5,16.667V12.5" fill="none" stroke="#000" className='dark:stroke-white' stroke-linecap="round" stroke-linejoin="round" stroke-width="2.083" />
                    <path id="Path_41248" data-name="Path 41248" d="M12.5,8.333h0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.083" className='dark:stroke-white' />
                </g>
            </svg>
        </div>


    }]
    return (
        <div className='p-4 WalletTable'>
            <Table
                data={visitor}
                columns={columns} />
        </div>
    )
}

