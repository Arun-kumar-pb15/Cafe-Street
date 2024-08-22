import './App.css';
import BannerSec from './components/bannerSec';
import Header from './components/header';
import './styles/header.css'
import './styles/banner.css'
import { useState } from 'react';
import Secthree from './components/secthree';
import './styles/secthree.css'
import Secfour from './components/secfour';
import './styles/secfour.css'
import Secfive from './components/secfive';
import './styles/secfive.css'
import Footer from './components/footer';
import './styles/footer.css'

function App() {
  const [color, setColor] = useState('orange');
  const navLinks = ['About us', 'Our Products', 'Delivery',]
  const cardsData = [
    {
      img: 'c_one.png',
      title: 'Vanilla Latte',
      price: '21 k',
      rating: '4.8'
    },
    {
      img: 'c_two.png',
      title: 'Espresso',
      price: '12 k',
      rating: '4.8'
    },
    {
      img: 'c_three.png',
      title: 'Hazelnut Latte',
      price: '23 k',
      rating: '4.8'
    },
  ]


  const secCards = [
    {
      photo: 'cup_coffee.png',
      containt: 'choose your coffee',
      choos: 'there are 20+ coffees for you',
    },
    {
      photo: 'food-truck.png',
      containt: 'we delivery it to you',
      choos: 'Choose delivery service',
    },
    {
      photo: 'coffee-cup-2.png',
      containt: 'Enjoy your coffee',
      choos: 'Choose delivery service',
    }
  ]


  const atuch = (a) => {
    alert("you slected is hot coffee Please Wait a few minutes")
  }


  const allCards = [
    {
      image: 'img_sandwitch.png',
      coffeeName: 'Sandwich Latte',
      payby: '12k',
      starrating: '4.8',
      detail: 'bread with meat and vegetables',
    },
    {
      image: 'img_product_three.png',
      coffeeName: 'Hot Milk',
      payby: '12k',
      starrating: '4.8',
      detail: 'Hot Milk with less sugar',
    },
    {
      image: 'ice_creem.png',
      coffeeName: 'Coffe Ice Cream',
      payby: '23k',
      starrating: '4.8',
      detail: 'Coffe with ice cream vanilla',
    },
    {
      image: 'Cappucino.png',
      coffeeName: 'Cappucino',
      payby: '23k',
      starrating: '4.8',
      detail: 'Hot Cappucino',
    },
    {
      image: 'Moccacinno.png',
      coffeeName: 'Moccacinno',
      payby: '23k',
      starrating: '4.8',
      detail: 'Hot Moccacinno',
    },
    {
      image: 'Waffle_Ice_Crem.png',
      coffeeName: 'Waffle Ice Crem',
      payby: '23k',
      starrating: '4.8',
      detail: 'Wafle with Ice cream',
    }
  ]

  const swiperImg = [
    {
      swiperphoto: 'slider-img-one.png',
      name: 'Naura',
      swiperDetail: 'I really love the cappucino, the coffee was very smooth ',
    },
    {
      swiperphoto: 'slider-img-two.png',
      name: 'John',
      swiperDetail: 'this coffee shop is very convenient',
    },
    {
      swiperphoto: 'slider-img-three.png',
      name: 'Azura',
      swiperDetail: 'the coffee menu here is very much',
    },
  ]

  return (
    <div className="App">
      <Header navLinks={navLinks} />
      <BannerSec cardsData={cardsData} atuch={atuch} secCards={secCards} />
      <Secthree />
      <Secfour allCards={allCards} />
      <Secfive swiperImg={swiperImg}/>
      <Footer  />
      {/* <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <button
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
      <button
        type="button"
        onClick={() => setColor("pink")}
      >Pink</button>
      <button
        type="button"
        onClick={() => setColor("green")}
      >Green</button> */}


    </div>
  );


}

export default App;
