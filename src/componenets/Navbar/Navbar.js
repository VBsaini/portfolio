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
                                    onMouseEnter={() => {
                                        this.animationBlue("Skills");
                                    }}
                                    onMouseLeave={() => {
                                        this.animationWhite("Skills");
                                    }}
                                    onFocus={() => {
                                        this.animationBlue("Skills");
                                    }}
                                    onBlur={() => {
                                        this.animationWhite("Skills");
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
                                        this.animationWhite("Projects");
                                    }}
                                    onFocus={() => {
                                        this.animationBlue("Projects");
                                    }}
                                    onBlur={() => {
                                        this.animationWhite("Projects");
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
                                    onMouseEnter={() => {
                                        this.animationBlue("Contact");
                                    }}
                                    onMouseLeave={() => {
                                        this.animationWhite("Contact");
                                    }}
                                    onFocus={() => {
                                        this.animationBlue("Contact");
                                    }}
                                    onBlur={() => {
                                        this.animationWhite("Contact");
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
                                    <span>_</span>
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

    async animationWhite(string) {
        if (!(string == this.state.Selected)) {
            const spans = document.getElementById(string).childNodes;
            for (const word of spans) {
                let delayres = await this.delay(50);
                this.removeclass(word);
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
    func = (method, string, string2 = "") => {
        if (method == "blue") {
            this.animationBlue(string);
        } else {
            this.animationWhite(string);
        }
        if (string2) {
            this.setState({
                Selected: string2,
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
