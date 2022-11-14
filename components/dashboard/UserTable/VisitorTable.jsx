import React from 'react'
import { useState } from 'react'
import VisitorDetails from '../Details/VisitorDetails'
import Table from '../../common/Table'

export default function VisitorTable() {

    const [visitor, setVisitor] = useState(VisitorDetails)
    const columns = [{
        Header: 'Wallet Address',
        accessor: 'walletAddress' // String-based value accessors!
    },
    {
        Header: 'Levels',
        accessor: 'levels'
    },
    {
        Header: 'Eth Balance',
        accessor: 'ethBalance',
        Cell: props => <span className='number'>{props.value + "Eth"}</span> // Custom cell components!
    },
    {
        Header: 'Ecr20 Token Worth',
        accessor: 'ecr20TokenWorth',
        Cell: props => <span className='number'>{props.value + "Eth"}</span> // Custom cell components!
    },
    {
        Header: 'NFT Count',
        accessor: 'nftCount',
        Cell: props => <span className='number'>{props.value + "NFT"}</span> // Custom cell components!
    },
    {
        Header: 'Chat',
        accessor: 'chat'
    },
    {
        Header: 'Info',
        accessor: 'info'
    }]
    return (
        <div className='p-4 WalletTable '>
            <Table
                data={visitor}
                columns={columns} />
        </div>
    )
}

