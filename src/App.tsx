import { useState } from 'react'
import Carousel from './components/Carousel'
import './App.css'

function App() {
  const [hasResponded, setHasResponded] = useState(false)

  const initialPages = [
    {
      id: 1,
      title: "Hello 💕",
      content: "I have something special to ask you...",
      background: "linear-gradient(135deg, #8b3a62 0%, #5d2e4a 100%)",
      emoji: "💕"
    },
    {
      id: 2,
      title: "You Make Me Smile 😊",
      content: "Every moment with you is magical...",
      background: "linear-gradient(135deg, #a85a7c 0%, #7d4558 100%)",
      emoji: "😊"
    },
    {
      id: 3,
      title: "You're Amazing ✨",
      content: "Your kindness, your humor, your everything...",
      background: "linear-gradient(135deg, #c084a0 0%, #9d6a7e 100%)",
      emoji: "✨"
    },
    {
      id: 4,
      title: "Will You... 🎀",
      content: "Be my Valentine?",
      background: "linear-gradient(135deg, #ffd4e5 0%, #ffb3d9 100%)",
      emoji: "🎀",
      isFinal: true
    }
  ]

  const celebratePages = [
    {
      id: 5,
      title: "Yayyy! 🎉",
      content: "I'm so happy!",
      background: "linear-gradient(135deg, #c4a86e 0%, #8b7355 100%)",
      emoji: "🎉",
      isCelebration: true
    },
    {
      id: 6,
      title: "Now that we're here... 🎁",
      content: "Let's talk gifts...",
      background: "linear-gradient(135deg, #9b6b7c 0%, #6d4e5c 100%)",
      emoji: "🎁"
    },
    {
      id: 7,
      title: "Watches? ⌚",
      content: "You got me a watch last year, so I thought to keep the cycle going...",
      background: "linear-gradient(135deg, #b89aa7 0%, #8c6f77 100%)",
      emoji: "⌚",
      isWatches: true
    },
    {
      id: 8,
      title: "My Wishlist 💝",
      content: "Things I'd love...",
      background: "linear-gradient(135deg, #a67a8a 0%, #7d5463 100%)",
      emoji: "💝",
      isWishlist: true
    },
    {
      id: 9,
      title: "📸 We should totally recreate this, by the way...",
      content: "",
      background: "linear-gradient(135deg, #6b8e8b 0%, #4a605e 100%)",
      emoji: "📸",
      isPhotoRecreate: true
    }
  ]

  const allPages = hasResponded ? [...initialPages, ...celebratePages] : initialPages

  return (
    <div className="app">
      <Carousel pages={allPages} onRespond={() => setHasResponded(true)} />
    </div>
  )
}

export default App
