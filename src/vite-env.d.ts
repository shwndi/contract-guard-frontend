// src/vite-env.d.ts
interface ImportMetaEnv {
  readonly VITE_API_URL: string
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}