import React from "react";
import Iphone from "../assets/images/iphone-14.jpg";
import HoldingIphone from "../assets/images/iphone-hand.png"

function Jumbtron() {

    const handleLearnMore = () =>{
        const element = document.querySelector(".sound-section");
        window.scroll({
            top: element?.getBoundingClientRect().top,
            left:0,
            behavior: 'smooth'
        });
        
    }
    return (
        <div className="jumbotron-section wrapper">
            <h2 className="title">New</h2>
            <img className="logo" src={Iphone} alt="iPhone 14 Pro" />
            <p className="text">Big and bigger.</p>
            <span className="description">
                From $41.62/mo. for 24 mo. or $999 before trade-in
            </span>
            <ul className="links">
                <li>
                    <button className="button">Buy</button>
                </li>
                <li>
                    <p onClick={handleLearnMore} className="link">Learn More</p>
                </li>
            </ul>
            <img src={HoldingIphone} alt="iphone" className="iphone-img" />
        </div>
      );
}

export default Jumbtron;