import './App.css';
import './App-old.css';
import NavigatorBar from './FoodieComponents/NavigatorBar/Navigator';
import Login from './Pages/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FoodieHome from './Pages/FoodieHome';
import Catalog from './Pages/Catalog';
import Blog from './Pages/Blog';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import ShopCategory from './Pages/ShopCategory';
import Footer from './FoodieComponents/Footer/Footer';
import MayBeShowNavbar from './FoodieComponents/MayBeShow/MayBeShowNavbar';
import MayBeShowFooter from './FoodieComponents/MayBeShow/MayBeShowFooter';
import Products from './Pages/Products';
import BiryaniBanner from './FoodieComponents/foodie-img/banner-5.jpg';
import BurgerBanner from './FoodieComponents/foodie-img/banner-6.jpg';
import PizzaBanner from './FoodieComponents/foodie-img/banner-5.jpg';
import Cart from './Pages/Cart';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
       
        <MayBeShowNavbar>
          <NavigatorBar />
        </MayBeShowNavbar>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path='/home' element={<FoodieHome />} /> 
          <Route path='/about' element={<AboutUs />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/biryani' element={<ShopCategory banner={BiryaniBanner} category = "briyani" />} />
          <Route path='/burger' element={<ShopCategory banner={BurgerBanner} category = "burger" />} />
          <Route path='/pizza' element={<ShopCategory banner={PizzaBanner} category = "pizza" />} />
          <Route path='/contact' element={<ContactUs />} /> 
          <Route path='/products' element={<Products />}>
            <Route path=':productId' element={<Products />} />
          </Route>  
          <Route path='/cart' element={<Cart />} />         
        </Routes>
        <MayBeShowFooter>
          <Footer />
        </MayBeShowFooter>
      </BrowserRouter>
       
    </div>
  );
};

export default App;
