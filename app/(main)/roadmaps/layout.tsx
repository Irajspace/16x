import Sidebar from "../../../components/Sidebar";
import { prisma } from "../../../lib/prisma";
import { Category } from "@prisma/client";
export default async function RoadmapsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const categories = await prisma.category.findMany();

    return (
        <div className="flex h-full bg-[#050505]">

            <Sidebar categories={categories} />

            {/* ONLY THIS SCROLLS */}
            <div className="flex-1 overflow-y-auto p-8">
                {children}
            </div>

        </div>
    );
}