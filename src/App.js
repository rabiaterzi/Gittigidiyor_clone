import './App.css';
//import {image1, image2, image3, image4} from './images'
import Home_page from './components/home_page/Home_page';
import {BrowserRouter} from 'react-router-dom'
import {Route, Switch, Link, Routes} from 'react-router-dom'
import Login from './pages/login';
import SignUp from './pages/sign-up';
import Basket from './pages/basket';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="/home" element={<Home_page/>}/>
            <Route path="/uye-girisi" element={<Login/>} />
            <Route path="/kayit-ol" element={<SignUp/>} />
            <Route path="/sepetim" element={<Basket/>} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
