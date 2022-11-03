import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import Details from '../Details/Details'
export default function UserTable() {
  const [users, setUser] = useState(Details)
  console.log(users)
  const customStyles = {
    rows: {
        style: {
            minHeight: '78px', // override the row height
            border: ''
        },
    },
    headCells: {
        style: {
            color:"#7f8c8d",
            paddingLeft: '16px', // override the cell padding for head cells
            paddingRight: '2px',
            background: "#F8FAFC",
            fontFamily: "DM-sans"
        },
    },
    cells: {
        style: {
            paddingLeft: '16px', // override the cell padding for data cells
            paddingRight: '2px',
            fontWeight: '700',
            fontSize: '15px',
            background: "#F8FAFC",
            fontFamily: "DM-sans"
        },
    },
};
  const columns = [
    {
        name:"Wallet Address",
        selector:(row) => row.value1,
    },
    {
        name:"NFT Count",
        selector:(row) => row.value4,
    }
  ]
  return (
    <div className='  mt-2'>
        <DataTable
        columns={columns}
        customStyles={customStyles}
        data={users}
        fixedHeader
        className="-striped UserTable -highlight"
        
        />
    </div>
  )
}
