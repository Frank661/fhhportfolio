import "./skills.scss"
import {useState} from 'react'

export default function Skills() {
    
    const [currentSlider, setCurrentSlider] = useState(0);


    const data = [
        {
            id: 1,
            title: "Front End Technologies",
            icon: "assets/mobile.png",
            img: "https://images.unsplash.com/photo-1536148935331-408321065b18?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80",
            description: 
            <div className="skills"> 
            
                <li><img src="assets/javascript.png" width="25" height="25" ></img> JavaScript</li>
                <li><img src="assets/python.png" width="25" height="25" ></img>Python</li>
                <li><img src="assets/react.png" width="25" height="25" ></img>React.js</li>
                <li> <img src="assets/redux.png" width="25" height="25" ></img>Redux</li>
                <li><img src="assets/css-3.png" width="25" height="25" ></img>CSS</li> 
                <li> <img src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" width="25" height="25" alt="HTML5 Powered" title="HTML5 Powered"></img> HTML5</li>
            </div>
        },
        {
            id: 2,
            title: "Backend Technologies",
            icon: "assets/globe.png",
            img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=100",
            description: 
            <div className="skills">  
                <li><img src="assets/nodejs.png" width="65" height="30" ></img></li>
                <li><img src="assets/graphql.png" width="30" height="30" ></img>GraphQl</li>
                <li><img src="assets/sql-server.png" width="35" height="30" ></img>SQL</li>
                <li><img src="assets/mongodb.png" width="75" height="30" ></img></li>     
            </div>
        },
        {
            id: 3,
            title: "Technologies",
            icon: "assets/globe.png",
            img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=100",

            description: <p style={{fontWeight:"600", paddingTop:"25px"}}> Hey there, I am a full stack developer who can work on front and back end development. My knowledge does not only end on the items I have listed, in this world of neverending change I am constantly learning new frameworks and working with new technologies all the time. So just because it's not listed does not mean I can not work with it. Reach out and let's work together on bringing the future to us. </p>
        }
    ]

    const handleClick = (way) => {
        way === "left" ? setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 2) : 
        setCurrentSlider(currentSlider < data.length - 1 ?currentSlider+1 : 0) 
    }

    return (
        <section className="wrapper" id="skills">
            <h2 className="service-header"> Get A Developer That Gets You.  </h2>

            <div className="top-holder">

                <div className="content-holder-FED column">
                    <img src="https://images.unsplash.com/photo-1553390774-b4822481c894?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2688&q=80" width={'600px'} height={'505px'}/>
                </div>

                <div className="content-holder-WD column">

                    <div >
                        <h3>Creative</h3>
                        <h2>Web Developer & Designer</h2>
                        <div style={{padding:"5px"}}></div>
                        <p> As a great web developer and designer with a combination of technical skills and creativity we will create visually appealing, user-friendly, and functional websites and applications. </p>

                        <a className="" href="#contact"> Schedule a Free Consultation Today! → </a>

                    </div>
                </div>

            </div>

            <div className="reverse-col top-holder ">
                <div className="content-holder-WD ">
                    <div >
                        <h3>Sharp</h3>
                        <h2>Backend Developer</h2>
                        <div style={{padding:"5px"}}></div>
                        <p> As a good back-end developer we work on the server-side of web development and are responsible for building and maintaining the server-side components of web applications. Whether it's an API or we are dealing with integrations having a knowledgable developer is the right choice.</p>

                        <a className="" href="#contact"> Schedule a Free Consultation Today! → </a>

                    </div>
                </div>
                <div className="content-holder-FED column">
                    <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={'800px'} height={'505px'}/>
                </div>

            </div>

            <div className="top-holder">

                <div className="content-holder-FED column">
                    <img src="https://images.unsplash.com/photo-1577071835592-d5d55ffef660?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" width={'600px'} height={'505px'}/>
                </div>

                <div className="content-holder-WD column">

                    <div >
                        <h3>Resourceful</h3>
                        <h2>SEO Specialist</h2>
                        <div style={{padding:"5px"}}></div>
                        <p> If you are looking to rank your website on that first page of Google then you need a good seo specialist on your team! As a Search Engine Optimizer I ensure your content is intentful and gets infront of your targeted audience. With aggressive strategies we help your website's visibility in search engine results pages (SERPS) improve.  </p>

                        <a className="" href="#contact"> Schedule a Free Consultation Today! → </a>

                    </div>
                </div>

            </div>


        </section>
    );
}
