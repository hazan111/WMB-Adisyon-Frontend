import './Home.css';

export default function Home() {
    return (
        <div className="home">    
            <h1>WMB-Adisyon</h1>
            <p>Welcome to the home page!</p>
            <div className="home_content">
                <button className="login-button">Giriş Yap</button>
                <button className="register-button">Kayıt Ol</button>
            </div>
        
        </div>
    )
}