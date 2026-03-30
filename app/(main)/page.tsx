import Image from "next/image";

export default function Home() {
    return (
        // min-h-screen ensures the background covers the whole page even if content is short
        // bg-[#050505] matches the dark theme of the coding editor
        <div className="bg-[#050505] min-h-screen w-full pt-30 flex flex-col items-center">

            {/* Hero Image / Dashboard Preview */}
            <div className="relative group px-44 w-full flex justify-center">
                <div className="absolute -inset-1 bg-linear-to-r from-gray-100 to-gray-800 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <Image
                    src="/images/dashboard.png"
                    alt="Dashboard"
                    width={800}
                    height={600}
                    className="relative w-full max-w-5xl h-auto rounded-xl shadow-2xl border border-gray-800"
                    priority
                />
            </div>

            {/* Content Section */}
            <div className="mt-20 px-6 max-w-4xl text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Are you serious about <span className="text-blue-500">16x</span>?
                </h1>
                <p className="text-gray-400 text-lg mb-10">
                    Stop jumping between tabs. Solve, take notes, and track your progress
                    all in one unified workspace.
                </p>

                {/* Placeholder for scroll testing */}
                <div className="h-[800px] border-t border-gray-900 mt-10 pt-10">
                    <p className="text-gray-600 italic">Scroll down to explore features...</p>
                </div>
            </div>

        </div>
    );
}