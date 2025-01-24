import { GoAlert } from "react-icons/go";
export default function LandingPage() {
  return (
    <div className="text-neutral-200 h-screen flex flex-col items-center justify-around dark:text-neutral-400 z-10">
      {/* <img
        src="/src/assets/landing/bg-1.webp"
        alt="Forge Bytes Lab"
        width={200}
        height={200}
      /> */}
      <div className="flex flex-col items-center gap-y-6">
        <h1 className="text-6xl font-bold">Forge Bytes Lab</h1>
        <p className="text-2xl">Where innovation meets creativity</p>
      </div>
      <div className="flex text-4xl text-white items-center justify-center gap-x-6">
        <GoAlert size={50} />
        <p>Site in progress...</p>
      </div>
    </div>
  );
}
