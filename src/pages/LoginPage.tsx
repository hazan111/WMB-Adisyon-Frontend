import InputField from "../components/auth/InputField";
import SubmitButton from "../components/auth/SubmitButton";

export function LoginPage() {
  return (
    <div className="bg-custom-gradient flex items-center justify-center">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-8 shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Giriş Yap</h2>
        <form className="space-y-4">
          <InputField type="email" placeholder="Email" name="email" />
          <InputField type="password" placeholder="Şifre" name="password" />
          <SubmitButton label="Giriş" />
        </form>
      </div>
    </div>
  )
}
