import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const TableList = () => {
    const [tables, setTables] = useState([])

    console.log(tables)
    useEffect(() => {
        const getTableList = async () => {
            try {
                const res = await axios.get('http://localhost:1338/api/v1/system/tables/list')
                setTables(res.data.data)
            } catch (error) {
                console.log(error)
            }
        };
        getTableList()
    }, [])
    return (
        <div>
            <table className="w-full text-md text-left rtl:text-right">
                <thead className="text-sm text-white uppercase bg-blue-500">
                    <tr>
                        <th scope="col" className="px-6 py-2">Table Name</th>
                        <th scope="col" className="px-6 py-2">Number of Fields</th>
                        <th scope="col" className="px-6 py-2">Created At</th>
                        <th scope="col" className="px-6 py-2">Created By</th>
                        <th scope="col" className="px-6 py-2">Updated At</th>
                        <th scope="col" className="px-6 py-2">Updated By</th>
                        <th scope="col" className="px-6 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tables.length > 0 ? (
                            tables.map(values => (
                                <tr className="border border-gray-200" key={values._id}>
                                    <td className="px-6">
                                        {values.name}
                                    </td>
                                    <td className="px-6">
                                        {20}
                                    </td>
                                    <td className="px-6">
                                        {values.createdAt}
                                    </td>
                                    <td className="px-6">
                                        {"Mainul Hasan"}
                                    </td>
                                    <td className="px-6">
                                        {values.updatedAt}
                                    </td>
                                    <td className="px-6">
                                        {"Mainul Hasan"}
                                    </td>
                                    <td className="px-6">
                                        <Link href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline pr-3">Edit</Link>
                                        <Link href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline pr-3">View</Link>
                                        <Link href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline pr-3">Delete</Link>
                                    </td>

                                </tr>
                            ))
                        ) : (
                            <p className='h-12 flex justify-center items-center font-semibold text-sm'>No Data Found.....</p>
                        )}
                </tbody>
            </table>
        </div>
    )
}

export default TableList