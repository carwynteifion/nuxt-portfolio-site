<script setup lang="ts">
const route = useRoute();

useHead({
  meta: [{ property: 'og:title', content: `Carwyn Codes - ${route.meta.title}` }]
});
</script>

<template>
  <div id="title">
    <h1><NuxtLink to="/">Carwyn Codes</NuxtLink></h1>
    <h3>Full-stack solutions</h3>
    <AppBar />
  </div>
  <slot />
    <AppFooter />
</template>

<style>
html {
  background: #000;
}

a:link,
a:visited,
#title,
#navbar,
#navbar-footer {
  font-family: monospace, sans-serif;
  color: #fafafa;
  text-decoration: none;
  text-align: center;
}

a:hover,
a:active {
  color: #bbb;
}

.flex-container {
  display: flex;
  justify-content: center;
}

.white-curved-border {
  border: 1px solid #fafafa;
  border-radius: 10px;
  margin-top: 30px;
  padding: 5px 50px;
}
</style>