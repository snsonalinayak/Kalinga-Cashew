import React from 'react'
import slide1 from './Images/cashew-wallpaper.jpg'
import slide2 from './Images/Jagannath.jpg'
import './About.css'

export const About = () => {
    return (
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
                    <p>We are based in south Odisha which climate is very much favorable for cashew plantation.There are lots of processing plant in this area to produce best quality cashew.We are tied up with these processing plants to supply you the fresh & crispy cashew of different type at affordable prlce.Though you will get cashew In market which are stock for some time and not so crispy as the fresh cashew. So give us a chance.We hope we will definitely fulfill your expectation.</p>
                    </div>
                </div>
            </header>
            {/* <figure className="text-start" >
                <blockquote className="blockquote" >
                    <p>“Kalinga Cashew,
                        The taste of authenticity.”</p>
                </blockquote>
                <p><em>We are based in south Odisha which climate is very much favorable for cashew plantation.There are lots of processing plant in this area to produce best quality cashew.We are tied up with these processing plants to supply you the fresh & crispy cashew of different type at affordable prlce.Though you will get cashew In market which are stock for some time and not so crispy as the fresh cashew. So give us a chance.We hope we will definitely fulfill your expectation.</em></p>
            </figure> */}


        </div>
    )
}
