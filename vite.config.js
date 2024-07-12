import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    server: {
        port: +process.env.VITE_PORT,
        proxy: {
            '/api': {
                target: process.env.VITE_API_URL + process.env.VITE_API_PATH,
                changeOrigin: true,
                secure: true,
                rewrite: function (path) { return path.replace(/^\/api/, ''); },
            },
        },
    },
});
