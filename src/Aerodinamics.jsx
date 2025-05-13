import Home from "./Home";
import Header from "./components/Header";
import { motion } from "motion/react";

function Aerodinamics() {
  return (
    <main>
      <Header />
      <section className="relative w-full flex flex-col gap-16 py-[128px] px-6">
        <motion.h1
          initial={{ transform: "translateX(-400px)" }}
          animate={{ transform: "translateX(0px)" }}
          transition={{duration: 2, type: "spring" }}

          className="text-center text-6xl font-bold"
        >
          Aerodinàmica, downforce i drag
        </motion.h1>

        <h2 className="text-4xl mt-12">¿Qué és l'aerodinàmica?</h2>
        <div className="flex w-full gap-4">
            <p className="w-1/2 text-[20px]">
                L'aerodinàmica és la part de la física que estudia el comportament
                de l'aire quan es troba amb objectes en moviment. <br /> <br />En un cotxe de
                Fórmula 1, cada corba del xassis, cada aleta i cada aleró està
                pensat per a dominar l'aire, convertir-lo en avantatge… i guanyar
                temps. <br /><br /> L'aire pot ser un enemic o un aliat: Si no ho controles,
                genera resistència i frena el cotxe. Si ho domines, et dona adherència i
                estabilitat.
            </p>
            <div className="flex w-full justify-center items-center">
                <img src="src/assets/f1wind.png" alt="Air flow f1" className="w-3xl"/>
            </div>
        </div>
      </section>
    </main>
  );
}

export default Aerodinamics;
