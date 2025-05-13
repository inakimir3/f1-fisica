import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import {
  Environment,
  PerspectiveCamera,
  OrbitControls,
} from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import F1 from "./F1";
import Ferrari from "./Ferrari";
import Renault from "./Renault";

gsap.registerPlugin(ScrollTrigger);

const Scene = ({ progress }) => {
  const cameraRef = useRef(null);
  useFrame(() => {
    console.log(cameraRef.current.position)
    cameraRef.current.lookAt(0, 0, 0)
  });

  useEffect(() => {
        const updateCamPos=()=>{
            const positions = [
                [4.6, 4.1, 4.7],
                [1, 1.6, 5.7],
                [0.8, 1, 5.7],
                [5.5, 1.2, -4.7],


            ];

            if (progress>=1) {
                gsap.to(cameraRef.current.position, {
                    x: 0.8,
                    y: 1.15,
                    z: -5.2,
                    duration: .5,
                    ease: "power1.out",
                });
            }
            else {
                const segmentProgress = 1/3;
                const segmentIndex = Math.floor(progress / segmentProgress);   
                const percentage = (progress % segmentProgress) / segmentProgress;

                const [startX, startY, startZ] = positions[segmentIndex];   
                const [endX, endY, endZ] = positions[segmentIndex + 1];
                const x = startX + (endX - startX) * percentage;
                const y = startY + (endY - startY) * percentage;
                const z = startZ + (endZ - startZ) * percentage;

                gsap.to(cameraRef.current.position, {
                    x,
                    y,
                    z,
                    duration: .5,
                    ease: "power1.out",
                });
            }

        };
        updateCamPos();
  }, [progress, cameraRef.current]);

  return (
    <>
      {/* <OrbitControls /> */}
      <PerspectiveCamera
        ref={cameraRef}
        fov={45}
        near={0.1}
        far={10000}
        makeDefault
        position={[6, 2.17, 3.7]}
        // position={[[0.8, 1, 5.7]]}
        

        // position={[1, 2, 6]}
        // position={[1, 1.2, -6]}

      />
      <Environment preset="sunset" />
      <Ferrari />
    </>
  );
};
export default Scene;
