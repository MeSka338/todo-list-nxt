import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import s from "./Animation.module.scss";
import {
  OrbitControls,
  PerspectiveCamera,
  Points,
  Point,
  useTexture,
  Text3D,
  Center,
} from "@react-three/drei";
import { useDispatch } from "react-redux";

const MyText = () => {
  return (
    <Center position={[0, 3, 0]} rotation={[Math.PI / 10, 0, 0]}>
      <Text3D
        font={"/font.json"}
        curveSegments={32}
        bevelEnabled
        bevelSize={0.04}
        bevelThickness={0.1}
        height={0.5}
        lineHeight={0.5}
        letterSpacing={-0.06}
        size={0.8}
      >
        todos
        <meshNormalMaterial />
      </Text3D>
    </Center>
  );
};
const Particles = () => {
  const ref = useRef();
  const circle = useTexture("/circle.png");
  const pointArray = [];
  for (let i = 0; i < 1000; i++) {
    pointArray.push([
      (Math.random() - 0.5) * 200,
      (Math.random() - 0.5) * 200,
      (Math.random() - 0.5) * 200,
    ]);
  }

  return (
    <Points>
      <pointsMaterial color={"black"} transparent ref={ref} map={circle} />
      {pointArray.map((item, key) => {
        return <Point position={[item[0], item[1], item[2]]} key={key} />;
      })}
    </Points>
  );
};
const Animation = () => {
  return (
    <div className={s.root}>
      <Canvas>
        <mesh position={[0, 0, 0]}>
          <boxGeometry />
          <meshBasicMaterial args={[{ color: 0xff0000 }]} />
        </mesh>
        <Particles />
        <MyText />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Animation;
