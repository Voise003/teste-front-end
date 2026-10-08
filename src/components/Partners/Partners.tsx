
import partnersBanner from '../../assets/partners-banner.png'
import './Partners.scss'

function Partners() {
  return (
    <section className="partners" aria-label="Nossos parceiros">
      <div className="partners__container">
        <img
          src={partnersBanner}
          alt="Dois banners de parceiros da Econverse"
          className="partners__image"
        />

        <div className="partners__mobile">
          <div
            className="partners__mobile-banner partners__mobile-banner--first"
            role="img"
            aria-label="Primeiro banner de parceiros"
          />

          <div
            className="partners__mobile-banner partners__mobile-banner--second"
            role="img"
            aria-label="Segundo banner de parceiros"
          />
        </div>
      </div>
    </section>
  )
}

export default Partners
