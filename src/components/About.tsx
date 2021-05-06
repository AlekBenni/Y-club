import React from 'react'
import Title from '../style_blocks/Title'
import Header from './header/Header'

function About() {
    return (
        <div>
            <Header/>
            <div className="about wrap">
                <Title
                title="About us"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                />
                <div className="aboutUs-wrapper">
                    <div className="aboutUs-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552449.3781997417!2d12.717440089255868!3d39.853194353701596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b0866db7afaeb%3A0xd23a43cc658cb87e!2z0J3QtdCw0L_QvtC70YwsINCY0YLQsNC70LjRjw!5e1!3m2!1sru!2sru!4v1619010695950!5m2!1sru!2sru" title="hello" loading="lazy"></iframe>
                    </div>
                    <div className="aboutUs-contact">
                        <h2>Our contact:</h2>
                        <div className="aboutUs-contact__address">
                            <h4>Address:</h4>
                            <p>Via Eldorado, 3, 80132 Napoli NA, Италия</p>
                        </div>
                        <div className="aboutUs-contact__phone">
                            <h4>Phone:</h4>
                            <div>
                                <p>8 (900) 765 - 43 - 21</p>
                                <p>8 (900) 123 - 45 - 67</p>
                            </div>
                        </div>
                        <div className="aboutUs-contact__email">
                        <h4>Email:</h4>
                            <div>
                                <p>yachting@gmail.com</p>
                            </div>
                        </div>
                        <div className="aboutUs-follow">
                            <h4>Follow us:</h4>
                        </div>                      
                        <div className="aboutUs-follow__social">
                            <a href="http://localhost:3000/">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="http://localhost:3000/">
                                <i className="fab fa-google"></i>
                            </a>
                            <a href="http://localhost:3000/">
                                <i className="fab fa-youtube"></i>
                            </a>
                            <a href="http://localhost:3000/">
                                <i className="fab fa-tiktok"></i>
                            </a>
                            <a href="http://localhost:3000/">
                                <i className="fab fa-pinterest-p"></i>
                            </a>  
                        </div>
                    </div>
                </div>
                <div className="aboutUs-footer">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>         
            </div>           
        </div>
    )
}

export default About
