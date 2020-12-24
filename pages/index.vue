<template>
    <div class="min-h-screen w-screen h-full p-6 bg-gradient-to-b from-purple to-pink-600">
        <h1 sr-only="2021 pas de Game Over, juste du Fun et du Bonheur ! • Jeu concours 2021 by Zimages"></h1>
        <div class="container m-auto text-white">
            <Header />
            <!-- <Game /> -->
            <Footer />

            <form name="jeu-concours" method="post" netlify class="max-w-3xl m-auto flex flex-col space-y-6">
            <input type="hidden" name="form-name" value="jeu-concours" />
            <div>
                <label class="text-sm ml-2" for="name">Prénom et Nom</label>
                <input type="text" name="name" id="name" class="shadow border-none form-input block rounded-full focus:shadow-outline-pink focus:border-pink" />
            </div>
            <div>
                <label class="text-sm ml-2" for="email">Adresse e-mail</label>
                <input  type="email" name="email" id="email" class="shadow border-none form-input block rounded-full focus:shadow-outline-pink focus:border-pink" />
            </div>
            <div>
                <label class="text-sm ml-2" for="score">Photo de mon super giga méga score</label>
                <input ref="file" type="file" name="score" id="score" class="shadow border-none form-input block rounded-full focus:shadow-outline-pink focus:border-pink" />
            </div>
            <div>
                <input type="checkbox" name="accept_terms" id="accept_terms" required class="shadow border-none form-checkbox text-xl mr-2 bg-white focus:shadow-outline-pink focus:border-pink" />
                <label for="accept_terms">En cochant cette case, j'accepte que ZIMAGES utilise mes données pour me contacter</label>
            </div>
            <div>
                <input type="submit" class="rounded-full mt-4 px-10 py-3 uppercase bg-pink font-bold text-xl text-white shadow-md transition duration-100 hover:bg-pink-600 hover:shadow-lg focus:outline-none focus:shadow-outline-pink">Envoyer</input>
            </div>
            <div class="text-xs text-pink-400">*Champs obligatoires</div>
        </form>
        </div>
    </div>
</template>
