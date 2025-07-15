import React from 'react'
import { FaFileInvoice, FaHome, FaUsers } from 'react-icons/fa'

const links = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: FaHome
    },
    {
        name: "Invoices",
        href: "/dashboard/invoices",
        icon: FaFileInvoice
    },
    {
        name: "Customers",
        href: "/dashboard/customers",
        icon: FaUsers
    },
]


const NavLinks = () => {
    return (
        <>
            {
                links.map(x => {
                    const LinIcon = x.icon;

                    return <a
                        href={x.href} className='flex mx-2 my-1 h-[48px] grow items-center justify-center gap-2 rounded-md bg-slate-500 p-3 text-lg text-white font-bold hover:bg-slate-400 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3'>
                        <LinIcon className='w-6' />
                        <p className='hidden md:block'>{x.name}</p>
                    </a>
                })
            }
        </>
    )
}

export default NavLinks