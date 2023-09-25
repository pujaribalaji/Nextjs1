import React from 'react';
import Image from "next/image";
import github from "./asserts/github.svg";
import twitter from "./asserts/twitter.svg";
import linkdin from "./asserts/linkdin.svg";

const Footer = () => {
  return (
    <footer >
          <div className="flex justify-between items-center p-5" >
         <a href="/" className="text-lg font-bold text-black-900">GENMEDIA</a>
         <ul className="lg:flex space-x-12">
          <li>+91 123456 09876</li>
          <li>info@exmple.com</li>
        </ul>
        <ul className="lg:flex space-x-6">
          <li><Image src={github} alt="github"></Image></li>
          <li><Image src={twitter} alt="github"></Image></li>
          <li><Image src={linkdin} alt="github"></Image></li>
        </ul>
        </div>
        <hr style={{color:"white", width:"auto"}}/>
        <div className="flex justify-between items-center p-9">
        <ul className="lg:flex space-x-12">
          <li><a href="/" className="text-sm font-semibold text-gray-600">Home</a></li>
          <li><a href="/about" className="text-sm font-semibold text-gray-600">About</a></li>
          <li><a href="/techstack" className="text-sm font-semibold text-gray-600">Tech Stack</a></li>
          <li><a href="/projects" className="text-sm font-semibold text-gray-600">Projects</a></li>
          <li><a href="/contacts" className="text-sm font-semibold text-gray-600">Contacts</a></li>
        </ul>
        <ul className="lg:flex space-x-12"  >
        <li><p>Designed and built by Pujari Balaji</p></li>
        </ul>
        </div>
        </footer>
  )
}

export default Footer
