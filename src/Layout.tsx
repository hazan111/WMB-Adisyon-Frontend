type LayoutProps = {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] text-white">
      {children}
    </div>
  )
}
