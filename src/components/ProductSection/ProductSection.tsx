
import { useEffect, useState } from 'react'
import type { Product } from '../../types/Product'
import { getProducts } from '../../services/products'
import ProductCard from '../ProductCard/ProductCard'
import ProductModal from '../ProductModal/ProductModal'
import './ProductSection.scss'

const VISIBLE_PRODUCTS = 4


interface ProductSectionProps {
    showTabs?: boolean
  }
  
  function ProductSection({ showTabs = true }: ProductSectionProps) {
  
  const [products, setProducts] = useState<Product[]>([])
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts()

        if (!data.success || !Array.isArray(data.products)) {
          throw new Error('Resposta inválida da API')
        }

        setProducts(data.products)
      } catch (error) {
        console.error('Erro ao buscar produtos:', error)
        setError('Não foi possível carregar os produtos.')
      } finally {
        setIsLoading(false)
      }
    }

    loadProducts()
  }, [])

  const maxIndex = Math.max(0, products.length - VISIBLE_PRODUCTS)

  const visibleProducts = products.slice(
    currentIndex,
    currentIndex + VISIBLE_PRODUCTS
  )

  function nextProducts() {
    setCurrentIndex((previous) =>
      Math.min(previous + 1, maxIndex)
    )
  }

  function previousProducts() {
    setCurrentIndex((previous) =>
      Math.max(previous - 1, 0)
    )
  }

  return (
    <section
  className="products"
  id={showTabs ? 'produtos' : 'mais-produtos'}
>
      <div className="products__title">
        <span />
        <h2>Produtos relacionados</h2>
        <span />
      </div>

     
{showTabs ? (
  <nav
    className="products__tabs"
    aria-label="Categorias de produtos"
  >
    {[
      'Celular',
      'Acessórios',
      'Tablets',
      'Notebooks',
      'TVs',
      'Ver todos',
    ].map((category, index) => (
      <button
        key={category}
        type="button"
        className={`products__tab ${
          index === 0 ? 'products__tab--active' : ''
        }`}
      >
        {category}
      </button>
    ))}
  </nav>
) : (
  <a href="#produtos" className="products__view-all">
    Ver todos
  </a>
)}


      {isLoading && (
        <p className="products__status">Carregando produtos...</p>
      )}

      {error && (
        <p className="products__status">{error}</p>
      )}

      {!isLoading && !error && (
        <div className="products__carousel">
          <button
            type="button"
            className="products__arrow"
            onClick={previousProducts}
            disabled={currentIndex === 0}
            aria-label="Ver produtos anteriores"
          >
            ‹
          </button>

          <div className="products__list">
            {visibleProducts.map((product) => (
              <ProductCard
                key={product.productName}
                product={product}
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </div>

          <button
            type="button"
            className="products__arrow"
            onClick={nextProducts}
            disabled={currentIndex >= maxIndex}
            aria-label="Ver próximos produtos"
          >
            ›
          </button>
        </div>
      )}

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  )
}

export default ProductSection
