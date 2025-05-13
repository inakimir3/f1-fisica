import React, { useRef, useEffect, useState } from "react"
import Scene from "./Scene"
import { Canvas } from "@react-three/fiber"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function Home() {

    const mainRef = useRef(null)
    const sceneRef = useRef(null)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: mainRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 1,
                onUpdate:(self) => {
                    setProgress(self.progress())
                }
            }
        })
        .to(sceneRef.current,{
            ease: "none",
            x:'-25vw',
            y:'100vh',
        })
        .to(sceneRef.current,{
            ease: "none",
            x:'25vw',
            y:'200vh',
        })
        .to(sceneRef.current,{
            ease: "none",
            x:'-25vw',
            y:'300vh',
        })

    },[])

    return (
      <main ref={mainRef} >
        <section className="relative grid place-items-center h-screen">
            <p className="text-center absolute top-[5%] mx-4 w-fit text-8xl font-bold">La fisica de la F1</p>

            <p className="text-center absolute bottom-[5%] mx-4 w-fit text-8xl font-bold">Dragforce i downforce</p>
            
            <div ref={sceneRef} className="h-screen w-screen">
                <Canvas>
                    <Scene progress={progress}/>
                </Canvas>
            </div>
        </section>

        <section className="relative grid place-items-center h-screen">
            <p className="text-center absolute top-[5%] mx-4 w-fit text-8xl font-bold">Aleró davanter</p>

            <p className="text-center absolute bottom-[5%] mx-4 w-fit text-8xl font-bold">Aleró traser</p>
            
            
        </section>

        <section className="relative grid place-items-center h-screen">
            <p className="text-center absolute top-[5%] mx-4 w-fit text-8xl font-bold">Aleró davanter</p>

            <p className="text-center absolute bottom-[5%] mx-4 w-fit text-8xl font-bold">Aleró traser</p>
            
            
        </section>
        
        
      </main>
    )
  }
  
  export default Home