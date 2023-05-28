import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";

async function createTodo(data: FormData) {
  "use server";
  //   console.log("Data:", data);
  let title = data.get("title")?.valueOf();
  if (typeof title !== "string" || title === "") {
    throw new Error("Invalid Title");
  }

  await prisma.todo.create({ data: { title, completed: false } });
  redirect("/");
}

const page = () => {
  return (
    <>
      <header className="flex justify-between items-center mb-2">
        <h1 className="text-2xl"> Todo List</h1>
      </header>
      <form
        action={createTodo}
        className="pt-4 flex flex-col gap-3 md:max-w-3xl"
      >
        <input
          type="text"
          name="title"
          className="bg-transparent border border-white text-white px-4 py-2 outline-none rounded-md "
        />
        <div className="flex items-center justify-end gap-2">
          <Link
            href=".."
            className="border border-slate-100 outline-none hover:border-slate-400 bg-slate-700 hover:bg-slate-900 px-4 py-2 rounded-lg"
          >
            Back
          </Link>
          <button
            type="submit"
            className="border border-slate-100 outline-none hover:border-slate-400 bg-slate-700 hover:bg-slate-900 px-4 py-2 rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default page;
