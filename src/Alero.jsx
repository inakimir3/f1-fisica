import Home from "./Home";
import Header from "./components/Header";
import { motion } from "motion/react";

function Alero() {
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
          DRS: Drag Reduction System
        </motion.h1>
      </section>

      <section className="relative w-full flex flex-col gap-16 px-20 pb-12">
        <div className="flex w-full justify-between pt-32">
          <div className="flex flex-col gap-16 pr-40">
            <h2 className="text-4xl font-bold">Què és el DRS?</h2>
            <p className="w-full text-[20px]">
            El DRS (Drag Reduction System) és un sistema mòbil instal·lat en l'aleró posterior del cotxe.
                        <br /> <br />
                        El seu objectiu és reduir la resistència aerodinàmica (drag) en rectes per a augmentar la velocitat punta, facilitant avançaments.

             <br />
              <br /> 
              En condicions normals, l'aleró posterior genera downforce, però també frena al cotxe.
              Amb el DRS activat, una part de l'aleró s'obre, deixant passar més aire, i per tant, menys resistència.           </p>
          </div>
          <motion.div className="flex w-full justify-center items-center">
            <img
              src="/drs.png"
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
              src="/drs2.webp"
              alt="Air flow f1"
              className="w-full"
            />
          </motion.div>
          <div className="flex flex-col gap-16 pl-40">
            <h2 className="text-4xl font-bold">Com i quan s'usa?</h2>
            <p className="w-full text-[20px]">
            El DRS només es pot activar en zones específiques del circuit, conegudes com a zones DRS, i sota aquestes condicions:
            <br /> <br />
              S'ha d'estar a menys d'1 segon del cotxe de davant (detectat automàticament), i dins de la zona habilitada per la FIA. No es pot usar durant les primeres voltes, i tampoc amb bandera groga.              <br /> <br />
              Una vegada complertes les condicions, el pilot pressiona un botó en el volant i l'aleró s'obre.
              </p>
          </div>
        </div>
      </section>

      <section className="relative w-full flex flex-col gap-16 px-20 pb-40">
        <div className="flex w-full justify-between pt-32">
          <div className="flex flex-col gap-16 pr-40">
            <h2 className="text-4xl font-bold">Efecte del DRS</h2>
            <p className="w-full max-w-[1300px] text-[20px]">
            El DRS redueix el drag entre un 20% i un 30%, i pot aportar 10 a 20 km/h extra de velocitat punta.


              <br /> <br />
              Quan el DRS està obert, el cotxe perd downforce, i per tant, la seva estabilitat en corbes es veu afectada. Per això només s'usa en rectes, i es tanca automàticament en frenar o en deixar anar el botó.

              <br /> <br />
              El DRS forma part de les tàctiques d'avançament i defensa. Els enginyers analitzen quantes oportunitats de DRS hi ha per volta per a calcular riscos i avantatges.
              </p>
          </div>
          <motion.div className="flex w-full justify-center items-center">
            <img
              src="/f1.png"
              alt="Air flow f1"
              className="w-full"
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default Alero;
