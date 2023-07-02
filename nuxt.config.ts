// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@unocss/nuxt', '@nuxt/devtools', '@nuxtjs/supabase'],
    app: {
        head: {
            title: 'Test title',
        },
    },
})
