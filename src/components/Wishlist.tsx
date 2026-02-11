import { useState } from 'react'
import './Wishlist.css'

export default function Wishlist() {
  const [items, setItems] = useState<string[]>(['Chocolate Cake & Ice Cream 🍰🍦', 'Cute Dresses 👗', 'Airpods 🎶', 'Weekend Getaway 🌚', 'Flowers 💐', 'Teddy Bear (Jo needs a sibling) 🧸'])
  const [input, setInput] = useState('')

  const addItem = () => {
    if (input.trim()) {
      setItems([ input, ...items ])
      setInput('')
    }
  }

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index))
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addItem()
    }
  }

  return (
    <div className="wishlist-container">
      <div className="wishlist-content">
        <h1 className="wishlist-title">Wishlist ✨</h1>
        <p className="wishlist-subtitle">I'm your Genie for today. Let's make your wishes come true...</p>

        <div className="wishlist-input-section">
          <input
            type="text"
            className="wishlist-input"
            placeholder="Add something you'd love..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button className="wishlist-add-btn" onClick={addItem}>
            +
          </button>
        </div>

        <div className="wishlist-items">
          {items.length === 0 ? (
            <p className="wishlist-empty">Add some items to the wishlist!</p>
          ) : (
            items.map((item, index) => (
              <div key={index} className="wishlist-item">
                <span className="wishlist-item-text">{item}</span>
                <button
                  className="wishlist-remove-btn"
                  onClick={() => removeItem(index)}
                  aria-label="Remove item"
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
