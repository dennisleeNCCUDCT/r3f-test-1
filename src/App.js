import { Canvas } from "@react-three/fiber";
import Polyhedron from "./Polyhedron";
import * as THREE from "three";
import { Stats, OrbitControls, Stars, Sky } from "@react-three/drei";

//

//
export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [-1, 4, 2.5], fov: 120 }}>
        <Polyhedron
          name="meshBasicMaterial"
          position={[-3, 1, 0]}
          material={new THREE.MeshBasicMaterial()}
        />
        <Polyhedron
          name="meshNormalMaterial"
          position={[-1, 1, 0]}
          material={new THREE.MeshNormalMaterial()}
        />
        <Polyhedron
          name="meshPhongMaterial"
          position={[1, 1, 0]}
          material={new THREE.MeshPhongMaterial()}
        />
        <Polyhedron
          name="meshStandardMaterial"
          position={[3, 1, 0]}
          material={new THREE.MeshStandardMaterial()}
        />
        <OrbitControls target-y={1} />
        <axesHelper args={[5]} />
        <gridHelper />
        <Stats />
        <Stars />
        <Sky />
      </Canvas>
    </div>
  );
}
