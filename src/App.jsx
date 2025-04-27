import AllSneakers from "./pages/AllSneakers"
import SneakerDetails from "./pages/SneakerDetails"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  { path: "/", element: <AllSneakers /> },
  { path: "/:sneakerId", element: <SneakerDetails /> }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App