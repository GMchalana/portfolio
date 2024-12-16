

function Header() {
  return (
    <header className="py-20 text-center">
      <img 
        src="/src/assets/profile.jpg" 
        alt="Profile" 
        className="mx-auto rounded-full w-48 h-48 object-cover mb-4"
      />
      <h1 className="text-4xl font-bold">Chalana Prabhashwara</h1>
      <p className="text-xl text-gray-600">Web Developer | Mobile Developer | Software Engineer</p>
    </header>
  )
}

export default Header