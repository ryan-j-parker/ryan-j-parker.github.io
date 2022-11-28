/* eslint-disable react/no-unknown-property */
import { useState, useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Marker(props) {
  const [clicked, setClicked] = useState(false);
  const markerRef = useRef();
  const vector = new THREE.Vector3();

  useFrame((state) => {
    if (clicked) {
      state.camera.lookAt(markerRef.current.position);
      // eslint-disable-next-line no-undef
      state.camera.position.lerp(vector.set(xPosition, yPosition, zPosition), 0.01);
      state.camera.updateProjectionMatrix();
    }
    return null;
  });

  return (
    <mesh ref={markerRef} {...props} onClick={() => setClicked(!clicked)}>
      <coneGeometry attach="geometry" args={[0.5, 1, 32]} />
      <meshLambertMaterial attach="material" color={clicked ? 'red' : 'white'} />
    </mesh>
  );
}
