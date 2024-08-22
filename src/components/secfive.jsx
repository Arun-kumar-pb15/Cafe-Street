const Secfive = (props) => {
    console.log(props);
    return (
        <div>
            <div className="bgimgDiv">                
                <div className="totalDivtwo">
                    <div className="about_users">
                        <h1 className="h_About">What they say about us</h1>
                        <p className="h_para">We always provide the best service and always maintain the quality of coffee</p>
                    </div>
                    <div className="swiperDiv">
                        {props.swiperImg.map((item, index) => (
                            <div key={index} className="allswiper">
                                <img src={`/images/${item.swiperphoto}`} className="slider-img-one" alt={`${index}${item.swiperphoto}`} />
                                <div className="cont-div">
                                    <h1 className="name-hed">{item.name}</h1>
                                    <p className="con-para">{item.swiperDetail} </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* <div className="halfImg">
                    <img src="/images/bg-image-small.png" className="half_img" alt="bg-image-small" />
                </div> */}
            </div>
        </div>
    )
}


export default Secfive;