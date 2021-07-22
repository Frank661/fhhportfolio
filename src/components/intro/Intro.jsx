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
            strings: ['Front End Developer', 'Back End Developer', "Web Designer" ], 
        });
    }, []);
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/pngfind.com-avatar-png-52097.png" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2> Hey There, I'm</h2>
                    <h1> Frank Hernandez </h1>
                    <h3> A <span ref={textRef}> </span></h3>
                    <a href="#portfolio"> 
                    <img src="assets/down.png"/>
                
                </a>
                </div>
               
            </div>
     
        </div>
    )
}
