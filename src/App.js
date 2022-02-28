import './App.css';
import Header from './components/header/Header';
import Slider from './components/slider/Slider';
import image1 from './images/1.PNG'
import image2 from './images/2.PNG'
import image3 from './images/3.PNG'
import image4 from './images/4.PNG'

function App() {
  return (
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
    </div>
  );
}

export default App;
