<template>
    <div class="game-wrapper relative flex justify-center items-center m-auto bg-white shadow-2xl p-2 my-8 overflow-hidden">
        <vue-iframe ref="game" @click="focusGame" :src="src" frame-id="flappy-bird" @load="onLoad" name="flappy-bird"
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
        focusGame() {
            this.$refs.game.$el.focus();
        },
        onLoad(frame) {
            this.iframe = frame.contentWindow;
            this.$nextTick(() => {
                // this won't work because `this.$refs.typeBox` returns an array
                // this.$refs.typeBox.focus()
                //this one works perfectly
            });
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
