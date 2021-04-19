import React from "react";
import Tilt from "react-tilt";
//  ############ images #########
import cpp from "../../images/cpp.jpg";
import css from "../../images/css.png";
import csharp from "../../images/csharp.jpg";
import bootstrap from "../../images/bootstrap.png";
import gamedev from "../../images/gamedev.png";
import html from "../../images/html.png";
import js from "../../images/js.png";
import mongo from "../../images/mongo.png";
import nodejs from "../../images/nodejs.png";
import softwaredev from "../../images/softwaredev.png";
import react from "../../images/react.png";
import python from "../../images/python.png";
import "./skills.css";
import Zoom from "react-reveal/Zoom";

function Skills(props) {
    return (
        <div className="skills">
            <div className="container_skills">
                <div className="one img_container_div">
                    <Tilt
                        className="Tilt"
                        options={{ perspective: 500, max: 60 }}
                    >
                        <Zoom>
                            <div className="skills_div_relative">
                                <div className="Skills_div">
                                    <img src={cpp} className="img" alt="c++" />
                                    <h3 className="skills_text ">c++</h3>
                                </div>
                            </div>
                        </Zoom>
                    </Tilt>
                    <Tilt
                        className="Tilt"
                        options={{ perspective: 500, max: 60 }}
                    >
                        <Zoom>
                            <div className="skills_div_relative">
                                <div className="Skills_div">
                                    <img
                                        src={csharp}
                                        className="img"
                                        alt="c-sharp"
                                    />
                                    <h3 className="skills_text ">c#</h3>
                                </div>
                            </div>
                        </Zoom>
                    </Tilt>
                    <Tilt
                        className="Tilt"
                        options={{ perspective: 500, max: 60 }}
                    >
                        <Zoom>
                            <div className="skills_div_relative">
                                <div className="Skills_div">
                                    <img src={css} className="img" alt="Css" />
                                    <h3 className="skills_text ">Css</h3>
                                </div>
                            </div>
                        </Zoom>
                    </Tilt>{" "}
                    <Tilt
                        className="Tilt"
                        options={{ perspective: 500, max: 60 }}
                    >
                        <Zoom>
                            <div className="skills_div_relative">
                                <div className="Skills_div">
                                    <img
                                        src={nodejs}
                                        className="img"
                                        alt="nodejs"
                                    />
                                    <h3 className="skills_text ">Node Js</h3>
                                </div>
                            </div>
                        </Zoom>
                    </Tilt>
                </div>
                <div className="two img_container_div">
                    <Tilt
                        className="Tilt"
                        options={{ perspective: 500, max: 60 }}
                    >
                        <Zoom>
                            <div className="skills_div_relative">
                                <div className="Skills_div">
                                    <img
                                        src={gamedev}
                                        className="img"
                                        alt="Game development"
                                    />
                                    <h3 className="skills_text ">Game dev</h3>
                                </div>
                            </div>
                        </Zoom>
                    </Tilt>
                    <Tilt
                        className="Tilt"
                        options={{ perspective: 500, max: 60 }}
                    >
                        <Zoom>
                            {" "}
                            <div className="skills_div_relative">
                                <div className="Skills_div">
                                    <img
                                        src={html}
                                        className="img"
                                        alt="Html"
                                    />
                                    <h3 className="skills_text ">Html</h3>
                                </div>
                            </div>
                        </Zoom>
                    </Tilt>
                    <Tilt
                        className="Tilt"
                        options={{ perspective: 500, max: 60 }}
                    >
                        <Zoom>
                            <div className="skills_div_relative">
                                <div className="Skills_div">
                                    <img
                                        src={react}
                                        className="img"
                                        alt="React"
                                    />
                                    <h3 className="skills_text ">React</h3>
                                </div>
                            </div>
                        </Zoom>
                    </Tilt>
                    <Tilt
                        className="Tilt"
                        options={{ perspective: 500, max: 60 }}
                    >
                        <Zoom>
                            <div className="skills_div_relative">
                                <div className="Skills_div">
                                    <img
                                        src={python}
                                        className="img"
                                        alt="Python"
                                    />
                                    <h3 className="skills_text">Python</h3>
                                </div>
                            </div>
                        </Zoom>
                    </Tilt>
                </div>
                <div className="three img_container_div">
                    <Tilt
                        className="Tilt"
                        options={{ perspective: 500, max: 60 }}
                    >
                        <Zoom>
                            <div className="skills_div_relative">
                                <div className="Skills_div">
                                    <img
                                        src={bootstrap}
                                        className="img"
                                        alt="Bootstrap"
                                    />
                                    <h3 className="skills_text">Bootstrap</h3>
                                </div>
                            </div>
                        </Zoom>
                    </Tilt>
                    <Tilt
                        className="Tilt"
                        options={{ perspective: 500, max: 60 }}
                    >
                        <Zoom className="zoom">
                            {" "}
                            <div className="skills_div_relative">
                                <div className="Skills_div">
                                    <img
                                        src={softwaredev}
                                        className="img"
                                        alt="software development"
                                    />
                                    <h3 className="skills_text ">
                                        software dev
                                    </h3>
                                </div>
                            </div>
                        </Zoom>
                    </Tilt>
                    <Tilt
                        className="Tilt"
                        options={{ perspective: 500, max: 60 }}
                    >
                        <Zoom>
                            <div className="skills_div_relative">
                                <div className="Skills_div">
                                    <img
                                        src={js}
                                        className="img"
                                        alt="JavaScript"
                                    />
                                    <h3 className="skills_text ">JavaScript</h3>
                                </div>
                            </div>
                        </Zoom>
                    </Tilt>
                    <Tilt
                        className="Tilt"
                        options={{ perspective: 500, max: 60 }}
                    >
                        <Zoom>
                            <div className="skills_div_relative">
                                <div className="Skills_div">
                                    <img
                                        src={mongo}
                                        className="img"
                                        alt="mongo DB"
                                    />
                                    <h3 className="skills_text">Mongo DB</h3>
                                </div>
                            </div>
                        </Zoom>
                    </Tilt>
                </div>
            </div>{" "}
            <div
                className="prev"
                id="prev"
                onClick={() => {
                    props.Next("Home");
                }}
            >
                <p>{"<"}</p>
            </div>
            <div
                className="next"
                id="next"
                onClick={() => {
                    props.Next("Projects");
                }}
            >
                <p>{">"}</p>
            </div>
        </div>
    );
}

export default Skills;
