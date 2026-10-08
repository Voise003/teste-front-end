
import { useEffect } from 'react'
import type { Product } from '../../types/Product'
import './ProductModal.scss'

interface ProductModalProps {
  product: Product
  onClose: () => void
}

function ProductModal({ product, onClose }: ProductModalProps) {
  const formattedPrice = product.price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [onClose])

  return (
    <div
      className="product-modal__overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <section
        className="product-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-product-title"
      >
        <button
          type="button"
          className="product-modal__close"
          onClick={onClose}
          aria-label="Fechar detalhes do produto"
        >
          ×
        </button>

        <img
          className="product-modal__image"
          src={product.photo}
          alt={product.productName}
        />

        <div className="product-modal__details">
          <h2 id="modal-product-title">{product.productName}</h2>

          <p>{product.descriptionShort}</p>

          <strong>{formattedPrice}</strong>

          <button type="button" className="product-modal__buy">
            COMPRAR
          </button>
        </div>
      </section>
    </div>
  )
}

export default ProductModal
