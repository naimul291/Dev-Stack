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
      
    </div>
  )
}

export default Technologies;
