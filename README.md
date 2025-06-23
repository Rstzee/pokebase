# 🎮 PokéBase

A modern, interactive Pokémon database application built with React and Vite. Browse and search through different generations of Pokémon with a clean, responsive interface.

## ✨ Features

- 🔍 **Search Functionality** - Find your favorite Pokémon by name
- 🎯 **Generation Filter** - Browse Pokémon by generation (Gen 1-9)
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🎨 **Modern UI** - Clean and intuitive user interface

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd pokebase
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 📜 Available Scripts

In the project directory, you can run:

### `npm run dev`
Starts the development server with hot reload enabled.

### `npm run build`
Builds the app for production to the `dist` folder.

### `npm run preview`
Serves the production build locally for testing.

### `npm run lint`
Runs ESLint to check for code quality issues.

## 🏗️ Project Structure

```
pokebase/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── Header.jsx     # Search header component
│   │   ├── Tabs.jsx       # Generation filter tabs
│   │   ├── PokemonGrid.jsx # Pokemon display grid
│   │   └── PokemonModal.jsx # Pokemon detail modal
│   ├── styles/            # CSS stylesheets
│   │   ├── index.css      # Global styles
│   │   ├── Header.css     # Header component styles
│   │   └── Tabs.css       # Tabs component styles
│   ├── App.jsx            # Main application component
│   └── main.jsx           # Application entry point
├── index.html             # HTML template
├── package.json           # Project dependencies and scripts
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```

## 🛠️ Built With

- **[React](https://reactjs.org/)** - Frontend framework
- **[Vite](https://vitejs.dev/)** - Build tool and development server
- **[ESLint](https://eslint.org/)** - Code linting and formatting
- **CSS3** - Styling and responsive design

## 🎯 Usage

1. **Search Pokémon**: Use the search bar in the header to find specific Pokémon by name
2. **Filter by Generation**: Click on the generation tabs to view Pokémon from specific generations
3. **View Details**: Click on any Pokémon card to view detailed information in a modal

## 🔧 Configuration

### Vite Configuration
The project uses Vite for fast development and building. Configuration can be found in `vite.config.js`.

### ESLint Configuration
Code quality is maintained using ESLint. Rules are configured in `eslint.config.js`.

## 📱 Responsive Design

The application is fully responsive and works on:
- 📱 Mobile devices (320px and up)
- 📱 Tablets (768px and up)
- 💻 Desktop computers (1024px and up)

## 🚀 Deployment

### Build for Production

1. **Create production build**
   ```bash
   npm run build
   ```

2. **Test production build locally**
   ```bash
   npm run preview
   ```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Deployment Options

- **[Vercel](https://vercel.com/)** - Zero-config deployment
- **[Netlify](https://netlify.com/)** - Git-based deployment
- **[GitHub Pages](https://pages.github.com/)** - Free hosting for public repositories

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎨 Screenshots

*Add screenshots of your application here*

## 🐛 Known Issues

- Search functionality may need debouncing for better performance
- Consider adding pagination for large datasets

## 🔮 Future Enhancements

- [ ] Add Pokémon favorites functionality
- [ ] Implement advanced filtering options
- [ ] Add Pokémon comparison feature
- [ ] Include Pokémon stats and abilities
- [ ] Add dark/light theme toggle

## 📧 Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/pokebase](https://github.com/yourusername/pokebase)

---

⭐ **Star this repository if you found it helpful!**
