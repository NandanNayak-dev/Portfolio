# VS Code Themed Portfolio

An interactive, developer-focused personal portfolio built with **React** and **Vite** that faithfully recreates the Visual Studio Code experience. 

Designed to provide a unique, tech-savvy first impression, it allows visitors to navigate through your projects, skills, and resume exactly as they would browse code in an IDE.

## ✨ Features

- **Authentic VS Code UI**: Complete with an Explorer sidebar, draggable tabs, an activity bar, and a status bar.
- **Interactive Terminal**: A fully functional simulated command-line interface. Visitors can type commands like `help`, `about`, `projects`, and `ls` to explore the portfolio.
- **Dynamic Theming**: Change the look and feel on the fly with built-in themes (GitHub Dark, Dracula, Ayu, Nord, etc.) via the terminal `theme <name>` command.
- **Integrated Resume Viewer**: Displays a PDF resume directly inside a VS Code-style editor tab.
- **Responsive Design**: Optimized for both desktop and mobile viewing.

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/NandanNayak-dev/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` (or the port specified by Vite) to view the portfolio.

## 🛠️ Tech Stack

- **Framework**: React + Vite
- **Styling**: CSS Modules
- **Icons**: `react-icons` (VSC & SI packs)

## 📁 Project Structure

All VS Code-related UI elements (Sidebar, Explorer, Tabs, Terminal, etc.) are located in the `src/components` folder. Content pages (About, Projects, Academics, Contact) can be found and modified within the `src/pages` folder. Global styles and themes are managed in `src/styles`.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/NandanNayak-dev/Portfolio/issues).
