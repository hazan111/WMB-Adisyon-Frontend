import { useNavigate } from 'react-router-dom'

interface NavigationButtonProps {
  to: string
  label: string
  className?: string
}

export function NavigationButton({ to, label, className = '' }: NavigationButtonProps) {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => navigate(to)}
      className={`w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition ${className}`}
    >
      {label}
    </button>
  )
}