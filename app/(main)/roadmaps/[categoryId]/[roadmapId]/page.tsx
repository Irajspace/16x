import { prisma } from "../../../../../lib/prisma";
import Link from "next/link";

export default async function Page({
    params,
}: {
    params: { roadmapId: string };
}) {
    const { roadmapId } = await params;
    const roadmap = await prisma.roadmap.findUnique({
        where: { id: roadmapId },
        include: {
            problems: true,
        },
    });

    if (!roadmap) {
        return <div className="text-white p-6">Roadmap not found</div>;
    }

    return (
        <div className=" min-h-screen p-6 text-white">

            {/* Title */}
            <h1 className="text-2xl mt-10 font-bold mb-6">{roadmap.title}</h1>

            {/* Problems */}
            <div className="flex flex-col gap-4">
                {roadmap.problems.map((problem: any) => (
                    <div
                        key={problem.id}
                        className="bg-linear-to-r from-gray-800 to-gray-900 p-4 rounded-lg flex justify-between items-center"
                    >
                        <div>
                            <p>{problem.title}</p>
                            <p className="text-sm text-gray-400">
                                {problem.difficulty}
                            </p>
                        </div>

                        <div className="flex gap-3">
                            {/* External */}
                            <a
                                href={problem.url}
                                target="_blank"
                                className="bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)] px-3 py-1 rounded"
                            >
                                Solve
                            </a>

                            {/* Internal */}
                            <Link
                                href={`/problem/${problem.id}`}
                                className="bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.4),transparent_70%)] px-3 py-1 rounded"
                            >
                                Editor
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}