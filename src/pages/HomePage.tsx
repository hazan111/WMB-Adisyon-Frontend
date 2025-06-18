import HomeTitle from "../components/home/HomeTitle";
import NavigationButton from "../components/home/NavigationButton";

export default function HomePage() {
  return (
    <div className="card-container">
      <div className="home_content">
        <HomeTitle />
        <NavigationButton to="/login" label="Giriş Yap" className="login-button" />
        <NavigationButton to="/register" label="Kayıt Ol" className="register-button" />
      </div>
    </div>
  );
}
