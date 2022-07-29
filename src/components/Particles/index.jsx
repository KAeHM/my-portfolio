import Particles from "react-particles";

import { loadSlim } from "tsparticles-slim";
import { useMemo, useCallback } from "react";

function ParticlesComponents() {
  const options = useMemo(() => {
    return {
      particles: {
        size: {
          random: true,
          value: 3,
        },
        opacity: {
          anim: {
            enable: true,
            minimunValue: 0,
            speed: 1.5,
            sync: false,
          },
          random: true,
          value: 1,
        },
      },
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  return <Particles init={particlesInit} options={options} />;
}

export default ParticlesComponents;
