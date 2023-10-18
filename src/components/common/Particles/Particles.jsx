import React, { useRef } from "react";

import { Points, Point, useTexture } from "@react-three/drei";
import { useSelector } from "react-redux";

const pointArray = [];
for (let i = 0; i < 1000; i++) {
  pointArray.push([
    (Math.random() - 0.5) * 200,
    (Math.random() - 0.5) * 200,
    (Math.random() - 0.5) * 200,
  ]);
}

const Particles = () => {
  const { doneTrigger } = useSelector((state) => state.DoneTrigger);

  const ref = useRef();
  const circle = useTexture("/circle.png");

  return (
    <Points>
      <pointsMaterial
        color={doneTrigger ? "green" : "white"}
        transparent
        ref={ref}
        map={circle}
      />
      {pointArray.map((item, key) => {
        return <Point position={[item[0], item[1], item[2]]} key={key} />;
      })}
    </Points>
  );
};

export default Particles;
