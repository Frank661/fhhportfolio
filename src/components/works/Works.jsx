import "./works.scss"
import {useState} from 'react'

export default function Works() {
    
    const [currentSlider, setCurrentSlider] = useState(0);


    const data = [
        {
            id: 1,
            title: "Todo App",
            icon: "assets/mobile.png",
            img: "https://images.unsplash.com/photo-1536148935331-408321065b18?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            id: 2,
            title: "Html & Css app",
            icon: "assets/globe.png",
            img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=100",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            id: 3,
            title: "Spotify Landing page",
            icon: "assets/globe.png",
            img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=100",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    ]

    const handleClick = (way) => {
        way === "left" ? setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 2) : 
        setCurrentSlider(currentSlider < data.length - 1 ?currentSlider+1 : 0) 
    }

    return (
        <div className="works"  id="works">
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
                              <span>Projects</span>
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
