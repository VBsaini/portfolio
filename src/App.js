import "./App.css";
import Navbar from "./componenets/Navbar/Navbar.js";
import Home from "./componenets/Home/Home";
import Particle from "./componenets/particle/particle";
import Skills from "./componenets/Skills/Skills";
import Projects from "./componenets/Projects/Projecsts";
import { Component } from "react";
import ContactMe from "./componenets/Contact_me/ContactMe";
import Modal from "./componenets/Modal/Modal";
import "./mediaQueries.css";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Page: "Home",
            smallScreen: false,
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
        if (
            document.body.clientWidth < document.body.clientHeight &&
            !this.state.smallScreen
        ) {
            this.setState({ smallScreen: true });
        }
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

            component = <ContactMe Next={this.Next}></ContactMe>;
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
                    <Modal smallScreen={this.state.smallScreen}></Modal>
                    {component}
                </div>
            </div>
        );
    }
}

export default App;
