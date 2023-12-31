import { Text3D, Center } from "@react-three/drei";
import * as THREE from "three";

const MyText = () => {
  return (
    <Center position={[0, 3, 0]} rotation={[Math.PI / 10, 0, 0]}>
      <Text3D
        font={"fonts/font.json"}
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
        <meshStandardMaterial color={new THREE.Color("blue")} />
      </Text3D>
    </Center>
  );
};

export default MyText;
