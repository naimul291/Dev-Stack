import { Suspense } from "react"
import Navbar from "./Components/Navbar"
import Banner from "./Components/Banner"
import Technologies from "./Components/Technologies"

function App() {

  const technologiesFetch = async () => {
    const response =await fetch("../public/Technologies.json")
    const data = await response.json()
    return data
  }

  const technologiesPromise = technologiesFetch();

  console.log(technologiesPromise, "technologiesPromise")

  return (
    <div>

      <Suspense>
          <Navbar />
      </Suspense>

      <Suspense>
        <Banner />
      </Suspense>

      <Suspense fallback={<div className="text-2xl font-semibold">Loading Technologies...</div>}>
        <Technologies technologiesPromise={technologiesPromise} />
      </Suspense>


    </div>

  )
}

export default App
