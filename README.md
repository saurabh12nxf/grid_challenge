# Recursive Grid Challenge

An interactive 3x3 grid application built with Next.js, TypeScript, and Tailwind CSS. Each box follows specific recursive rules when clicked.

## 🚀 Live Demo

**[View Live Demo](https://gridchallenge-ia9wy3xqn-saurabh-singhs-projects-40f058a5.vercel.app/)**

## Features

- **Interactive Grid**: Click any box to increment its value
- **Recursive Rules**:
  - When a box value is divisible by 3, the box to its right decrements by 1
  - When a box value is divisible by 5, the box below it increments by 2
  - Boxes reaching 15 or higher become locked (red background) and cannot be modified
- **Visual Feedback**: Different colors for even/odd numbers and locked states
- **Type-Safe**: Built with TypeScript for reliability

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/saurabh12nxf/grid_challenge.git
cd grid_challenge
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Rules Explained

1. **Click Interaction**: Clicking any non-locked box increments its value by 1
2. **Rule A (÷3)**: If the new value is divisible by 3, decrement the right neighbor by 1 (unless in the last column)
3. **Rule B (÷5)**: If the new value is divisible by 5, increment the bottom neighbor by 2 (unless in the bottom row)
4. **Rule C (Locked)**: Boxes with value ≥15 turn red, cannot be clicked, and are immune to neighbor effects

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React useState with functional updates

## Project Structure

```
recursive-grid-challenge/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   └── Grid.tsx         # Main grid component
└── package.json
```

## Building for Production

```bash
npm run build
npm start
```

## License

MIT
