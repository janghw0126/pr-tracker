import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages 배포용: 저장소 이름이 pr-tracker가 아니면 base를 바꿔주세요
export default defineConfig({
  plugins: [react()],
  base: '/pr-tracker/',
});
