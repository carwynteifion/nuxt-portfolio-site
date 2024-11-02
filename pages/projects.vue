<script setup lang="ts">
useHead({
  title: "Projects",
});

definePageMeta({
  layout: "default",
  title: "Projects",
});
</script>

<template>
  <div class="flex-container">
    <h2>Projects</h2>
    <div class="white-curved-border">
      <div id="hello">
        <h3>
          <NuxtLink
            to="https://github.com/carwynteifion/nuxt-portfolio-site"
            target="_blank"
            external
          >
            Portfolio website
          </NuxtLink>
        </h3>
        <p>This website! Click the title to view the source code.</p>
      </div>
    </div>
    <div class="white-curved-border">
      <div id="chrysalis">
        <h3>
          <NuxtLink
            to="https://chrysalisgroupservices.co.uk"
            target="_blank"
            external
          >
            Chrysalis Group Services
          </NuxtLink>
        </h3>
        <p>
          My first project! I built a user-centric site for a Bristol-based
          housing association charity, focused on housing people with additional
          or complex needs.
        </p>
        <p>Tools: HTML5, CSS3, Bootstrap 5</p>
      </div>
    </div>
  </div>
</template>
