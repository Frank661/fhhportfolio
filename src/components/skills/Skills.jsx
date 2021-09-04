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
        <div className="works"  id="skills">
        
          <div className="slider" 
          style={{transform: `translateX(-${currentSlider * 100}vw)`}}>
          
              {data.map(d=>(
              <div className="container">
                  <div className="item">
                      <div className="left">
                          <div className="leftContainer">
                              <div className="imgContainer">
                                  <img src={d.icon} alt="mobile device icon"/>
                              </div>
                              <h2> {d.title} </h2>
                              <p>
                                {d.description}
                              </p>
                              {/* <span>Projects</span> */}
                          </div>
                      </div>
                      <div className="right">
                          <img src= {d.img}/>
                      </div>
                  </div>
              </div>))}
          </div>
            <img src="assets/arrow.png" className="arrow left" alt="arrow icon" onClick={()=> handleClick("left") }/>
            <img src="assets/arrow.png" className="arrow right" alt="arrow icon" onClick={()=> handleClick() }/>
        </div>
    );
}
