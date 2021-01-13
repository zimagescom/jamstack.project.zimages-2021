import {
    fontFamily
} from 'tailwindcss/defaultTheme'

module.exports = {
    theme: {
        backdropFilter: {
            'none': 'none',
            'blur': 'blur(5px)',
        },
        customForms: theme => ({
            default: {
                checkbox: {
                    backgroundColor: theme('colors.pink'),
                },
            },
        }),
        extend: {
            fontFamily: {
                'sans': ['Montserrat', ...fontFamily.sans],
            },
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                'purple': {
                    default: '#3e2777',
                    "100": "#f6f3fb",
                    "200": "#c4b6e7",
                    "300": "#8f75d2",
                    "400": "#603cb8",
                    "500": "#3e2777",
                    "600": "#342164",
                    "700": "#2a1a51",
                    "800": "#1e133a",
                    "900": "#140d26"
                },
                'pink': {
                    default: '#e96da5',
                    "100": "#fdf2f7",
                    "200": "#f8cee1",
                    "300": "#f3afce",
                    "400": "#ee8cb8",
                    "500": "#e96da5",
                    "600": "#e02e7e",
                    "700": "#a9195a",
                    "800": "#6a1039",
                    "900": "#2c0718"
                },
            },
            boxShadow: {
                'outline-pink': '0 0 0 3px rgba(233, 109, 165, 0.5)',
                'outline-purple': '0 0 0 3px rgba(62, 39, 119, 0.5)',
            }

        }
    },
    variants: {},
    plugins: [
        require('tailwindcss-filters'),
        require('@tailwindcss/custom-forms'),
        require('@tailwindcss/typography')
    ],
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: [
            'components/**/*.vue',
            'layouts/**/*.vue',
            'pages/**/*.vue',
            'plugins/**/*.js',
            'nuxt.config.js'
        ],
        options: {
            whitelist: []
        }
    }
}
