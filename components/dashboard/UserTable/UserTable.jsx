import React, { useState } from 'react'
import Details from '../Details/Details'
import Table from '../../common/Table'

export default function UserTable() {
  const [users, SetUser] = useState(Details)

  const columns = [{
    Header: 'Wallet Address',
    accessor: 'walletAddress' // String-based value accessors!
  }, {
    Header: 'Wallet Worth',
    accessor: 'walletWorth',
    Cell: props => <span className='number'>{"$" + props.value}</span> // Custom cell components!
  }]
  return (
    <div className='p-4 WalletTable'>
      <Table
        data={users}
        columns={columns} />
    </div>
  )
}
