<template>
    <div class="max-w-6xl m-auto text-black bg-gray-300 p-6 rounded-3xl shadow">
        <div class="text-xl text-center leading-8 mb-10">
            <span class="text-4xl">👋 Hello !</span> <br />
            Merci pour ta participation au jeu qui te permettra de gagner la <span
                class="bg-pink-100 text-pink-400 rounded-full px-3 py-1">1ère borne arcade ZIMAGES</span> ! <br />
            Merci de remplir ce formulaire ci-dessous nous permettant de récolter ton score de ouf !
        </div>
        <form name="voeux-zimages-2021" method="post" action="/merci" data-netlify="true"
            data-netlify-honeypot="bot-field" class="kwes-form max-w-3xl m-auto flex flex-col space-y-6">
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
                <input type="number" min="0" name="record" id="record"
                    class="shadow border-none form-input block rounded-full focus:shadow-outline-pink focus:border-pink" />
            </div>
            <!-- <div>
                <label class="text-sm ml-2" for="score">Capture d'écran de mon super giga méga score</label>
                <input ref="file" type="file" name="score" id="score" class="shadow border-none form-input block rounded-full focus:shadow-outline-pink focus:border-pink" />
            </div> -->
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
</template>

// <script>
// import kwesforms from "kwesforms";

// import axios from "axios";

// export default {
//     data: () => ({
//         name: "",
//         file: null,
//         showForm: true,
//     }),
//     computed: {
//         form() {
//             return {
//                 name: this.name,
//                 attach: this.file,
//             };
//         },
//     },
//     methods: {
//         addFile() {
//             this.file = this.$refs.file.files[0];
//         },
//         encode(data) {
//             return Object.keys(data)
//                 .map(
//                     (key) =>
//                         `${encodeURIComponent(key)}=${encodeURIComponent(
//                             data[key]
//                         )}`
//                 )
//                 .join("&");
//         },
//         handleSubmit() {
//             const self = this;

//             const axiosConfig = {
//                 header: {
//                     "Content-Type": "multipart/form-data",
//                 },
//             };
//             axios
//                 .post(
//                     "/",
//                     self.encode({
//                         "form-name": "jeu-concours",
//                         ...self.form,
//                     }),
//                     axiosConfig
//                 )
//                 .then(() => {
//                     console.log()
//                     this.showForm = false;
//                 });
//         },
//     },
// };
//
</script>
