import "./SneakerDetails.css"
import data from "../data/data"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import FormatPrice from "../function/FormatPrice"
import { Link, useParams } from "react-router-dom"

const SneakerDetails = () => {
  const { sneakerId } = useParams()
  const [oneSneaker, setOneSneaker] = useState("")

  useEffect(() => {
    const findSneaker = data.find((oneSneaker) => {
      return oneSneaker.id === parseInt(sneakerId)
    })
    setOneSneaker(findSneaker)
  }, [sneakerId])

  if (!oneSneaker) {
    return <div className="empty">
      <h3>Tenisky nenalezeny</h3>
      <Link className="button" to="/">Zpět</Link>
    </div>
  }

  // Destructuring
  const { name, brand, type, price, image, images, season, info, sneakerCode, styleColor } = oneSneaker

  return <section className="one-sneaker-details-section">
    <div className="container">
      <motion.div
        className="one-sneaker-details"
        style={{ "--style-color": `${styleColor}` }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="all-images">
          <div className="main-image">
            <img src={image} alt={name} />
          </div>
          <div className="more-images">
            {images.map((oneImage, index) => {
              return <motion.img
                key={index}
                src={oneImage}
                alt={`${name} - obrázek ${index + 1}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              />
            })}
          </div>
        </div>
        <div className="info-about-sneaker">
          <p className="brand">{brand}</p>
          <h2 className="name">{name}</h2>
          <p className="type">{type}</p>
          <p className="price">{FormatPrice(Number(price))}</p>
          <p className="info">{info}</p>
          <p className="season">Sezóna: {season ? season.join(", ") : "Neznámá sezóna"}</p>
          <p className="sneaker-code">Kód: {sneakerCode}</p>
          <Link className="button" to="/">Zpět</Link>
        </div>
      </motion.div>
    </div>
  </section >
}

export default SneakerDetails