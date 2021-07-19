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
            strings: ['Full Stack Developer', 'Designer', "Creator" ], 
        });
    }, []);
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2> Hey There, I'm</h2>
                    <h1> Frank Hernandez </h1>
                    <h3> Web <span ref={textRef}> </span></h3>
                    <a href="#portfolio"> 
                    <img src="assets/down.png"/>
                
                </a>
                </div>
               
            </div>
     
        </div>
    )
}
