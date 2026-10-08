import './Categories.scss'

const categories = [
  { name: 'Tecnologia', icon: '💻' },
  { name: 'Supermercado', icon: '🏪' },
  { name: 'Bebidas', icon: '🍾' },
  { name: 'Ferramentas', icon: '🛠️' },
  { name: 'Saúde', icon: '♡' },
  { name: 'Esportes e Fitness', icon: '🏃' },
  { name: 'Moda', icon: '👕' },
]

function Categories() {
  return (
    <section className="categories" aria-label="Categorias de produtos">
      <div className="categories__container">
        {categories.map((category, index) => (
          <div
            className={`categories__item ${
              index === 0 ? 'categories__item--active' : ''
            }`}
            key={category.name}
          >
            <div className="categories__icon" aria-hidden="true">
              {category.icon}
            </div>

            <span>{category.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Categories