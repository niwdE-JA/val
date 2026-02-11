import { useState, useEffect } from 'react'
import Page from './Page.tsx'
import './Carousel.css'

interface CarouselPage {
  id: number
  title: string
  content: string
  background: string
  emoji: string
  isFinal?: boolean
  isCelebration?: boolean
  isWatches?: boolean
  isWishlist?: boolean
  isPhotoRecreate?: boolean
}

interface CarouselProps {
  pages: CarouselPage[]
  onRespond?: () => void
}

export default function Carousel({ pages, onRespond }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [responding, setResponding] = useState(false)

  const goToNext = () => {
    if (currentIndex < pages.length - 1) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1)
        setIsTransitioning(false)
      }, 300)
    }
  }

  const goToPrev = () => {
    if (currentIndex > 0) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex(currentIndex - 1)
        setIsTransitioning(false)
      }, 300)
    }
  }

  const handleRespond = () => {
    onRespond?.()
    // mark responding; when pages prop updates we'll jump to celebration
    setResponding(true)
  }

  useEffect(() => {
    if (!responding) return
    const idx = pages.findIndex((p) => p.isCelebration)
    if (idx !== -1) {
      // jump to first celebration page with a smooth transition
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex(idx)
        setIsTransitioning(false)
        setResponding(false)
      }, 300)
    }
  }, [pages, responding])

  return (
    <div className="carousel-container">
      <div className="carousel-viewport">
        <Page 
          page={pages[currentIndex]} 
          isTransitioning={isTransitioning}
          onRespond={handleRespond}
          onContinue={goToNext}
        />
      </div>

      <button
        className={`carousel-button prev ${currentIndex === 0 ? 'disabled' : ''}`}
        onClick={goToPrev}
        disabled={currentIndex === 0}
        aria-label="Previous page"
      >
        ❮
      </button>

      <button
        className={`carousel-button next ${currentIndex === pages.length - 1 ? 'disabled' : ''}`}
        onClick={goToNext}
        disabled={currentIndex === pages.length - 1}
        aria-label="Next page"
      >
        ❯
      </button>

      <div className="carousel-indicators">
        {pages.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>

      <div className="page-counter">
        {currentIndex + 1} / {pages.length}
      </div>
    </div>
  )
}
