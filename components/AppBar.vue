<template>
  <nav id="navbar">
    <NuxtLink id="home-link" to="/">Home</NuxtLink> |
    <NuxtLink id="projects-link" to="/projects">Projects</NuxtLink> |
    <NuxtLink id="uses-link" to="/uses">Uses</NuxtLink>
  </nav>
</template>

<style scoped>
#home-link:hover,
#home-link:active {
  color: red;
}

#projects-link:hover,
#projects-link:active {
  color: yellow;
}

#uses-link:hover,
#uses-link:active {
  color: cyan;
}
</style>
