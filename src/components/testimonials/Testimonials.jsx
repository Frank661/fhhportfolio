import "./testimonials.scss"

export default function Testimonials() {

    const data = [
        
        {
            id: 1,
            name: "Eric Capiz",
            title: "Freelance Developer",
            img: "https://media-exp1.licdn.com/dms/image/C5635AQFg6M33DQwn0A/profile-framedphoto-shrink_200_200/0/1617774822968?e=1626922800&v=beta&t=ipQ3ow6fXIm-wR7hWkXZDEVmlVGL3mVSgnRjNs9GddM",
            icon:"assets/linkedin.png",
            desc: "Frank is a great developer who is easy to work with and always has ideas to better a project, his knowledge with front end developement is 2nd to none. ",
            link: "https://www.linkedin.com/in/eric-capiz/"
        },
        {
            id: 2,
            name: "Alexis Barnett",
            title: "Marketing Manager at Scorpion",
            img: "https://media-exp1.licdn.com/dms/image/C5603AQENynyEYV5zeA/profile-displayphoto-shrink_200_200/0/1572127264901?e=1632355200&v=beta&t=VGdD-jsIGnrHDalYd1rXrVjEjep0LUdCa2x2Bzfxbxc",
            icon:"assets/linkedin.png",
            desc: "Frank is an amazing designer who is great at taking feedback and is great at communicating. His quick responsiveness is what makes him a pleasure to work with.  ",
            link: "https://www.linkedin.com/in/barnettab/",
            featured: true
        },
        {
            id: 3,
            name: "Daniel Terry",
            title: "Software Engineer at Atlas RFID Solutions",
            img: "https://media-exp1.licdn.com/dms/image/C4D03AQHF2DvszFjuuw/profile-displayphoto-shrink_800_800/0/1602443050062?e=1632355200&v=beta&t=QhWjfjL0u6T2rPjiCgiFXIkXpMI4QnFmPxfWI3ott0I",
            icon:"assets/linkedin.png",
            desc: "Frank's awesome to have as a teammate when working on any project small or big, he is quick when it comes to making decisions and is a person who completes his end of the deal on time.",
            link: "https://www.linkedin.com/in/d-terry/"
        }
    ]


    return (
        <div className= "testimonials" id="testimonials">
           <h1>Testimonials</h1>
           <div className="container"> 
                {data.map(d=>(
                <div className={d.featured ? "card featured": "card"}>
                    <div className="top">
                        <img src="assets/right-arrow.png" className="left" alt="right arrow icon"/>
                        <img src={d.img} className="user" alt="right arrow icon"/>
                        <a href={d.link}> <img src={d.icon} className="right" alt="right arrow icon" /> </a>

                    </div>
                    <div className="center">
                     {d.desc}
                    </div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4> {d.title} </h4>
                    </div>
                </div> 
                ))}
            
           </div>
        </div>
    )
}
