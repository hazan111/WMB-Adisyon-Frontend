import React from 'react'

interface AuthCardProps {
  children: React.ReactNode
}

export default function AuthCard({ children }: AuthCardProps) {
  return (
    <div className="flex justify-center items-center h-[80vh] p-12 bg-gray-100 overflow-y-auto">
      <div className="bg-white/10 backdrop-blur-xl border border-white/25 rounded-3xl px-10 py-12 max-w-md w-full flex flex-col gap-6 shadow-lg hover:translate-y-[-4px] hover:shadow-2xl transition">
        {children}
      </div>
    </div>
  )
}