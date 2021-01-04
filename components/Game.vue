<template>
    <div>
        <div
            class="game-wrapper relative flex flex-col justify-center items-center m-auto bg-white shadow-2xl p-2 my-6 overflow-hidden">
            <vue-iframe class="w-full h-full" ref="game" :src="src" frame-id="flappy-bird" @load="onLoad" name="flappy-bird" />
        </div>
        <button @click="showForm=true"
            class="flex mx-auto rounded-full mt-4 px-16 py-4 uppercase bg-purple font-bold text-xl shadow-md transition duration-100 hover:bg-purple-600 hover:shadow-lg focus:outline-none focus:shadow-outline-pink"
            type="button">
            Envoyer mon score
        </button>
        <Modal :content="'form'" v-if="showForm" @close="showForm = false" />
    </div>
</template>

<script>
export default {
    name: "flappy-bird",
    data: () => ({
        src: "https://zimagescom.github.io/clumsy-bird/",
        iframe: null,
        showForm: false,
    }),

    asyncData({ route, params }) {
        this.showForm = params.showForm;
    },
    methods: {
        onLoad(frame) {
            this.iframe = frame.contentWindow;
        },
    },
};
</script>

<style>
    .game-wrapper {
        height: 200px;
    }

    @screen sm {
        .game-wrapper {
            height: 300px;
        }
    }

    @screen md {
        .game-wrapper {
            height: 550px;
        }
    }

    iframe {
        width: 100%;
        height: 100%;
    }

</style>
