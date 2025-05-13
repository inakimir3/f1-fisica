import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function F1(props) {
  const { nodes, materials } = useGLTF('/f1.glb')
  return (
    <group scale={[0.5,0.5,0.5]} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials.BaseColor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials['Dark Black']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bottom.geometry}
        material={materials['Dark Black']}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[78.282, 336.174, 20.02]}
      />
      <group rotation={[-Math.PI / 2, 0, 0]} scale={[90.668, 90.668, 62.447]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials['Dark Black']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_1.geometry}
          material={materials.BaseColor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_2.geometry}
          material={materials['2ndColor']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_3.geometry}
          material={materials['3rdColor']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_4.geometry}
          material={materials.Mirror}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Exhaust.geometry}
        material={materials['Dark Black']}
        scale={[15.377, 15.377, 76.136]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Front_Wing_Base.geometry}
        material={materials['Dark Black']}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[-100, 38.124, 7.433]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.L_Inside_Cover.geometry}
        material={materials['Dark Black']}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FRod.geometry}
        material={materials['Dark Black']}
        rotation={[-Math.PI / 2, 1.571, 0]}
        scale={[7.592, 7.592, 58.713]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RRod.geometry}
        material={materials['Dark Black']}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={7.621}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rear_Wing.geometry}
        material={materials['Dark Black']}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[4.219, 66.914, 66.914]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Onboard_Camera.geometry}
        material={materials['Dark Black']}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[8.741, 8.692, 5.142]}
      />
      <group position={[-200.021, 85.614, 434.489]} rotation={[-Math.PI / 2, 0.07, 0]} scale={100}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001.geometry}
          material={materials['Dark Black']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_1.geometry}
          material={materials['Bloody Red']}
        />
      </group>
      <group position={[200.021, 85.611, 434.489]} rotation={[-Math.PI / 2, -0.07, 0]} scale={100}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle006.geometry}
          material={materials['Dark Black']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle006_1.geometry}
          material={materials['Bloody Red']}
        />
      </group>
      <group position={[-200.021, 85.614, -296.885]} rotation={[-Math.PI / 2, 0.07, 0]} scale={100}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle008.geometry}
          material={materials['Dark Black']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle008_1.geometry}
          material={materials['Bloody Red']}
        />
      </group>
      <group position={[200.021, 85.614, -296.885]} rotation={[-Math.PI / 2, -0.07, 0]} scale={100}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle009.geometry}
          material={materials['Dark Black']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle009_1.geometry}
          material={materials['Bloody Red']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.R_Inside_Cover.geometry}
        material={materials['Dark Black']}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
    </group>
  )
}

useGLTF.preload('/f1.glb')
export default F1
