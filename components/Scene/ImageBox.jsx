/* eslint-disable react/no-unknown-property */
import { useLoader } from '@react-three/fiber';
import { useRef, useState } from 'react';
import * as THREE from 'three';

import soundPalette from '../../assets-1028/sq-sound-palette.png';
import collabo from '../../assets-1028/sq-collabo.png';
import pokemon from '../../assets-1028/sq-pokemon.png';
import tictactoe from '../../assets-1028/sq-tic-tac-toe.png';
import flags from '../../assets-1028/sq-world-flags.png';
import devpal from '../../assets-1028/sq-devpal.png';
import colors from '../../assets-1028/sq-color-router.png';
import algos from '../../assets-1028/sq-3x3x3-algorithms.png';
import zodiac from '../../assets-1028/sq-zodiac.png';

export default function ImageBox(props) {
  const mesh = useRef();

  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // useFrame(() => {
  // mesh.current.rotation.x += 0.001;
  // mesh.current.rotation.y += Math.sin(0.1);
  // });

  const sqSP = useLoader(THREE.TextureLoader, soundPalette);
  const sqCOL = useLoader(THREE.TextureLoader, collabo);
  const sqPK = useLoader(THREE.TextureLoader, pokemon);
  const sqTTT = useLoader(THREE.TextureLoader, tictactoe);
  const sqFL = useLoader(THREE.TextureLoader, flags);
  const sqDP = useLoader(THREE.TextureLoader, devpal);
  const sqCR = useLoader(THREE.TextureLoader, colors);
  const sqALG = useLoader(THREE.TextureLoader, algos);
  const sqZO = useLoader(THREE.TextureLoader, zodiac);

  return (
    <>
      <mesh
        {...props}
        ref={mesh}
        // scale={active ? [3, 3, 3] : [2, 2, 2]}
        scale={[2, 2, 2]}
        onClick={(e) => setActive(!active)}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}
      >
        <texture attach="map" onUpdate={(self) => (self.needsUpdate = true)} />
        <boxBufferGeometry attach="geometry" />
        <meshStandardMaterial attach="material" map={sqSP} toneMapped={false} />
      </mesh>
      <mesh
        {...props}
        ref={mesh}
        // scale={active ? [3, 3, 3] : [2, 2, 2]}
        scale={[2, 2, 2]}
        onClick={(e) => setActive(!active)}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}
      >
        <texture attach="map" onUpdate={(self) => (self.needsUpdate = true)} />
        <boxBufferGeometry attach="geometry" />
        <meshStandardMaterial attach="material" map={sqCOL} toneMapped={false} />
      </mesh>
      <mesh
        {...props}
        ref={mesh}
        // scale={active ? [3, 3, 3] : [2, 2, 2]}
        scale={[2, 2, 2]}
        onClick={(e) => setActive(!active)}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}
      >
        <texture attach="map" onUpdate={(self) => (self.needsUpdate = true)} />
        <boxBufferGeometry attach="geometry" />
        <meshStandardMaterial attach="material" map={sqPK} toneMapped={false} />
      </mesh>
      <mesh
        {...props}
        ref={mesh}
        // scale={active ? [3, 3, 3] : [2, 2, 2]}
        scale={[2, 2, 2]}
        onClick={(e) => setActive(!active)}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}
      >
        <texture attach="map" onUpdate={(self) => (self.needsUpdate = true)} />
        <boxBufferGeometry attach="geometry" />
        <meshStandardMaterial attach="material" map={sqTTT} toneMapped={false} />
      </mesh>
      <mesh
        {...props}
        ref={mesh}
        // scale={active ? [3, 3, 3] : [2, 2, 2]}
        scale={[2, 2, 2]}
        onClick={(e) => setActive(!active)}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}
      >
        <texture attach="map" onUpdate={(self) => (self.needsUpdate = true)} />
        <boxBufferGeometry attach="geometry" />
        <meshStandardMaterial attach="material" map={sqFL} toneMapped={false} />
      </mesh>
      <mesh
        {...props}
        ref={mesh}
        // scale={active ? [3, 3, 3] : [2, 2, 2]}
        scale={[2, 2, 2]}
        onClick={(e) => setActive(!active)}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}
      >
        <texture attach="map" onUpdate={(self) => (self.needsUpdate = true)} />
        <boxBufferGeometry attach="geometry" />
        <meshStandardMaterial attach="material" map={sqDP} toneMapped={false} />
      </mesh>
      <mesh
        {...props}
        ref={mesh}
        // scale={active ? [3, 3, 3] : [2, 2, 2]}
        scale={[2, 2, 2]}
        onClick={(e) => setActive(!active)}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}
      >
        <texture attach="map" onUpdate={(self) => (self.needsUpdate = true)} />
        <boxBufferGeometry attach="geometry" />
        <meshStandardMaterial attach="material" map={sqCR} toneMapped={false} />
      </mesh>
      <mesh
        {...props}
        ref={mesh}
        // scale={active ? [3, 3, 3] : [2, 2, 2]}
        scale={[2, 2, 2]}
        onClick={(e) => setActive(!active)}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}
      >
        <texture attach="map" onUpdate={(self) => (self.needsUpdate = true)} />
        <boxBufferGeometry attach="geometry" />
        <meshStandardMaterial attach="material" map={sqALG} toneMapped={false} />
      </mesh>
      <mesh
        {...props}
        ref={mesh}
        // scale={active ? [3, 3, 3] : [2, 2, 2]}
        scale={[2, 2, 2]}
        onClick={(e) => setActive(!active)}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}
      >
        <texture attach="map" onUpdate={(self) => (self.needsUpdate = true)} />
        <boxGeometry attach="geometry" />
        <meshStandardMaterial attach="material" map={sqZO} toneMapped={false} />
      </mesh>
    </>
  );
}
