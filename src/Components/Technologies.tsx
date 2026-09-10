import { use } from "react"
import type {iTechnology} from "../Type/Technologies"

interface iTechnologyProps{
    technologiesPromise: Promise<iTechnology[]>
}

const Technologies = ({technologiesPromise}: iTechnologyProps) => {
    const data = use(technologiesPromise);

    console.log(data, "data")
  return (
    <div>
      <h1 className="text-4xl font-bold ">Explore the <span className="text-[#EC4899]">Technologies</span></h1>
      <p>Pick one technology per category to build your ideal stack.</p>

      <div>

        {/* Technologies */}
      <div>
        {
            data.map((technology) => {
                return (
                    <div key={technology.id}>
                        <img src={technology.icon} alt={technology.name} />
                        <h4>{technology.name}</h4>
                        <p>{technology.description}</p>
                        <p>{technology.category}</p>
                        <p>{technology.level}</p>
                        <p>{technology.rating}</p>
                        <p>{technology.badge}</p>                  
                    </div>
                )
            })
        }
      </div>

      {/* Stock */}
      <div>
        <h3>Your Stack</h3>
        <p>No technologies selected yet.</p>
      </div>

      </div>  


    </div>
  )
}

export default Technologies;
