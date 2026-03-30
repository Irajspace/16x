import { prisma } from "../../../../lib/prisma";

export async function GET() {
    // 🔹 Clear old data (optional but useful)
    await prisma.category.deleteMany();

    // 🔹 Create Categories
    const cp = await prisma.category.create({
        data: {
            name: "Competitive Programming",

        },
    });

    const interview = await prisma.category.create({
        data: {
            name: "Interview Prep",

        },
    });

    // 🔹 Create Roadmaps
    const dp = await prisma.roadmap.create({
        data: {
            title: "Dynamic Programming",
            image: "/images/dynamic_programming.png",
            categoryId: cp.id,
        },
    });

    const graph = await prisma.roadmap.create({
        data: {
            title: "Graphs",
            image: "/images/graph.png",
            categoryId: cp.id,
        },
    });

    const number = await prisma.roadmap.create({
        data: {
            title: "Number Theory",
            image: "/images/numbertheory.png",
            categoryId: cp.id,
        },
    });

    const greedy = await prisma.roadmap.create({
        data: {
            title: "Greedy",
            image: "/images/greedy.png",
            categoryId: interview.id,
        },
    });

    const advanced = await prisma.roadmap.create({
        data: {
            title: "Advanced Ideas",
            image: "/images/advanced.png",
            categoryId: interview.id,
        },
    });

    // 🔹 Create Problems

    // Dynamic Programming
    await prisma.problem.createMany({
        data: [
            {
                title: "0/1 Knapsack",
                url: "https://leetcode.com/problems/knapsack",
                platform: "LeetCode",
                difficulty: "Medium",
                roadmapId: dp.id,
            },
            {
                title: "Longest Increasing Subsequence",
                url: "https://leetcode.com/problems/longest-increasing-subsequence",
                platform: "LeetCode",
                difficulty: "Medium",
                roadmapId: dp.id,
            },
        ],
    });

    // Graphs
    await prisma.problem.createMany({
        data: [
            {
                title: "Dijkstra Algorithm",
                url: "https://leetcode.com/problems/network-delay-time",
                platform: "LeetCode",
                difficulty: "Medium",
                roadmapId: graph.id,
            },
            {
                title: "Number of Islands",
                url: "https://leetcode.com/problems/number-of-islands",
                platform: "LeetCode",
                difficulty: "Medium",
                roadmapId: graph.id,
            },
        ],
    });

    // Number Theory
    await prisma.problem.createMany({
        data: [
            {
                title: "GCD Queries",
                url: "https://codeforces.com",
                platform: "Codeforces",
                difficulty: "Easy",
                roadmapId: number.id,
            },
        ],
    });

    // Greedy
    await prisma.problem.createMany({
        data: [
            {
                title: "Activity Selection",
                url: "https://leetcode.com",
                platform: "LeetCode",
                difficulty: "Easy",
                roadmapId: greedy.id,
            },
        ],
    });

    // Advanced
    await prisma.problem.createMany({
        data: [
            {
                title: "Segment Tree Basics",
                url: "https://codeforces.com",
                platform: "Codeforces",
                difficulty: "Hard",
                roadmapId: advanced.id,
            },
        ],
    });

    return Response.json({ message: "Seeding done ✅" });
}