import { Component, React } from "react/cjs/react.development";
import {Row, Col} from 'reactstrap';
import './Footer.css';

class Footer extends Component{
    render(){
        return(
            <div className="body">
                <div className="f1">
                    <Col md={8} className="fst">
                        <p>GittiGidiyor - Türkiye’nin Öncü Alışveriş Sitesi</p>
                        <p>
                            <br/>
                            Türkiye’nin ilk online pazaryeri GittiGidiyor, ürün çeşitliliği, avantajlı fiyatları ve %100 güvenli alışverişe olanak sağlayan Sıfır Risk Sistemi ile kurulduğu 2001 yılından bu yana alışveriş tutkunlarının en çok tercih ettiği e-ticaret platformlarından biri olmaya devam ediyor. 2011 yılında, küresel e-ticaret liderlerinden eBay’in bünyesine katılan GittiGidiyor, bir eBay şirketi olmanın sağladığı global deneyimle Türkiye’de sektörüne öncülük ediyor.
                            <br/><br/>
                            34.5 milyonu aşkın kayıtlı kullanıcı ve 120 bin satıcıyı bir araya getiren GittiGidiyor, elektronikten dekorasyona, kozmetikten anne bebek ürünlerine, modadan süpermarkete kadar toplam 50 kategoride milyonlarca ürünü avantajlı fiyatlarla sunuyor.
                            <br/><br/>
                            GittiGidiyor, KOBİ’lerin ve bireysel satıcıların yanı sıra yerli ve yabancı yüzlerce büyük markanın resmi mağazalarına da ev sahipliği yapıyor. Avantajlı mağaza paketleri, gelişmiş satış araçları ve listeleme promosyonlarıyla GittiGidiyor, hem kurumsal hem de bireysel satıcılar için işlerini kolayca e-ticaretle büyütme fırsatı yaratıyor.
                            <br/><br/>
                            Türkiye’nin tüm şehirlerine aynı mesafede milyonlarca ürün seçeneğini bulabileceğiniz GittiGidiyor ile hayatınızı kolaylaştırmanın ve güvenle hızlı alışveriş yapmanın keyfini çıkarın!
                        </p>
                    </Col>
                    <Col md={4}>
                        <img src="https://mcdn01.gittigidiyor.net/cdimg/anasayfa/footer/best-company.jpg"/>
                        <img src="https://mcdn01.gittigidiyor.net/cdimg/anasayfa/footer/superbrands-logo21.jpg"/>
                    </Col>
                </div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
        )
    }
}

export default Footer;