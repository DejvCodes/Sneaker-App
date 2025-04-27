import AllSneakers from "./pages/AllSneakers"
import SneakerDetails from "./pages/SneakerDetails"
import SharedLayout from "./components/SharedLayout"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      { index: true, element: <AllSneakers /> },
      { path: "/:sneakerId", element: <SneakerDetails /> }
    ]
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App