"use client";

type todoItem = {
  id: string;
  title: string;
  completed: boolean;
  toggleItem: (id: string, completed: boolean) => void;
};

const ToDoItem = ({ id, title, completed, toggleItem }: todoItem) => {
  return (
    <li className="flex items-center gap-1">
      <input
        id={id}
        type="checkbox"
        className="peer cursor-pointer"
        defaultChecked={completed}
        onChange={(e) => toggleItem(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className="peer-checked:line-through cursor-pointer peer-checked:text-slate-400"
      >
        {title}
      </label>
    </li>
  );
};

export default ToDoItem;
