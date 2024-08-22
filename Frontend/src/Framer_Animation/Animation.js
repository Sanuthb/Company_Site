export const createLoopAnimationVariants = (ycord, xcord, rotatedeg) => {
  return {
    initial: {
      y: 0,
      x: 0,
      rotate: 0,
    },
    animate: {
      y: ycord || 0,
      x: xcord || 0,
      rotate: rotatedeg || 0,
      transition: {
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };
};
