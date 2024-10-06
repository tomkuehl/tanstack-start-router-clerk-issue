import { defineConfig } from '@tanstack/start/config';
import tsConfigPaths from 'vite-tsconfig-paths';
import { envOnlyMacros } from 'vite-env-only';

export default defineConfig({
  vite: {
    plugins: () => [
      tsConfigPaths({
        projects: ['./tsconfig.json'],
      }),
      envOnlyMacros() as any,
    ],
  },
});
