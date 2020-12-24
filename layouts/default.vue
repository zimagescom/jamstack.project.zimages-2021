<template>
    <div class="min-h-screen w-screen h-full p-6 bg-gradient-to-b from-purple to-pink-600">
        <div style="width:104%; left:auto;" class="hidden md:flex md:justify-center md:items-center absolute inset-0 w-full h-full">
            <BackgroundPattern class="text-white" />
        </div>
        <div class="container m-auto text-white">
            <Header />
            <Nuxt />
            <Footer />
        </div>
    </div>
</template>
