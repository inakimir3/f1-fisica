import Home from "./Home";
import Header from "./components/Header";
import { motion } from "motion/react";

function ForcesG() {
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
          Forces G en la Fórmula 1
        </motion.h1>
      </section>

      <section className="relative w-full flex flex-col gap-16 px-20 pb-12">
        <div className="flex w-full justify-between pt-32">
          <div className="flex flex-col gap-16 pr-40">
            <h2 className="text-4xl font-bold">Què són les forces G?</h2>
            <p className="w-full text-[20px]">
            Les forces G (o acceleracions gravitacionals) són una mesura de la força que actua sobre el cos d'un pilot quan el cotxe accelera, frena o pren corbes.
            <br /> <br />
            1G equival a la força de la gravetat que sentim normalment quan estem quiets en la Terra. En F1, els pilots arriben a suportar fins a 5G en corbes ràpides.


             <br />
              <br /> Això significa que, si el seu cap i casc pesen uns 7 kg, en una corba a 5G senten com si pesessin 35 kg. El mateix ocorre amb els seus braços, coll, òrgans interns…
            </p>
          </div>
          <motion.div className="flex w-full justify-center items-center">
            <img
              src="public/gforces.png"
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
              src="public/drag.png"
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
              src="public/f1.png"
              alt="Air flow f1"
              className="w-full"
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default ForcesG;
