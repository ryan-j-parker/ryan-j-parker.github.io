/* eslint-disable react/no-unknown-property */
import { useLoader, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import * as THREE from 'three';

import soundPalette from '../../assets-1028/sq-sound-palette.png';

export default function SoundPalette(props) {
  const mesh = useRef();

  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(() => {
    hover
      ? ((mesh.current.rotation.x += 0.001), (mesh.current.rotation.y += Math.sin(0.01)))
      : null;
  });

  const sqSP = useLoader(THREE.TextureLoader, soundPalette);

  return (
    <>
      <mesh
        {...props}
        ref={mesh}
        scale={active ? [3, 3, 3] : [2, 2, 2]}
        onClick={(e) => setActive(!active)}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}
        title="Sound Palette: a synesthetic sound visualization 3D experience"
      >
        <texture attach="map" onUpdate={(self) => (self.needsUpdate = true)} />
        <boxGeometry attach="geometry" />
        <meshStandardMaterial attach="material" map={sqSP} toneMapped={false} />
      </mesh>
    </>
  );
}
