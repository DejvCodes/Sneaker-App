import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return <footer>
    <p>Coded by <Link to="https://dejvcodes.netlify.app/" target="_blank">DejvCodes</Link>.
      © 2025 David Kalmus.
    </p>
  </footer>
}

export default Footer