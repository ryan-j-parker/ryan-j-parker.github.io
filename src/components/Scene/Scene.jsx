/* eslint-disable react/no-unknown-property */
import * as THREE from 'three';
import { DoubleSide } from 'three';
import React, { useRef, useState, useEffect } from 'react';
import './Scene.css';
import { Canvas, extend, useFrame, useThree, useLoader } from '@react-three/fiber';
import { useTexture, Stats } from '@react-three/drei';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
extend({ OrbitControls });
import { gsap } from 'gsap';
import icon from '../../r-fav.png';

import SoundPalette from './SoundPalette';
import Collabo from './Collabo';
import Pokemon from './Pokemon';
import Colors from './Colors';
import TicTacToe from './TicTacToe';
import Flags from './Flags';
import Algos from './Algos';
import DevPal from './DevPal';
import Zodiac from './Zodiac';
import Marker from './Marker';
import { FirstPersonControls } from '@react-three/drei';
extend({ FirstPersonControls });

// import { extend } from '@react-three/fiber';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
extend({ TextGeometry });

import dmserif from '../../DM Serif Display_Regular.json';
import titanOne from '../../Titan One_Regular.json';
import luckiest from '../../Luckiest Guy_Regular.json';

function DevpalText() {
  const font = new FontLoader().parse(dmserif);

  return (
    <>
      <mesh position={[-12, 0, -2]} rotation={[-0.6, 0.4, 0.3]}>
        <textGeometry args={['devPal', { font, size: 2, height: 1.2 }]} />
        <meshNormalMaterial attach="material" color={'white'} />
      </mesh>
    </>
  );
}

function CollaboText() {
  const font = new FontLoader().parse(dmserif);

  return (
    <>
      <mesh position={[3, 5, -9]} rotation={[0.5, -0.6, -0.3]}>
        <textGeometry args={['collabo', { font, size: 2, height: 1.2 }]} />
        <meshNormalMaterial attach="material" color={'white'} />
      </mesh>
    </>
  );
}

function AlgosText() {
  const font = new FontLoader().parse(dmserif);

  return (
    <>
      <mesh position={[-1, -3, -16]} rotation={[-0.6, 0.3, -0.3]}>
        <textGeometry args={['3x3x3 algorithms', { font, size: 2, height: 1.2 }]} />
        <meshNormalMaterial attach="material" color={'white'} />
      </mesh>
    </>
  );
}

function TicTacText() {
  const font = new FontLoader().parse(luckiest);

  return (
    <>
      <mesh position={[8, 3, -12]} rotation={[-0.5, 0.8, 0.3]}>
        <textGeometry args={['tic-tac-toe', { font, size: 2, height: 1.2 }]} />
        <meshNormalMaterial attach="material" color={'white'} />
      </mesh>
    </>
  );
}

function PokemonText() {
  const font = new FontLoader().parse(luckiest);

  return (
    <mesh position={[-10, -2, -14]} rotation={[-0.8, 0.4, -0.2]}>
      <textGeometry args={['pokemon compendium', { font, size: 2, height: 1.2 }]} />
      <meshNormalMaterial attach="material" color={'green'} roughness={0.5} />
    </mesh>
  );
}

function ZodiacText() {
  const font = new FontLoader().parse(luckiest);

  return (
    <mesh position={[0, -3, -12]} rotation={[0.3, -0.6, -0.5]}>
      <textGeometry args={['zodiac', { font, size: 2, height: 1.2 }]} />
      <meshNormalMaterial attach="material" color={'green'} roughness={0.5} />
    </mesh>
  );
}

function SoundText() {
  const font = new FontLoader().parse(titanOne);

  return (
    <mesh position={[-16, 4.5, -12]} rotation-y={0.6} rotation-x={0.2}>
      <textGeometry args={['sound palette', { font, size: 2, height: 1.2 }]} />
      <meshNormalMaterial attach="material" color={'white'} />
    </mesh>
  );
}

function ColorText() {
  const font = new FontLoader().parse(titanOne);

  return (
    <mesh position={[6, 0, -8]} rotation={[-0.6, -0.2, -1]}>
      <textGeometry args={['color router', { font, size: 2, height: 1.2 }]} />
      <meshNormalMaterial attach="material" color={'white'} />
    </mesh>
  );
}

function FlagsText() {
  const font = new FontLoader().parse(titanOne);

  return (
    <mesh position={[-16, -1, -16]} rotation={[-0, -0.2, 0.3]}>
      <textGeometry args={['world flags', { font, size: 2, height: 1.2 }]} />
      <meshNormalMaterial attach="material" color={'white'} />
    </mesh>
  );
}

function ImagePlane() {
  const iconTexture = useLoader(THREE.TextureLoader, icon);
  return (
    <mesh scale={[5, 5, 5]} position={[0, 0, -45]}>
      <planeGeometry attach="geometry" args={[10, 10]} />
      <meshBasicMaterial attach="material" side={DoubleSide} map={iconTexture} toneMapped={false} />
    </mesh>
  );
}

