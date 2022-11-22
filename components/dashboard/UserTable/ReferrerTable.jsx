import React, { useState } from 'react'
import ReferrersDetails from '../Details/ReferrersDetails'
import Table from '../../common/Table'

export default function ReferrerTable() {
    const [users, setUser] = useState(ReferrersDetails)

    const columns = [{
        Header: 'Referrers',
        accessor: 'referrers', // String-based value accessors!
        Cell: props => <span className='font-semibold'>{props.value}</span>

    },
    {
        Header: 'View',
        accessor: 'views',
        Cell: props => <><span className='text-fusicia-color mr-6 text-xs rounded-full px-[5px] py-[2px] bg-fuchsia-200 bg-opacity-60 dark:bg-opacity-10'>100%</span>     <span className='number font-bold'> {props.value}</span></>
    }]
    return (
        <div className='p-4 WalletTable font-[DM-sans]'>
            <Table
                data={users}
                columns={columns} />
        </div>
    )
}