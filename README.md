# 💕 Valentine's Day Carousel

A beautiful, interactive Valentine's Day themed React website with a multi-page carousel for asking someone to be your Valentine! Includes celebratory pages after they say yes!

## Features

✨ **Beautiful Valentine's Theme**
- Gradient backgrounds in lovely pink and red hues
- Floating hearts and sparkles animations
- Smooth fade transitions between pages
- Responsive design for all screen sizes

🎠 **Interactive Carousel**
- Navigate between pages using ← and → buttons
- Visual indicators showing current page
- Disabled buttons at the start and end
- Page counter in the top right

🎨 **Animations**
- Floating hearts that drift upward
- Sparkling effects throughout
- Smooth page transitions with fade in/out
- Hover effects on buttons
- Emoji animations
- Confetti and balloon animations! 🎉

🎊 **Celebration Pages After "Yes"**
When they click "YES!" or "DEFINITELY Yes!", new celebration pages unlock:
1. **Celebration Page** - Confetti falling animation with balloons
2. **Gifts Discussion** - "Now that we're here, let's talk gifts..."
3. **Watches Page** - "You got me a watch last year..." (Add watch images)
4. **Wishlist** - Interactive wishlist where they can add/remove items
5. **Photo Recreate** - "We should totally recreate this..." (Add background image)

📱 **Responsive Design**
- Works on desktop, tablet, and mobile devices
- Touch-friendly buttons
- Readable text on all screen sizes

## Project Structure

```
src/
├── App.tsx                       # Main application component
├── App.css                       # App styling
├── index.css                     # Global styles
├── main.tsx                      # React entry point
└── components/
    ├── Carousel.tsx              # Carousel with navigation logic
    ├── Carousel.css              # Navigation buttons & indicators
    ├── Page.tsx                  # Page renderer (handles all page types)
    ├── Page.css                  # Page animations & styling
    ├── Celebration.tsx           # Celebration page with confetti
    ├── Celebration.css           # Celebration animations
    ├── Wishlist.tsx              # Interactive wishlist component
    └── Wishlist.css              # Wishlist styling
```

## Getting Started

### Installation

1. Navigate to the project directory:
```bash
cd c:\Users\HP\Desktop\fun\val
```

2. Install dependencies (if not already installed):
```bash
npm install
```

### Running the Development Server

Start the development server:
```bash
npm run dev
```

The application will open in your browser, typically at `http://localhost:5173`

### Building for Production

Create an optimized production build:
```bash
npm run build
```

View the production build locally:
```bash
npm run preview
```

## Customization

### Initial Pages

Edit the `initialPages` array in `src/App.tsx` to customize the first 4 pages:
- `title`: The main heading
- `content`: The message
- `emoji`: The large emoji displayed
- `background`: The gradient background color

### Celebration Pages

After clicking "YES!" or "DEFINITELY Yes!", edit the `celebratePages` array in `src/App.tsx`:
- Page 5: Celebration (confetti + balloons)
- Page 6: Gifts discussion
- Page 7: Watches page
- Page 8: Interactive wishlist
- Page 9: Photo recreate page

### Adding Watch Images

In the **Watches Page** (Page 7), replace the placeholder `.watches-placeholder` div in `src/components/Page.tsx` with your watch images:
```tsx
<div className="watches-gallery">
  <img src="path/to/watch1.jpg" alt="Watch 1" />
  <img src="path/to/watch2.jpg" alt="Watch 2" />
</div>
```

### Adding Background Photo

In the **Photo Recreate Page** (Page 9), add your background image to `.photo-placeholder`:
```tsx
<div 
  className="photo-placeholder"
  style={{ backgroundImage: 'url(your-image.jpg)' }}
>
</div>
```

### Customizing Wishlist

The wishlist comes with default items. Edit the initial state in `src/components/Wishlist.tsx`:
```tsx
const [items, setItems] = useState<string[]>([
  'Item 1',
  'Item 2',
  'Item 3'
])
```

## Technologies Used

- **React 19** - UI library
- **Vite** - Fast build tool and development server
- **TypeScript** - Type safety
- **CSS3** - Animations and styling

## Browser Support

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Tips for the Best Experience

1. **Full Screen**: Display in full screen for the best visual impact
2. **Add Images**: Customize the watch images and photo recreation page with your own images
3. **Personalize Messages**: Make each message personal and meaningful
4. **Timing**: Take your time presenting each page - let them enjoy each one

## How It Works

1. Start with the intro pages
2. User clicks "YES!" or "DEFINITELY Yes!" on page 4
3. Celebration page with confetti appears
4. They can navigate through the gift discussion, watches, wishlist, and photo pages
5. They can also go back to see any messages they want to revisit!

## License

Feel free to customize and use this for your special someone! 💕

---

Made with ❤️ for that special moment
