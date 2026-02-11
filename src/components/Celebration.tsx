import './Celebration.css'

interface ConfettiPiece {
  id: number
  left: number
  delay: number
  duration: number
}

export default function Celebration() {
  const confetti: ConfettiPiece[] = [...Array(50)].map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 0.5,
    duration: 2 + Math.random() * 1
  }))

  return (
    <div className="celebration-container">
      <div className="confetti-container">
        {confetti.map(piece => (
          <div
            key={piece.id}
            className="confetti"
            style={{
              left: `${piece.left}%`,
              animationDelay: `${piece.delay}s`,
              animationDuration: `${piece.duration}s`,
              backgroundColor: [
                '#FF1493', '#FFB6C1', '#FFC0CB', '#FFD700',
                '#FF69B4', '#FF85C0', '#FFB3D9', '#FFEEF8'
              ][Math.floor(Math.random() * 8)]
            }}
          />
        ))}
      </div>

      <div className="celebration-content">
        <h1 className="celebration-emoji">🎉</h1>
        <h2 className="celebration-text">Yayyy!</h2>
        <p className="celebration-subtext">I'm so happy you said yes!</p>
        
        <div className="balloons">
          {['❤️', '💕', '💖', '💗'].map((emoji, i) => (
            <div key={i} className="balloon" style={{ '--balloon-index': i } as React.CSSProperties}>
              {emoji}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
