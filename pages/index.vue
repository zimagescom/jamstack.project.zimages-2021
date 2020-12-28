<template>
    <div>
        <div style="width:104%; left:auto;"
            class="pointer-events-none hidden md:flex md:justify-center md:items-center absolute inset-0 w-full h-full">
            <BackgroundPattern class="text-white" />
        </div>
        <h1 sr-only="2021 pas de Game Over, juste du Fun et du Bonheur ! • Jeu concours 2021 by Zimages"></h1>
        <Game />
    </div>
</template>

<script>
export default {
    data: () => ({
        title: "2021 pas de Game Over, juste du fun et du bonheur !",
        description:
            "Cette année à vous de jouer ! Participez à notre concours en ligne et tentez de gagner Ze borne d’arcade ZIMAGES 🎮🕹️👾",
        image: require(`~/assets/images/opengraph.jpg`),
    }),
    head: () => ({
        meta: [
            {
                hid: "twitter:title",
                name: "twitter:title",
                content: "2021 pas de Game Over, juste du fun et du bonheur !",
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
                content: "2021 pas de Game Over, juste du fun et du bonheur !",
            },
            {
                hid: "og:title",
                property: "og:title",
                content: "2021 pas de Game Over, juste du fun et du bonheur !",
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
                content: "2021 pas de Game Over, juste du fun et du bonheur !",
            },
        ],
    }),
};
</script>
