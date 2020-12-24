<template>
    <div>
        <h1 sr-only="2021 pas de Game Over, juste du Fun et du Bonheur ! • Jeu concours 2021 by Zimages"></h1>
        <Game />
    </div>
</template>

<script>
// Test on: https://cards-dev.twitter.com/validator
// Test on: https://developers.facebook.com/tools/debug/
export default {
    data() {
        return {
            title:
                "2021 pas de Game Over, juste du fun et du bonheur ! • Agence Zimages",
            description:
                "Cette année à vous de jouer ! Participez à notre concours en ligne et tentez de gagner Ze borne d’arcade ZIMAGES 🎮🕹️👾",
            image: require(`~/assets/images/opengraph.jpg`),
        };
    },

    head() {
        return {
            meta: [
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
        };
    },
};
</script>
