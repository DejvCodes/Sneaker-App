import "./AllSneakers.css"
import data from "../data/data"
import { useEffect, useState } from "react"
import OneSneaker from "../components/OneSneaker"


const AllSneakers = () => {
  const [searchingSneaker, setSearchingSneaker] = useState("")
  const [filteredSneakers, setFilteredSneakers] = useState(data)

  useEffect(() => {
    if (!searchingSneaker) {
      setFilteredSneakers(data)
      return
    }
    const sneakersAfterFilter = data.filter(({fullName, brand}) => {
      const term = searchingSneaker.toLowerCase()
      return fullName.toLowerCase().includes(term) || brand.toLowerCase().includes(term)
    })
    setFilteredSneakers(sneakersAfterFilter)
  }, [searchingSneaker])

  return <section className="all-sneakers-section">
    <div className="container">
      <h2>Vyhledat tenisky</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Vyhledat tenisky..."
          autoComplete="off"
          value={searchingSneaker}
          onChange={(e) => setSearchingSneaker(e.target.value)}
        />
      </form>
      <div className="all-sneakers">
        {filteredSneakers.length > 0 ? (
          filteredSneakers.map((oneSneaker, index) => {
            return <OneSneaker key={oneSneaker.id} {...oneSneaker} index={index} />
          })
        ) : (
          <div className="no-results">
            <p>Žádné tenisky nebyly nalezeny</p>
          </div>
        )}
      </div>
    </div>
  </section>
}

export default AllSneakers