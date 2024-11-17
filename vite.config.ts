import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist',  // Ensure this is where Netlify will look for the final build files
    target: 'esnext', // If you need specific compatibility
  },
});


    
