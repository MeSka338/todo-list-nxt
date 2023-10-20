import React from "react";
import { Canvas } from "@react-three/fiber";

import s from "./Animation.module.scss";

import CameraRig from "@/components/common/CameraRig";
import MyText from "@/components/common/MyText";
import Particles from "@/components/common/Particles";

const Animation = () => {
  return (
    <div className={s.root}>
      <Canvas>
        <Particles />
        <MyText />
        <CameraRig />
        {/* <OrbitControls /> */}

        <pointLight position={[0, 0, 0]} intensity={10} />
        <pointLight position={[2, 2, 0]} intensity={10} />
        <pointLight position={[2, 2, 7]} intensity={10} />
      </Canvas>
    </div>
  );
};

export default Animation;
