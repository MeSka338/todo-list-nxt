import { Canvas } from "@react-three/fiber";
import s from "./Animation.module.scss";
function Animation() {
  return (
    <div id="canvas-container" className={s.root}>
      <Canvas />
    </div>
  );
}

export default Animation;
