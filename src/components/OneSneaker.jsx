import "./OneSneaker.css"
import PropTypes from "prop-types"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import FormatPrice from "../function/FormatPrice"

const OneSneaker = ({ id, image, brand, fullName, price, styleColor, index }) => {
  return <>
    <motion.div
      className="one-sneaker"
      style={{ "--style-color": `${styleColor}` }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      <img src={image} alt={fullName} />
      <p>{brand}</p>
      <h3>{fullName}</h3>
      <div className="more-info">
        <p>{FormatPrice(price)}</p>
        <Link to={id ? `/${id}` : "/"}>Info</Link>
      </div>
    </motion.div>
  </>
}

// Validace props
OneSneaker.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  image: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  styleColor: PropTypes.string.isRequired,
}

export default OneSneaker