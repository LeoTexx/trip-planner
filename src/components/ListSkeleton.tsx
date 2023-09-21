import React from "react";
import ContentLoader from "react-content-loader";

export const ListSkeleton = () => {
  const numRects = 5;
  const rects = Array.from({ length: numRects }).map(() => ({
    width: Math.floor(Math.random() * (70 - 50 + 1) + 50),
  }));

  return (
    <ContentLoader
      viewBox="0 0 100 45"
      style={{ margin: 10 }}
      foregroundColor={"#77777766"}
      backgroundColor={"#77777722"}
    >
      {rects.map((rect, index) => (
        <rect
          key={index}
          x={0}
          y={index * 8}
          rx={1}
          ry={1}
          width={rect.width}
          height={5}
        />
      ))}
    </ContentLoader>
  );
};
