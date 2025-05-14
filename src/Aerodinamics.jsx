import Home from "./Home";
import Header from "./components/Header";
import { motion } from "motion/react";

function Aerodinamics() {
  return (
    <main>
      <Header />
      <section className="relative w-full flex flex-col gap-16 pt-[128px] px-20">
        <motion.h1
          initial={{ transform: "translateX(-400px)" }}
          animate={{ transform: "translateX(0px)" }}
          transition={{ duration: 2, type: "spring" }}
          className="text-center text-6xl font-bold"
        >
          Aerodinàmica, downforce i drag
        </motion.h1>
      </section>

      <section className="relative w-full flex flex-col gap-16 px-20 pb-12">
        <div className="flex w-full justify-between pt-32">
          <div className="flex flex-col gap-16 pr-40">
            <h2 className="text-4xl font-bold">Què és l'aerodinàmica?</h2>
            <p className="w-full text-[20px]">
              L'aerodinàmica és la part de la física que estudia el comportament
              de l'aire quan es troba amb objectes en moviment. <br /> <br />
              En un cotxe de Fórmula 1, cada corba del xassis, cada aleta i cada
              aleró està pensat per a dominar l'aire, convertir-lo en avantatge…
              i guanyar temps. <br />
              <br /> L'aire pot ser un enemic o un aliat: Si no ho controles,
              genera resistència i frena el cotxe. Si ho domines, et dona
              adherència i estabilitat.
            </p>
          </div>
          <motion.div className="flex w-full justify-center items-center">
            <img
              src="src/assets/f1wind.png"
              alt="Air flow f1"
              className="w-full"
            />
          </motion.div>
        </div>
      </section>

      <section className="relative w-full flex flex-col gap-16 px-20 pb-12">
        <div className="flex w-full justify-between pt-32">
          <motion.div className="flex w-full justify-center items-center">
            <img
              src="src/assets/drag.png"
              alt="Air flow f1"
              className="w-full"
            />
          </motion.div>
          <div className="flex flex-col gap-16 pl-40">
            <h2 className="text-4xl font-bold">Drag (resistència a l'avanç)</h2>
            <p className="w-full text-[20px]">
              El drag és la força que s'oposa al moviment del cotxe. Com més ràpid vas, més aire has de "empènyer".
              <br /> <br />
              Imagina treure la mà per la finestra del cotxe: com més acceleres, més et costa mantenir-la ferm. Això és el drag. <br />
              <br /> Un cotxe amb menys drag aconsegueix més velocitat punta. Per això els enginyers dissenyen el xassís amb línies suaus i estretes, com una fletxa.
            </p>
          </div>
        </div>
      </section>

      <section className="relative w-full flex flex-col gap-16 px-20 pb-40">
        <div className="flex w-full justify-between pt-32">
          <div className="flex flex-col gap-16 pr-40">
            <h2 className="text-4xl font-bold">Downforce (càrrega aerodinàmica)</h2>
            <p className="w-full max-w-[1300px] text-[20px]">
            El downforce és l'oposat al lift (força que aixecaria el cotxe, com en un avió).
En F1, es busca que l'aire "empenyi" el cotxe cap avall. Això genera més agarri en les rodes, permetent prendre corbes més ràpid sense derrapar.


              <br /> <br />
              El downforce es genera gràcies als alerons, ja que les seves formes obliguen a l'aire a recórrer més distància per damunt, creant una diferència de pressió que aferra el cotxe al sòl. <br />
              <br /> Més downforce significa més velocitat en corbes, però també significa més drag. Per això s'ha d'aconseguir un equilibri entre ambdues forces.
            </p>
          </div>
          <motion.div className="flex w-full justify-center items-center">
            <img
              src="src/assets/f1.png"
              alt="Air flow f1"
              className="w-full"
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default Aerodinamics;
