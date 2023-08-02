import { useRef } from "react";
import { useControls } from "leva";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export default function Polyhedron(props) {
  const ref = useRef();

  useControls(props.name, {
    wireframe: {
      value: false,
      onChange: (v) => {
        ref.current.material.wireframe = v;
      },
    },
    flatShading: {
      value: true,
      onChange: (v) => {
        ref.current.material.flatShading = v;
        ref.current.material.needsUpdate = true;
      },
    },
    color: {
      value: "lime",
      onChange: (v) => {
        ref.current.material.color = new THREE.Color(v);
      },
    },
    visible: {
      value: true,
      onChange: (v) => {
        ref.current.material.visible = v;
      },
    },
    // setScale: { value: true },
    // onChange: (v) => {
    //   ref.current.material.scale = (2, 2, 2);
    // },
    //ref.current.rotation.y = v;
    //ref.current.rotation.x = v;
  });

  return (
    <mesh {...props} ref={ref}>
      <icosahedronGeometry args={[1, 1]} />
    </mesh>
  );
}
