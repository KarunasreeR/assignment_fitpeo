import React from 'react'
import DataTable, { createTheme } from 'react-data-table-component'
import { tableData } from '../utils'

createTheme('dark', {
    background: {
        default: '#1f2029',
    },
    text: {
        primary: '#ffffff',
        secondary: '#ffffff',
    },
})

const CustomTable = () => {
    const columns = [
        {
            name: 'Customer',
            selector: (item) => (
                <>
                    <img
                        src={item.profilePic}
                        alt={item.id}
                        style={{
                            width: '30px',
                            marginRight: '10px',
                            borderRadius: '50%',
                        }}
                    />
                    {item.customerName}
                </>
            ),
            sortable: true,
        },
        { name: 'Order No.', selector: (item) => item.orderId, sortable: true },
        {
            name: 'Amount',
            selector: (item) => '$' + item.amount.toString(),
            sortable: true,
        },
        {
            name: 'Status',
            selector: (item) => (
                <div
                    className="item-status"
                    style={{
                        color: `${
                            item.status !== 'Delivered' ? '#bd6066' : '#1e9876'
                        }`,
                        backgroundColor: `${
                            item.status !== 'Delivered'
                                ? '#bd606680'
                                : '#1e987680'
                        }`,
                    }}
                >
                    {item.status}
                </div>
            ),
            sortable: true,
        },
    ]

    return (
        <div>
            <DataTable
                columns={columns}
                data={tableData}
                fixedHeader
                fixedHeaderScrollHeight="400px"
                theme="dark"
            />
        </div>
    )
}

export default CustomTable
