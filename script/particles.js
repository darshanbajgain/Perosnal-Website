particlesJS("particles-bg", {
  particles: {
    number: {
      value: 80, // Adjust the number of particles
      density: {
        enable: true,
        value_area: 800, // Adjust the area in which particles are distributed
      },
    },
    color: {
      value: ["#ffffff","#30b659","#111827"], // Set the color of particles
    },
    shape: {
      type: ["circle","triangle","square"], // You can use other shapes like "triangle", "polygon", etc.
      stroke: {
        width: 0,
        
      },
      polygon: {
        nb_sides: 4,
      },
    },
    opacity: {
      value: 0.5, // Set the opacity of particles
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 8, // Adjust the size of particles
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
  },
});