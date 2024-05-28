import './menu.scss'

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className={" menu " + (menuOpen && "active")}>
            <ul >
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">About</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#skills">Skills</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#articles">Articles</a>
                </li>
                
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#footer">Contact</a>
                </li>         
            </ul>

            <p>Let's connect:</p>
            <div className="social-menu">
                <a target='_blank' href='https://github.com/Frank661' ><img width={30} src='../assets/icons/github.svg'/></a>
                <a target='_blank' href='https://www.linkedin.com/in/devfrank/' ><img width={30} src='../assets/icons/linkedin.svg'/></a>
            </div>
        </div>
    )
}
