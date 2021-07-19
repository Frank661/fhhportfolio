import "./topbar.scss"
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PersonIcon from '@material-ui/icons/Person';

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={" topbar "+(menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo"> DevFrank.. </a>
                    <div className="itemcontainer">
                        <PersonIcon className="icon"/>
                        <span>+1 208 514 7640</span>
                    </div>
                    <div className="itemcontainer">
                        <AlternateEmailIcon className="icon"/>
                        <span>francisco.hernandez4412@gmail.com</span>
                    </div>
                </div>
                
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>

            </div>
            
        </div>
    )
}
