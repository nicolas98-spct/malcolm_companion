# Malcolm Companion App (React + Vite)
SPA temática de **Malcolm in the Middle** para la Actividad 2.

## API base
`https://mock.apidog.com/m1/1262810-1260527-default`

## Endpoints usados
- GET `/personajes`
- GET `/personajes/:id`
- GET `/episodios`
- GET `/episodios/:id`
- GET `/clips`
- GET `/usuario` (con fallback `/usuario/`)

## Rutas SPA
`/`, `/login`, `/personajes`, `/personajes/:id`, `/episodios`, `/episodios/:id`, `/clips`, `/perfil`, `*`.

## Login demo
- usuario: `unir`
- contraseña: `unir123`

## Hooks y estado
- `useState`, `useEffect`, `useContext`.
- Hook custom: `useApi` para `data/loading/error/refetch`.
- Ruta protegida `/perfil` con `ProtectedRoute` + `AuthContext`.

## Comandos
```bash
npm install
npm run dev
npm run build
npm run preview
```

No subir `node_modules` al repositorio.

## Deploy (resumen)
- Vercel/Netlify: importar repo, usar build `npm run build` y publicar carpeta `dist`.
