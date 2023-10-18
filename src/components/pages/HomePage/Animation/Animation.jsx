import React, { useRef } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import s from "./Animation.module.scss";
import { Points, Point, useTexture, Text3D, Center } from "@react-three/drei";
import { useDispatch, useSelector } from "react-redux";
import { Vector3 } from "three";

const pointArray = [];
for (let i = 0; i < 1000; i++) {
  pointArray.push([
    (Math.random() - 0.5) * 200,
    (Math.random() - 0.5) * 200,
    (Math.random() - 0.5) * 200,
  ]);
}
const Rig = () => {
  const { camera } = useThree();
  const { mouse } = useSelector((state) => state.Mouse);
  const vec = new Vector3();

  return useFrame(() => {
    camera.position.lerp(vec.set(mouse.x, mouse.y, camera.position.z), 0.05);
    camera.lookAt(0, 0, 0);
  });
};

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
        size={0.5}
      >
        TODOS
        <meshNormalMaterial />
      </Text3D>
    </Center>
  );
};
const Particles = () => {
  const { doneTrigger } = useSelector((state) => state.DoneTrigger);

  const ref = useRef();
  const circle = useTexture("/circle.png");

  return (
    <Points>
      <pointsMaterial
        color={doneTrigger ? "green" : "black"}
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

const Animation = () => {
  return (
    <div className={s.root}>
      <Canvas>
        <Particles />
        <MyText />
        <Rig />
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  );
};

export default Animation;
