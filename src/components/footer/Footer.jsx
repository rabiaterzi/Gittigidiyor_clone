import { Component, React } from "react/cjs/react.development";
import {Row, Col} from 'reactstrap';
import './Footer.css';

class Footer extends Component{
    render(){
        return(
            <div className="body">
                <Row className="f1">
                    <Col md={9} className="fst">
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
                    <Col md={3} className="scd">
                        <ul>
                            <li><img src="https://mcdn01.gittigidiyor.net/cdimg/anasayfa/footer/best-company.jpg"/></li>
                            <li><img src="https://mcdn01.gittigidiyor.net/cdimg/anasayfa/footer/superbrands-logo21.jpg"/></li>
                        </ul>
                    </Col>
                </Row>
                <br/>
                <Row className="f2">
                    <Col className="list1" md={3}>
                        <h4>GittiGidiyor</h4>
                        <ul>
                            <li>Hakkımızda</li>
                            <li>Sıfır Risk Sistemi</li>
                            <li>Yardım & Müşteri Hizmetleri</li>
                            <li>Kazananlar Kulübü</li>
                            <li>Site Haritası</li>
                            <li>Markalar</li>
                            <li>Kariyer Fırsatları</li>
                            <li>Kurumsal Blog</li>
                            <li>İletişim</li>
                            <li>GittiGidiyor API</li>
                        </ul>
                    </Col>
                    <Col className="list2" md={3}>
                        <h4>İşlem Rehberi</h4>
                        <ul>
                            <li>Nasıl Ürün Alırım</li>
                            <li>Ödeme Seçenekleri</li>
                            <li>Alış Sonrası İşlemler</li>
                            <li>Nasıl İade Yapılır?</li>
                            <li>Ekspres Para İadesi</li>
                            <li>Nasıl Satış Yapılır?</li>
                            <li>Satıcı Bilgi Merkezi</li>
                            <li>GittiGidiyor Akademi</li>
                            <li>Ücretsiz Mağaza Açın</li>
                        </ul>
                    </Col>
                    <Col className="list3" md={6}>
                        <h4>Popüler Sayfalar</h4>
                        <ul>
                            <li>iPhone 13</li>
                            <li>Kombi</li>
                            <li>Dolap</li>
                            <li>Farmasi</li>
                            <li>Avize</li>
                            <li>TV Ünitesi</li>
                            <li>Bluetooth Kulaklık</li>
                            <li>Macbook</li>
                            <li>Bebek Bezi</li>
                            <li>Kış Lastiği</li>
                        </ul>
                        <ul>
                            <li>Kedi Maması</li>
                            <li>Airpods</li>
                            <li>Süper Cuma</li>
                            <li>Sevgililer Günü</li>
                            <li>Yılbaşı Hediyeleri</li>
                            <li>Gram ALtın</li>
                            <li>Akıllı Saat</li>
                            <li>iPhone 8 Plus</li>
                            <li>Ufo</li>
                            <li>Yorgan</li>
                        </ul>
                        <ul>
                            <li>Köpek Maması</li>
                            <li>Bagaj Havuzu</li>
                            <li>Protein Tozu</li>
                            <li>Akvaryum</li>
                            <li>Matkap</li>
                            <li>El Aletleri</li>
                            <li>Epilasyon</li>
                            <li>Buzdolabı</li>
                            <li>Kitaplık</li>
                            <li>Antifriz</li>
                        </ul>
                    </Col>
                </Row>
                <Row className="f3">
                    <label>Bizi Takip Edin</label>
                    <img src="https://cdn-icons-png.flaticon.com/512/145/145802.png"/>
                    <label>Mobil Uygulamaları Keşfet</label>
                </Row>
                <Row>

                </Row>
                <Row>

                </Row>
            </div>
        )
    }
}

export default Footer;