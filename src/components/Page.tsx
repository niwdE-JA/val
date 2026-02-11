import Celebration from './Celebration'
import Wishlist from './Wishlist'
import './Page.css'

interface PageProps {
  page: {
    emoji: string
    title: string
    content: string
    isFinal?: boolean
    isCelebration?: boolean
    isWatches?: boolean
    isWishlist?: boolean
    isPhotoRecreate?: boolean
    background: string
  }
  isTransitioning: boolean
  onRespond?: () => void
  onContinue?: () => void
}

export default function Page({ page, isTransitioning, onRespond, onContinue }: PageProps) {
  // receive onContinue via props for celebration page
  // (we'll add it in the Carousel and pass through)
  if (page.isCelebration) {
    return (
      <div 
        className={`page ${isTransitioning ? 'fade-out' : 'fade-in'}`}
        style={{ background: page.background }}
      >
        <Celebration onContinue={onContinue} />
      </div>
    )
  }

  if (page.isWishlist) {
    return (
      <div 
        className={`page ${isTransitioning ? 'fade-out' : 'fade-in'}`}
        style={{ background: page.background }}
      >
        <Wishlist />
      </div>
    )
  }

  if (page.isWatches) {
    return (
      <div 
        className={`page watches-page ${isTransitioning ? 'fade-out' : 'fade-in'}`}
        style={{ background: page.background }}
      >
        <div className="floating-hearts">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="heart" style={{
              left: `${20 + i * 15}%`,
              animationDelay: `${i * 0.2}s`
            }}>
              ♥
            </div>
          ))}
        </div>

        <div className="page-content">
          <div className="emoji-large">{page.emoji}</div>
          <h1 className="page-title">{page.title}</h1>
          <p className="page-message">{page.content}</p>
          
          <div className="watches-grid">
            <div className="watch-card">
              <div className="watch-caption">Formal / Classy Wear</div>
              <img src="/images/watch-1.jpeg" alt="Formal watch" className="watch-image" />
              <div className="watch-image-placeholder">Formal / Classy Wear</div>
            </div>

            <div className="watch-card">
              <div className="watch-caption">Casual Wear (Pick one. I couldn't decide)</div>
              <img src="/images/watch-2.jpeg" alt="Casual watch" className="watch-image" />
              <div className="watch-image-placeholder">Casual Wear</div>
            </div>
          </div>
        </div>

        <div className="sparkles">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="sparkle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}>
              ✨
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (page.isPhotoRecreate) {
    return (
      <div 
        className={`page photo-recreate-page ${isTransitioning ? 'fade-out' : 'fade-in'}`}
        style={{ background: page.background }}
      >
        <div className="floating-hearts">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="heart" style={{
              left: `${20 + i * 15}%`,
              animationDelay: `${i * 0.2}s`
            }}>
              ♥
            </div>
          ))}
        </div>

        <div className="photo-content">
          <div className="photo-placeholder">
            <p>📸 Add your photo here</p>
          </div>
          
          <div className="photo-caption">
            <h2>{page.title}</h2>
            <p>{page.content}</p>
          </div>
        </div>

        <div className="sparkles">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="sparkle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}>
              ✨
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div 
      className={`page ${isTransitioning ? 'fade-out' : 'fade-in'}`}
      style={{ background: page.background }}
    >
      <div className="floating-hearts">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="heart" style={{
            left: `${20 + i * 15}%`,
            animationDelay: `${i * 0.2}s`
          }}>
            ♥
          </div>
        ))}
      </div>

      <div className="page-content">
        <div className="emoji-large">{page.emoji}</div>
        
        <h1 className="page-title">{page.title}</h1>
        
        <p className="page-message">{page.content}</p>

        {page.isFinal && (
          <div className="final-buttons">
            <button className="button yes-btn" onClick={() => onRespond?.()}>YES! 🎉</button>
            <button className="button yes-btn" onClick={() => onRespond?.()}>DEFINITELY Yes! 💗</button>
          </div>
        )}
      </div>

      <div className="sparkles">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="sparkle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`
          }}>
            ✨
          </div>
        ))}
      </div>
    </div>
  )
}
