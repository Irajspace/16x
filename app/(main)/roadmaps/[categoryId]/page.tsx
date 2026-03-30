import { prisma } from "../../../../lib/prisma";
import RoadmapCard from "../../../../components/RoadmapCard";
import Image from "next/image";

export default async function Page({
    params,
}: {
    params: Promise<{ categoryId: string }>;
}) {
    const { categoryId } = await params;

    const category = await prisma.category.findUnique({
        where: { id: categoryId },
        include: {
            roadmaps: {
                include: {
                    problems: true,
                },
            },
        },
    });

    if (!category) {
        return <div className="text-white p-6">Category not found</div>;
    }

    return (
        <div className="w-full p-8">

            {/* 🔥 HERO IMAGE */}
            <div className="relative w-full h-64 mb-10 rounded-xl overflow-hidden">
                <Image
                    src="/images/hero.png" // 👈 put your image here
                    alt="Roadmap Banner"
                    fill
                    className="object-cover opacity-60"
                />

                {/* Overlay text */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-4xl font-bold text-white text-center">
                        {category.name} Roadmaps
                    </h1>
                </div>
            </div>

            {/* 🔥 GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {category.roadmaps.map((roadmap) => (
                    <RoadmapCard
                        key={roadmap.id}
                        item={{
                            id: roadmap.id,
                            title: roadmap.title,
                            image: roadmap.image,
                            problemsCount: roadmap.problems.length,
                            categoryId: roadmap.categoryId,
                        }}
                    />
                ))}
            </div>

        </div>
    );
}