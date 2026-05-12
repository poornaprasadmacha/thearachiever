function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between">
      <h1 className="text-2xl font-bold">AR Achiever</h1>

      <div className="flex gap-6">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Courses</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar