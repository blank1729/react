import React from 'react'
import { Link } from 'react-router-dom'
import './NavbarComponent.css'



function NavbarComponent() {
  return (
    <div className='navbar'>
        <header className='bg-gray-200 mr-auto flex'>
            <p className='logo'>
                <Link className='hover:bg-sky-200' to="/">Sekai</Link>
            </p>
            <nav className='flex ml-auto'>
                <li>
                    <Link className='hover:bg-sky-200' to="/">Home</Link>
                </li>
                <li>
                    <Link className='hover:bg-sky-200' to="/blog">Stories</Link>
                </li>
                <li>
                    <Link className='hover:bg-sky-200' to="/json">Json</Link>
                </li>
                <li>
                    <Link className='hover:bg-sky-200' to="/books">Books</Link>
                </li>
                <li>
                    <Link className='hover:bg-sky-200' to="/about">About</Link>
                </li>
                <li>
                    <Link className='hover:bg-sky-200' to="/gallery">Gallery</Link>
                </li>
                <li>
                    <Link className='hover:bg-sky-200' to="/Blogroll">BlogRoll</Link>
                </li>
                <li>
                    <Link className='hover:bg-sky-200' to="/system">System</Link>
                </li>
                {/* Implement a DropDown Menu here */}
            </nav>
        </header>
        
    </div>
  )
}

export default NavbarComponent