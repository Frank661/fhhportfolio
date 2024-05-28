import "./skills.scss";
import { useState, useEffect } from "react";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    // Set the default active tab when component mounts
    document.getElementById("defaultOpen").click();
  }, []);

  useEffect(() => {
    // Set the default active tab when component mounts
    document.getElementById("defaultOpen").click();
  }, []);

  const featureModel = (evt, model) => {
    const tabcontents = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontents.length; i++) {
      tabcontents[i].style.maxHeight = "0";
      tabcontents[i].style.opacity = "0";
      tabcontents[i].style.zIndex = "-1";
      tabcontents[i].style.position = "absolute";



    //   tabcontents[i].style.maxHeight = "0";
    }
    const tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    const selectedModel = document.getElementById(model);
    selectedModel.style.opacity = "1";
    selectedModel.style.maxHeight = "1000px";
    selectedModel.style.position = "relative";
    selectedModel.style.zIndex = "1";

    evt.currentTarget.className += " active";
    setActiveTab(model);
  };

  const feSkills = [
    { name: 'JavaScript', logo: '../assets/javascript-developer.svg' },
    { name: 'React', logo: '../assets/react-developer.svg' },
    { name: 'CSS', logo: '../assets/css-3.png' },
    { name: 'HTML', logo: '../assets/html-5-developer.png' },
    { name: 'Bootstrap', logo: '../assets/bootstrap-5-developer.svg' },
    { name: 'Tailwindcss', logo: '../assets/tailwindcss-developer.png' },
    { name: 'SASS', logo: '../assets/sass-developer.png' }
  ];
  const beSkills = [
    { name: 'Node.js', logo: '../assets/node-js-developer.svg' },
    { name: 'Express.js', logo: '../assets/express-developer.svg' },
    { name: 'PHP', logo: '../assets/php-developer.png' },
    { name: 'SQL', logo: '../assets/sql-server.png' },
    { name: 'MongoDB', logo: '../assets/mongodb-developer.png' },
  ];
  const tools = [
    { name: 'Git', logo: '../assets/git.png' },
    { name: 'GitHub', logo: '../assets/github-com.svg' },
    { name: 'Adobe', logo: '../assets/adobe.svg' },
    { name: 'Figma', logo: '../assets/figma.png' },
    { name: 'Postman', logo: '../assets/postman.png' },
    { name: 'WordPress', logo: '../assets/wordpress-developer.png' },
    { name: 'Zapier', logo: '../assets/zapier.png' },
    { name: 'Salesforce', logo: '../assets/salesforce.png' },
    { name: '', logo: '../assets/ahrefs.png' },
    { name: 'SemRush', logo: '../assets/semrush.png' },
    { name: 'Visual Studio Code', logo: '../assets/vsc.png' },
    { name: 'Google Analytics', logo: '../assets/google-analytics.png' }
  ];

  return (
    <section className="skills" id="skills">
        <div className="wrapper">
            <h2>Skills</h2>
            <div className="btn-holder">
                <button id="defaultOpen" className="tablinks" onClick={(e) => featureModel(e, "model1")}>
                {" "} Front end {" "}</button>
                <button className="tablinks" onClick={(e) => featureModel(e, "model2")}>
                {" "} Back end </button>
                <button className="tablinks" onClick={(e) => featureModel(e, "model3")}>
                {" "} Tools </button>
            </div>
            <div className="modalWrapper">
                <div id="model1" className="tabcontent">
                {feSkills.map((skill, index) => (
                    <div className="items" key={index}>
                    <p>
                        <img src={skill.logo} alt={`${skill.name} logo`} width={20} height={20} /> {skill.name}
                    </p>
                    </div>
                ))}
                </div>

                <div id="model2" className="tabcontent">
                {beSkills.map((skill, index) => (
                    <div className="items" key={index}>
                    <p>
                        <img src={skill.logo} alt={`${skill.name} logo`} width={20} height={20} /> {skill.name}
                    </p>
                    </div>
                ))}
                </div>

                <div id="model3" className="tabcontent">
                {tools.map((skill, index) => (
                    <div className="items" key={index}>
                    <p>
                        <img src={skill.logo} alt={`${skill.name} logo`} width={20} height={20} /> {skill.name}
                    </p>
                    </div>
                ))}
                </div>
            </div>
        </div>

    </section>
  );
}
