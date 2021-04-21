import React from "react";
import Particles from "react-particles-js";

function Particle() {
    let options = {
        particles: {
            number: {
                value: 80,
            },
            color: "#ffffff",
            size: {
                value: 4.3,
            },
            line_linked: {
                color: "rgb(0,0,128)",
                opacity: 0.5,
            },
        },
        interactivity: {
            detectsOn: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse",
                },
            },
        },
    };
    if (document.body.clientWidth < 700) {
        options = {
            particles: {
                number: {
                    value: 40,
                },
                color: "#ffffff",
                size: {
                    value: 4.3,
                },
                line_linked: {
                    color: "rgb(0,0,128)",
                    opacity: 0.5,
                },
            },
            interactivity: {
                detectsOn: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
            },
        };
    }
    if (document.body.clientWidth < 600) {
        options = {
            particles: {
                number: {
                    value: 30,
                },
                color: "#ffffff",
                size: {
                    value: 4.3,
                },
                line_linked: {
                    color: "rgb(0,0,128)",
                    opacity: 0.5,
                },
            },
            interactivity: {
                detectsOn: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
            },
        };
    }
    if (document.body.clientWidth < 500) {
        options = {
            particles: {
                number: {
                    value: 20,
                },
                color: "#ffffff",
                size: {
                    value: 4.3,
                },
                line_linked: {
                    color: "rgb(0,0,128)",
                    opacity: 0.5,
                },
            },
            interactivity: {
                detectsOn: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
            },
        };
    }
    return (
        <div className="particle" id="particle">
            <Particles
                height={window.outerHeight}
                className="particles"
                params={options}
            />
        </div>
    );
}

export default Particle;
