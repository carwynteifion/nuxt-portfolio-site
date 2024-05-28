<template>
  <nav id="navbar">
    <NuxtLink id="home-link" to="/">Home</NuxtLink> |
    <NuxtLink id="projects-link" to="/projects">Projects</NuxtLink> |
    <NuxtLink id="uses-link" to="/uses">Uses</NuxtLink>
  </nav>
</template>

<style scoped>
#home-link:active,
#home-link:hover {
  color: red;
}

#projects-link:active,
#projects-link:hover {
  color: #ff0;
}

#uses-link:active,
#uses-link:hover {
  color: #0ff;
}
</style>
