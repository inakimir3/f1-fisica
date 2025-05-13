import React, { useRef, useEffect, useState } from "react"
import Scene from "./components/Scene"
import { Canvas } from "@react-three/fiber"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Header from "./components/Header"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Aerodinamics from "./Aerodinamics"

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
                    setProgress(self.progress)
                }
            }
        })
        .to(sceneRef.current,{
            ease: "none",
            x:'-10vw',
            y:'130vh',
        })
        .to(sceneRef.current,{
            ease: "none",
            x:'-10vw',
            y:'230vh',
        })
        .to(sceneRef.current,{
            ease: "none",
            x:'-10vw',
            y:'360vh',
        })
        .to(sceneRef.current,{
          ease: "none",
          x:'-10vw',
          y:'460vh',
        })

    },[])

    return (
      
      <main ref={mainRef}  >
        
        <Header/>
        <section className="relative grid place-items-center h-screen">
            <h1 className="text-center absolute top-[12%] mx-4 w-fit text-6xl font-bold">La física d'un F1</h1>

            <p className="text-center absolute max-w-4xl bottom-[5%] mx-4 w-fit text-xl font-bold">
              
              Cada corba, cada frenada, cada avançament és una coreografia de forces, energia i equilibri.
              En aquest recorregut descobriràs com cada part d'un cotxe de F1 està dissenyada per a domar les lleis de la naturalesa… i convertir-les en velocitat.

              </p>
            
            <div ref={sceneRef} className="h-screen w-screen">
                <Canvas>
                    <Scene progress={progress}/>
                </Canvas>
            </div>
        </section>

        <div className=" w-full h-[30vh]"></div>

        <section className="relative grid place-items-center h-screen">
            <p className="text-center absolute top-[5%] left-[5%] mx-4 w-fit text-4xl font-bold">Aleró davanter: el primer contacte amb l'aire</p>

            <div className=" absolute bottom-[20%] flex flex-col gap-4 right-[2%] max-w-xl mx-4 w-fit text-xl">
              <p>
                L'aleró davanter no sols dona forma al cotxe, sinó també al flux d'aire que l'embolica.
                Els seus plans estan dissenyats per a generar càrrega aerodinàmica (downforce), empenyent el cotxe cap avall sense frenar el seu avanç.
              </p>

              <p>
                A més, canalitza l'aire cap a zones clau com els frens i els laterals del xassís, optimitzant la refrigeració i el rendiment aerodinàmic.
                Canviar el seu angle modifica el comportament del cotxe en corbes: més càrrega significa més adherència, però també més resistència.
              </p>
              <Link
            to="/aerodinamica"
            className="flex items-center justify-center px-8 w-fit py-4 text-[16px] mt-4 hover:bg-blue-500 transition-all duration-300 bg-white text-black rounded-full"
          >
            Conèixer més sobre aerodinàmica, downforce i drag
          </Link>            </div>    
        </section>
        {/* <div className=" w-full h-[30vh]"></div> */}

        <section className="relative grid place-items-center h-screen">
            <p className="text-center absolute top-[5%] left-[5%] mx-4 w-fit text-4xl font-bold">Cockpit i zona central: centre de gravetat i forces G</p>

            <div className=" absolute bottom-[20%] flex flex-col gap-4 right-[2%] max-w-xl mx-4 w-fit text-xl">
              <p>
              En girar o frenar, el cotxe sofreix forces d'acceleració lateral o longitudinal.
              En una corba ràpida, un pilot pot experimentar fins a 5 vegades el seu pes corporal.
              </p>

              <p>
              Per a resistir això, el cotxe ha de tenir un centre de gravetat el més abaix possible, i un repartiment de masses equilibrat.Tot el sistema de suspensió treballa per a compensar aquestes forces i mantenir el cotxe estable en tot moment.
              </p>
            </div>    
        </section>
        <div className=" w-full h-[30vh]"></div>

        <section className="relative grid place-items-center h-screen">
            <p className="text-center absolute top-[5%] left-[5%] mx-4 w-fit text-4xl font-bold">L'aleró posterior i el difusor: el truc aerodinàmic final</p>

            <div className=" absolute bottom-[20%] flex flex-col gap-4 right-[2%] max-w-xl mx-4 w-fit text-xl">
              <p>
              L'aire que entra per davant ha de sortir amb eficiència.
              El difusor accelera el flux d'aire sota el cotxe, creant una zona de baixa pressió que succiona el cotxe cap al sòl.
              </p>

              <p>
              L'aleró posterior, per part seva, reforça la càrrega aerodinàmica en la part posterior, essencial per a l'estabilitat en corbes ràpides.
A més, el sistema DRS (Drag Reduction System) permet obrir una part de l'aleró en rectes per a reduir la resistència a l'aire i guanyar velocitat punta en avançaments.
              </p>
            </div>
            
            
        </section>

        
        
      </main>
    )
  }
  
  export default Home