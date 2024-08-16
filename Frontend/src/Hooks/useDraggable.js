import { useState, useEffect } from "react";

const getRandomPosition = (maxWidth, maxHeight) => {
  const x = Math.floor(Math.random() * maxWidth);
  const y = Math.floor(Math.random() * maxHeight);
  return { x, y };
};

const useDraggable = (initialKeys, canvasWidth, canvasHeight) => {
  const initialPositions = initialKeys.reduce((acc, key) => {
    acc[key] = getRandomPosition(canvasWidth, canvasHeight);
    return acc;
  }, {});

  const [positions, setPositions] = useState(initialPositions);
  const [isDragging, setIsDragging] = useState(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging !== null) {
        setPositions((prevPositions) => {
          const newX = e.clientX - offset.x;
          const newY = e.clientY - offset.y;

          // Constrain positions within the canvas
          const constrainedX = Math.max(0, Math.min(newX, canvasWidth));
          const constrainedY = Math.max(0, Math.min(newY, canvasHeight));

          return {
            ...prevPositions,
            [isDragging]: {
              x: constrainedX,
              y: constrainedY,
            },
          };
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(null);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, offset, canvasWidth, canvasHeight]);

  const startDragging = (id, e) => {
    setOffset({
      x: e.clientX - positions[id].x,
      y: e.clientY - positions[id].y,
    });
    setIsDragging(id);
  };

  return {
    positions,
    startDragging,
  };
};

export default useDraggable;
