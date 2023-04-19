import React from 'react'
import slide1 from './Images/cashew-wallpaper.jpg'
import slide2 from './Images/Jagannath.jpg'
import slide3 from './Images/Jagannath_Temple.jpg'
import './About.css'

export const About = () => {
    return (
    <div>
        <div>
            <header>
                <div className="head-text">
                    <div className="head-image">
                        <img className= "bg" src={slide1} alt="bg" />
                    </div>
                    <div class='text-on-image'>
                        <p> ❛❛Kalinga Cashew,<br></br>
                        The taste of authenticity❜❜ </p>
                    </div>
                    <div class='para ' >
                    <p>We are based in south Odisha, where the climate is favorable for cashew plantation. There are lots of processing plantation farms here and so we bring to you the best produced quality cashew.
	                Our cashews are unique as the're fresh & crispy. We bring on the table different types of cashew sizes for you to enjoy at a affordable price. We promise to serve you the best quality cashew.</p>
                    </div>
                </div>
            </header>


        </div>

        <div>
            <header>
                <div className="head-text">
                    <div className="head-image">
                        <img className= "bg" src={slide3} alt="bg" />
                    </div>
                    <div class='offer-on-image'>
                        <p> ❛❛Special Offer❜❜ </p>
                    </div>
                    <div class='offer-para ' >
                    <p>Complimentary Jagannath Mahaprasad<br/>
                    Cash on Delivery Available<br/>
                    Free Home Delivery</p>
                    </div>
                </div>
            </header>


        </div>

    </div>
    )
}
