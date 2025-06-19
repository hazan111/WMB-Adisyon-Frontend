import { HomeTitle } from '../components/home/HomeTitle'
import { NavigationButton } from '../components/home/NavigationButton'

export function HomePage() {
  return (
    <div className="min-h-screen flex justify-center items-center px-4 bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] text-white">
      <div className="bg-white/10 backdrop-blur-xl border border-white/25 rounded-3xl px-10 py-12 w-full max-w-md flex flex-col gap-6 shadow-2xl">
        <HomeTitle />
        <NavigationButton to="/login" label="Giriş Yap" />
        <NavigationButton to="/register" label="Kayıt Ol" />
      </div>
    </div>
  )
}
