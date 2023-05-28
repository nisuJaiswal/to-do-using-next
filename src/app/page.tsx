import ToDoItem from "@/components/ToDoItem";
import { prisma } from "@/db";
import Link from "next/link";

// To get all Todos
const getTodos = () => {
  return prisma.todo.findMany();
};

// To handle and save the state of item
async function toggleItem(id: string, completed: boolean) {
  "use server";
  console.log(id, completed);

  await prisma.todo.update({ where: { id }, data: { completed } });
}

export default async function Home() {
  // await prisma.todo.create({data: {title: "Checking", completed: false}})
  const todos = await getTodos();
  return (
    <>
      <header className="flex justify-between items-center mb-2">
        <h1 className="text-2xl"> Todo List</h1>
        <Link
          href="/new"
          className="border border-slate-100 outline-none hover:border-slate-400 bg-slate-700 hover:bg-slate-900 px-4 py-2 rounded-lg"
        >
          New
        </Link>
      </header>

      <ul className="flex flex-col gap-1">
        {todos.map((todo) => (
          <ToDoItem key={todo.id} {...todo} toggleItem={toggleItem} />
        ))}
      </ul>
    </>
  );
}
