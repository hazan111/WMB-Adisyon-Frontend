import AuthCard from "../components/auth/AuthCard";
import InputField from "../components/auth/InputField";
import SubmitButton from "../components/auth/SubmitButton";


export default function RegisterPage() {
  return (
    <AuthCard>
      <h1>Kayıt Ol</h1>
      <form className="register-form">
        <InputField
          type="text"
          placeholder="Kullanıcı Adı"
          name="username"
        />
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
        <SubmitButton label="Kayıt Ol" />
      </form>
    </AuthCard>
  );
}
