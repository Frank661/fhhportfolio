import "./portfolioList.scss"

export default function PortfolioList({title, active, setSelected, id}) {
    return (
        <li className={active ? "portfolioList active" : "portfolioList"} 
        onMouseOver={()=> setSelected(id)}>
            {title}
        </li>
    )
}
