import { Component, React } from "react";
import {Link} from 'react-router-dom'

class Login extends Component{
    render(){
        return(
            <div>
                <div>
                    <img className="logo" src="https://mcdn01.gittigidiyor.net/cdimg/anasayfa/nucleus/gglogo.svg"></img>
                    <Link to="/kayit-ol">Üye Ol</Link>
                </div>
                <div>
                    <div>
                        <label>Üye Girişi</label>
                        <button><i></i></button>
                    </div>
                    <label>ile giriş yapın</label>
                    <label>veya</label>
                    <input placeholder="Kullanıcı adı veya eposta adresiniz"></input>
                    <input placeholder="Şifreniz"></input>
                    <div>
                        <div>
                            <input type="checkbox"></input>
                            <label>Beni hatırla</label>
                        </div>
                        <label>Üye Girişi yapamıyorum</label>
                    </div>
                    <Link to="/home">Giriş Yapamıyorum</Link>
                    <Link>SMS ile Giriş Yap</Link>
                    <Link to="/kayit-ol">Ücretsiz Üye Ol</Link>
                </div>
            </div>
        )    
    }
}

export default Login;