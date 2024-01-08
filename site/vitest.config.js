import { defineConfig } from 'vitest/config';

export default defineConfig({
  esbuild: { jsx: 'automatic' },
  test: {
    environment: 'happy-dom',
  },
  optimizeDeps: {
    include: ['@ariakit/react'],
    force: true,
  },
});
