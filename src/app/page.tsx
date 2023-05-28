import { prisma } from "@/db";
import Link from "next/link";


export default async function Home() {
  // await prisma.todo.create({data: {title: "Checking", completed: false}})
  const todos = await prisma.todo.findMany()
  return (
    <>
    <header className="flex justify-between items-center mb-2">
      <h1 className="text-2xl"> Todo List</h1>
      <Link href='/new' className="border border-slate-100 outline-none hover:border-slate-400 bg-slate-700 hover:bg-slate-900 px-4 py-2 rounded-lg">New</Link>
    </header>

    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
    </>
  )
}
