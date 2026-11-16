# Animal Spirit — MERN (Vite + React)

This project uses React + Vite on the frontend, Express + MongoDB on the backend, and JWT authentication.

## How development and production use the same frontend code

The frontend always calls the API using the relative URL `/api`.
- **Development:** Vite proxies `/api` requests to `http://localhost:3001`.
- **Production:** Express serves the built Vite frontend and the API from the same origin.

You do not need to change the Axios base URL or frontend source code when switching environments. For this same-origin production setup, deploy the Express server and Vite build together (or configure your hosting reverse proxy to route `/api` to Express).

## Requirements
- Node.js 18+
- MongoDB local instance or MongoDB Atlas

## 1. Configure and start the backend

```bash
cd server
npm install
```

Copy `server/.env.example` to `server/.env` and configure your database and JWT secret:

```env
PORT=3001
MONGO_URI=mongodb://127.0.0.1:27017/animal_spirit
JWT_SECRET=replace_with_a_long_random_secret
CLIENT_URL=http://localhost:5173
```

Start the API:

```bash
npm run dev
```

The backend runs at `http://localhost:3001`.

## 2. Start the Vite frontend in development

Open a second terminal:

```bash
cd client
npm install
npm run dev
```

Open the Vite URL shown in the terminal (normally `http://localhost:5173`).

Vite proxies `/api/*` to the backend at `http://localhost:3001`, so no frontend `.env` file is required.

## 3. Production build and run

Build the frontend:

```bash
cd client
npm install
npm run build
```

Then start the Express server:

```bash
cd ../server
npm install
npm start
```

Express serves the generated `client/dist` files and the `/api` endpoints from the same origin. Deploy the `server` folder and the built `client/dist` folder together. Set production `MONGO_URI`, `JWT_SECRET`, and `PORT` in your hosting environment.

**Important:** This same-origin arrangement is what makes the frontend code environment-independent. If you host the frontend and backend on separate domains, configure your hosting provider's reverse proxy to forward `/api` to the backend; do not hardcode a different API URL in React.

## Authentication API
- `POST /api/auth/register` — `{ "name", "email", "password" }`
- `POST /api/auth/login` — `{ "email", "password" }`
- `GET /api/auth/me` — requires `Authorization: Bearer <token>`
- `GET /api/health` — API health check

Passwords are hashed with bcryptjs. Successful registration/login returns a signed JWT. The frontend stores the token and Axios attaches it to API requests. Wildlife pages are protected and redirect unauthenticated visitors to login.

## Notes
- Never commit `.env` files.
- Use a strong, unique JWT secret in production.
- Use HTTPS in production.


## Vite JSX file convention
React components containing JSX use the `.jsx` extension (for example, `src/App.jsx`) so Vite/esbuild parses JSX correctly.
