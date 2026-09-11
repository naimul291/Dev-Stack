import { use } from "react"
import type {iTechnology} from "../Type/Technologies"
import { IoIosStar } from "react-icons/io";

interface iTechnologyProps{
    technologiesPromise: Promise<iTechnology[]>
}

const Technologies = ({technologiesPromise}: iTechnologyProps) => {
    const data = use(technologiesPromise);

    console.log(data, "data")
  return (
        <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center my-5">Explore the <span className="text-[#EC4899]">Technologies</span></h1>
        <p className="pb-5">Pick one technology per category to build your ideal stack.</p>

        <div className="grid grid-cols-12 gap-5">

            {/* Technologies */}
            <div className="col-span-12 lg:col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                {
                    data.map((technology) => {
                        return (
                            <div
                                key={technology.id}
                                className="border border-gray-100 rounded-xl p-4 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)] hover:shadow-[0_5px_20px_rgba(0,0,0,0.30)] transition-all duration-300"
                            >

                                {/* Top Section */}
                                <div className="flex items-start justify-between">

                                    <img
                                        src={technology.icon}
                                        alt={technology.name}
                                        className="w-7 h-7 object-contain"
                                    />

                                    {technology.badge && (
                                        <span className="bg-sky-50 text-sky-500 text-[9px] font-medium px-2.5 py-1 rounded-full">
                                            {technology.badge}
                                        </span>
                                    )}

                                </div>

                                <h4 className="text-[15px] text-gray-900 mt-3 font-bold">
                                    {technology.name}
                                </h4>

                                <p className="text-[11px] leading-4 text-gray-600 mt-2 min-h-[32px]">
                                    {technology.description}
                                </p>

                                <div className="flex items-center justify-between mt-4">

                                    <div className="flex items-center gap-2">

                                        <span className="bg-gray-100 text-black text-[8px] px-2 py-1 rounded">
                                            {technology.category}
                                        </span>

                                        <span className="text-gray-500 text-[10px]">
                                            {technology.level}
                                        </span>

                                    </div>

                                    <div className="flex items-center gap-1">

                                        <span className="text-yellow-500 text-[13px]">
                                            <IoIosStar />
                                        </span>

                                        <span className="text-gray-600 text-[11px] font-medium">
                                            {technology.rating}
                                        </span>

                                    </div>

                                </div>

                                <button className="w-full bg-gray-950 text-white text-[10px] font-medium py-2.5 rounded-md mt-3 cursor-pointer hover:bg-[#EC4899] transition duration-200">
                                    Add to Stack
                                </button>

                            </div>
                        );
                    })
                }

            </div>


            {/* Your Stack */}
            <div className="col-span-12 lg:col-span-3">

                <div className="border border-gray-100 rounded-xl p-5 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)]">

                    <h3 className="font-bold text-xl text-gray-900">
                        Your Stack
                    </h3>

                    <p className="text-sm text-slate-400 mt-2">
                        No technologies selected yet.
                    </p>

                    <div className="mt-5 min-h-[126px] border-2 border-dashed border-slate-200 rounded-xl flex items-center justify-center">

                        <p className="text-sm text-slate-400">
                            Your stack is empty.
                        </p>

                    </div>

                </div>

            </div>

        </div>


        </div>
    )
    }

export default Technologies;
