export default {
    // Target (https://go.nuxtjs.dev/config-target)
    target: 'static',

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: '2021 pas de Game Over, juste du fun et du bonheur !',
        meta: [{
                charset: 'UTF-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
            },
            {
                hid: 'description',
                name: 'description',
                content: 'Cette année à vous de jouer ! Participez à notre concours en ligne et tentez de gagner Ze borne d’arcade ZIMAGES 🎮🕹️👾'
            },
        ],
        link: [{
                rel: 'icon',
                type: 'image/svg+xml',
                href: '/favicon.svg'
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap'
            }
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        {
            src: '~/plugins/vue-iframes',
            mode: 'client'
        }
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        '@nuxtjs/google-gtag',
        '@nuxtjs/axios'
    ],
    'google-gtag': {
        id: 'G-JL42WJ9R1F',
        config: {
            anonymize_ip: true, // anonymize IP
            send_page_view: true, // might be necessary to avoid duplicated page track on page reload
        },
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {}
}
