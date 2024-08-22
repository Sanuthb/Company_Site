import { useEffect } from "react";

const useEyeMovement = (eyeSelector, pupilSelector) => {
  useEffect(() => {
    const eyes = document.querySelectorAll(eyeSelector);
    const pupils = document.querySelectorAll(pupilSelector);

    const handleMouseMove = (event) => {
      eyes.forEach((eye, index) => {
        const eyeRect = eye.getBoundingClientRect();
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;

        const angleX = event.clientX - eyeCenterX;
        const angleY = event.clientY - eyeCenterY;

        // Adjusted range for pupil movement
        const pupilX = Math.min(Math.max(angleX * 0.2, -15), 5);
        const pupilY = Math.min(Math.max(angleY * 0.2, -15), 5);

        if (pupils[index]) {
          pupils[index].style.transform = `translate(${pupilX}px, ${pupilY}px)`;
        }
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [eyeSelector, pupilSelector]);
};

export default useEyeMovement;
