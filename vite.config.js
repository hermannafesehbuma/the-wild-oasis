import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.jsx'], // Lint only relevant files
      cache: false, // Optional: Disables caching for debugging purposes
    }),
  ],
  resolve: {
    alias: {
      '@': '/src', // Optional: Create an alias for the src directory
    },
  },
});