function TexturePlane() {
  const props = useTexture({
    map: 'crystal/color.jpg',
    displacementMap: 'crystal/height.png',
    normalMap: 'crystal/normal.jpg',
    roughnessMap: 'crystal/roughness.jpg',
    aoMap: 'crystal/ao.jpg',
  });

  const propsL = useTexture({
    map: '/lava/color.jpg',
    displacementMap: 'lava/disp.png',
    aoMap: 'lava/ao.jpg',
    roughnessMap: 'lava/rough.jpg',
    normalMap: 'lava/norm.jpg',
    alphaMap: 'lava/mask.jpg',
  });

  const propsR = useTexture({
    map: '/rock/rocks-color.jpg',
    displacementMap: 'rock/rocks-height.png',
    aoMap: 'rock/rocks-ao.jpg',
    roughnessMap: 'rock/rocks-rough.jpg',
    normalMap: 'rock/rocks-normal.jpg',
  });

  return (
    <>
      <mesh scale={[4, 2, 4]} position={[0, -22, 0]} rotation-x={Math.PI * -0.5}>
        <planeGeometry attach="geometry" args={[10, 20, 10, 20]} />
        <meshStandardMaterial
          {...propsL}
          attach="material"
          displacementScale={1}
          side={DoubleSide}
        />
      </mesh>

      <mesh scale={[4, 2, 4]} position={[-22, 0, 0]} rotation-y={Math.PI * 0.5}>
        <planeGeometry attach="geometry" args={[10, 20, 10, 20]} />
        <meshStandardMaterial
          {...props}
          attach="material"
          displacementScale={2}
          side={DoubleSide}
        />
      </mesh>

      <mesh scale={[4, 2, 4]} position={[24, 0, 0]} rotation-y={Math.PI * -0.5}>
        <planeGeometry attach="geometry" args={[10, 20, 10, 20]} />
        <meshStandardMaterial
          {...propsR}
          attach="material"
          displacementScale={2}
          side={DoubleSide}
        />
      </mesh>
    </>
  );
}

function Sphere() {
  const sphereRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    // sphereRef.current.position.x = t + 2;
    if (sphereRef.current.position.x > 10) {
      sphereRef.current.position.x = t - 2;
    }
    sphereRef.current.position.x = t + 2;
  });

  const texture = useLoader(THREE.TextureLoader, '/rock/rocks-color.jpg');

  return (
    <mesh map={texture} ref={sphereRef} position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <sphereGeometry attach="geometry" args={[2, 32, 32]} />
      <meshNormalMaterial attach="material" color={'white'} />
    </mesh>
  );
}

// function OrbitalAnchor() {
//   return (
//     <mesh>
//       <sphereGeometry attach="geometry" args={[1, 1, 1]} />
//       <meshNormalMaterial attach="material" />
//     </mesh>
//   );
// }

const tempBoxes = new THREE.Object3D();

const Boxes = ({ i, j }) => {
  const material = new THREE.MeshLambertMaterial({ color: '#affecd' });
  const boxesGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
  const ref = useRef();

  useFrame(({ clock }) => {
    let counter = 0;
    const t = clock.oldTime * 0.001;
    for (let x = 0; x < i; x++) {
      for (let z = 0; z < j; z++) {
        const id = counter++;
        tempBoxes.position.set(i / 2 - x, 0, j / 2 - z);
        tempBoxes.rotation.y = t;
        tempBoxes.updateMatrix();
        ref.current.setMatrixAt(id, tempBoxes.matrix);
      }
    }
    ref.current.instanceMatrix.needsUpdate = true;
  });

  return <instancedMesh position-y={-25.5} ref={ref} args={[boxesGeometry, material, i * j]} />;
};

export default function Scene() {
  const CameraController = () => {
    const { camera, gl } = useThree();
    useEffect(() => {
      const controls = new OrbitControls(camera, gl.domElement);
      return () => {
        controls.dispose();
      };
    }, [camera, gl]);
    return null;
  };

  return (
    <>
      <Canvas style={{ height: '100vh', width: '100vw' }}>
        {/* <Marker /> */}
        <Sphere />
        <Boxes i={350} j={350} />
        <Stats />
        <TexturePlane />
        <DevpalText />
        <SoundText />
        <PokemonText />
        <CollaboText />
        <TicTacText />
        <ColorText />
        <FlagsText />
        <ZodiacText />
        <AlgosText />
        <CameraController />
        <ambientLight intensity={1} />
        <ImagePlane />
        <spotLight position={[10, 10, 10]} angle={0.15} />
        <SoundPalette position={[0, 0, 0]} />
        <Collabo position={[0, 3, 0]} />
        <Pokemon position={[3, 3, 0]} />
        <TicTacToe position={[-3, 0, 0]} />
        <Flags position={[-3, 3, 0]} />
        <DevPal position={[3, 0, 0]} />
        <Colors position={[-3, -3, 0]} />
        <Algos position={[0, -3, 0]} />
        <Zodiac position={[3, -3, 0]} />
        {/* <CameraController />
        <ambientLight intensity={1} />
        <ImagePlane />
        <spotLight position={[10, 10, 10]} angle={0.15} />
        <SoundPalette position={[0, 0, 0]} />
        <Collabo position={[3, 0, 0]} />
        <Pokemon position={[6, 0, 0]} />
        <TicTacToe position={[9, 0, 0]} />
        <Flags position={[12, 0, 0]} />
        <DevPal position={[-3, 0, 0]} />
        <Colors position={[-6, 0, 0]} />
        <Algos position={[-9, 0, 0]} />
        <Zodiac position={[-12, 0, 0]} /> */}
      </Canvas>
    </>
  );
}
