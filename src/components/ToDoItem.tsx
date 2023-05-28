type todoItem = {
    id: string;
    title: string;
    completed: Boolean;
}

const ToDoItem = ({ id, title, completed} : todoItem) => {
  return (

    <li className="flex items-center gap-1">
        <input id={id} type='checkbox' className="peer cursor-pointer"/>
        <label htmlFor={id} className="peer-checked:line-through cursor-pointer peer-checked:text-slate-400">{title}</label>
    </li>
  )
}

export default ToDoItem