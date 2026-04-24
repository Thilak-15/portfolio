function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black text-white flex justify-between px-10 py-4 shadow-lg z-50">
      <h1 className="text-xl font-bold">Thilak</h1>
      <div className="space-x-6">
        <a href="#about" className="hover:text-gray-400">About</a>
        <a href="#projects" className="hover:text-gray-400">Projects</a>
        <a href="#contact" className="hover:text-gray-400">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;