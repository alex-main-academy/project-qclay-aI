export const firstMobileItemAnimation = {
  hidden: {
    rotate: '5deg',
    visibility: 'hidden',
  },
  visible: {
    visibility: 'visible',
    rotate: [5, 5, 22, 22, 22],
    y: [-270, -3, -10, 3, 8],
    x: [0, 0, 0, 0, 30],
    transition: {
      duration: 2,
      delay: 0.5,
      times: [0, 0.3, 1, 1.2, 1.5],
    },
  },
};

export const secondMobileItemAnimation = {
  hidden: {
    rotate: '-25deg',
    visibility: 'hidden',
  },
  visible: {
    visibility: 'visible',
    rotate: [-25, -25, -70, -70],
    y: [-390, 0, 0, 0],
    x: [0, 0, -22, -22],
    transition: {
      duration: 2,
      delay: 0.3,
      times: [0, 0.3, 1, 2],
    },
  },
};

export const thirdMobileItemAnimation = {
  hidden: {
    rotate: '8deg',
    visibility: 'hidden',
  },
  visible: {
    visibility: 'visible',
    y: [-430, -10, -20, 0],
    rotate: 0,
    transition: {
      duration: 1,
      times: [0, 0.3, 0.5, 0.8],
    },
  },
};

export const fourthMobileItemAnimation = {
  hidden: {
    rotate: '-20deg',
    visibility: 'hidden',
  },
  visible: {
    visibility: 'visible',
    y: [-370, -10, 10, 15, 15],
    rotate: [-20, -20, 0, 3, 3],
    x: [0, 0, 10, 10, 10],
    transition: {
      duration: 1.1,
      delay: 0.2,
      times: [0, 0.3, 0.5, 0.9, 0.9],
    },
  },
};

export const fifthMobileItemAnimation = {
  hidden: {
    rotate: '20deg',
    visibility: 'hidden',
  },
  visible: {
    visibility: 'visible',
    y: [-290, 20, 30, 58],
    x: [0, 20, 20, 22],
    rotate: [20, 20, 25, 59],
    transition: {
      duration: 1.3,
      delay: 0.3,
      times: [0, 0.35, 0.5, 1],
    },
  },
};

export const sixthMobileItemAnimation = {
  hidden: {
    rotate: '-3deg',
    visibility: 'hidden',
    x: -30,
  },
  visible: {
    visibility: 'visible',
    y: [-310, -98],
    x: -30,
    transition: {
      duration: 1.5,
      delay: 0.7,
      //   times: [0, 0.2, 0.4, 0.6, 1.3],
    },
  },
};

export const seventhMobileItemAnimation = {
  hidden: {
    rotate: '-80deg',
    visibility: 'hidden',
  },
  visible: {
    visibility: 'visible',
    y: [-440, -15, -25, 5],
    rotate: 0,
    transition: {
      duration: 1.5,
      delay: 0.2,
      times: [0, 0.2, 0.4, 0.6],
    },
  },
};
