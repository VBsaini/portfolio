import React from "react";
import reactDom from "react-dom";
import "./navbar.css";
import logo from "../../logo.png";

function Navbar() {
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
                                    animationBlue("Skills");
                                }}
                                onMouseLeave={() => {
                                    animationWhite("Skills");
                                }}
                                onFocus={() => {
                                    animationBlue("Skills");
                                }}
                                onBlur={() => {
                                    animationWhite("Skills");
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
                                    animationBlue("Projects");
                                }}
                                onMouseLeave={() => {
                                    animationWhite("Projects");
                                }}
                                onFocus={() => {
                                    animationBlue("Projects");
                                }}
                                onBlur={() => {
                                    animationWhite("Projects");
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
                                    animationBlue("Contact");
                                }}
                                onMouseLeave={() => {
                                    animationWhite("Contact");
                                }}
                                onFocus={() => {
                                    animationBlue("Contact");
                                }}
                                onBlur={() => {
                                    animationWhite("Contact");
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

async function animationBlue(string) {
    const spans = document.getElementById(string).childNodes;
    for (const word of spans) {
        let delayres = await delay(50);
        addclass(word);
    }
}

async function animationWhite(string) {
    const spans = document.getElementById(string).childNodes;
    for (const word of spans) {
        let delayres = await delay(50);
        removeclass(word);
    }
}

function delay(delayInms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(2);
        }, delayInms);
    });
}

function addclass(element) {
    element.classList.add("blue");
}
function removeclass(element) {
    element.classList.remove("blue");
}
export default Navbar;
