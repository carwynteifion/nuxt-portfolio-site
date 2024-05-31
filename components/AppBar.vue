<template>
  <nav id="navbar">
    <NuxtLink id="home-link" to="/" :class="{ 'bold':($route.path === '/') }">Home</NuxtLink> |
    <NuxtLink id="projects-link" to="/projects" :class="{ 'bold':($route.path === '/projects') }">Projects</NuxtLink> |
    <NuxtLink id="uses-link" to="/uses" :class="{ 'bold':($route.path === '/uses') }">Uses</NuxtLink> |
    <NuxtLink
      id="github-link"
      to="https://www.github.com/carwynteifion/"
      external
      target="_blank"
      >GitHub</NuxtLink
    >
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

#github-link:active,
#github-link:hover {
  color: lime;
}

.bold {
  font-weight: bold;
  text-decoration: underline;
}
</style>
