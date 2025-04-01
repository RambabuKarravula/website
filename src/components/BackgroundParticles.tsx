import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const BackgroundParticles = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Particles container loaded", container);
  }, []);

  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-white/60 animate-fog pointer-events-none z-0"></div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        className="fixed inset-0 -z-10"
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "repulse",
              },
              onHover: {
                enable: true,
                mode: "bubble",
                parallax: {
                  enable: true,
                  force: 60,
                  smooth: 10
                }
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 200,
                duration: 0.4,
                speed: 1
              },
              bubble: {
                distance: 200,
                size: 6,
                duration: 0.4,
                opacity: 0.8
              },
            },
          },
          particles: {
            color: {
              value: ["#4F46E5", "#7C3AED", "#2563EB", "#6366F1"],
              animation: {
                enable: true,
                speed: 15,
                sync: false
              }
            },
            links: {
              color: "#4F46E5",
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1.5,
              triangles: {
                enable: true,
                opacity: 0.15
              }
            },
            move: {
              enable: true,
              direction: "none",
              outModes: {
                default: "out",
                top: "out",
                bottom: "out",
                left: "out",
                right: "out",
              },
              random: false,
              speed: 3,
              straight: false,
              trail: {
                enable: true,
                length: 3,
                fillColor: "#000"
              },
              attract: {
                enable: true,
                rotate: {
                  x: 800,
                  y: 800
                }
              }
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 100,
              limit: 120
            },
            opacity: {
              value: 0.7,
              random: true,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.3,
                sync: false
              }
            },
            shape: {
              type: ["circle", "triangle", "star", "polygon"],
            },
            size: {
              value: { min: 2, max: 5 },
              animation: {
                enable: true,
                speed: 3,
                minimumValue: 0.5,
                sync: false
              }
            },
            twinkle: {
              lines: {
                enable: true,
                frequency: 0.08,
                opacity: 0.7,
                color: "#4F46E5"
              },
              particles: {
                enable: true,
                frequency: 0.08,
                opacity: 0.7
              }
            }
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default BackgroundParticles;