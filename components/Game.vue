<template>
    <div>
        <div class="relative flex bg-white shadow-2xl p-2 my-8 overflow-hidden">
            <div style="height:600px;" class="w-full bg-black">
                <vue-iframe :src="src" frame-id="flappy-bird" @load="onLoad" name="flappy-bird" width="100%"
                    height="100%" />
            </div>
            <!-- <div
                class="group cursor-pointer absolute inset-0 bg-black bg-opacity-50 shadow-xl m-2 flex flex-col justify-center items-center font-bold uppercase text-2xl">
                <svg class="w-40 h-40 transform transition duration-100 scale-100 group-hover:scale-105"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clip-rule="evenodd" />
                </svg>
                Jouer
            </div> -->
        </div>
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
    iframe {
        width: 100%;
        height: 100%;
    }
</style>
