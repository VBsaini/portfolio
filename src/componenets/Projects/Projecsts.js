import React from "react";
import "./Projects.css";
import space from "../../images/space_shooter.png";
import cpploginpage from "../../images/cpplogipage.png";
import yelpcamp from "../../images/yelpcamp.png";
import smartbrain from "../../images/smartbrain.png";
import Rotate from "react-reveal/Rotate";
import Customproject from "../Customhook/Customproject";
class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Next: this.props.Next,
        };
    }
    render() {
        return (
            <div className="project_maindiv">
                <div className="project_container">
                    <div class="grid-container">
                        <Rotate top left>
                            <Customproject
                                linkArray={[
                                    "https://github.com/vaibhav-saini-Edifice/Space_shooter",
                                    "https://vaibhav-saini-edifice.github.io/Space_shooter",
                                ]}
                                title={"Space shooter"}
                                desc={
                                    "2d space shooter game made with unity and c#"
                                }
                                Class={"relative_container space"}
                                img={space}
                                linksText={["github", "live preview"]}
                            ></Customproject>
                        </Rotate>
                        <Rotate top right>
                            <Customproject
                                linkArray={[
                                    "https://github.com/vaibhav-saini-Edifice/smart-brain",
                                    "https://smart-brain-vishu.herokuapp.com/",
                                ]}
                                title={"Smart Brain"}
                                desc={
                                    "Smart Brain is a website made with reactjs"
                                }
                                Class={"relative_container brain"}
                                img={smartbrain}
                                linksText={["github", "live preview"]}
                            ></Customproject>
                        </Rotate>{" "}
                        <Rotate top left>
                            <Customproject
                                linkArray={[
                                    "https://github.com/vaibhav-saini-Edifice/loginPage",
                                    "#",
                                ]}
                                Class={"relative_container login disabled"}
                                title={"Windows clr form"}
                                desc={"windows clr form made with c++"}
                                img={cpploginpage}
                                linksText={["github", "live preview"]}
                            ></Customproject>
                        </Rotate>
                        <Rotate top right>
                            <Customproject
                                linkArray={[
                                    "https://github.com/vaibhav-saini-Edifice/yelpcamp",
                                    "https://yelpcamp-vishu.herokuapp.com/",
                                ]}
                                Class={"relative_container yelpcamp"}
                                title={"YelpCamp"}
                                desc={
                                    "Yelpcamp is a webtsite made with node js"
                                }
                                img={yelpcamp}
                                linksText={["github", "live preview"]}
                            ></Customproject>
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
                    <p>{"<"}</p>
                </div>
                <div
                    className="next"
                    id="next"
                    onClick={() => {
                        this.state.Next("Contact");
                    }}
                >
                    <p>{">"}</p>
                </div>
            </div>
        );
    }
}

export default Projects;
