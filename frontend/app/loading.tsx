export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Skeleton Nav */}
      <header className="w-full bg-surface border-b-2 border-primary-container">
        <nav className="flex justify-between items-center px-4 md:px-10 py-4 max-w-full mx-auto">
          <div className="h-6 w-48 bg-surface-container-high animate-pulse" />
          <div className="hidden md:flex items-center gap-8">
            <div className="h-4 w-12 bg-surface-container-high animate-pulse" />
            <div className="h-4 w-12 bg-surface-container-high animate-pulse" />
            <div className="h-4 w-12 bg-surface-container-high animate-pulse" />
          </div>
          <div className="md:hidden h-6 w-6 bg-surface-container-high animate-pulse" />
        </nav>
      </header>

      {/* Skeleton Hero */}
      <div className="h-[400px] md:h-[600px] bg-surface-container-highest relative">
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/70 to-transparent z-10" />
        <div className="relative z-20 px-4 md:px-10 w-full max-w-7xl mx-auto flex items-center h-full">
          <div className="space-y-4">
            <div className="h-6 w-32 bg-surface-container-high animate-pulse" />
            <div className="h-16 md:h-24 w-64 bg-surface-container-high animate-pulse" />
            <div className="h-4 w-96 max-w-full bg-surface-container-high animate-pulse" />
            <div className="flex gap-4">
              <div className="h-12 w-40 bg-surface-container-high animate-pulse" />
              <div className="h-12 w-32 bg-surface-container-high animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Skeleton Content */}
      <div className="flex-1 px-4 md:px-10 py-12 max-w-7xl mx-auto w-full">
        <div className="space-y-4 mb-8">
          <div className="h-4 w-24 bg-surface-container-high animate-pulse" />
          <div className="h-8 w-48 bg-surface-container-high animate-pulse" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-64 bg-surface-container-high animate-pulse"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
