import './App.css'
import './locomotive-scroll.css'
import CardContainer from './components/cards/CardContainer'
import CatalogCardContainer from './components/catalog/CatalogCardContainer'
import CatalogHeader from './components/catalog/CatalogHeader'
import Contact from './components/footer/Contact'
import Footer from './components/footer/Footer'
import IntroContainer from './components/intro/IntroContainer'
import Navbar from './components/navbar/Navbar'
import PosterImage from './components/PosterImage'
import StatsContainer from './components/Stats/StatsContainer'
import { useEffect, useRef } from 'react'
import LocomotiveScroll from 'locomotive-scroll'

function App() {

  const ref = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: ref.current,
      smooth: true,
    })
  }, [])

  return (
    <div className='main-container scroll-container' id='home' ref={ref} data-scroll-container>
      <Navbar />
      <div className="home-bg-image">
        <IntroContainer />
        <PosterImage />
      </div>
      <StatsContainer />
      <div className="line">
        <hr />
      </div>
      <CardContainer />
      <div className="line">
        <hr />
      </div>
      <div className="catalog-container">
        <CatalogHeader />
        <CatalogCardContainer />
      </div>
      <div className="footer">
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
