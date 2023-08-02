import { useRef } from "react";
import { useControls } from "leva";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export default function Polyhedron(props) {
  const ref = useRef();
  useFrame((_, delta) => {
    ref.current.rotation.x += 0.5 * delta;
    ref.current.rotation.y += 0.5 * delta;
    ref.current.rotation.z += 0.5 * delta;
  });
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

    position: {
      x: 1,
      y: 1,
      z: 1,
      onChange: (v) => {
        ref.current.material.position = v;
      },
    },
  });
  //
  const ambientRef = useRef();
  const directionalRef = useRef();
  const pointRef = useRef();
  const spotRef = useRef();

  useControls("Ambient Light", {
    visible: {
      value: false,
      onChange: (v) => {
        ambientRef.current.visible = v;
      },
    },
    color: {
      value: "white",
      onChange: (v) => {
        ambientRef.current.color = new THREE.Color(v);
      },
    },
  });

  useControls("Directional Light", {
    visible: {
      value: false,
      onChange: (v) => {
        directionalRef.current.visible = v;
      },
    },
    position: {
      x: 1,
      y: 1,
      z: 1,
      onChange: (v) => {
        directionalRef.current.position.copy(v);
      },
    },
    color: {
      value: "white",
      onChange: (v) => {
        directionalRef.current.color = new THREE.Color(v);
      },
    },
  });

  useControls("Point Light", {
    visible: {
      value: false,
      onChange: (v) => {
        pointRef.current.visible = v;
      },
    },
    position: {
      x: 2,
      y: 0,
      z: 0,
      onChange: (v) => {
        pointRef.current.position.copy(v);
      },
    },
    color: {
      value: "white",
      onChange: (v) => {
        pointRef.current.color = new THREE.Color(v);
      },
    },
  });

  useControls("Spot Light", {
    visible: {
      value: false,
      onChange: (v) => {
        spotRef.current.visible = v;
      },
    },
    position: {
      x: 3,
      y: 2.5,
      z: 1,
      onChange: (v) => {
        spotRef.current.position.copy(v);
      },
    },
    color: {
      value: "white",
      onChange: (v) => {
        spotRef.current.color = new THREE.Color(v);
      },
    },
  });

  //

  return (
    <mesh {...props} ref={ref}>
      <icosahedronGeometry args={[1, 1]} />
      <ambientLight ref={ambientRef} />
      <directionalLight ref={directionalRef} />
      <pointLight ref={pointRef} />
      <spotLight ref={spotRef} />
    </mesh>
  );
}
