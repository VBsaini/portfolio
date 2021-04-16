import React from "react";
import "./Projects.css";
// ####################### images ###########
import space from "../../images/space_shooter.png";
import cpploginpage from "../../images/cpplogipage.png";
import yelpcamp from "../../images/yelpcamp.png";
import smartbrain from "../../images/smartbrain.png";
import Rotate from "react-reveal/Rotate";

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animation: true,
            Next: this.props.Next,
            Selected: false,
        };
    }
    render() {
        return (
            <div className="project_maindiv">
                <div className="project_container">
                    <div class="grid-container">
                        <Rotate top left>
                            <div
                                className="relative_container space"
                                id="space"
                            >
                                <div className="projects_container">
                                    <div className="inner-card">
                                        <div className="back">
                                            <p className="links_text">Links</p>
                                            <div className="links">
                                                <p className="links_text">
                                                    <a
                                                        href="https://github.com/vaibhav-saini-Edifice/Space_shooter"
                                                        rel="noreferrer"
                                                        target="_blank"
                                                    >
                                                        Github{" "}
                                                        <i class="fab fa-github"></i>
                                                    </a>
                                                </p>
                                                <p className="links_text">
                                                    <a
                                                        href="https://vaibhav-saini-edifice.github.io/Space_shooter"
                                                        rel="noreferrer"
                                                        target="_blank"
                                                    >
                                                        Live preview{" "}
                                                        <i class="fab fa-github"></i>
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="front">
                                            <img
                                                src={space}
                                                alt="Space shooter"
                                                className="space_img project_img"
                                            />
                                            <h2 className="project_h2">
                                                Space Shooter
                                            </h2>
                                            <p>
                                                Space Shooter is a 2d game
                                                developed with unity and c#
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Rotate>
                        <Rotate top right>
                            <div className="relative_container login">
                                <div className="projects_container">
                                    <div className="inner-card">
                                        <div className="front">
                                            <img
                                                src={cpploginpage}
                                                alt="cpp login page"
                                                className=" project_img h-80"
                                            />
                                            <h2 className="project_h2">
                                                Windows clr form
                                            </h2>
                                            <p>
                                                Windows clr form made with c++
                                            </p>
                                        </div>
                                        <div className="back">
                                            <p className="links_text">Links</p>
                                            <div className="links">
                                                <p className="links_text">
                                                    <a
                                                        href="https://github.com/vaibhav-saini-Edifice/Space_shooter"
                                                        rel="noreferrer"
                                                        target="_blank"
                                                    >
                                                        Github
                                                        <i class="fab fa-github"></i>
                                                    </a>
                                                </p>
                                                <p className="links_text disabled">
                                                    <a>Live preview</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Rotate>
                        <Rotate top left>
                            <div className="relative_container brain">
                                <div className="projects_container">
                                    <div className="inner-card">
                                        <div className="front">
                                            <img
                                                src={smartbrain}
                                                alt="smartbrain"
                                                className=" project_img"
                                            />
                                            <h2 className="project_h2">
                                                Smart Brain
                                            </h2>
                                            <p>
                                                Smart Brain is a website made
                                                with reactjs
                                            </p>
                                        </div>
                                        <div className="back">
                                            <p className="links_text">Links</p>
                                            <div className="links">
                                                <p className="links_text">
                                                    <a
                                                        href="https://github.com/vaibhav-saini-Edifice/Space_shooter"
                                                        rel="noreferrer"
                                                        target="_blank"
                                                    >
                                                        Github
                                                        <i class="fab fa-github"></i>
                                                    </a>
                                                </p>
                                                <p className="links_text">
                                                    <a
                                                        href="https://vaibhav-saini-edifice.github.io/Space_shooter"
                                                        rel="noreferrer"
                                                        target="_blank"
                                                    >
                                                        Live preview
                                                        <i class="fab fa-chrome"></i>
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Rotate>
                        <Rotate top right>
                            <div className="relative_container yelpcamp">
                                <div className="projects_container">
                                    <div className="inner-card">
                                        <div className="front">
                                            <img
                                                src={yelpcamp}
                                                alt="yelpcamp"
                                                className=" project_img"
                                            />
                                            <h2 className="project_h2">
                                                YelpCamp
                                            </h2>
                                            <p>
                                                Yelpcamp is a webtsite made with
                                                node js
                                            </p>
                                        </div>
                                        <div className="back">
                                            <p className="links_text">Links</p>
                                            <div className="links">
                                                <p className="links_text">
                                                    <a
                                                        href="https://github.com/vaibhav-saini-Edifice/Space_shooter"
                                                        rel="noreferrer"
                                                        target="_blank"
                                                    >
                                                        Github
                                                        <i class="fab fa-github"></i>
                                                    </a>
                                                </p>
                                                <p className="links_text">
                                                    <a
                                                        href="https://vaibhav-saini-edifice.github.io/Space_shooter"
                                                        rel="noreferrer"
                                                        target="_blank"
                                                    >
                                                        Live preview
                                                        <i class="fab fa-chrome"></i>
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Rotate>
                    </div>
                </div>
                <div
                    className="prev"
                    id="prev"
                    onClick={() => {
                        this.state.Next("Skills");
                    }}
                >
                    {"<"}
                </div>
                <div
                    className="next"
                    id="next"
                    onClick={() => {
                        this.state.Next("Contact");
                    }}
                >
                    {">"}
                </div>
            </div>
        );
    }
}

export default Projects;
