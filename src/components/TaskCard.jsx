import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskCard({task}) {

  const {deleteTask}= useContext(TaskContext)
  return (
    <div className='bg-slate-800 text-sky-400 p-4 rounded-xl' >
          <h1 className='text-xl font-bold capitalize'>{task.title}</h1>
          <p className='text-neutral-50 text-sm'>{task.description}</p>
          <button className='bg-violet-500 px-2 py-1 rounded-md text-gray-900 mt-4 hover:bg-red-600'  onClick={() => deleteTask(task.id)}>Delete Task</button>
        </div>
   )
}


export default TaskCard