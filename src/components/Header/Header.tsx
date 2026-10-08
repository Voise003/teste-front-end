import './Header.scss'

function Header() {
  return (
    <header className="header">
      <div className="header__benefits">
        <span>Compra 100% segura</span>
        <span>Frete grátis acima de R$ 200</span>
        <span>Parcele suas compras</span>
      </div>

      <div className="header__main">
        <a href="/" className="header__logo">
          econverse
        </a>

        <form className="header__search" role="search">
          <input
            type="search"
            placeholder="O que você está buscando?"
            aria-label="Buscar produtos"
          />
          <button type="submit" aria-label="Pesquisar">
            🔍
          </button>
        </form>

        <div className="header__actions">
          <button type="button" aria-label="Pedidos">
            🛍️
          </button>

          <button type="button" aria-label="Favoritos">
            ♡
          </button>

          <button type="button" aria-label="Minha conta">
            ♙
          </button>

          <button type="button" aria-label="Carrinho">
            🛒
          </button>
        </div>
      </div>

      <nav className="header__nav" aria-label="Navegação principal">
        <a href="#">Todas categorias</a>
        <a href="#">Supermercado</a>
        <a href="#">Livros</a>
        <a href="#">Moda</a>
        <a href="#">Lançamentos</a>
        <a href="#" className="header__nav-highlight">
          Ofertas do dia
        </a>
        <a href="#">Assinatura</a>
      </nav>
    </header>
  )
}

export default Header