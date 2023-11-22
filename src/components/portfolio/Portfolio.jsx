import { useState, useEffect } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { 
    featuredPortfolio, 
    mobilePortfolio, 
    webPortfolio} from "../../data"
import { SwitchVideo } from "@material-ui/icons";

export default function Portfolio() {
    const [selected, setSelected] = useState("featured")
    const [data, setData] = useState([])

    const list =[
        {
            id: "BMF",
            title: "Beautifully Made Frenchies ",
            image: "../assets/portfolio-images/bmfhero.png",
            favicon: "../assets/portfolio-images/bmf favicon.svg",
            description: "A breeder specializing in the nurturing of French Bulldog puppies. The website we created not only emphasized the adorable nature of the pups but also facilitated an easy adoption process by making it simple and easy for a user to submit their information. The design is a harmonious blend of aesthetics and functionality.",
            date: "",
            link: "https://bmfrenchies.com/",
            serviceType: "Design • Build • Update • Maintenance",
            techStack: "PHP • JavaScript • HTML • CSS • Bootstrap • Wordpress CMS"
        },
        {
            id: "DictionaryTranslate",
            title: "Dictionary Translate",
            image: "../assets/portfolio-images/dictionaryapphero.png",
            favicon: "../assets/portfolio-images/dictionary-favicon.png",
            description: "An online dictionary that is responsive and elegant. Created as a progressive web application (PWA) this dictionary is simple and uses a free api to get you the definition of the word you are searching for in many different languages.",
            date: "",
            link: "https://unruffled-liskov-d1bf3c.netlify.app/",
            serviceType: "Design • Build",
            techStack: "React • JavaScript • HTML • CSS • Bootstrap"
        },
        {
            id: "Litchfield",
            title: "Litchfield",
            image: "../assets/portfolio-images/litchfieldhero.png",
            favicon: "../assets/portfolio-images/litchfield favicon.png",
            description: "A real estate company specializing in comprehensive property solutions. This website was created not only to emphasized the diverse nature of their property services but also facilitated an easy inquiry process. The design is both modern and functional, providing users with a rich experience as they explore the world of prime real estate.",
            date: "",
            link: "https://litchfieldmgmt.com/",
            serviceType: "Design • Build • Update • Maintenance",
            techStack: "PHP • JavaScript • HTML • CSS • Bootstrap • Wordpress CMS"

        },
        {
            id: "Nasa",
            title: "Nasa picture of the day",
            image: "../assets/portfolio-images/nasapotd.png",
            favicon: "../assets/portfolio-images/nasa-logo.svg",
            description: "Our specialized website is a celestial haven for astronomy enthusiasts. By using NASA's API feed we were able to showcase NASA's Picture of the Day in a visually appealing and user-friendly format.",
            date: "",
            link: "https://priceless-booth-d5b3d7.netlify.app/",
            serviceType: "Design • Build",
            techStack: "PHP • JavaScript • HTML • CSS • Bootstrap • Wordpress CMS"

        },
        {
            id: "AVW",
            title: "American Vision Windows",
            image: "../assets/portfolio-images/avwhero.png",
            favicon: "../assets/portfolio-images/avw favicon.png",
            description: "Dedicated to enhancing the views and comfort of homeowners, this website focuses on intuitive navigation, showcasing window features, and providing a seamless inquiry process. The result is a visually appealing and informative platform that reflects the commitment of American Vision Windows to superior window installation services.",
            date: "",
            link: "https://www.americanvisionwindows.com/",
            serviceType: "Maintenance",
            techStack: "PHP • JavaScript • HTML • CSS • Bootstrap • Wordpress CMS"
        },
        {
            id: "WildOps",
            title: "Wild Ops",
            image: "../assets/portfolio-images/wildopshero.png",
            favicon: "../assets/portfolio-images/wildops-favicon-150x150.webp",
            description: "Dedicated to fostering camaraderie and offering healing adventures, this website focuses on intuitive navigation, trip details, and creating a seamless application process. The result is a visually appealing and informative platform that reflects Wild Ops' commitment to providing a supportive network for veterans seeking connection and understanding.",
            date: "",
            link: "https://wildops.org/",
            serviceType: "Update • Maintenance",
            techStack: "PHP • JavaScript • HTML • CSS • Bootstrap • Wordpress CMS"
        },
        {
            id: "SemperSolaris",
            title: "Semper Solaris",
            image: "../assets/portfolio-images/smphero.png",
            favicon: "../assets/portfolio-images/semper-favicon.webp",
            description: "This website not only showcases the diverse range of solar options and services but also highlights the veteran-led approach, instilling confidence in clients looking for sustainable energy solutions. Responsive and empowering, the platform is a testament to Semper Solaris' commitment to providing top-tier solar services.",
            date: "",
            link: "https://www.sempersolaris.com/battery-storage/tesla-powerwall/",
            serviceType: "Design • Build • Update • Maintenance",
            techStack: "PHP • JavaScript • HTML • CSS • Bootstrap • Wordpress CMS • Salesforce CRM • MySQL"
        },
        {
            id: "Lilikoi",
            title: "Lilikoi",
            image: "../assets/portfolio-images/likhero.png",
            favicon: "../assets/portfolio-images/lik favicon.png",
            description: "Responsive and user-friendly showcases the services of Lilikoi agency and makes it easy for a user to submit an inquiry or application. ",
            date: "",
            link: "https://lilikoiagency.com/",
            serviceType: "Update • Maintenance",
            techStack: "PHP • JavaScript • HTML • CSS • Bootstrap "
        },
    ]

    useEffect(() => {
       switch (selected) {
          case "BMF":
            setData("../assets/website designed by best webdevelper.png")
              break;
        case "DictionaryTranslate":
            setData("https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80")
            break;
        case "Litchfield":
            setData(mobilePortfolio)
            break;
        case "Nasa":
            setData(mobilePortfolio)
            break;
        case "AVW":
            setData(mobilePortfolio)
            break;
        case "WildOps":
            setData(mobilePortfolio)
            break;
        case "SemperSolaris":
            setData(mobilePortfolio)
            break;
        case "Lilikoi":
            setData(mobilePortfolio)
            break;
        default:
            setData(featuredPortfolio)
       }
    }, [selected]);

    return (

        <section className="portfolio-wrapper">
            <h2> Check out some of my past work: </h2>
            <div className="portfolio-inner">
                
                <ul class="cards">
                   
                    {list.map((item)=>(
                        <li>
                            <div class="card">
                                <img src={item.image} class="card__image" alt="example image of website" />
                                <div class="card__overlay">
                                    <div class="card__header">
                                    <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                                    <img class="card__thumb" src={item.favicon} alt="web designed logo" />
                                    <div class="card__header-text">
                                        <h3 class="card__title">{item.title} <a target="_blank" href={item.link}><img width="12" src="../assets/icons/arrow-up-right-from-square-solid.svg"/></a></h3>            
                                        <span class="card__status">{item.serviceType}</span> <br></br>
                                        <span class="card__status">Technology used: {item.techStack}</span>

                                    </div>
                                    </div>
                                    <p class="card__description">{item.description} </p>
                                    
                                </div>
                            </div>      
                        </li>
                        ))}
                    
                </ul>

            </div>
        </section>
    )
}
