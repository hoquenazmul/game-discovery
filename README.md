# Game Discovery

A responsive React application for browsing and filtering games from the [RAWG Video Games Database API](https://rawg.io/apidocs). Search by title, explore games by genre or platform, sort results, and switch between light and dark themes.

## Features

- Search the RAWG game catalog by title
- Filter games by genre and platform
- Sort by relevance, date added, name, release date, popularity, or rating
- View game artwork, supported platforms, Metacritic scores, and ratings
- Responsive layout with a desktop genre sidebar and adaptive game grid
- Loading skeletons while results are being fetched
- Light and dark themes

## Built With

- React 19
- TypeScript
- Vite
- Chakra UI
- Axios
- RAWG Video Games Database API

## Getting Started

### Requirements

- Node.js 18 or newer
- A free RAWG API key from [rawg.io/apidocs](https://rawg.io/apidocs)

### Installation

1. Clone the repository and enter the project directory:

   ```bash
   git clone <your-repository-url>
   cd game-discovery
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the project root:

   ```env
   VITE_API_KEY=your_rawg_api_key
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

Open the local URL printed by Vite in your browser.

## Available Scripts

| Command           | Description                                          |
| ----------------- | ---------------------------------------------------- |
| `npm run dev`     | Start the Vite development server with hot reload    |
| `npm run build`   | Type-check the project and create a production build |
| `npm run lint`    | Run ESLint across the project                        |
| `npm run preview` | Preview the production build locally                 |

## Project Structure

```text
src/
├── components/     UI components for navigation, filters, cards, and grids
├── data/           Local genre and platform definitions
├── hooks/          Data-fetching hooks and domain types
├── services/       RAWG API client and image URL helpers
├── App.tsx         Application layout and filter state
└── main.tsx        React entry point and providers
```

## Environment Variables

| Variable       | Required | Description                        |
| -------------- | -------- | ---------------------------------- |
| `VITE_API_KEY` | Yes      | API key used for RAWG API requests |

Do not commit `.env.local` or expose a private API key in source control. Vite exposes variables prefixed with `VITE_` to the client, so use an API key intended for browser-based usage and follow RAWG's usage policies.

## API Attribution

Game data and images are provided by the [RAWG Video Games Database](https://rawg.io/apidocs). API availability and rate limits depend on your RAWG account and API plan.

## License

This project is licensed under the [MIT License](LICENSE).
