import { Component, React } from "react";
import { Row, Col } from "reactstrap";
import "./Header.css";

class Header extends Component {
  state = {
    names: [
      "Süper Fiyatlar",
      "Tüm Kampanyalar",
      "Yurt Dışı Alışveriş",
      "Kazananlar Kulübü",
      "Satış Yap",
      "Mağaza Aç",
      "Bize Ulaşın",
      "İade Süreci",
      "Satış Takibi",
    ],
    categories: [
      "Elektronik",
      "Ev,Bahçe,Ofis, Yapı Market",
      "Moda",
      "Kozmetik, Kişisel Bakım",
      "Anne, Bebek",
      "Süpermarket, Evcil Hayvan",
      "Kitap,Müzik, Oyuncak, Hobi",
      "Otomobil, Motosiklet",
      "Spor, Outdoor"
    ]
  };

  render() {
    return (
      <header>
        <Row >
          <div className="row1">
            {this.state.names.map((name, i) => {
            return (
              <Col>
                <button className="buton" key={i}>
                  {name}
                </button>
              </Col>
            );
            })}
          </div>     
        </Row>
        <Row >
          <div className="row2">
            <img
              className="logo"
              src="https://mcdn01.gittigidiyor.net/cdimg/anasayfa/nucleus/gglogo.svg"
            ></img>

            <div className="search-div">
              <img src="https://cdn-icons.flaticon.com/png/512/2811/premium/2811806.png?token=exp=1643016737~hmac=56b7e73bb6d094cd67c8e9525f3acb13"/>
              <input placeholder="Keşfetmeye Bak"></input>
              <button>BUL</button>
            </div>
            
            <div className="login">
              <img src="https://cdn4.iconfinder.com/data/icons/basic-user-interface-elements/700/user-account-profile-human-avatar-face-head--256.png" />
              <div>
                <label>Giriş Yap</label>
                <br/>
                <label>veya Üye Ol</label>
              </div>         
            </div>

            <div className="basket">
              <img src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-12-256.png" />
              <label>Sepetim</label>
            </div>
          </div>
        </Row>
        <Row className="category-row">
        {this.state.categories.map((category, i) => {
            return (
              <Col>
                <button className="categories" key={i}>
                  {category}
                </button>
              </Col>
            );
          })}
        </Row>
      </header>
    );
  }
}

export default Header;
