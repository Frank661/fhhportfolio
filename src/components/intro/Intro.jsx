import "./intro.scss"
import {init} from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {

    const textRef = useRef()
    useEffect(() => {
        init(textRef.current, { 
            showCursor: true, 
            backDelay:1500,
            backSpeed: 60,
            strings: ['Front End Developer', 'Back End Developer', "Web Designer", "SEO Strategist" ], 
        });
    }, []);
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <div className="wrapper">
                        <h2> Hey There, I'm</h2>
                        <h1> Frank Hernandez </h1>
                        <h3> A <span ref={textRef}> </span></h3>
                        <br></br>
                        <a className="orange-cta " href="#contact"> Contact Me Now! </a>
                        <br></br>
                    </div>
             
                </div>
            </div>
            <section className="web-cta">
                <div className="first-content-holder">
                    <h4>Ready to supercharge your website?</h4>
                    <h2> Performance and design done right. </h2>
                    <hr></hr>
                    <p> A web developer is essential for a business in today's digital world because they create, design, and maintain websites. A website is a crucial aspect of any business's online presence as it is often the first point of contact between a potential customer and the company. A well-designed website that is easy to navigate and offers relevant information can help a business establish credibility and attract new customers. </p>

                    <a className="orange-cta pulse-btn" href="#contact"> Get Web Services Now! </a>


                </div>

                <div className="image-wrapper">
                    <picture>
                        <img src="assets/best-web-developer.jpeg" width={'600px'} height={'900px'}/>
                    </picture>
                    <div></div>
                    <div></div>
                </div>

               
                
            </section>
        </div>


    )
}
