import Contact from "./components/contact/Contact"
import Intro from "./components/intro/Intro"
import Topbar from "./components/topbar/Topbar"
import Portfolio from "./components/portfolio/Portfolio"
import Testimonials from "./components/testimonials/Testimonials"
import Skills from "./components/skills/Skills"
import "./app.scss"
import {useState} from "react"
import Menu from "./components/menu/Menu"

function App() {
  const [menuOpen, setMenuOpen]= useState(false);
    window.scrollTo(0, 0)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections"> 
        <Intro/>
        {/* <Portfolio/> */}
        <Skills/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
