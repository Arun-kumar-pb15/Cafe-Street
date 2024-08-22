import Button from "../sinnepts/Button";


const Secthree = () => {
    return (
        <div>

            <div className="bgColorTwo">
                <div className="container">
                    {/* <span className="bgphoto">
                    <img src="/images/bg-image.png"  alt="bg-image" />
                </span> */}

                    <div className="motoPhoto">
                        <img src="/images/coffee_six.png" className="bigPhoto" alt="coffee_six" />
                    </div>
                    <div className="mainSecThree">
                        <div className="totalAll">
                            <h1 className="aboutUs">About Us</h1>
                            <p className="contantOne">We provide quality coffee, and ready to deliver.</p>
                            <p className="contantTwo">We are a company that makes and distributes delicious drinks. our main product is made with a secret recipe and available in stores worldwide.</p>

                            <Button text='Get your coffee' className="btnStyle"/>
                        </div>

                    </div>
                </div>

            </div>


        </div>
    )

}


export default Secthree;
