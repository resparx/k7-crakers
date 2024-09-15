const Navbar = () => {
    return <nav className="fixed top-0 z-10 min-h-20 w-screen bg-gradient-to-r from-[#d50f84] via-[#780064] to-[#32004b] p-4">
    <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-2xl font-bold">K7 traders</a>
        <div className="block lg:hidden">
            <button id="menu-button" className="text-white focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
        </div>
        <div id="menu" className="hidden lg:flex space-x-4">
            <a href="#" className="text-white hover:bg-blue-700 px-3 py-2 rounded">Home</a>
            <a href="#" className="text-white hover:bg-blue-700 px-3 py-2 rounded">About</a>
            <a href="#" className="text-white hover:bg-blue-700 px-3 py-2 rounded">Services</a>
            <a href="#" className="text-white hover:bg-blue-700 px-3 py-2 rounded">Contact</a>
        </div>
    </div>
</nav>
}

export default Navbar