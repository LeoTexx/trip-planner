import React from "react";
import ContentLoader from "react-content-loader";

export const ListSkeleton = () => {
  return (
    <ContentLoader
      viewBox="0 0 100 45"
      style={{ margin: 10 }}
      foregroundColor={"#77777766"}
      backgroundColor={"#77777722"}
    >
      <rect x={0} y={0 * 8} rx={1} ry={1} width={70} height={5} />
      <rect x={0} y={1 * 8} rx={1} ry={1} width={60} height={5} />
      <rect x={0} y={2 * 8} rx={1} ry={1} width={50} height={5} />
      <rect x={0} y={3 * 8} rx={1} ry={1} width={70} height={5} />
      <rect x={0} y={4 * 8} rx={1} ry={1} width={65} height={5} />
      <rect x={0} y={5 * 8} rx={1} ry={1} width={75} height={5} />
    </ContentLoader>
  );
};
