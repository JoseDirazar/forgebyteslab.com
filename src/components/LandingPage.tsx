import { GoAlert } from "react-icons/go";
import Team from "./team/TeamSection";
export default function LandingPage() {
  return (
    <div className="flex-1 pt-20 flex flex-col items-center justify-around">
      <div
        id="home"
        // className="flex flex-col items-center justify-center gap-y-6 min-h-120 bg-gradient-to-b  from-neutral-100 via-stone-300 to-neutral-100 dark:from-neutral-800/90 dark:via-stone-700 dark:to-neutral-800/90 w-full my-20 mx-10 rounded"
        className="flex flex-col gap-y-16 relative min-h-120 w-full max-w-6xl items-center justify-center"
      >
        <h1 className="text-7xl font-extrabold tracking-tighter antialiased">
          ForgeBytes Lab
        </h1>
        <p className="text-2xl">Where innovation meets creativity</p>
        <BlurBackground />
      </div>
      <Team />
      <div className="flex text-4xl items-center justify-center gap-x-6 min-h-120">
        <GoAlert size={50} />
        <p>Site in progress...</p>
      </div>
      <div id="about">
        <h2 className="text-4xl font-bold text-center mb-4">About</h2>
      </div>
    </div>
  );
}

function BlurBackground() {
  return (
    <>
      <div className="absolute top-0 right-1/8 w-150 blur-[8rem] dark:blur-3xl -z-10 rounded-full h-100 bg-indigo-200 dark:bg-zinc-700" />
      <div className="absolute top-0 left-1/8 w-150 blur-[8rem] dark:blur-3xl -z-10 rounded-full h-100 bg-violet-200 dark:bg-stone-700" />
    </>
  );
}
