// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	css: ['~/assets/css/main.css'],

	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},

	app: {
		head: {
			link: [{ rel: 'icon', href: '/doston-logo.jpg', type: 'image/jpg' }],
		},
	},

	modules: ['nuxt-lucide-icons', '@nuxt/image'],

	lucide: {
		namePrefix: 'Icon',
	},
	build: {
		transpile: ['vue-sonner'],
	},
})
