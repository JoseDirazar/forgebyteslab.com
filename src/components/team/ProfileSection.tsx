import { devsData } from "../../constants";
import DevCard from "./DevCard";

export default function ProfileSection() {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-4 ">ForgeBytes Team</h2>
      <div className="flex w-full justify-around">
        {devsData.map((devData) => (
          <DevCard key={devData.name} {...devData} />
        ))}
      </div>
    </div>
  );
}
