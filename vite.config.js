import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/uTask/', // <-- Add this line
  plugins: [react()],
});