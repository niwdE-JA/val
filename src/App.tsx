import { useState } from 'react'
import Carousel from './components/Carousel'
import './App.css'

function App() {
  const [hasResponded, setHasResponded] = useState(false)

  const initialPages = [
    {
      id: 1,
      title: "Heyy, Wumi. 💕",
      content: "(I know I'm late. This took a while to make...)",
      background: "linear-gradient(135deg, #1c002f, #4b0f4b, #5f0826)",
      emoji: "💕"
    },
    {
      id: 2,
      title: "My Love. ♥️",
      content: "YES, I knew you wouldn't buy that story, but I had to think of something to get you here...",
      background: "linear-gradient(135deg, #1c002f, #4b0f4b, #5f0826)",
      emoji: "♥️"
    },
    {
      id: 3,
      title: "Like I said, I have a request for you... ",
      content: "(Oh, and have I mentioned how incredibly amazing you are? Because you are. Okay, back to the point...)",
      background: "linear-gradient(135deg, #8b3a62 0%, #5d2e4a 100%)",
      emoji: "✨"
    },
    {
      id: 4,
      title: "Will You... 🎀",
      content: "Be my Valentine?",
      // deep romantic gradient (purple → burgundy → plum)
      background: "linear-gradient(135deg, #3a0836 0%, #800020 50%, #5B2C6F 100%)",
      emoji: "🎀",
      isFinal: true
    }
  ]

  const celebratePages = [
    {
      id: 5,
      title: "Yayyy! 🎉",
      content: "I'm so happy!",
      // make background completely transprent so we can show the confetti behind it
      background: "transparent",
      emoji: "🎉",
      isCelebration: true
    },
    {
      id: 6,
      title: "Now that we're here... 🎁",
      content: "Let's talk GIFTSS!",
      background: "linear-gradient(135deg, #1e8888 0%, #05424d 100%)",
      emoji: "🎁"
    },
    {
      id: 7,
      title: "Watches? ⌚",
      content: "You got me a watch last year, so I thought to keep the cycle going...",
      background: "linear-gradient(135deg, #15275b 0%, #0e515c 100%)",
      emoji: "",
      isWatches: true
    },
    {
      id: 8,
      title: "Wishlist",
      content: "Things I'd love...",
      background: "linear-gradient(135deg, #e25858 0%, #ba3e6b 100%)",
      emoji: "💝",
      isWishlist: true
    },
    {
      id: 9,
      title: "📸 We should totally recreate this, by the way...",
      content: "",
      background: "linear-gradient(135deg, #b78528f9 0%, #5c401d 100%)",
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
