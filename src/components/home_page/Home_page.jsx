import { Component } from "react";

import Header from '../header/Header';
import Slider from '../slider/Slider';
import Footer from '../footer/Footer';

import image1 from '../../images/1.PNG'
import image2 from '../../images/2.PNG'
import image3 from '../../images/3.PNG'
import image4 from '../../images/4.PNG'

class Home_page extends Component{
    render(){
        return(
            <div className="App">
                <Header/>
                <Slider/>
                <div className='kesfet'>
                    <div className='text'>
                    <label>Keşfetmeye Bak</label>
                    <button>
                        <label>Tümünü Keşfet</label>
                        <img src='https://cdn-icons.flaticon.com/png/512/5202/premium/5202864.png?token=exp=1645443923~hmac=4c5dc085b81a2a27d3f9df04b34cd987'/>
                    </button>
                    </div>
                    <div className='images'>
                    <button>
                        <img src={image1}/>
                    </button>
                    <button>
                        <img src={image2}/>
                    </button>
                    <button>
                        <img src={image3}/>
                    </button>
                    <button>
                        <img src={image4}/>
                    </button>
                    </div>
                </div>

                <div>
                    <img className='image1' src='https://mcdn01.gittigidiyor.net/ps/anasayfa_ara_bant_1641477120.jpg'/>
                </div>

                <div className='firsat'>
                    <div className='firsat-text'><label>Ayın Fırsatları</label></div> 
                    <div className='firsat-images'>
                    <button>
                        <img src='https://mcdn01.gittigidiyor.net/ps/_anv_1646062430.jpg'/>
                        <label>Yapı Market</label>
                    </button>
                    <button>
                        <img src='https://mcdn01.gittigidiyor.net/ps/anv_1646063374.jpg'/>
                        <label>Outdoor Giyim</label>
                    </button>
                    <button>
                        <img src='https://mcdn01.gittigidiyor.net/ps/_anv_1646062687.jpg'/>
                        <label>Halı ve Aydınlatma</label>
                    </button>
                    </div>       
                </div>

                <div className='p-kategoriler'>
                    <div><label>Popüler Kategoriler</label></div>
                    <div>
                    <img src='https://mcdn01.gittigidiyor.net/cdimg/anasayfa/nucleus/bahce-aydinlatma-ust.jpg'></img>
                    <div>
                        <button>
                        <img src='https://mcdn01.gittigidiyor.net/cdimg/anasayfa/nucleus/bahce-mobilya-alt.jpg'></img>
                        <label>Bahçe Mobilyaları</label>
                        </button>
                        <button>
                        <img src='https://mcdn01.gittigidiyor.net/cdimg/anasayfa/nucleus/utu-masasi-alt.jpg'></img>
                        <label>Ütü Masası</label>
                        </button>
                        <button>
                        <img src='https://mcdn01.gittigidiyor.net/cdimg/anasayfa/nucleus/mutfak-masasi-alt.jpg'></img>
                        <label>Mutfak Masa Takımı</label>
                        </button>
                    </div>
                    </div>
                    <div>
                    <img src='https://mcdn01.gittigidiyor.net/cdimg/anasayfa/nucleus/hoparlor-ust.jpg'></img>
                    <div>
                        <button>
                        <img src='https://mcdn01.gittigidiyor.net/cdimg/anasayfa/nucleus/far-alt.jpg'></img>
                        <label>Far, Lamba</label>
                        </button>
                        <button>
                        <img src='https://mcdn01.gittigidiyor.net/cdimg/anasayfa/nucleus/paspas-alt.jpg'></img>
                        <label>Araç İçi Halı, Paspas</label>
                        </button>
                        <button>
                        <img src='https://mcdn01.gittigidiyor.net/cdimg/anasayfa/nucleus/lastik-alt.jpg'></img>
                        <label>Lastik</label>
                        </button>
                    </div>
                    </div>
                    <div>
                    <img src='https://mcdn01.gittigidiyor.net/cdimg/anasayfa/nucleus/vucut-bakim-ust.jpg'></img>
                    <div>
                        <button>
                        <img src='https://mcdn01.gittigidiyor.net/cdimg/anasayfa/nucleus/parfum-alt.jpg'></img>
                        <label>Parfüm</label>
                        </button>
                        <button>
                        <img src='https://mcdn01.gittigidiyor.net/cdimg/anasayfa/nucleus/dis-alt.jpg'></img>
                        <label>Elektrikli Diş Fırçası</label>
                        </button>
                        <button>
                        <img src='https://mcdn01.gittigidiyor.net/cdimg/anasayfa/nucleus/epilator-alt.jpg'></img>
                        <label>Epilatör</label>
                        </button>
                    </div>
                    </div>
                </div>

                <div>
                    <img className='image1' src='https://www.gittigidiyor.com/gittigidiyor-kazananlar-kulubu'/>
                </div>

                <div>
                    
                </div>
                <Footer/>
            </div>
        )   
    }
}

export default Home_page;