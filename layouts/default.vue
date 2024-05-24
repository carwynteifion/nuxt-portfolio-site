<template>
  <div id="title">
    <h1><NuxtLink to="/">Carwyn Codes</NuxtLink></h1>
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
</style>
