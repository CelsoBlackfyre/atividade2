import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// https://vitejs.dev/config/
base: "/https://github.com/CelsoBlackfyre/atividade2/";
export default defineConfig({
	plugins: [react()],
});
