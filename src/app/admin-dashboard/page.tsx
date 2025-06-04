export default function AdminDashboard() {
    return (
        <div className="flex items-center justify-center w-full h-screen">
            <div className="flex fixed left-0 items-center justify-center w-30">
                <h2>Dashboard</h2>
                <ul className="flex flex-col items-start">
                    <li className="mb-2">Home</li>
                    <li className="mb-2">Analytics</li>
                </ul>
            </div>
        </div>
    )
}