import Logo from '../components/Logo'
import { FaFileInvoice, FaHome, FaPowerOff, FaUsers } from 'react-icons/fa'

const Dashboard = () => {
  return (
    <div className='flex h-screen flex-col md:flex-row md:overflow-hidden'>
        <aside className='w-full flex-none md:w-64 bg-slate-700'>
            <div>
                <a href="#" className='mb-2 flex h-20 items-end justify-start bg-slate-900 p-4 md:h-40'>
                    <div className='ml-5 mb-5 w-32 text-white md:w-40'>
                        <Logo/>
                    </div>
                </a>

                <div className='flex grow flex-row content-between space-x-2 md:flex-col md:space-x-0 md:space-y-65 md:h-[100%]'>
                    <a href="/dashboard" className='flex mx-2 my-1 h-[48px] grow items-center justify-center gap-2 rounded-md bg-slate-500 p-3 text-lg text-white font-bold hover:bg-slate-400 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3'>
                        <FaHome className='w-6'/>
                        <p className='hidden md:block'>Home</p>
                    </a>

                    <a href="/invoices" className='flex mx-2 my-1 h-[48px] grow items-center justify-center gap-2 rounded-md bg-slate-500 p-3 text-lg text-white font-bold hover:bg-slate-400 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3'>
                        <FaFileInvoice className='w-6'/>
                        <p className='hidden md:block'>Invoices</p>
                    </a>

                    <a href="/customers" className='flex mx-2 my-1 h-[48px] grow items-center justify-center gap-2 rounded-md bg-slate-500 p-3 text-lg text-white font-bold hover:bg-slate-400 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3'>
                        <FaUsers className='w-6'/>
                        <p className='hidden md:block'>customers</p>
                    </a>

                    <div className='hidden h-full w-full grow md:block'></div>

                    <a href="/" className='flex mx-2 my-1 h-[48px] grow items-center justify-center gap-2 rounded-md bg-slate-500 p-3 text-lg text-white font-bold hover:bg-slate-400 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3'>
                        <FaPowerOff className='w-6'/>
                        <p className='hidden md:block'>Logout</p>
                    </a>
                </div>
                
                
            </div>
        </aside>
    </div>
  )
}

export default Dashboard