import Navbar from "../../components/Navbar";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col h-screen bg-[#050505]">

            {/* Navbar */}
            <Navbar />

            {/* Content below navbar */}
            <main className="flex-1 overflow-y-auto">
                {children}
            </main>

        </div>
    );
}