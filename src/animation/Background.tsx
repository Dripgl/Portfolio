import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import "./BackgroundStyle.css"
import React from "react";

const ParticlesContainer = () => {
    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {

            await loadSlim(engine);

        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const options = useMemo(
        () => ({
            background: {
                color: { value: "#d3d4d9" }, 
            },
            particles: {
                color: { value: "#7721b0" }, 
                links: {
                    color: "#7721b0",
                    distance: 100,
                    enable: true,
                    opacity: 0.6,
                    width: 1.5,
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    outModes: {
                        default: "bounce",
                    },
                },
                number: {
                    value: 50,
                },
                opacity: {
                    value: 0.8,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
        }),
        []
    );




    if (init) {
        return (
            <div>
                {init && (
                    <div className="particles-container">
                        <Particles
                            id="tsparticles"
                            className="particles_imp"
                            particlesLoaded={particlesLoaded}
                            options={options}
                        />
                        <div className="content-above-particles">
                            {/* Contenuto da visualizzare sopra il background delle particelle */}
                            <img src="path_to_your_image" alt="Your Image" />
                            {/* Altri elementi aggiunti sopra il background delle particelle */}
                        </div>
                    </div>
                )}
            </div>
        );
    }

};

export default ParticlesContainer;
