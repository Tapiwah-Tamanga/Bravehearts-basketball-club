import Sidebar from "@/components/layout/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 md:ml-[280px] w-full">
        {/* Dashboard Header */}
        <header className="w-full top-0 sticky bg-background border-b border-surface-container-highest flex justify-between items-center px-margin-mobile md:px-margin-desktop py-md z-50">
          <div className="flex items-center gap-md">
            <div className="md:hidden">
              <span className="material-symbols-outlined text-primary text-3xl">
                menu
              </span>
            </div>
            <span className="font-headline text-headline-md font-black text-on-surface uppercase tracking-tighter">
              <span className="text-primary">Bravehearts</span> Basketball
            </span>
          </div>
          <div className="flex items-center gap-md">
            <button className="hover:bg-surface-container-high p-sm transition-all rounded-full">
              <span className="material-symbols-outlined text-on-surface">
                notifications
              </span>
            </button>
            <button className="bg-primary text-on-primary px-lg py-sm font-headline text-label-caps border-b-4 border-r-4 border-tertiary active:translate-y-1 active:translate-x-1 active:border-0 transition-all">
              Tickets
            </button>
          </div>
        </header>

        <div className="px-margin-mobile md:px-margin-desktop py-xl">
          {children}
        </div>
      </main>
    </div>
  );
}
