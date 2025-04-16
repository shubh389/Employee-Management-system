import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'
const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-7'>
      <Header/>
      <CreateTask/>
      <AllTask/>
      {/* <div className='p-5 bg-[#1C1C1C] mt-7 rounded'>
        <form className='flex flex-wrap w-full justify-between '>
          <div className='w-1/2'>
          <div >
            <h3 className='text-sm text-grey-300 mb-0.5'>Task Name</h3>
            <input className='text-sm py-1 w-4/5 rounded outline-none bg-transparent border-grey-400' type='text' placeholder='Task Name' />
          </div>
          <div><h3 className='text-sm text-grey-300 mb-0.5'>Date</h3>
          <input className='text-sm py-1 w-4/5 rounded outline-none bg-transparent border-grey-400' type="date" /></div>
          <div><h3 className='text-sm text-grey-300 mb-0.5'>Asign to</h3>
          <input className='text-sm py-1 w-4/5 rounded outline-none bg-transparent border-grey-400' type="text" placeholder='Employee Name' /></div>
          <div><h3 className='text-sm text-grey-300 mb-0.5'>Category</h3>
          <input className='text-sm py-1 w-4/5 rounded outline-none bg-transparent border-grey-400' type="text" placeholder='design, dev,etc' />
          </div>
        </div>
          
          <div className='w-2/5 flex flex-col item-start'><h3 className='text-sm text-grey-300 mb-0.5'>Task Description</h3>
          <textarea className='w-full h-44 text-sm py-2 rounded outline-non bg-transparent border-[1px] border-grey-400 ' name="" id="" cols="30" rows="10"></textarea></div>
          
          <button className='bg-emerald-500 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>

        </form>
      </div> */}
    </div>
  )
}

export default AdminDashboard
