import React from "react";
import Particles from "react-particles-js";

function Particle() {
    return (
        <div className="particle" id="particle">
            <Particles
                height={window.outerHeight}
                className="particles"
                params={{
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
                }}
            />
        </div>
    );
}

export default Particle;
