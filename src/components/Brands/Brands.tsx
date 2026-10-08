
import './Brands.scss'

const brands = [
  { id: 1, name: 'Econverse 1' },
  { id: 2, name: 'Econverse 2' },
  { id: 3, name: 'Econverse 3' },
  { id: 4, name: 'Econverse 4' },
  { id: 5, name: 'Econverse 5' },
]

function Brands() {
  return (
    <section className="brands" aria-labelledby="brands-title">
      <h2 id="brands-title" className="brands__title">
        Navegue por marcas
      </h2>

      <div className="brands__container">
        {brands.map((brand) => (
          <div className="brands__circle" key={brand.id}>
            <span className="brands__logo">
              <span className="brands__logo-highlight">eco</span>
              nverse
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Brands
