import { redirect } from 'next/navigation';

export default function AdminDashboard() {
    redirect('/dashboard/analytics');
    return null;
}
