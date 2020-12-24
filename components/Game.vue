<template>
    <div class="game-wrapper relative flex justify-center items-center m-auto bg-white shadow-2xl p-2 my-8 overflow-hidden">
        <vue-iframe :src="src" frame-id="flappy-bird" @load="onLoad" name="flappy-bird"
            width="100%" height="100%" />
    </div>
</template>

<script>
export default {
    name: "flappy-bird",
    data: () => ({
        src: "https://zimagescom.github.io/clumsy-bird/",
        iframe: null,
    }),
    methods: {
        onLoad(frame) {
            this.iframe = frame.contentWindow;
        },
    },
};
</script>

<style>
    .game-wrapper {
        height: 300px;
    }

    @screen md {
        .game-wrapper {
            height: 600px;
        }
    }

    iframe {
        width: 100%;
        height: 100%;
    }

</style>
