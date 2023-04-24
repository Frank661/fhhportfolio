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
            title: "Beautifully Made Frenchies",
        },
        {
            id: "DictionaryTranslate",
            title: "Dictionary Translate",
        },
        {
            id: "Litchfield",
            title: "Litchfield",
        },
        {
            id: "Nasa",
            title: "Nasa picture of the day",
        },
        {
            id: "AVW",
            title: "American Vision Windows",
        },
        {
            id: "WildOps",
            title: "Wild Ops",
        },
        {
            id: "SemperSolaris",
            title: "Semper Solaris",
        },
        {
            id: "Lilikoi",
            title: "Lilikoi",
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
        // <div className="portfolio" id="portfolio">
        //   <h1> Portfolio</h1>
        //   <ul>
        //     {list.map((item)=>(
        //         <PortfolioList 
        //         title={item.title} 
        //         active={selected === item.id} 
        //         setSelected={setSelected}
        //         id={item.id}
        //         />
        //     ))}
        //   </ul>
        //   <div className="container">
        //         {data.map((d) => (
        //             <div className="item">
        //             <img src={d.img}/>
        //             <h3>{d.title}</h3>
        //     </div>
        //         ))}
           

        //   </div>
        // </div>
        <section className="portfolio-wrapper">
            <h2> Walk Down Memory Lane? </h2>
            <div className="portfolio-inner">
                <div className="portfolio-img">
                    {/* <img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80" />
                     */}
                     {/* {data.map((d) => (
                            <img src={d}/>
                        ))} */}
                        <img src={data}/>
                </div>
                <div className="project-list">

                    <ul>
                        {list.map((item)=>(
                            <PortfolioList 
                            title={item.title} 
                            active={selected === item.id} 
                            setSelected={setSelected}
                            id={item.id}
                            />
                        ))}
                    </ul>
                      
                {/* <div className="container">
                        {data.map((d) => (
                                <div className="">
                            <img src={d.img}/>
                                <h3>{d.title}</h3>
                    </div>
                        ))}
                            </div> */}
                        </div>


            </div>
        </section>
    )
}
