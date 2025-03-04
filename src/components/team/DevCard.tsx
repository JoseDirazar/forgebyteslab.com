import { DevCardProps } from "../../constants";

export default function DevCard(devData: DevCardProps) {
  return (
    <a
      href={devData.href}
      id="#team"
      className="max-w-sm bg-white dark:bg-neutral-700/50 p-6 rounded-xl shadow-lg text-center"
    >
      <img
        src={devData.avatar}
        alt={devData.description}
        className="w-24 h-24 mx-auto rounded-full mb-4"
      />
      <h2 className="text-xl font-semibold text-stone-400 dark:text-stone-500">
        {devData.name}
      </h2>
      <p className="text-gray-500 dark:text-gray-400 mb-4">{devData.role}</p>
      <p className="text-gray-700 dark:text-white">{devData.description}</p>
    </a>
  );
}
