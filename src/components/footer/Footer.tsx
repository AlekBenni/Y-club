import React from 'react'
import {NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { RootStateType } from '../../redux/store'
import { CountryType } from '../../redux/MainPageReducer'

function Footer() {

    const country = useSelector((state:RootStateType) => state.mainPaige.country)

    const resultCountry = country.map((item:CountryType, index:number) => {
        return(
            <NavLink key={index} className="footer-left__element" to={item.to}>
                <div className={`${item.style}`}></div>
                <div>
                    <p>{item.name}</p>
                    <p>Rent a yacht in {item.name}</p>
                </div>
            </NavLink>
        )
    })

    return (
        <div>
            <div className="footer">
                <div className="footer-left">
                    {resultCountry}
                </div>
                <div className="footer-right">
                    <div className="footer-right__map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552449.3781997417!2d12.717440089255868!3d39.853194353701596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b0866db7afaeb%3A0xd23a43cc658cb87e!2z0J3QtdCw0L_QvtC70YwsINCY0YLQsNC70LjRjw!5e1!3m2!1sru!2sru!4v1619010695950!5m2!1sru!2sru" title="hello" loading="lazy"></iframe>
                    </div>
                    <div className="footer-right__contact">
                        <h5>Our contact:</h5>
                        <div className="footer-right__contact-phone">
                            <div>Phone:</div>
                            <div>
                                <p>8 (900) 765 - 43 - 21</p>
                                <p>8 (900) 123 - 45 - 67</p>
                            </div>
                        </div>
                        <div className="footer-right__contact-email">
                            <div>Email:</div>
                            <div>
                                <p>yachting@gmail.com</p>
                            </div>
                        </div>
                        <h5>Follow us</h5>
                        <div className="footer-right__contact-social">
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
            </div>
            <div className="footer-menu">
                <div className="footer-menu__wrapper wrap">
                    <div className="footer-menu__title"><h4>Yachting</h4></div>
                    <div className="menu__nav">
                        <a href="/">Main page</a>
                        <a href="/">Articles</a>
                        <a href="/">Reviews</a>
                        <a href="/">About us</a>
                    </div>
                </div>              
            </div>
            <div className="footer-copyright">
                Made with <i className="fas fa-heart"></i> by Alek Benny
            </div>
        </div>
    )
}

export default Footer
