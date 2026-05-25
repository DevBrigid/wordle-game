# React Wordle

A lightweight, front-end Wordle clone built using React and CSS. The game challenges players to guess a secret 5-letter word within six attempts, featuring real-time keyboard inputs and dynamic tile color indicators.

## Features

- **Dynamic Feedback:** Tiles change color based on accuracy upon pressing Enter:
  - 🟩 **Green (`.correct`)**: Correct letter in the correct spot.
  - 🟨 **Yellow (`.close`)**: Correct letter in the wrong spot.
  - ⬛ **Grey (`.incorrect`)**: Letter is not in the word.
- **Robust Input Handling:** Prevents non-alphabet characters and blocks typing beyond the 5-letter limit.
- **Local Database:** Pulls words randomly from a local JSON dataset on initialization.

## Tech Stack

- **Framework:** React (Hooks: `useState`, `useEffect`)
- **Styling:** Vanilla CSS (Flexbox grid layout)
- **Data:** JSON-based word registry

## Component Structure

- `App.jsx`: Manages global game states (current guess, guess history, and secret solution extraction) along with standard window event listeners.
- `GuessLine.jsx`: Processes individual letter tiles dynamically, verifying positioning calculations sequentially against the solution word.

## Getting Started

1. Clone the repository.
2. Install dependencies:
```bash
   npm install
