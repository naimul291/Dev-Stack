import Logo from "../assets/Images/logo-text.png"

const Navbar = () => {
  return (
    <nav className="bg-white sticky top-0 z-50">
        
        <div className="flex justify-between gap-4 container mx-auto py-4">

                {/* Nav logo  */}
            <div>
                <img src={Logo} alt="Dev Stack Logo" />
            </div>  

                {/* Nav li */}
            <div>
                <ul className='flex gap-4 items-center mx-auto'>
                    <li className="hover:bg-[#D91B7E] hover:text-white px-2 py-1">
                    <a href="">Home</a>
                    </li>
                    <li className="hover:bg-[#D91B7E] hover:text-white px-2 py-1"><a href="">Technologies</a></li>
                    <li className="hover:bg-[#D91B7E] hover:text-white px-2 py-1"><a href="">Projects</a></li>
                    <li className="hover:bg-[#D91B7E] hover:text-white px-2 py-1"><a href="">About</a></li>
                    <li className="hover:bg-[#D91B7E] hover:text-white px-2 py-1"><a href="">Contact</a></li>
                </ul>
            </div>

                {/* Nav Button */}
            <div className="flex gap-4">
                <button className='border border-[#D91B7E] text-black hover:bg-[#D91B7E] hover:text-white px-4 py-2 rounded-3xl hover:scale-105 transition-all duration-300 cursor-pointer'>Sign In</button>

                <button className='border border-[#D91B7E] text-black hover:bg-[#D91B7E] hover:text-white px-4 py-2 rounded-3xl hover:scale-105 transition-all duration-300 cursor-pointer'>Sign Up</button>
            </div>

        </div>
    </nav>    
  )
}

export default Navbar
