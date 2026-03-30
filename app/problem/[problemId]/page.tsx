import { prisma } from "../../../lib/prisma";
import CodeEditor from "../../../components/CodeEditor";

export default async function Page({
    params,
}: {
    params: Promise<{ problemId: string }>;
}) {
    const { problemId } = await params;
    const problem = await prisma.problem.findUnique({ where: { id: problemId } });

    if (!problem) return <div className="text-white p-10">Problem not found</div>;

    return (
        <div className="flex flex-col h-full w-full bg-[#0a0a0a] p-4 gap-4 overflow-hidden">

            {/* Header Area */}
            <div className="flex justify-between items-center px-2">
                <div className="flex items-center gap-4">
                    <a href="/roadmaps" className="text-gray-500 hover:text-white transition-colors">← Back</a>
                    <h1 className="text-xl font-bold text-white uppercase tracking-tight">{problem.title}</h1>
                </div>
                <button className="bg-white text-black px-6 py-1.5 rounded-md font-bold text-sm hover:bg-gray-200 transition-colors">
                    SUBMIT
                </button>
            </div>

            {/* Main 3-Column Grid */}
            <div className="flex flex-1 w-full gap-4 min-h-0">
                {/* 1. Description */}
                <div className="flex-1 bg-[#141414] border border-gray-800 rounded-2xl p-6 overflow-y-auto">
                    <div className="text-xs text-blue-400 font-mono mb-2">{problem.platform}</div>
                    <p className="text-gray-400 leading-relaxed mb-6">Full problem details are available on the platform.</p>
                    <a href={problem.url} target="_blank" className="text-blue-500 underline text-sm">View Original</a>
                </div>

                {/* 2. Editor */}
                <div className="flex-[2.5] bg-[#141414] border border-gray-800 rounded-2xl flex flex-col overflow-hidden">
                    <div className="px-4 py-2 bg-[#1c1c1c] border-b border-gray-800 text-[10px] text-gray-500 font-mono">SOLUTION.CPP</div>
                    <div className="flex-1"><CodeEditor /></div>
                </div>

                {/* 3. Notes */}
                <div className="flex-1 bg-[#141414] border border-gray-800 rounded-2xl flex flex-col overflow-hidden">
                    <div className="px-4 py-2 bg-[#1c1c1c] border-b border-gray-800 text-[10px] text-gray-500 font-mono">SCRATCHPAD</div>
                    <textarea className="flex-1 bg-transparent p-4 outline-none resize-none text-gray-300 font-mono text-sm" placeholder="Draft logic..." />
                </div>
            </div>
        </div>
    );
}