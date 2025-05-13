import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Renault(props) {
  const { nodes, materials } = useGLTF('/renault.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.018}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            material={materials.Decals}
            position={[46.958, 14.484, -21.445]}
            rotation={[-1.471, 0, 0]}
            scale={38.951}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_1.geometry}
            material={materials.Decals}
            position={[8.46, 53.736, 31.915]}
            rotation={[-Math.PI / 2, -1.163, -Math.PI]}
            scale={38.951}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_2.geometry}
            material={materials.Decals}
            position={[16.894, 36.428, 49.252]}
            rotation={[-1.578, 0.001, 0.003]}
            scale={38.951}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_3.geometry}
            material={materials.Decals}
            position={[31.215, 16.517, -125.733]}
            rotation={[-Math.PI / 2, 0, -0.022]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_4.geometry}
            material={materials.Decals}
            position={[43.332, 9.034, -130.818]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={[56.867, 40.105, 40.105]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_5.geometry}
            material={materials.Decals}
            position={[-45.179, 9.034, -148.086]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={[56.867, 40.105, 40.105]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_6.geometry}
            material={materials.Decals}
            position={[-0.883, 0.06, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_7.geometry}
            material={materials.Decals}
            position={[-1.813, -331.548, 125.95]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_8.geometry}
            material={materials.Decals}
            position={[-1.365, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={38.951}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_9.geometry}
            material={materials.Decals}
            position={[-0.952, 3.902, 8.554]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={38.951}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_10.geometry}
            material={materials.Decals}
            position={[-0.952, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={38.951}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_11.geometry}
            material={materials.Decals}
            position={[0.851, 0.198, 0]}
            rotation={[-Math.PI / 2, 0.001, 0.011]}
            scale={38.951}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_12.geometry}
            material={materials.Decals}
            position={[2.956, 4.115, -2.324]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={38.951}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_13.geometry}
            material={materials.Decals}
            position={[-0.968, 60.362, 6.772]}
            rotation={[-1.578, 0.001, 0.003]}
            scale={38.951}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_14.geometry}
            material={materials.Exessories}
            position={[-0.905, 33.508, -36.089]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={8.212}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_15.geometry}
            material={materials.Exessories}
            position={[-0.905, 33.508, -35.992]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={8.212}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_16.geometry}
            material={materials.Exessories}
            position={[-0.905, 33.508, -35.918]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={8.212}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_17.geometry}
            material={materials.Exessories}
            position={[-0.905, 33.508, -35.992]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={8.212}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_18.geometry}
            material={materials.Exessories}
            position={[-0.905, 33.508, -36.089]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={1.557}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_19.geometry}
            material={materials.Exessories}
            position={[-0.905, 33.508, -36.016]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={[2.449, 2.449, 1.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_20.geometry}
            material={materials.Exessories}
            position={[-0.905, 33.508, -36.089]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={[2.737, 0.069, 0.519]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_21.geometry}
            material={materials.Exessories}
            position={[-0.905, 33.508, -36.067]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={8.212}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_22.geometry}
            material={materials.Wheels_Connectors}
            position={[0, 0, 201.479]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_23.geometry}
            material={materials.Wheels_Connectors}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_24.geometry}
            material={materials.Wheels_Connectors}
            position={[0, 0, 201.479]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_25.geometry}
            material={materials.F1_Base}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_26.geometry}
            material={materials.Wheels_Connectors}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_27.geometry}
            material={materials.Exessories}
            position={[-0.982, 45.88, 1.066]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[0.469, 0.469, 10.744]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_28.geometry}
            material={materials.Exessories}
            position={[-1.813, 16.628, 132.941]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[30.68, 5.392, 21.141]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_29.geometry}
            material={materials.Exessories}
            position={[-1.077, 13.491, 134.458]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={3.082}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_30.geometry}
            material={materials.Exessories}
            position={[-1.077, 30.347, 111.31]}
            rotation={[0.136, 0, 0]}
            scale={1.429}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_31.geometry}
            material={materials.F1_Base}
            position={[-0.84, 60.224, 17.109]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[100, 100, 109.018]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_32.geometry}
            material={materials.Wheels_Connectors}
            position={[-1.034, 39.018, -99.52]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_33.geometry}
            material={materials.Wheels_Connectors}
            position={[-1.034, 39.018, -99.52]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_34.geometry}
            material={materials.Wheels_Connectors}
            position={[-1.034, 39.018, -99.52]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_35.geometry}
            material={materials.Exessories}
            position={[91.759, -0.116, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_36.geometry}
            material={materials.Exessories}
            position={[-1.077, 43.545, 119.008]}
            rotation={[-1.774, 0, 0]}
            scale={0.789}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_37.geometry}
            material={materials.Exessories}
            position={[0, -0.094, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_38.geometry}
            material={materials.Exessories}
            position={[-1.273, -0.257, -67.86]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[12.18, 12.749, 0.389]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_39.geometry}
            material={materials.F1_Base}
            position={[-0.982, 45.88, 1.066]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_40.geometry}
            material={materials.Exessories}
            position={[-0.464, 39.261, -57.481]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={4.049}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_41.geometry}
            material={materials.Exessories}
            position={[-0.81, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_42.geometry}
            material={materials.Exessories}
            position={[-0.883, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_43.geometry}
            material={materials.Exessories}
            position={[-1.031, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_44.geometry}
            material={materials.Wheels_Connectors}
            position={[0, 0, 201.506]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_45.geometry}
            material={materials.Wheels_Connectors}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_46.geometry}
            material={materials.Exessories}
            position={[-1.813, -332.228, 126.592]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_47.geometry}
            material={materials.Exessories}
            position={[-1.813, -332.228, 126.592]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_48.geometry}
            material={materials.Exessories}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_49.geometry}
            material={materials.Exessories}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_50.geometry}
            material={materials.F1_Base}
            position={[-0.952, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={38.951}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_51.geometry}
            material={materials.Exessories}
            position={[-1.005, 16.131, -13.239]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={[4.57, 4.794, 4.57]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_52.geometry}
            material={materials.Wheels_Connectors}
            position={[-1.151, 36.953, 99.423]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/renault.glb')

export default Renault
