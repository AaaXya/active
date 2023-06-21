// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@unocss/nuxt', '@nuxt/devtools'],
    app: {
        head: {
            title: 'Test title',
        },
    },

    css: [
        // CSS file in the project
        '@/assets/css/main.css',
    ],
})
