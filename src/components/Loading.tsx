import React from 'react'
import './Loading.css'

type Props = {
  loaded: number
  total: number
}

export default function Loading({ loaded, total }: Props) {
  const pct = total > 0 ? Math.round((loaded / total) * 100) : 0
  return (
    <div className="loading-overlay">
      <div className="loading-card">
        <div className="loading-emoji">🎁</div>
        <h2>Preparing a little surprise...</h2>
        <p className="loading-progress">{pct}% — loading memories & images</p>
        <div className="loading-bar">
          <div className="loading-bar-fill" style={{ width: `${pct}%` }} />
        </div>
      </div>
    </div>
  )
}
