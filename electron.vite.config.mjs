import { resolve, dirname } from "path"
import { fileURLToPath } from "url"
import { defineConfig, externalizeDepsPlugin } from "electron-vite"
import vue from "@vitejs/plugin-vue"

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        "@renderer": resolve("src/renderer/src"),
        "@": resolve(dirname(fileURLToPath(import.meta.url)), "./src")
      },
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"]
    },
    plugins: [vue()]
  }
})

// import { dirname, resolve } from "node:path"

// import vueI18n from "@intlify/unplugin-vue-i18n/vite";
// import vue from "@vitejs/plugin-vue";
// import * as dotenv from "dotenv";
// import * as path from "path";
// import { defineConfig } from "vite";

// import viteIconTypes from "./src/core/plugins/icon-type/viteIconTypes";
// import i18nVitePlugin from "./src/core/plugins/i18nVitePlugin";

// dotenv.config();

// // https://vitejs.dev/config/
// export default defineConfig(({ mode }) => ({
//   define:{
//     "process.env": process.env
//   },
// 	optimizeDeps: { exclude: ["swiper/vue", "swiper/types", "ws"] },
// 	build: {
// 		rollupOptions: {
// 			output: {
// 				chunkFileNames: "assets/[name].js",
// 				assetFileNames: "assets/[name][extname]",
// 				entryFileNames: "assets/bundle.js",
// 				manualChunks: (id: string) => {
// 					if (!id.includes(__dirname)) return undefined;

// 					const pathStartIndex = id.indexOf("/");
// 					const filePath = path.relative(
// 						__dirname,
// 						id.slice(pathStartIndex).split("?")[0],
// 					);

// 					// Языковой файл отдельно
// 					if (filePath.includes('src/shared/lib/theming/i18n/languages.ts')) return "languages";

// 					// Tailwind
// 					if (filePath.includes('src/app/tailwind')) return "tailwind";

// 					// api ручки
// 					if (filePath.startsWith("src/shared/api/v0/")) return "api";

// 					// Base Ui
// 					if (filePath.match(/^src\/shared\/ui\/.*Base.*/)) return "my-team-ui";

// 					// Либы
// 					if (filePath.startsWith("node_modules/")) {
// 						if (filePath.includes("pdfjs")) return undefined;
// 						return "vendor";
// 					}
// 				},
// 			},
// 		},
// 	},
// 	server: {
// 		host: true,
// 		// Прокси для хранилища
// 		...(mode === "development"
// 			? {
// 					proxy: {
// 						"/storage": process.env.VITE_APP_API_URL!,
// 					},
// 			  }
// 			: {}),
// 	},
// 	test: {
// 		environment: "happy-dom",
// 	},
// 	plugins: [
// 		vue({
// 			script: {
// 				defineModel: true,
// 			},
// 		}),
// 		vueI18n({
// 			include: resolve(
// 				dirname(fileURLToPath(import.meta.url)),
// 				"./src/shared/lib/theming/i18n/locales",
// 			),
// 			runtimeOnly: false,
// 		}),
// 		// Сгенерировать типы для имен иконок
// 		...(mode === "development" ? [viteIconTypes()] : []),
// 		i18nVitePlugin({
// 			glob: "src/**/*.i18n.ts",
// 			outputPath: "src/shared/lib/theming/i18n/languages.ts",
// 			typeOutputPath: "src/shared/lib/theming/i18n/types.ts",
// 		}),
// 	],
// 	resolve: {
// 		alias: {
// 			"@": resolve(dirname(fileURLToPath(import.meta.url)), "./src"),
// 			"~bootstrap": resolve(
// 				dirname(fileURLToPath(import.meta.url)),
// 				"node_modules/bootstrap",
// 			),
// 		},
// 		extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
// 	},
// }));
