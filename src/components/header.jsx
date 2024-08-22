


function Header(props) {
    console.log(props.navLinks)
    return (
        <>
            <div className="nav" >
                <div className="container">
                    <div className="nav-main">

                        <div>
                            <img src="/images/main_logo.svg" alt="logo" />
                        </div>
                        <div className="more-info">
                            {
                                props.navLinks.map((value, index) => {
                                    return (
                                        <a key={index} href="/" className="nav_link">{value}</a>
                                    )
                                })
                            }

                        </div>

                        <div className="Search-div">
                            <img src="/images/search.svg" className="icon-search" alt="sarch-icon" />
                            <input placeholder="Cappuccino" />                           
                        </div>

                        <div>
                            <img className="shop" src="/images/order_card.svg" alt="icons_cart" />
                        </div>
                       

                    </div>
                </div>
            </div>

        </>
    )

}

export default Header