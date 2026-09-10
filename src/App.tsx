import Navbar from "./Components/Navbar"
import Banner from "./Components/Banner"
import { Suspense } from "react"

function App() {

  return (
    <div>

      <Suspense>
          <Navbar />
      </Suspense>

      <Suspense>
        <Banner />
      </Suspense>

    </div>

  )
}

export default App
