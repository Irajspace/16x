import Image from "next/image";
import Link from "next/link";
type RoadmapCardProps = {
    id: string,
    title: string,
    image: string,
    problemsCount: number,
    categoryId: string,
}
export default function RoadmapCard({ item }: { item: RoadmapCardProps }) {
    return (
        <Link href={`/roadmaps/${item.categoryId}/${item.id}`}>
            <div className="bg-[#111] border border-gray-800 rounded-xl p-4 hover:border-gray-600 hover:scale-[1.02] transition cursor-pointer">

                <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="rounded-lg"
                />

                <h2 className="text-white mt-4 text-lg font-semibold">
                    {item.title}
                </h2>

                <p className="text-gray-400 text-sm">
                    {item.problemsCount} Problems
                </p>

            </div>
        </Link>
    );
}