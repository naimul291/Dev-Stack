import BannerImage from '../assets/Images/banner-stack.png'

const Banner = () => {
  return (
    <div className="container mx-auto grid  grid-cols-2 items-center gap-10 min-h-[500px] ">
        {/* Left elements */}
        <div>
            <h1 className="font-jakarta text-6xl font-extrabold">
            Build Your Ideal <br />
            <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
                Development Stack
            </span>
            </h1>

            <p className="mt-7 max-w-[600px] text-[#475569] text-lg leading-7">Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.</p>

            <div className="mt-12 flex gap-4">
                <button className='border border-gray-400 text-black hover:bg-linear-to-r from-[#F97316] to-[#EC4899] hover:text-white
                hover:font-semibold hover:border-transparent px-4 py-2 rounded-md hover:scale-105 transition-all duration-300 cursor-pointer'>Explore Technologies</button>

                <button className='border border-gray-400 text-black hover:bg-linear-to-r from-[#F97316] to-[#EC4899] hover:text-white
                hover:font-semibold hover:border-transparent px-8 py-2 rounded-md hover:scale-105 transition-all duration-300 cursor-pointer'>Learn More</button>
            </div>
        </div>

      {/* Right Image */}
     <div className="flex justify-center">
        <img src={BannerImage} alt="" className="w-[600px]"/>
      </div>
    </div>
  )
}

export default Banner
