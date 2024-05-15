<template>
  <div>
    <h1 id="title">Carwyn Codes</h1>
    <AppBar />
  </div>
  <slot />
    <AppFooter />
</template>

<style>
html {
  background: #000;
}
#title,
#navbar,
#navbar-footer {
  font-family: monospace;
  color: #fafafa;
}
</style>
