<template>
    <div>
        <div>
            <div>
                <Brand class="w-48 mt-10 mb-4" />
            </div>
            <address class="font-light leading-5">
                23 Avenue de Paris, 79000 Niort <br />
                Téléphone : <a href="tel:+330549248080"
                    class="hover:underline focus:outline-none focus:shadow-outline-purple">05 49 24 80 80</a><br />
                E-mail : <a href="mailto:zimages@zimages.fr"
                    class="hover:underline focus:outline-none focus:shadow-outline-purple">zimages@zimages.fr</a><br />
            </address>
            <button @click="showTerms=true" class="mt-2 text-xs font-medium focus:outline-none focus:shadow-outline-purple" type="button">Conditions
                de participation
                </button>
        </div>
        <Modal :content="'terms'" v-if="showTerms" @close="showTerms = false" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            showTerms: false,
        };
    },
};
</script>
