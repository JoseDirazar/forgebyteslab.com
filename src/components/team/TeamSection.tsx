import { devsData } from "../../constants";
import DevCard from "./DevCard";

export default function Team() {
  return (
    <div id="team" className=" w-full">
      <h2 className="text-4xl font-bold text-center mb-15">ForgeBytes Team</h2>
      <div className="flex w-full justify-around">
        {devsData.map((devData) => (
          <DevCard key={devData.name} {...devData} />
        ))}
      </div>
    </div>
  );
}
