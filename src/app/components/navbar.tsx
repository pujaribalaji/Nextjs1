import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-5">
        <a href="/" className="text-lg font-bold text-black-900">GENMEDIA</a>
        <ul className="hidden lg:flex space-x-12">
          <li><a href="/" className="text-sm font-semibold text-gray-600">Home</a></li>
          <li><a href="/about" className="text-sm font-semibold text-gray-600">About</a></li>
          <li><a href="/techstack" className="text-sm font-semibold text-gray-600">Tech Stack</a></li>
          <li><a href="/projects" className="text-sm font-semibold text-gray-600">Projects</a></li>
          <li><a href="/contacts" className="text-sm font-semibold text-gray-600">Contacts</a></li>
        </ul>
        <ul className="lg:flex space-x-12"  >
        <li><a href="/login" className="text-lg font-bold text-black-900">Login</a></li>
        <li><a href="/sign" className="text-lg font-bold text-black-900">SignUp</a></li>
        </ul>
      </nav>
  )
}

export default Navbar
