import "./App.css";
import Navbar from "./componenets/Navbar/Navbar.js";
import Home from "./componenets/Home/Home";
import Particle from "./componenets/particle/particle";
import Skills from "./componenets/Skills/Skills";
import Projects from "./componenets/Projects/Projecsts";
import { Component } from "react";
import Contact_me from "./componenets/Contact_me/Contact_me";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Page: "Home",
            Navfunc: () => {},
        };
    }
    Next = (page) => {
        this.setState({
            Page: page,
        });
    };
    func = (Navfunction) => {
        this.setState({ Navfunc: Navfunction });
    };
    render() {
        const { Page } = this.state;
        let component;
        if (Page === "Home") {
            component = <Home Next={this.Next}></Home>;
            this.state.Navfunc("blue", "Home", "Home");
            this.state.Navfunc("White");
        } else if (Page === "Skills") {
            this.state.Navfunc("blue", "Skills", "Skills");
            this.state.Navfunc("White");

            component = <Skills Next={this.Next}></Skills>;
        } else if (Page === "Projects") {
            this.state.Navfunc("blue", "Projects", "Projects");
            this.state.Navfunc("White");

            component = <Projects Next={this.Next}></Projects>;
        } else if (Page === "Contact") {
            this.state.Navfunc("blue", "Contact", "Contact");
            this.state.Navfunc("White");

            component = <Contact_me></Contact_me>;
        }
        return (
            <div className="App">
                <div className="app" style={{ position: "relative" }}>
                    <Navbar
                        className="Navbar"
                        func={this.func}
                        Next={this.Next}
                    ></Navbar>
                    <Particle></Particle>
                    {component}
                </div>
            </div>
        );
    }
}

export default App;
