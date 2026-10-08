
import './Footer.scss'

const footerGroups = [
  {
    title: 'Institucional',
    links: [
      'Sobre Nós',
      'Movimento',
      'Trabalhe conosco',
    ],
  },
  {
    title: 'Ajuda',
    links: [
      'Suporte',
      'Fale Conosco',
      'Perguntas Frequentes',
    ],
  },
  {
    title: 'Termos',
    links: [
      'Termos e Condições',
      'Política de Privacidade',
      'Troca e Devolução',
    ],
  },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__container">
          <div className="footer__about">
            <div className="footer__logo" aria-label="Econverse">
              <span className="footer__logo-highlight">eco</span>
              nverse
            </div>

            <p>
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>

            <div className="footer__social">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                IG
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                f
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                in
              </a>
            </div>
          </div>

          <nav className="footer__navigation" aria-label="Links do rodapé">
            {footerGroups.map((group) => (
              <div className="footer__column" key={group.title}>
                <h3>{group.title}</h3>

                <ul>
                  {group.links.map((link) => (
                    <li key={link}>
                      <span>{link}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>

      <div className="footer__bottom">
        <p>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
      </div>
    </footer>
  )
}

export default Footer
