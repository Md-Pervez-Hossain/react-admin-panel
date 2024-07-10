const usePageAnimation = () => {
  const parentVariant = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };
  const childVariant = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return { parentVariant, childVariant };
};

export default usePageAnimation;
