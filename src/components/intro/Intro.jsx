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
            strings: ['Front-end Developer', 'Back-end Developer', "Web Designer", "& SEO Expert" ], 
        });
    }, []);
    return (
        <section className="intro" id="intro">
            <article className="left">
                <div className="imgContainer">
                    <div className="wrapper">
                        <h2> Hi, I am Frank,</h2>
                        <h1 className=""><span ref={textRef}> </span></h1>
                        <br></br>
                        <p> I am an experiened full stack developer who has worked with top brands. Creating memorable user experiences and designing top converting websites and applications. With over 7 years of experience I am able to design and develop large scale websites and fully functional web applications.</p>


                        <br></br>
                        <h3>Follow me</h3>
                        <div className="social-menu">
                            <a target='_blank' href='https://github.com/Frank661' ><img width={22} src='../assets/icons/github.svg'/></a>
                            <a target='_blank' href='https://www.linkedin.com/in/devfrank/' ><img width={22} src='../assets/icons/linkedin.svg'/></a>
                        </div>
                    </div>
    
                </div>
            </article>




            <div className="right">
               
                <div className="av-wrapper">
                    <div className="avatar-img"></div>
                </div>
               
                
            </div>
        </section>


    )
}
