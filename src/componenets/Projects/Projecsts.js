import React from "react";
import ReactDom from "react-dom";
import "./Projects.css";
// ####################### images ###########
import space from "../../images/space_shooter.png";
import cpploginpage from "../../images/cpplogipage.png";
import yelpcamp from "../../images/yelpcamp.png";
import smartbrain from "../../images/smartbrain.png";

function Projects(props) {
    return (
        <div className="project_maindiv">
            <div
                className="prev"
                id="prev"
                onClick={() => {
                    props.Next("Skills");
                }}
            >
                {"<"}
            </div>
            <div className="project_container">
                <div className="first_2_flex">
                    <div className="relative_container">
                        <div className="projects_container">
                            <img
                                src={space}
                                alt="Space shooter"
                                className="space_img project_img"
                            />
                            <h2>Space Shooter</h2>
                            <p>
                                Space Shooter is a 2d game developed with unity
                                and c#
                            </p>
                        </div>
                    </div>

                    <div className="relative_container h-100">
                        <div className="projects_container h-100">
                            <img
                                src={cpploginpage}
                                alt="cpp login page"
                                className=" project_img h-80"
                            />
                            <h2>Windows clr form</h2>
                            <p>Windows clr form made with c++</p>
                        </div>
                    </div>
                </div>
                <div className="last_2_flex">
                    <div className="relative_container">
                        <div className="projects_container">
                            <img
                                src={smartbrain}
                                alt="smartbrain"
                                className=" project_img"
                            />
                            <h2>Smart Brain</h2>
                            <p>Smart Brain is a website made with reactjs</p>
                        </div>
                    </div>
                    <div className="relative_container">
                        <div className="projects_container">
                            <img
                                src={yelpcamp}
                                alt="yelpcamp"
                                className=" project_img"
                            />
                            <h2>YelpCamp</h2>
                            <p>Yelpcamp is a webtsite made with node js</p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="next"
                id="next"
                onClick={() => {
                    props.Next("Contact");
                }}
            >
                {">"}
            </div>
        </div>
    );
}

export default Projects;
