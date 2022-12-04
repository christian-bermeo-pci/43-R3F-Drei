import {
  OrbitControls,
  TransformControls,
  PivotControls,
  Html,
  Text,
  Float,
  MeshReflectorMaterial,
} from '@react-three/drei';
import { useRef } from 'react';

export default function Experience() {
  const cubeRef = useRef();
  const sphereRef = useRef();

  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <PivotControls
        anchor={[0, 0, 0]} //Position relative to the object
        depthTest={false}
        lineWidth={2} // line thickness
        axisColors={['#9381ff', '#ff4d6d', '#7ae582']} // line colors
        scale={1.5}
      >
        <mesh position-x={-2} ref={sphereRef}>
          <Html
            position={[1, 1, 0]}
            wrapperClass={'sphereLabel'}
            center
            distanceFactor={6} // give it perspective on zoom in-out
            occlude={[cubeRef, sphereRef]} // add refs of object that can hide it
          >
            That's a sphere 🚀
          </Html>
          <sphereGeometry />
          <meshStandardMaterial color='orange' />
        </mesh>
      </PivotControls>

      <mesh ref={cubeRef} position-x={2} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color='mediumpurple' />
      </mesh>
      {/* Transform gizmo connect with ref */}
      <TransformControls object={cubeRef} mode='translate' />

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        {/* <meshStandardMaterial color='greenyellow' /> */}
        <MeshReflectorMaterial
          resolution={1024}
          blur={[10000, 10000]}
          mixBlur={1}
          mirror={0.8}
          color='lightpurple'
        />
      </mesh>

      <Float speed={2} floatIntensity={3}>
        <Text
          font='./bangers-v20-latin-regular.woff' // you can download fonts in google fonts as a woff format
          fontSize={1}
          color='salmon'
          position={[0, 2, -1]}
          maxWidth={2} // make line break
          textAlign='center'
        >
          I LOVE R3F .!
          {/* Change material to react with light  */}
          <meshNormalMaterial />
        </Text>
      </Float>
    </>
  );
}
