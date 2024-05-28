<script setup lang="ts">
const route = useRoute();

useHead({
  meta: [
    { property: "og:title", content: `Carwyn Codes - ${route.meta.title}` },
  ],
});
</script>

<template>
  <body>
    <header id="title">
      <h1><NuxtLink to="/">Carwyn Codes</NuxtLink></h1>
      <h3>Full-stack solutions</h3>
      <AppBar />
    </header>
    <main>
      <slot />
    </main>
    <div id="footer">
      <AppFooter />
    </div>
  </body>
</template>

<style>
html {
  background: #000;
}

a:link,
a:visited,
#title,
#navbar,
#navbar-footer,
#footer {
  bottom: 0;
  font-family: monospace, sans-serif;
  color: #fafafa;
  text-decoration: none;
  text-align: center;
}

main {
  height: 79vh;
  font-family: monospace, sans-serif;
  color: #fafafa;
}

#footer {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

body {
  clear: both;
}

a:hover,
a:active {
  color: #bbb;
}

p,
h3,
form {
  font-family: monospace, sans-serif;
  color: #fafafa;
}

.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.white-curved-border {
  border: 1px solid #fafafa;
  border-radius: 10px;
  margin-top: 30px;
  padding: 5px 50px;
  max-width: 300px;
}
</style>
