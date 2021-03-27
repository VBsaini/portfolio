import "./App.css";
import Navbar from "./componenets/Navbar/Navbar.js";
import Home from "./componenets/Home/Home";
import Particle from "./componenets/particle/particle";
import particle from "./componenets/particle/particle";
import Skills from "./componenets/Skills/Skills";
import { Component } from "react";
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
        if (Page == "Home") {
            component = <Home Next={this.Next}></Home>;
            this.state.Navfunc("white", "Contact");
        } else if (Page == "Skills") {
            this.state.Navfunc("blue", "Skills", "Skills");
            component = <Skills></Skills>;
        } else if (Page == "Projects") {
            this.state.Navfunc("White", "Skills");
            this.state.Navfunc("blue", "Projects", "Projects");
            // component = <Home></Home>;
        } else if (Page == "Contact") {
            this.state.Navfunc("White", "Projects");
            this.state.Navfunc("blue", "Contact", "Contact");
            // component = <Home></Home>;
        }
        return (
            <div className="App">
                <div className="app" style={{ position: "relative" }}>
                    <Navbar className="Navbar" func={this.func}></Navbar>
                    <Particle></Particle>
                    {component}
                </div>
            </div>
        );
    }
}

export default App;
