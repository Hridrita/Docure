import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* সাইডবার */}
      <aside className="w-64 bg-[#4A6B6F] text-white p-6 hidden md:block">
        <h2 className="text-xl font-bold mb-8">Dashboard</h2>
        <nav className="flex flex-col gap-4">
          <Link href="/dashboard/my-bookings" className="hover:text-[#DDE6D8]">My Bookings</Link>
          <Link href="/dashboard/my-profile" className="hover:text-[#DDE6D8]">My Profile</Link>
        </nav>
      </aside>

      {/* কন্টেন্ট এরিয়া */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}