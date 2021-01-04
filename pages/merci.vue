<template>
    <div class="mt-10 flex flex-col bg-purple-100 text-black rounded-xl p-6 max-w-3xl m-auto shadow-xl">
        <h1 sr-only="2021 pas de Game Over, juste du Fun et du Bonheur ! • Jeu concours 2021 by Zimages"></h1>
        <div class="text-center text-4xl text-pink-600 font-medium">Whaaaooouuu, <strong>{{ score }}</strong> mais quel score !! </div>
        <div v-text="text" class="text-center text-2xl text-gray-600">Merci de votre participation !</div>
        <div class="mt-10 text-center text-sm text-gray-600">La Team ZIMAGES 💙</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            score: 0,
            text: "",
        };
    },
    mounted() {
        this.score = this.$route.params.score;
        if (this.score > 90) {
            this.text = "Dis donc tu mentirais sur ton score !";
        }
        if (this.score > 50 && this.score <= 90) {
            this.text = "Pas mal comme score, c'est bien joué !";
        } else {
            this.text = "Tu peux faire un effort et mieux faire !";
        }
    },
};
</script>
