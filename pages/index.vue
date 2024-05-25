<script setup lang="ts">
definePageMeta({
    layout: 'default',
    title: 'Home'
});
useHead({
    title: 'Home'
})
</script>
<template>
    <div class="flex-container">
        <div class="white-curved-border">
            <div id="hello">
                <p>Hello! I'm Carwyn, and I code!</p>
            </div>
            <div>
                <p>I love developing websites and web apps
                <br />
                that meet requirements simply and elegantly.</p>
            </div>
            <div>
                <p>My previous careers in music and finance
                <br />
                give me the creative and analytical flair
                <br />
                to bring your ideas to life.</p>
            </div>
            <div>
                <p>Get in touch with me about your project
                <br />
                using my <NuxtLink to="/contact">contact form</NuxtLink>.</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
p {
    font-family: monospace, sans-serif;
    color: #fafafa;
}

a {
    text-decoration: underline !important;
}

a:hover, 
a:active {
    color: magenta !important;
}
</style>