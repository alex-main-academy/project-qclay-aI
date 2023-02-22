export const firstItemAnimation = {
  hidden: {
    rotate: '5deg',
    visibility: 'hidden',
  },
  visible: {
    visibility: 'visible',
    rotate: [5, 14, 14, 14, 14],
    y: [-270, -3, -5, 3, 8],
    x: [0, 0, 0, 0, 30],
    transition: {
      duration: 2,
      delay: 0.5,
      times: [0, 0.3, 0.35, 0.5, 1.3],
    },
  },
};

export const secondItemAnimation = {
  hidden: {
    rotate: '-25deg',
    visibility: 'hidden',
  },
  visible: {
    visibility: 'visible',
    rotate: [-25, -25, -45, -45],
    y: [-390, 0, 15, 15],
    x: [0, 0, -33, -33],
    transition: {
      duration: 2,
      delay: 0.3,
      times: [0, 0.3, 1, 2],
    },
  },
};

export const thirdItemAnimation = {
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

export const fourthItemAnimation = {
  hidden: {
    rotate: '-20deg',
    visibility: 'hidden',
  },
  visible: {
    visibility: 'visible',
    y: [-370, -10, 10, 30, 30],
    rotate: [-20, -20, 0, 3, 3],
    x: [0, 0, 10, 10, 10],
    transition: {
      duration: 1.1,
      delay: 0.2,
      times: [0, 0.3, 0.5, 0.7, 0.9],
    },
  },
};

export const fifthItemAnimation = {
  hidden: {
    rotate: '20deg',
    visibility: 'hidden',
  },
  visible: {
    visibility: 'visible',
    y: [-290, 25, 50, 60],
    rotate: [20, 20, 25, 45],
    transition: {
      duration: 1.3,
      delay: 0.3,
      times: [0, 0.35, 0.7, 1],
    },
  },
};

export const sixthItemAnimation = {
  hidden: {
    rotate: '-13deg',
    visibility: 'hidden',
  },
  visible: {
    visibility: 'visible',
    y: [-410, 52, 30, 52, 52],
    x: [80, 80, 80, 90, 175],
    rotate: [-13, 0, 6, 0, 0],
    transition: {
      duration: 1.5,
      delay: 0.1,
      times: [0, 0.2, 0.4, 0.6, 1.3],
    },
  },
};

export const seventhItemAnimation = {
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
