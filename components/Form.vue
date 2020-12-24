<template>
    <div class="max-w-6xl m-auto text-black bg-gray-300 p-6 rounded-3xl shadow">
        <div class="text-xl text-center leading-8 mb-10">
            <span class="text-4xl">👋 Hello !</span> <br />
            Merci pour ta participation au jeu qui te permettra de gagner la <span class="bg-pink-100 text-pink-400 rounded-full px-3 py-1">1ère borne arcade ZIMAGES</span> ! <br />
            Merci de remplir ce formulaire ci-dessous nous permettant de récolter ton score de ouf !
        </div>

        <form name="jeu-concours" method="post" netlify netlify-honeypot @submit.prevent="handleSubmit" enctype="multipart/form-data" class="max-w-3xl m-auto flex flex-col space-y-6">

            <input type="hidden" name="form-name" value="jeu-concours" />

            <div>
                <label class="text-sm ml-2" for="name">Prénom et Nom</label>
                <input type="text" name="name" id="name" @input="event => form.name = event.target.value" required class="shadow border-none form-input block rounded-full focus:shadow-outline-pink focus:border-pink" />
            </div>
            <div>
                <label class="text-sm ml-2" for="email">Adresse e-mail</label>
                <input  type="email" name="email" id="email" @input="event => form.email = event.target.value" required class="shadow border-none form-input block rounded-full focus:shadow-outline-pink focus:border-pink" />
            </div>
            <div>
                <label class="text-sm ml-2" for="score">Photo de mon super giga méga score</label>
                <input ref="file" @change="addFile()" type="file" name="score" id="score" required class="shadow border-none form-input block rounded-full focus:shadow-outline-pink focus:border-pink" />
            </div>
            <div>
                <input type="checkbox" name="accept_terms" id="accept_terms" required class="shadow border-none form-checkbox text-xl mr-2 bg-white focus:shadow-outline-pink focus:border-pink" />
                <label for="accept_terms">En cochant cette case, j'accepte que ZIMAGES utilise mes données pour me contacter</label>
            </div>
            <div>
                <button class="rounded-full mt-4 px-10 py-3 uppercase bg-pink font-bold text-xl text-white shadow-md transition duration-100 hover:bg-pink-600 hover:shadow-lg focus:outline-none focus:shadow-outline-pink" type="submit">Envoyer</button>
            </div>
            <div class="text-xs text-pink-400">*Champs obligatoires</div>
        </form>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            form: {
                name: "",
                file: "",
            },
        };
    },
    methods: {
        addFile() {
            this.form.file = this.$refs.file.files[0];
        },
        encode(data) {
            const formData = new FormData();

            for (const key of Object.keys(data)) {
                formData.append(key, data[key]);
            }

            return formData;
        },
        handleSubmit() {
            const data = {
                "form-name": "jeu-concours",
                name: this.form.name,
                attach: this.form.attach,
            };
            const axiosConfig = {
                header: {
                    "Content-Type": "multipart/form-data",
                },
            };
            axios
                .post(
                    "/",
                    this.encode({
                        data,
                    }),
                    axiosConfig
                )
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    },
};
</script>
