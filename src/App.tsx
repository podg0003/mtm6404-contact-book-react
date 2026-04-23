import { RouterProvider } from "react-router-dom"
import router from "./router"

function App() {
  return (
    <div style={{ minWidth: "100vw", minHeight: "100vh", padding: "2rem", display: "block", placeItems: "center" }}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App