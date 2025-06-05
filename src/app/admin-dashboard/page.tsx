import ThemeToggle from "@/components/themetoggle"

export default function AdminDashboard() {
    return (
        <div className="flex items-center justify-center w-full h-screen bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 ease-in-out">
            <div className="flex fixed left-0 items-center justify-center w-30">
                <h2>Dashboard</h2>
                <ul className="flex flex-col items-start">
                    <li className="mb-2">Home</li>
                    <li className="mb-2">Analytics</li>
                </ul>
                <ThemeToggle />
            </div>
        </div>
    )
}