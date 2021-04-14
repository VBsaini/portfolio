import React from "react";
import reactDom from "react-dom";
import "./navbar.css";
import logo from "../.././images/logo.png";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Selected: "",
        };
    }
    componentDidMount() {
        this.props.func(this.func);
    }
    render() {
        return (
            <div className="navOuter">
                <div className="nav">
                    <ul className="navlist">
                        <div className="logo">
                            <li className="logo_li">
                                <img src={logo} alt="logo" />
                            </li>
                        </div>
                        <div className="navlist_li">
                            <li>
                                <a
                                    href="#"
                                    onClick={() => {
                                        this.props.Next("Home");
                                    }}
                                    onMouseEnter={() => {
                                        this.animationBlue("Home");
                                    }}
                                    onMouseLeave={() => {
                                        this.animationWhite("Home", true);
                                    }}
                                    onFocus={() => {
                                        this.animationBlue("Home");
                                    }}
                                    onBlur={() => {
                                        this.animationWhite("Home", true);
                                    }}
                                    id="Home"
                                >
                                    <span>H</span>
                                    <span>o</span>
                                    <span>m</span>
                                    <span>e</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    onClick={() => {
                                        this.props.Next("Skills");
                                    }}
                                    onMouseEnter={() => {
                                        this.animationBlue("Skills");
                                    }}
                                    onMouseLeave={() => {
                                        this.animationWhite("Skills", true);
                                    }}
                                    onFocus={() => {
                                        this.animationBlue("Skills");
                                    }}
                                    onBlur={() => {
                                        this.animationWhite("Skills", true);
                                    }}
                                    id="Skills"
                                >
                                    <span>S</span>
                                    <span>k</span>
                                    <span>i</span>
                                    <span>l</span>
                                    <span>l</span>
                                    <span>s</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    onMouseEnter={() => {
                                        this.animationBlue("Projects");
                                    }}
                                    onMouseLeave={() => {
                                        this.animationWhite("Projects", true);
                                    }}
                                    onFocus={() => {
                                        this.animationBlue("Projects");
                                    }}
                                    onBlur={() => {
                                        this.animationWhite("Projects", true);
                                    }}
                                    onClick={() => {
                                        this.props.Next("Projects");
                                    }}
                                    id="Projects"
                                >
                                    <span>P</span>
                                    <span>r</span>
                                    <span>o</span>
                                    <span>j</span>
                                    <span>e</span>
                                    <span>c</span>
                                    <span>t</span>
                                    <span>s</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    onClick={() => {
                                        this.props.Next("Contact");
                                    }}
                                    onMouseEnter={() => {
                                        this.animationBlue("Contact");
                                    }}
                                    onMouseLeave={() => {
                                        this.animationWhite("Contact", true);
                                    }}
                                    onFocus={() => {
                                        this.animationBlue("Contact");
                                    }}
                                    onBlur={() => {
                                        this.animationWhite("Contact", true);
                                    }}
                                    id="Contact"
                                >
                                    <span>C</span>
                                    <span>o</span>
                                    <span>n</span>
                                    <span>t</span>
                                    <span>a</span>
                                    <span>c</span>
                                    <span>t</span>
                                    <span> </span>
                                    <span>M</span>
                                    <span>e</span>
                                </a>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        );
    }
    async animationBlue(string) {
        const spans = document.getElementById(string).childNodes;
        for (const word of spans) {
            let delayres = await this.delay(50);
            this.addclass(word);
        }
    }

    async animationWhite(string, absolute = false) {
        await this.delay(50);
        if (!(string === this.state.Selected)) {
            if (absolute) {
                const spans = document.getElementById(string).childNodes;
                console.log(string, this.state.Selected);
                console.log(!(string === this.state.Selected));
                for (const word of spans) {
                    await this.delay(50);
                    this.removeclass(word);
                }
            }
        }
    }

    delay(delayInms) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(2);
            }, delayInms);
        });
    }
    func = (method, string = "", string2 = "") => {
        if (string2) {
            this.setState({
                Selected: string2,
            });
        }
        if (method == "blue") {
            this.animationBlue(string);
        } else if (method == "White") {
            console.log("this.string", this.state.Selected);
            const strings = ["Home", "Contact", "Projects", "Skills"];
            strings.forEach((arrstring) => {
                if (
                    document
                        .getElementById(arrstring)
                        .firstChild.classList.contains("blue")
                ) {
                    this.animationWhite(arrstring, true);
                }
            });
        }
    };
    addclass(element) {
        element.classList.add("blue");
    }
    removeclass(element) {
        element.classList.remove("blue");
    }
}

export default Navbar;
