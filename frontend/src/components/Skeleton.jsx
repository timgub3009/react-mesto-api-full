import React from "react";
import ContentLoader from "react-content-loader";

function Skeleton() {
  return (
    <ContentLoader
      speed={2}
      width={282}
      height={361}
      viewBox="0 0 282 361"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="433" rx="10" ry="10" width="95" height="50" />
      <rect x="112" y="432" rx="10" ry="10" width="163" height="50" />
      <rect x="0" y="0" rx="6" ry="6" width="282" height="281" />
      <rect x="0" y="283" rx="6" ry="6" width="282" height="75" />
    </ContentLoader>
  );
}

export default Skeleton;
