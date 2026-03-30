
import { Category } from "@prisma/client";
import Link from "next/link";

type Props = {
  categories: Category[];
};
export default function Sidebar({ categories }: Props) {
  return (
    <div className="w-64 bg-[#0d0d0d] border-r border-gray-800 p-6 flex flex-col gap-3">

      <p className="text-gray-400 text-sm mb-4">All Roadmaps</p>

      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/roadmaps/${category.id}`}
          className="px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition"
        >
          {category.name}
        </Link>
      ))}

    </div>
  );
}