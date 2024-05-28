import React, { useState, useEffect, useRef } from "react"; // Importing necessary modules
import "./portfolioList.scss";

const portfolioItems = [
  {
    id: "BMF",
    title: "Beautifully Made Frenchies",
    image: "../assets/portfolio-images/bmfhero.png",
    favicon: "../assets/portfolio-images/bmf favicon.svg",
    description:
      "A breeder specializing in the nurturing of French Bulldog puppies. The website we created not only emphasized the adorable nature of the pups but also facilitated an easy adoption process by making it simple and easy for a user to submit their information. The design is a harmonious blend of aesthetics and functionality.",
    link: "https://bmfrenchies.com/",
    serviceType: "Design • Build • Update • Maintenance • SEO",
    techStack: "PHP • JavaScript • HTML • CSS • Bootstrap • Wordpress CMS",
  },
  {
    id: "DictionaryTranslate",
    title: "Dictionary Translate",
    image: "../assets/portfolio-images/dictionaryapphero.png",
    favicon: "../assets/portfolio-images/dictionary-favicon.png",
    description: "An online dictionary that is responsive and elegant. Created as a progressive web application (PWA) this dictionary is simple and uses a free api to get you the definition of the word you are searching for in many different languages.",
    link: "https://unruffled-liskov-d1bf3c.netlify.app/",
    serviceType: "Design • Build",
    techStack: "React • JavaScript • HTML • CSS • Bootstrap",
  },
  {
    id: "Litchfield",
    title: "Litchfield",
    image: "../assets/portfolio-images/litchfieldhero.png",
    favicon: "../assets/portfolio-images/litchfield favicon.png",
    description:
      "A real estate company specializing in comprehensive property solutions. This website was created not only to emphasized the diverse nature of their property services but also facilitated an easy inquiry process. The design is both modern and functional, providing users with a rich experience as they explore the world of prime real estate.",
    link: "https://litchfieldmgmt.com/",
    serviceType: "Design • Build • Update • Maintenance • SEO",
    techStack: "PHP • JavaScript • HTML • CSS • Bootstrap • Wordpress CMS",
  },
  {
    id: "Nasa",
    title: "Nasa picture of the day",
    image: "../assets/portfolio-images/nasapotd.png",
    favicon: "../assets/portfolio-images/nasa-logo.svg",
    description:
      "Our specialized website is a celestial haven for astronomy enthusiasts. By using NASA's API feed we were able to showcase NASA's Picture of the Day in a visually appealing and user-friendly format.",
    link: "https://priceless-booth-d5b3d7.netlify.app/",
    serviceType: "Design • Build",
    techStack: "PHP • JavaScript • HTML • CSS • Bootstrap • Wordpress CMS",
  },
  {
    id: "AVW",
    title: "American Vision Windows",
    image: "../assets/portfolio-images/avwhero.png",
    favicon: "../assets/portfolio-images/avw favicon.png",
    description:
      "Dedicated to enhancing the views and comfort of homeowners, this website focuses on intuitive navigation, showcasing window features, and providing a seamless inquiry process. The result is a visually appealing and informative platform that reflects the commitment of American Vision Windows to superior window installation services.",
    link: "https://www.americanvisionwindows.com/",
    serviceType: "Maintenance • SEO",
    techStack: "PHP • JavaScript • HTML • CSS • Bootstrap • Wordpress CMS",
  },
  {
    id: "WildOps",
    title: "Wild Ops",
    image: "../assets/portfolio-images/wildopshero.png",
    favicon: "../assets/portfolio-images/wildops-favicon-150x150.webp",
    description:
      "Dedicated to fostering camaraderie and offering healing adventures, this website focuses on intuitive navigation, trip details, and creating a seamless application process. The result is a visually appealing and informative platform that reflects Wild Ops' commitment to providing a supportive network for veterans seeking connection and understanding.      ",
    link: "https://wildops.org/",
    serviceType: "Update • Maintenance",
    techStack: "PHP • JavaScript • HTML • CSS • Bootstrap • Wordpress CMS",
  },
  {
    id: "SemperSolaris",
    title: "Semper Solaris",
    image: "../assets/portfolio-images/smphero.png",
    favicon: "../assets/portfolio-images/semper-favicon.webp",
    description:
      "This website not only showcases the diverse range of solar options and services but also highlights the veteran-led approach, instilling confidence in clients looking for sustainable energy solutions. Responsive and empowering, the platform is a testament to Semper Solaris' commitment to providing top-tier solar services.",
    link: "https://www.sempersolaris.com/battery-storage/tesla-powerwall/",
    serviceType: "Design • Build • Update • Maintenance • SEO",
    techStack:
      "PHP • JavaScript • HTML • CSS • Bootstrap • Wordpress CMS • Salesforce CRM • MySQL",
  },
  {
    id: "Lilikoi",
    title: "Lilikoi",
    image: "../assets/portfolio-images/likhero.png",
    favicon: "../assets/portfolio-images/lik favicon.png",
    description:
      "Responsive and user-friendly showcases the services of Lilikoi agency and makes it easy for a user to submit an inquiry or application.",
    link: "https://lilikoiagency.com/",
    serviceType: "Update • Maintenance",
    techStack: "PHP • JavaScript • HTML • CSS • Bootstrap ",
  },
  {
    id: "Google Calendar",
    title: "Google Calandar Clone",
    image: "../assets/portfolio-images/google-calendar.png",
    favicon: "../assets/portfolio-images/google-favicon.png",
    description:
      "Desktop clone for Google calendar, allows a user to view current day and update the calendar with events.",
    link: "https://blissful-gates-2380f5.netlify.app/",
    serviceType: "Build",
    techStack: "React • JavaScript • HTML • CSS ",
  },
];

