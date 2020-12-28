<template>
    <div class=" flex justify-evenly items-center flex-col space-y-10 md:space-y-0 md:flex-row w-full">
        <div class="flex items-start space-x-4 leading-5">
            <Logo class="w-8 mt-3" />
            <div class="transform -rotate-2">
                <span class="font-bold">Cette année, à vous de jouer !</span> <br />
                <span class="font-light">Participer à notre jeu concours <br />
                    en ligne et tentez de gagner</span>
                <div class="ml-10 mt-3 bg-white font-bold text-purple-800 px-4 py-1 transform -rotate-2">
                    Ze Borne d'arcade
                    <a class="focus:outline-none focus:shadow-outline-pink" href="https://zimages.fr" title="Zimages"
                        target="_blank">ZIMAGES</a>
                </div>
            </div>
        </div>
        <div>
            <NuxtLink to="/">
                <Arcade class="w-40" />
            </NuxtLink>
        </div>
        <div class="leading-5">
            <span class="font-light">
                Pour participer c’est simple, <br />
                rendez-vous sur
            </span>
            <a class="font-bold focus:outline-none focus:shadow-outline-pink" href="https://gaming.zimages.fr"
                title="Jeu concours Zimages">gaming.zimages.fr</a><br />
            <span>
                Amusez-vous et envoyez-nous <br />
                votre plus beau score ! <br />
            </span>
            <button @click="showForm=true"
                class="rounded-full mt-4 px-10 py-3 uppercase bg-pink font-bold text-xl shadow-md transition duration-100 hover:bg-pink-600 hover:shadow-lg focus:outline-none focus:shadow-outline-pink"
                type="button">Envoyer mon score</button>
        </div>
        <Modal :content="'form'" v-if="showForm" @close="showForm = false" />
    </div>
</template>

<script>
export default {
    data: () => ({
        showForm: false,
    }),
};
</script>
