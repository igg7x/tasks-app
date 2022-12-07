import { useState  , useContext} from "react";
import {TaskContext} from '../context/TaskContext'

function TaskForm() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const { createTask} = useContext(TaskContext)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      desc
    });
    setTitle('')
    setDesc('')
  };
  return (

    <div className="max-w-md mx-auto ">
    <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4 rounded-xl'>
      <h1 className="text-2xl font-bold text-zinc-300 mb-3">Create your Task</h1> 
      <input
        placeholder= "Task Title"
        onChange={(e) => {setTitle(e.target.value); }}// el target.value me devuelve el valor que tipeo el usuario 
        value = {title}
        autoFocus
        className="bg-slate-500 p-3 w-full mb-3 border border-slate-900 rounded-md   "
      />
      <textarea 
      className="bg-slate-500 p-3 w-full mb-3 border border-slate-900 rounded-md   "
      placeholder="Task description " onChange={e =>{setDesc(e.target.value)}} value = {desc}> </textarea>
      <button className='bg-violet-500 px-3 py-1 rounded-md text-gray-900 mt-1 hover:bg-green-400' >Save Task</button>
    </form>
    </div>
  );
}

export default TaskForm;
