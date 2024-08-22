const Secfour = (props) => {
    console.log(props);
    return (
        <div>
            <div className="container">
                <div className="totalDiv">
                    <p className="specialMenu">Special menu for you</p>
                    <div className="allCards">
                        {props.allCards.map((item, index) => (
                            <div key={index} className="mainImgdiv">
                                <div className="imgDiv">
                                    <img src={`/images/${item.image}`} className="cOne" alt={`${index}${item.image}`} />
                                    <div className="ranking">
                                        <button className="rankDiv design_ranking">{item.starrating}<img src="/images/akar_icons_star.png" alt="akar_icon_star" /></button>
                                    </div>
                                    <div className="coffeeDetail">
                                        <p className="cn">{item.coffeeName}</p>
                                        <p className="marks">{item.payby}</p>
                                    </div>
                                    <div className="sugest">
                                        <div className="subDiv">
                                            <p className="vegtables">{item.detail}</p>
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
    )

}


export default Secfour;
