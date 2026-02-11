import { useEffect, useState } from 'react'
import './Memories.css'

// Vite: import all images from src/assets/memories (user should add images there)
const modules = import.meta.glob('../assets/memories/*.{png,jpg,jpeg,webp}', { eager: true }) as Record<string, any>
const importedImages: string[] = Object.values(modules).map(m => m.default || m)

export default function Memories() {
  const [images] = useState<string[]>(importedImages)
  const [index, setIndex] = useState(0)

  const hearts = Array.from({ length: 14 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 3,
    scale: 0.7 + Math.random() * 0.8
  }))

  useEffect(() => {
    if (!images.length) return
    const t = setInterval(() => setIndex(i => (i + 1) % images.length), 3500)
    return () => clearInterval(t)
  }, [images])

  const prev = () => setIndex(i => (i - 1 + images.length) % images.length)
  const next = () => setIndex(i => (i + 1) % images.length)

  if (!images.length) {
    return (
      <div className="memories-empty">
        <p>No memories found. Add images to <code>src/assets/memories/</code>.</p>
      </div>
    )
  }

  return (
    <div className="memories-root">
      <div className="memories-stage">
        <ul className="mem-hearts" aria-hidden>
          {hearts.map(h => (
            <li key={h.id} className="mem-heart" style={{ left: `${h.left}%`, top: `${h.top}%`, animationDelay: `${h.delay}s`, transform: `scale(${h.scale})` }}>❤️</li>
          ))}
        </ul>
        <div className="memories-card" style={{ ['--bg-url' as any]: `url(${images[index]})` }}>
          <div className="memories-caption">
            <h2>Looking forward to making more <span className="text-purple">Memories like these</span> with you. ❤️</h2>
            <br />
          </div>

          <div className="memories-media">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Memory ${i + 1}`}
                className={`memory-image ${i === index ? 'active' : ''}`}
                loading="lazy"
              />
            ))}
          </div>

          <div className="memories-controls">
            <button onClick={prev} aria-label="Previous" className="mem-btn">◀</button>
            <div className="mem-index">{/*{index + 1} / {images.length}*/}</div>
            <button onClick={next} aria-label="Next" className="mem-btn">▶</button>
          </div>
        </div>
      </div>
    </div>
  )
}
