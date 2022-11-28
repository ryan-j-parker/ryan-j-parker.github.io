/* eslint-disable react/no-unknown-property */
import { useLoader, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import * as THREE from 'three';
import './Colors.css';

import colors from '../../assets-1028/sq-color-router.png';

export default function Colors(props) {
  const mesh = useRef();

  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(() => {
    hover
      ? ((mesh.current.rotation.x += 0.001), (mesh.current.rotation.y += Math.sin(0.01)))
      : null;
    // active
    //   ? ((mesh.current.rotation.x += 0.002), (mesh.current.rotation.y += Math.sin(0.02)))
    //   : (mesh.current.rotation.x += 0.001), (mesh.current.rotation.y += Math.sin(0.01));
    active ? (mesh.className = 'active') : (mesh.className = 'inactive');
  });

  const sqCR = useLoader(THREE.TextureLoader, colors);

  return (
    <>
      <mesh
        {...props}
        ref={mesh}
        scale={active ? [3, 3, 3] : [2, 2, 2]}
        onClick={(e) => setActive(!active)}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}
      >
        <texture attach="map" onUpdate={(self) => (self.needsUpdate = true)} />
        <boxGeometry attach="geometry" />
        <meshStandardMaterial attach="material" map={sqCR} toneMapped={false} />
      </mesh>
    </>
  );
}
