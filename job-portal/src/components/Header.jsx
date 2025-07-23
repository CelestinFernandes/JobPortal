import React from 'react';
const Header = () => {
    return (
        <header className="bg-blue-500 text-white p-4 sticky top-0 z -20 mx-auto flex w-full items-center justify-between border-b border-gray-500 p-8">
            <h1 className="text-2xl font-bold">Job Portal</h1>
            <nav className = "hidden md:flex space-x-6 text-gray-600">
                <a href ="#">Find jobs</a>
                <a href ="#">Post jobs</a>
            </nav>
            <div className="flex items-center space-x-4">
                <button className="bg-white text-blue-500 px-4 py-2 rounded">Login</button>
                <button className="bg-white text-blue-500 px-4 py-2 rounded">Sign Up</button>
            </div>
        </header>
    )
}

export default Header;