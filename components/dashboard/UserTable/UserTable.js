import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import Details from '../Details/Details'
export default function UserTable() {
  const [users, setUser] = useState(Details)
  console.log(users)
  const customStyles = {
    rows: {
        style: {
            minHeight: '60px', // override the row height
        },
    },
    headCells: {
        style: {
            color:"#7f8c8d",
            paddingLeft: '16px', // override the cell padding for head cells
            paddingRight: '2px',
        },
    },
    cells: {
        style: {
            paddingLeft: '16px', // override the cell padding for data cells
            paddingRight: '2px',
            fontWeight: '700',
            fontSize: '15px'
        },
    },
};
  const columns = [
    {
        name:"Wallet Address",
        selector:(row) => row.value1,
    },
    {
        name:"Eth Balance",
        selector:(row) => row.value2,

    },
    {
        name:"Ecr Token Worth",
        selector:(row) => row.value3,

    },
    {
        name:"NFT Count",
        selector:(row) => row.value4,

    },
    {
        name:"Chat",
        selector:(row) => row.value5,

    }
  ]
  return (
    <div className='  mt-2'>
        <DataTable
        columns={columns}
        customStyles={customStyles}
        data={users}
        fixedHeader
        className="-striped -highlight"
        />
    </div>
  )
}
