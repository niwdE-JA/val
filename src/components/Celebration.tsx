import './Celebration.css'

export default function Celebration({ onContinue }: { onContinue?: () => void }) {
  const colors = ['#800020', '#B22222', '#5B2C6F', '#7209B7', '#4B0082', '#8B0000']

  const loves = Array.from({ length: 36 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 6 + Math.random() * 6,
    scale: 0.7 + Math.random() * 0.8
  }))

  return (
    <section className="celebration-root" aria-label="Celebration">
      <div className="celebration-bg" aria-hidden="true">
        <div className="bg-glow" />
      </div>

      <div className="celebration-stage">
        <div className="center-card">
          <div className="heart-wrap" aria-hidden>
            <svg className="heart" viewBox="0 0 100 90" xmlns="http://www.w3.org/2000/svg" role="img">
              <defs>
                <linearGradient id="g" x1="0" x2="1">
                  <stop offset="0%" stopColor="#5B2C6F" />
                  <stop offset="100%" stopColor="#800020" />
                </linearGradient>
              </defs>
              <path d="M50 82s-26-16-38-29C2 36 18 14 36 22c6 2 9 8 14 8s8-6 14-8C82 14 98 36 88 53 78 66 50 82 50 82z" fill="url(#g)" stroke="#fff" strokeOpacity="0.15" strokeWidth="1" />
            </svg>
          </div>

          <header className="celebration-head">
            <h1 className="celebration-title">You said <span className="yes-highlight">YES!</span></h1>
            <h3 className="celebration-sub">I'm not blushing, I promise. Odogwu's don't blush.</h3>
          </header>

          <div className="actions-row">
            <button className="btn-continue" onClick={() => onContinue?.()}>
              Continue
              <span className="btn-glow" />
            </button>
          </div>
        </div>

        {/* confetti removed per request */}

        <ul className="love-layer" aria-hidden>
          {loves.map(h => (
            <li
              key={h.id}
              className="love"
              style={{ left: `${h.left}%`, top: `${h.top}%`, animationDelay: `${h.delay}s`, animationDuration: `${h.duration}s`, transform: `scale(${h.scale})` }}
            >
              ❤️
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