export default function Portfolio2() {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with 1 to account for the cloned first item
  const sliderRef = useRef(null);
  const [dragStart, setDragStart] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [dragStartTranslate, setDragStartTranslate] = useState(0);
  const [showDescription, setShowDescription] = useState(false);

  const itemCount = portfolioItems.length;

  const toggleDescription = (event) => {
    event.stopPropagation(); // Stop event propagation to prevent interference with parent elements
    setShowDescription(!showDescription);
  };

  useEffect(() => {
    const handleResize = () => {
      const slideWidth = sliderRef.current.offsetWidth;
      const newPosition = currentIndex * slideWidth;
      sliderRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [currentIndex]);

  useEffect(() => {
    if (currentIndex === itemCount + 1) {
      setTimeout(() => {
        sliderRef.current.style.transition = "none";
        setCurrentIndex(1);
        sliderRef.current.style.transform = `translateX(-100%)`;
      }, 500);
    } else if (currentIndex === 0) {
      setTimeout(() => {
        sliderRef.current.style.transition = "none";
        setCurrentIndex(itemCount);
        sliderRef.current.style.transform = `translateX(-${itemCount * 100}%)`;
      }, 500);
    }
  }, [currentIndex, itemCount]);

  const handlePrevSlide = () => {
    if (!dragging) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
      sliderRef.current.style.transition = "transform 0.5s ease";
      sliderRef.current.style.transform = `translateX(-${
        (currentIndex - 1) * 100
      }%)`;
    }
  };

  const handleNextSlide = () => {
    if (!dragging) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      sliderRef.current.style.transition = "transform 0.5s ease";
      sliderRef.current.style.transform = `translateX(-${
        (currentIndex + 1) * 100
      }%)`;
    }
  };

  const handleDragStart = (event) => {
    setDragging(true);
    const startX =
      event.type === "touchstart" ? event.touches[0].clientX : event.clientX;
    setDragStart(startX);
    setDragStartTranslate(currentIndex * sliderRef.current.offsetWidth);
    sliderRef.current.style.transition = "none";
  };

  const handleDragMove = (event) => {
    if (!dragging) return;
    const currentX =
      event.type === "touchmove" ? event.touches[0].clientX : event.clientX;
    const diff = currentX - dragStart;
    const newTranslate = dragStartTranslate - diff;
    sliderRef.current.style.transform = `translateX(-${newTranslate}px)`;
  };

  const handleDragEnd = () => {
    if (dragging) {
      setDragging(false);
      const slideWidth = sliderRef.current.offsetWidth;
      const movedBy =
        dragStart -
        (sliderRef.current.getBoundingClientRect().left +
          slideWidth * currentIndex);
      const direction = movedBy > 0 ? 1 : -1;
      const movedEnough = Math.abs(movedBy) > slideWidth / 4;
      const newIndex = currentIndex + (movedEnough ? direction : 0);
      setCurrentIndex(newIndex);
      sliderRef.current.style.transition = "transform 0.5s ease";
      sliderRef.current.style.transform = `translateX(-${newIndex * 100}%)`;
    }
  };

  const goToSlide = (index) => {
    setCurrentIndex(index + 1);
    sliderRef.current.style.transition = "transform 0.5s ease";
    sliderRef.current.style.transform = `translateX(-${(index + 1) * 100}%)`;
  };

  return (
    <section className="portfolio-wrapper" id="portfolio">
      <h2>Projects</h2>
      <h3 className="subtitle"> Here are a few web projects I have worked on</h3>
      <div
        className="slider"
        ref={sliderRef}
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
        onMouseMove={handleDragMove}
        onTouchMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onTouchEnd={handleDragEnd}
        onMouseLeave={handleDragEnd}
        style={{
          display: "flex",
          transition: dragging ? "none" : "transform 0.5s ease",
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        <div className="slide">
          <div className="slide-content">
            <img
              loading="lazy"
              className="slide-image"
              src={portfolioItems[itemCount - 1].image}
              alt={portfolioItems[itemCount - 1].title}
            />
            <div className="slide-overlay">
              <h3> <img loading="lazy" className="card_thumb"  src={portfolioItems[itemCount - 1].favicon}/> {portfolioItems[itemCount - 1].title}<a
                href={portfolioItems[itemCount - 1].link}
                target="_blank"
                rel="noopener noreferrer"
                title="click to visit site"
              >
                <img loading="lazy" className="site-link" width={15} src="../assets/icons/arrow-up-right-from-square-solid.svg"/>
              </a></h3>
              <p>{portfolioItems[itemCount - 1].serviceType}</p>
              
            </div>
          </div>
        </div>
        {portfolioItems.map((item, index) => (
          <div
            key={item.id}
            className={`slide ${index === currentIndex - 1 ? "current" : ""}`}
          >
            <div className="slide-content">
            <div className="info-icon" onClick={toggleDescription}>
              <img loading="lazy" src="../assets/icons/info-icon.svg" alt="Info Icon" />
              <div className="description">
                <p>{item.description}</p>
              </div>
            </div>
              <img loading="lazy" className="slide-image" src={item.image} alt={item.title} />
              <div className="slide-overlay">
                <h3> <img loading="lazy" className="card_thumb" src={item.favicon} alt={item.title + " icon"} /> {item.title} <a href={item.link} target="_blank" rel="noopener noreferrer" title="click to visit site">
                  <img loading="lazy" className="site-link" width={15} src="../assets/icons/arrow-up-right-from-square-solid.svg"/>
                </a></h3>
                <p>{item.serviceType}</p>
                
              </div>
            </div>
          </div>
        ))}
        <div className="slide">
          <div className="slide-content">
            <img
              className="slide-image"
              src={portfolioItems[0].image}
              alt={portfolioItems[0].title}
              loading="lazy"
            />
            <div className="slide-overlay">
              <h3><img loading="lazy" className="card_thumb" src={portfolioItems[0].favicon} /> {portfolioItems[0].title} <a
                href={portfolioItems[0].link}
                target="_blank"
                rel="noopener noreferrer"
                title="click to visit site"
              >
                <img loading="lazy" className="site-link" width={15} src="../assets/icons/arrow-up-right-from-square-solid.svg"/>
              </a></h3>
              <p>{portfolioItems[0].serviceType}</p>
              
            </div>
          </div>
        </div>
      </div>
      <div className="btn-holder">
        <button className="slider-btn prev" onClick={handlePrevSlide}>
          <img
            width={55}
            src="../assets/icons/left-icon-arrow.png"
            alt="Previous"
            loading="lazy"
          />
        </button>
        <button className="slider-btn next" onClick={handleNextSlide}>
          <img
            loading="lazy"
            width={55}
            src="../assets/icons/right-arrow-icon.png"
            alt="Next"
          />
        </button>
      </div>
      <div className="pagination">
        {portfolioItems.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex - 1 ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </section>
  );
}
