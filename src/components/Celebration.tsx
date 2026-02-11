import './Celebration.css'

type ConfettiPiece = {
  id: number
  left: number
  delay: number
  duration: number
  color: string
  shape: 'circle' | 'square' | 'triangle'
}

export default function Celebration({ onContinue }: { onContinue?: () => void }) {
  const colors = ['#FF1493', '#FFB6C1', '#FFC0CB', '#FFD700', '#FF69B4', '#FF85C0', '#FFB3D9', '#FFEEF8']

  const confetti: ConfettiPiece[] = [...Array(80)].map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 0.8,
    duration: 2.2 + Math.random() * 1.6,
    color: colors[Math.floor(Math.random() * colors.length)],
    shape: ['circle', 'square'][Math.floor(Math.random() * 2)] as any
  }))

  return (
    <div className="celebration-container">
      <div className="confetti-container">
        {confetti.map(piece => (
          <div
            key={piece.id}
            className={`confetti ${piece.shape}`}
            style={{
              left: `${piece.left}%`,
              animationDelay: `${piece.delay}s`,
              animationDuration: `${piece.duration}s`,
              backgroundColor: piece.color
            }}
          />
        ))}
      </div>

      <div className="streamers">
        <div className="streamer s1" />
        <div className="streamer s2" />
        <div className="streamer s3" />
      </div>

      <div className="celebration-content">
        <div className="ribbon">💘</div>
        <h1 className="celebration-emoji">🎉</h1>
        <h2 className="celebration-text">Yayyy!</h2>
        <p className="celebration-subtext">I'm so happy you said yes! Let's celebrate 🎊</p>

        <div className="balloons">
          {['❤️', '💕', '💖', '💗', '🥂'].map((emoji, i) => (
            <div key={i} className="balloon" style={{ ['--balloon-index' as any]: i } as React.CSSProperties}>
              {emoji}
            </div>
          ))}
        </div>

        <div className="celebration-actions">
          <button className="celebration-continue" onClick={() => onContinue?.()}>Continue</button>
        </div>
      </div>

      <div className="fireworks">
        <div className="fw fw1" />
        <div className="fw fw2" />
        <div className="fw fw3" />
      </div>
    </div>
  )
}
