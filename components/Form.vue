<template>
    <div class="max-w-6xl m-auto text-black bg-gray-300 p-6 rounded-3xl shadow">
        <div class="text-xl text-center leading-8 mb-10">
            <span class="text-4xl">👋 Hello !</span> <br />
            Merci pour ta participation au jeu qui te permettra de gagner la <span class="bg-pink-100 text-pink-400 rounded-full px-3 py-1">1ère borne arcade ZIMAGES</span> ! <br />
            Merci de remplir ce formulaire ci-dessous nous permettant de récolter ton score de ouf !
        </div>
        <form action="/" class="max-w-3xl m-auto flex flex-col space-y-6" name="contact" method="POST" netlify>
            <div>
                <label class="text-sm ml-2" for="name">Prénom et Nom</label>
                <input class="shadow border-none form-input block rounded-full focus:shadow-outline-pink focus:border-pink" type="text" name="name" id="email"/>
            </div>
            <div>
                <label class="text-sm ml-2" for="email">Adresse e-mail</label>
                <input class="shadow border-none form-input block rounded-full focus:shadow-outline-pink focus:border-pink" type="email" name="email" id="email" />
            </div>
            <div>
                <label class="text-sm ml-2" for="score">Photo de mon super giga méga score</label>
                <input class="shadow border-none form-input block rounded-full focus:shadow-outline-pink focus:border-pink" type="file" name="score" id="score" />
            </div>
            <div>
                <input class="shadow border-none form-checkbox text-xl mr-2 bg-white focus:shadow-outline-pink focus:border-pink" type="checkbox" name="accept_terms" id="accept_terms" />
                <label for="accept_terms">En cochant cette case, j'accepte que ZIMAGES utilise mes données pour me contacter</label>
            </div>
            <div>
                <button class="rounded-full mt-4 px-10 py-3 uppercase bg-pink font-bold text-xl text-white shadow-md transition duration-100 hover:bg-pink-600 hover:shadow-lg focus:outline-none focus:shadow-outline-pink" type="submit">Envoyer</button>
            </div>
            <div class="text-xs text-pink-400">*Champs obligatoires</div>
        </form>
    </div>
</template>
