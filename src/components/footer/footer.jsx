import Contact from "../contact/Contact"

import "./footer.scss"
import { useEffect, useRef } from "react"



export default function Footer() {


    return(
        <footer className="footer" id="footer"> 
           <Contact/>
            <p> Copyright © DevFrank </p>
        </footer>
    );

}