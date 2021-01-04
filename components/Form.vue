<template>
    <div class="max-w-6xl m-auto text-black bg-gray-300 p-6 rounded-3xl shadow">
        <div v-if="merci">
            <div class="text-center text-4xl text-pink-600 font-medium">Whaaaooouuu, <strong>{{ score }}</strong> mais
                quel score !! </div>
            <div v-text="text" class="text-center text-2xl text-gray-600">Merci de votre participation !</div>
            <div class="mt-10 text-center text-sm text-gray-600">La Team ZIMAGES 💙</div>
        </div>
        <div v-else>
            <div class="text-xl text-center leading-8 mb-10">
                <span class="text-4xl">👋 Hello !</span> <br />
                Merci pour ta participation au jeu qui te permettra de gagner la <span
                    class="bg-pink-100 text-pink-400 rounded-full px-3 py-1">1ère borne arcade ZIMAGES</span> ! <br />
                Merci de remplir ce formulaire ci-dessous nous permettant de récolter ton score de ouf !
            </div>
            <form @submit.prevent="submit" name="voeux-zimages-2021" method="post" action="/" data-netlify="true"
                data-netlify-honeypot="bot-field" class="max-w-3xl m-auto flex flex-col space-y-6">
                <input type="hidden" name="form-name" value="voeux-zimages-2021" />
                <div>
                    <label class="text-sm ml-2" for="name">Prénom et Nom *</label>
                    <input type="text" name="name" id="name"
                        class="shadow border-none form-input block rounded-full focus:shadow-outline-pink focus:border-pink" />
                </div>
                <div>
                    <label class="text-sm ml-2" for="email" required>Adresse e-mail *</label>
                    <input type="email" name="email" id="email"
                        class="shadow border-none form-input block rounded-full focus:shadow-outline-pink focus:border-pink" />
                </div>
                <div>
                    <label class="text-sm ml-2" for="record" required>Mon super giga méga score *</label>
                    <input v-model="the_record" type="number" min="0" name="record" id="record"
                        class="shadow border-none form-input block rounded-full focus:shadow-outline-pink focus:border-pink" />
                </div>
                <div>
                    <label class="text-sm ml-2" for="score">Capture d'écran de mon super giga méga score</label>
                    <input ref="file" type="file" name="score" id="score"
                        class="shadow border-none form-input block rounded-full focus:shadow-outline-pink focus:border-pink" />
                </div>
                <div>
                    <input type="checkbox" name="accept_terms" id="accept_terms" required
                        class="shadow border-none form-checkbox text-xl mr-2 bg-white focus:shadow-outline-pink focus:border-pink" />
                    <label class="text-sm" for="accept_terms">En cochant cette case, j'accepte que ZIMAGES utilise mes
                        données pour me contacter *</label>
                </div>
                <div>
                    <button type="submit"
                        class="rounded-full mt-4 px-10 py-3 uppercase bg-pink font-bold text-xl text-white shadow-md transition duration-100 hover:bg-pink-600 hover:shadow-lg focus:outline-none focus:shadow-outline-pink">Envoyer</button>
                </div>
                <div class="text-xs text-pink-400">*Champs obligatoires</div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "VoeuxForm",
    data() {
        return {
            merci: false,
            score: 0,
            the_record: 0,
            text: "",
        };
    },
    methods: {
        encode(data) {
            return Object.keys(data)
                .map(
                    (key) =>
                        `${encodeURIComponent(key)}=${encodeURIComponent(
                            data[key]
                        )}`
                )
                .join("&");
        },
        submit() {
            const axiosConfig = {
                header: { "Content-Type": "application/x-www-form-urlencoded" },
            };
            axios
                .post(
                    "/",
                    this.encode({
                        "form-name": "voeux-zimages-2021",
                    }),
                    axiosConfig
                )
                .then(() => {});
            (this.merci = true), (this.score = this.the_record);
        },
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
