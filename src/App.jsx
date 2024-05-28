import Contact from "./components/contact/Contact"
import Intro from "./components/intro/Intro"
import Topbar from "./components/topbar/Topbar"
import Testimonials from "./components/testimonials/Testimonials"
import Skills from "./components/skills/Skills"
import "./app.scss"
import {useState} from "react"
import Menu from "./components/menu/Menu"
import Footer from "./components/footer/footer"
import Portfolio2 from "./components/portfolioList/PortfolioList"
import FeaturedPosts from "./components/posts/FeauturedPosts"

function App() {
  const [menuOpen, setMenuOpen]= useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections"> 
        <Intro/>
        <Skills/>
        <Portfolio2/>
        <FeaturedPosts/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
