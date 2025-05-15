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
              src="/gforces.png"
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
              src="/f12.png"
              alt="Air flow f1"
              className="w-full"
            />
          </motion.div>
          <div className="flex flex-col gap-16 pl-40">
            <h2 className="text-4xl font-bold">Què sent un pilot?</h2>
            <p className="w-full text-[20px]">
              Els pilots de Fórmula 1 experimenten forces G en cada corba, acceleració i frenada. Aquestes forces poden ser molt intenses, i els pilots han d'estar preparats per suportar-les.
              <br /> <br />
              El coll forçat cap a un costat durant segons una i una altra vegada, frenades que empenyen el seu cos cap endavant i acceleracions que el llancen contra el seient.
              <br /> <br />
              Això genera una fatiga muscular extrema, sobre tot al coll i l'esquena. Els pilots entrenen intensament per a suportar aquestes forces, i els seus seients estan dissenyats per a mantenir-los en la millor posició possible.
            </p>
          </div>
        </div>
      </section>

      <section className="relative w-full flex flex-col gap-16 px-20 pb-40">
        <div className="flex w-full justify-between pt-32">
          <div className="flex flex-col gap-16 pr-40">
            <h2 className="text-4xl font-bold">Exemple real: corba 8 GP d'Istanbul</h2>
            <p className="w-full max-w-[1300px] text-[20px]">
            En la corba 8 del circuit de Turquia, els pilots experimenten més de 5G sostinguts durant 4 segons.

              <br /> <br />
              És com tenir una persona damunt del teu cap mentre condueixes a 270 km/h.
            </p>
          </div>
          <motion.div className="flex w-full justify-center items-center">
            <lite-youtube videoid="UoAnfutvuWk"></lite-youtube>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default ForcesG;
