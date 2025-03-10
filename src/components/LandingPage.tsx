import { GoAlert } from "react-icons/go";
import Team from "./team/TeamSection";

export default function LandingPage() {
  return (
    <div className="flex-1 pt-20 flex flex-col items-center justify-around">
      <div
        id="home"
        className="flex flex-col gap-y-16 relative min-h-120 w-full items-center justify-center "
      >
        <h1 className="text-6xl px-10 text-wrap text-center md:text-6xl lg:text-7xl font-extrabold tracking-tighter antialiased">
          ForgeBytes Lab
        </h1>
        <p className="text-2xl text-center text-wrap">
          Where innovation meets creativity
        </p>
        <BlurBackground />
      </div>
      <Team />
      <div className="flex text-4xl items-center justify-center gap-x-6 min-h-120 w-full">
        <GoAlert size={50} />
        <p>Site in progress...</p>
      </div>
      {/* <div id="about">
        <h2 className="text-4xl font-bold text-center mb-4">About</h2>
      </div> */}
    </div>
  );
}

function BlurBackground() {
  return (
    <>
      <div className="absolute -bottom-30 right-0 md:right-1/7 w-70 m:w-90 md:w-120 lg:w-150 blur-[8rem] dark:blur-3xl -z-10 rounded-full h-100 bg-fuchsia-100 dark:bg-zinc-700" />
      <div className="absolute top-0 left-0 md:left-1/9 w-70 m:w-90 md:w-120 lg:w-150 blur-[8rem] dark:blur-3xl -z-10 rounded-full h-100 bg-violet-200 dark:bg-stone-700" />
    </>
  );
}
