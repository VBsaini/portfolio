import react from "react";
import reactDom from "react-dom";
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
                            value: 120,
                        },
                        color: "#ffffff",
                        size: {
                            value: 4.3,
                        },
                    },
                    interactivity: {
                        detectsOn: "canvas",
                        events: {
                            onhover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                            onresize: {
                                enable: true,
                                density_auto: true,
                                density_area: 800, // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
                            },
                        },
                    },
                }}
            />
        </div>
    );
}

export default Particle;
