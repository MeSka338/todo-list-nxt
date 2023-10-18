import { useFrame, useThree } from "@react-three/fiber";
import { useSelector } from "react-redux";
import { Vector3 } from "three";

const CameraRig = () => {
  const { camera } = useThree();
  const { mouse } = useSelector((state) => state.Mouse);
  const vec = new Vector3();

  return useFrame(() => {
    camera.position.lerp(vec.set(mouse.x, mouse.y, camera.position.z), 0.05);
    camera.lookAt(0, 0, 0);
  });
};

export default CameraRig;
