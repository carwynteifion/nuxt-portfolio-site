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

#footer,
#navbar,
#navbar-footer,
#title,
a:link,
a:visited {
  bottom: 0;
  font-family: monospace, sans-serif;
  color: #fafafa;
  text-decoration: none;
  text-align: center;
}

main {
  height: 79vh;
}

#footer,
.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

#footer {
  width: 100%;
}

body {
  clear: both;
}

a:active,
a:hover {
  color: #bbb;
}

form,
h3,
main,
p {
  font-family: monospace, sans-serif;
  color: #fafafa;
}

.flex-container {
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
