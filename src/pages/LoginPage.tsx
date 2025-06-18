import AuthCard from "../components/auth/AuthCard";
import InputField from "../components/auth/InputField";
import SubmitButton from "../components/auth/SubmitButton";

export default function LoginPage() {
  return (
    <AuthCard>
      <h1>Giriş Yap</h1>
      <form className="login-form">
        <InputField
          type="email"
          placeholder="mail@example.com"
          name="email"
        />
        <InputField
          type="password"
          placeholder="Şifre"
          name="password"
        />
        <SubmitButton label="Giriş Yap" />
      </form>
    </AuthCard>
  );
}
