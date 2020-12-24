export default {
    // Target (https://go.nuxtjs.dev/config-target)
    target: 'static',

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: '2021 pas de Game Over, juste du fun et du bonheur ! • Agence Zimages',
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: 'Cette année à vous de jouer ! Participez à notre concours en ligne et tentez de gagner Ze borne d’arcade ZIMAGES 🎮🕹️👾'
            },
            {
                hid: "twitter:title",
                name: "twitter:title",
                content:
                    "2021 pas de Game Over, juste du fun et du bonheur ! • Agence Zimages",
            },
            {
                hid: "twitter:description",
                name: "twitter:description",
                content:
                    "Cette année à vous de jouer ! Participez à notre concours en ligne et tentez de gagner Ze borne d’arcade ZIMAGES 🎮🕹️👾",
            },
            {
                hid: "twitter:image",
                name: "twitter:image",
                content: require(`~/assets/images/opengraph.jpg`),
            },
            {
                hid: "twitter:image:alt",
                name: "twitter:image:alt",
                content:
                    "2021 pas de Game Over, juste du fun et du bonheur ! • Agence Zimages",
            },
            {
                hid: "og:title",
                property: "og:title",
                content:
                    "2021 pas de Game Over, juste du fun et du bonheur ! • Agence Zimages",
            },
            {
                hid: "og:description",
                property: "og:description",
                content:
                    "Cette année à vous de jouer ! Participez à notre concours en ligne et tentez de gagner Ze borne d’arcade ZIMAGES 🎮🕹️👾",
            },
            {
                hid: "og:image",
                property: "og:image",
                content: require(`~/assets/images/opengraph.jpg`),
            },
            {
                hid: "og:image:secure_url",
                property: "og:image:secure_url",
                content: require(`~/assets/images/opengraph.jpg`),
            },
            {
                hid: "og:image:alt",
                property: "og:image:alt",
                content:
                    "2021 pas de Game Over, juste du fun et du bonheur ! • Agence Zimages",
            },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap' }
        ],
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [{
        src: '~/plugins/vue-iframes',
        mode: 'client'
    }, ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [],

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {}
}
