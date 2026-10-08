import bannerImage from '../../assets/banner-black-friday.png'
import './HeroBanner.scss'

function HeroBanner() {
  return (
    <section
      className="hero-banner"
      style={{ backgroundImage: `url(${bannerImage})` }}
      aria-label="Promoções"
    >
      <div className="hero-banner__content">
        <h1>
          Venha conhecer nossas
          <br />
          promoções
        </h1>

        <p>
          <strong>50% Off</strong> nos produtos
        </p>

        <a href="#produtos" className="hero-banner__button">
          Ver produto
        </a>
      </div>
    </section>
  )
}

export default HeroBanner