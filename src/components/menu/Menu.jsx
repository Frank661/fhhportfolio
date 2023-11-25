import './menu.scss'

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className={" menu " + (menuOpen && "active")}>
            <ul >
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#skills">Services</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>         
            </ul>

            <p>Let's connect:</p>
            <div class="social-menu">
                <a target='_blank' href='https://github.com/Frank661' ><img width={30} src='../assets/icons/github.svg'/></a>
                <a target='_blank' href='https://www.linkedin.com/in/devfrank/' ><img width={30} src='../assets/icons/linkedin.svg'/></a>
            </div>
        </div>
    )
}
