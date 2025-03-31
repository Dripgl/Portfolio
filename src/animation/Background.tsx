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
                color: { value: "#080C1C" }, // Sfondo blu scuro
            },
            particles: {
                color: { value: ["#ff6b6b", "#ffa726", "#42a5f5", "#26c6da"] }, // Colori vivaci
                shape: {
                    type: "circle",
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "top",
                    random: false,
                    straight: false,
                },
                number: {
                    value: 100,
                },
                opacity: {
                    value: { min: 0.1, max: 0.8 },
                },
                size: {
                    value: { min: 2, max: 5 },
                },
                links: {
                    enable: false,
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
