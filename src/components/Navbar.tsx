export default function Navbar() {
  return (
    <div className=" text-white flex items-center justify-center fixed inset-x-0 top-4">
      <div className="h-16 flex items-center justify-around gap-x-10 px-10 bg-white/30 backdrop-blur-xs rounded-xl">
        <a href="#home" className="hover:underline">
          Home
        </a>
        <a href="#team" className="hover:underline">
          Team
        </a>
        <a href="#about" className="hover:underline">
          About
        </a>
      </div>
    </div>
  );
}
