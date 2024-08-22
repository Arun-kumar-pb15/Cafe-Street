import Button from "../sinnepts/Button";

const Footer = () => {
    return (
        <div>
            <div className="container">
                <div className="footer_main">
                    <img src="/images/footer_img.png" className="footerImg" alt="footer_img" />
                    <div className="footer_cont">
                        <p className="subscribe">Subscribe to get 50% discount price</p>
                        <div className="footer-box ">
                            <input className="email" placeholder="Email address" />
                            <Button text='Order Now' />
                        </div>
                    </div>
                </div>

                <div>
                    <div class="container">
                        <div class="main-div2">
                            <div class="Skills-div">
                                <div class="footer-div">
                                    {/* <div class="footer-button">
                            <div class="button_div">
                                <button class="About_me_button">Get in touch</button>
                            </div>
                            <p class="skills-example">What’s next? Feel free to reach out to me if you're looking for a
                                developer,
                                have
                                a query, or simply want to connect.</p>
                        </div> */}
                                    <div class="both-socal-div">
                                        <div class="socal-div">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                                                fill="none">
                                                <path
                                                    d="M26.6667 5.3335H5.33341C3.86066 5.3335 2.66675 6.5274 2.66675 8.00016V24.0002C2.66675 25.4729 3.86066 26.6668 5.33341 26.6668H26.6667C28.1395 26.6668 29.3334 25.4729 29.3334 24.0002V8.00016C29.3334 6.5274 28.1395 5.3335 26.6667 5.3335Z"
                                                    stroke="#4B5563" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path
                                                    d="M29.3334 9.3335L17.3734 16.9335C16.9618 17.1914 16.4858 17.3282 16.0001 17.3282C15.5143 17.3282 15.0384 17.1914 14.6267 16.9335L2.66675 9.3335"
                                                    stroke="#4B5563" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>

                                            <a class="gmail" href="mailto:ak7814549452@gmail.com">ak7814549452@gmail.com</a>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                                                fill="none">
                                                <path
                                                    d="M26.6667 10.6665H13.3334C11.8607 10.6665 10.6667 11.8604 10.6667 13.3332V26.6665C10.6667 28.1393 11.8607 29.3332 13.3334 29.3332H26.6667C28.1395 29.3332 29.3334 28.1393 29.3334 26.6665V13.3332C29.3334 11.8604 28.1395 10.6665 26.6667 10.6665Z"
                                                    stroke="#4B5563" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path
                                                    d="M5.33341 21.3332C3.86675 21.3332 2.66675 20.1332 2.66675 18.6665V5.33317C2.66675 3.8665 3.86675 2.6665 5.33341 2.6665H18.6667C20.1334 2.6665 21.3334 3.8665 21.3334 5.33317"
                                                    stroke="#4B5563" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                        </div>


                                        <div class="socal-div">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                                                fill="none">
                                                <path
                                                    d="M29.3334 22.56V26.56C29.3349 26.9313 29.2589 27.2989 29.1101 27.6391C28.9613 27.9793 28.7431 28.2848 28.4695 28.5358C28.1959 28.7868 27.8728 28.9779 27.5211 29.0969C27.1693 29.2159 26.7966 29.2601 26.4267 29.2266C22.3239 28.7808 18.3827 27.3788 14.9201 25.1333C11.6985 23.0862 8.96719 20.3549 6.92007 17.1333C4.66671 13.6549 3.2644 9.69463 2.82674 5.5733C2.79342 5.20459 2.83724 4.83298 2.95541 4.48213C3.07357 4.13128 3.2635 3.80889 3.51309 3.53546C3.76269 3.26204 4.06648 3.04358 4.40513 2.894C4.74378 2.74441 5.10986 2.66698 5.48007 2.66663H9.48007C10.1271 2.66026 10.7545 2.8894 11.2451 3.31134C11.7357 3.73328 12.0562 4.31923 12.1467 4.95997C12.3156 6.24006 12.6287 7.49694 13.0801 8.70663C13.2595 9.18387 13.2983 9.70252 13.1919 10.2011C13.0856 10.6998 12.8386 11.1574 12.4801 11.52L10.7867 13.2133C12.6848 16.5514 15.4487 19.3152 18.7867 21.2133L20.4801 19.52C20.8426 19.1615 21.3003 18.9144 21.7989 18.8081C22.2975 18.7018 22.8162 18.7406 23.2934 18.92C24.5031 19.3714 25.76 19.6845 27.0401 19.8533C27.6878 19.9447 28.2793 20.2709 28.7021 20.77C29.125 21.269 29.3496 21.9061 29.3334 22.56Z"
                                                    stroke="#4B5563" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>

                                            <a class="mobile-number" href="tel:+91.7814549452">+91 7814549452</a>

                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                                                fill="none">
                                                <path
                                                    d="M26.6667 10.6665H13.3334C11.8607 10.6665 10.6667 11.8604 10.6667 13.3332V26.6665C10.6667 28.1393 11.8607 29.3332 13.3334 29.3332H26.6667C28.1395 29.3332 29.3334 28.1393 29.3334 26.6665V13.3332C29.3334 11.8604 28.1395 10.6665 26.6667 10.6665Z"
                                                    stroke="#4B5563" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path
                                                    d="M5.33341 21.3332C3.86675 21.3332 2.66675 20.1332 2.66675 18.6665V5.33317C2.66675 3.8665 3.86675 2.6665 5.33341 2.6665H18.6667C20.1334 2.6665 21.3334 3.8665 21.3334 5.33317"
                                                    stroke="#4B5563" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div class="last-logo-div">
                                        <p class="last">You may also find me on these platforms!</p>
                                        <div class="last-logo">
                                            <a href="https://github.com/Arun-kumar-pb15" target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                    fill="none">
                                                    <path
                                                        d="M15 22V18C15.1392 16.7473 14.78 15.4901 14 14.5C17 14.5 20 12.5 20 9C20.08 7.75 19.73 6.52 19 5.5C19.28 4.35 19.28 3.15 19 2C19 2 18 2 16 3.5C13.36 3 10.64 3 8.00004 3.5C6.00004 2 5.00004 2 5.00004 2C4.70004 3.15 4.70004 4.35 5.00004 5.5C4.27191 6.51588 3.91851 7.75279 4.00004 9C4.00004 12.5 7.00004 14.5 10 14.5C9.61004 14.99 9.32004 15.55 9.15004 16.15C8.98004 16.75 8.93004 17.38 9.00004 18V22"
                                                        stroke="#4B5563" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path d="M9 18C4.49 20 4 16 2 16" stroke="#4B5563" stroke-width="2"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </a>
                                            <a href="https://www.twitter.com/arun_kumar_pb15" target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                    fill="none">
                                                    <path
                                                        d="M22 4.00002C22 4.00002 21.3 6.10002 20 7.40002C21.6 17.4 10.6 24.7 2 19C4.2 19.1 6.4 18.4 8 17C3 15.5 0.5 9.60002 3 5.00002C5.2 7.60002 8.6 9.10002 12 9.00002C11.1 4.80002 16 2.40002 19 5.20002C20.1 5.20002 22 4.00002 22 4.00002Z"
                                                        stroke="#4B5563" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg>

                                            </a>

                                            <a href="https://www.figma.com/files/user/1324006976521491095?fuid=1324006976521491095"
                                                target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                    fill="none">
                                                    <path
                                                        d="M5 5.5C5 4.57174 5.36875 3.6815 6.02513 3.02513C6.6815 2.36875 7.57174 2 8.5 2H12V9H8.5C7.57174 9 6.6815 8.63125 6.02513 7.97487C5.36875 7.3185 5 6.42826 5 5.5Z"
                                                        stroke="#4B5563" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path
                                                        d="M12 2H15.5C15.9596 2 16.4148 2.09053 16.8394 2.26642C17.264 2.44231 17.6499 2.70012 17.9749 3.02513C18.2999 3.35013 18.5577 3.73597 18.7336 4.16061C18.9095 4.58525 19 5.04037 19 5.5C19 5.95963 18.9095 6.41475 18.7336 6.83939C18.5577 7.26403 18.2999 7.64987 17.9749 7.97487C17.6499 8.29988 17.264 8.55769 16.8394 8.73358C16.4148 8.90947 15.9596 9 15.5 9H12V2Z"
                                                        stroke="#4B5563" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path
                                                        d="M12 12.5C12 12.0404 12.0905 11.5852 12.2664 11.1606C12.4423 10.736 12.7001 10.3501 13.0251 10.0251C13.3501 9.70012 13.736 9.44231 14.1606 9.26642C14.5852 9.09053 15.0404 9 15.5 9C15.9596 9 16.4148 9.09053 16.8394 9.26642C17.264 9.44231 17.6499 9.70012 17.9749 10.0251C18.2999 10.3501 18.5577 10.736 18.7336 11.1606C18.9095 11.5852 19 12.0404 19 12.5C19 12.9596 18.9095 13.4148 18.7336 13.8394C18.5577 14.264 18.2999 14.6499 17.9749 14.9749C17.6499 15.2999 17.264 15.5577 16.8394 15.7336C16.4148 15.9095 15.9596 16 15.5 16C15.0404 16 14.5852 15.9095 14.1606 15.7336C13.736 15.5577 13.3501 15.2999 13.0251 14.9749C12.7001 14.6499 12.4423 14.264 12.2664 13.8394C12.0905 13.4148 12 12.9596 12 12.5Z"
                                                        stroke="#4B5563" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path
                                                        d="M5 19.5C5 18.5717 5.36875 17.6815 6.02513 17.0251C6.6815 16.3687 7.57174 16 8.5 16H12V19.5C12 20.4283 11.6313 21.3185 10.9749 21.9749C10.3185 22.6313 9.42826 23 8.5 23C7.57174 23 6.6815 22.6313 6.02513 21.9749C5.36875 21.3185 5 20.4283 5 19.5Z"
                                                        stroke="#4B5563" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path
                                                        d="M5 12.5C5 11.5717 5.36875 10.6815 6.02513 10.0251C6.6815 9.36875 7.57174 9 8.5 9H12V16H8.5C7.57174 16 6.6815 15.6313 6.02513 14.9749C5.36875 14.3185 5 13.4283 5 12.5Z"
                                                        stroke="#4B5563" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg>

                                            </a>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>




                    <div class="box_one">
                        <div class="since">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                <g clip-path="url(#clip0_327_412)">
                                    <path
                                        d="M8.49992 14.6668C12.1818 14.6668 15.1666 11.6821 15.1666 8.00016C15.1666 4.31826 12.1818 1.3335 8.49992 1.3335C4.81802 1.3335 1.83325 4.31826 1.83325 8.00016C1.83325 11.6821 4.81802 14.6668 8.49992 14.6668Z"
                                        stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path
                                        d="M10.5 6.23616C10.1417 5.82996 9.66823 5.5425 9.14254 5.41203C8.61685 5.28155 8.0639 5.31424 7.55725 5.50576C7.0506 5.69728 6.61429 6.03854 6.30636 6.48414C5.99843 6.92973 5.8335 7.45853 5.8335 8.00016C5.8335 8.5418 5.99843 9.0706 6.30636 9.51619C6.61429 9.96178 7.0506 10.303 7.55725 10.4946C8.0639 10.6861 8.61685 10.7188 9.14254 10.5883C9.66823 10.4578 10.1417 10.1704 10.5 9.76416"
                                        stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_327_412">
                                        <rect width="16" height="16" fill="white" transform="translate(0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <p>2024 | Designed and coded with ❤️️ by Arun Kumar</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;