import React from 'react';
import Button from "../sinnepts/Button";


const BannerSec = (props) => {
  console.log(props.secCards)
  const touchone = (text) => {
    alert(`Your ${text} coffee is ready`);
  }

  return (
    <div>
      <div className="bgcolor">
        <div className="container">
          <div className="maindiv">
            <div>
              <h1 className="mainHeading">Enjoy your <span className="coffee">coffee</span> before your activity</h1>
              <p className="firstPara">Boost your productivity and build your mood with a glass of coffee in the morning </p>
              <div className="buttonDiv">
                <Button text='Order Now' iconImage='btn_order.svg' />
                <a href="#" className="moreMenu">More menu</a>
              </div>
            </div>
            <div>
              <img src="/images/img-hero.png" className="img" alt="img-hero" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="mainContant">
            <p className="pouplarNow">Popular Now</p>
            
            <div className="cards">
              {props.cardsData.map((item, index) => (
                <div key={index} className="mainImgdiv">
                  <div className="imgDiv">
                    <img src={`/images/${item.img}`} className="cOne" alt={`${index}${item.img}`} />
                    <div className="ranking">
                      <button className="rankDiv design_ranking">{item.rating}<img src="/images/akar_icons_star.png" alt="akar_icon_star" /></button>
                    </div>
                    <div className="coffeeDetail">
                      <p className="cn">{item.title}</p>
                      <p className="marks">{item.price}</p>
                    </div>
                    <div className="sugest">
                      <div className="subDiv">
                        <button type="submit" className="sub1" onClick={() => { touchone("hot") }}>Hot</button>
                        <button type="submit" className="sub2" onClick={() => { touchone("cold") }}>Cold</button>
                      </div>
                      <div className="Frame_order_div">
                        <img src="/images/Frame_order.png" className="Frame_order" alt="Frame_order" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>


          </div>
        </div>
      </div>
      <div className='container'>
        <div className='full_sec'>
          <h1 className="pouplarNow">How to use delivery <span>service</span></h1>
          <div className='cards_two'>

            {props.secCards.map((item, index) => (
               <div key={index} className='main_card_div' >
                <img src={`/images/${item.photo}`} className='img_div' alt={`${item.photo}`} />
                <div className='containt_div'>
                  <p className='containt'>{item.containt}</p>
                  <p className='choos'>{item.choos}</p>
                </div>
              </div>
            ))}
            {/* <img src="/images/cup_coffee.png" alt="cup_coffee" />
            <div>
              <p>choose your coffee</p>
              <p>there are 20+ coffees for you</p>
            </div> */}
          </div>

        </div>

      </div>
    </div>

  )
}

export default BannerSec;
