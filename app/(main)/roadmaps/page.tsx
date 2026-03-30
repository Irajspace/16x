import { prisma } from "../../../lib/prisma";
import { redirect } from "next/navigation";
export default async function RoadmapsPage() {
    const firstCategory = await prisma.category.findFirst();
    if (!firstCategory) {
        return <div>No categories found</div>
    }
    redirect(`/roadmaps/${firstCategory.id}`);
}