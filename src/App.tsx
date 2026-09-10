import Navbar from "./Components/Navbar"
import { Suspense } from "react"

function App() {

  return (
    <div>

      <Suspense>
          <Navbar />
      </Suspense>

      
    </div>

  )
}

export default App
