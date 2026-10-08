import Header from './components/Header/Header'
import HeroBanner from './components/HeroBanner/HeroBanner'
import Categories from './components/Categories/Categories'
import ProductSection from './components/ProductSection/ProductSection'
import Partners from './components/Partners/Partners' 
import Brands from './components/Brands/Brands'
import Newsletter from './components/Newsletter/Newsletter'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />

      <main>
        <HeroBanner />
        <Categories />
        <ProductSection />
        <Partners />
        <Brands />
        <ProductSection showTabs={false} />
      </main>
      <Newsletter />
      <Footer />
    </>
  )
}

export default App