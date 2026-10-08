
import type { Product } from '../../types/Product'
import './ProductCard.scss'

interface ProductCardProps {
  product: Product
  onClick: () => void
}

function ProductCard({ product, onClick }: ProductCardProps) {
  const formattedPrice = product.price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <article className="product-card">
      <img
        className="product-card__image"
        src={product.photo}
        alt={product.productName}
      />

      <p className="product-card__description">
        {product.descriptionShort}
      </p>

      <strong className="product-card__price">
        {formattedPrice}
      </strong>

      <span className="product-card__shipping">
        Frete grátis
      </span>

      <button
        className="product-card__button"
        type="button"
        onClick={onClick}
        aria-label={`Ver detalhes de ${product.productName}`}
      >
        VER PRODUTO
      </button>
    </article>
  )
}

export default ProductCard
