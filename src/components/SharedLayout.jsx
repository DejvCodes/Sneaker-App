import Footer from "./Footer"
import { Outlet } from "react-router-dom"

const SharedLayout = () => {
  return <>
    <Outlet />
    <Footer />
  </>
}

export default SharedLayout