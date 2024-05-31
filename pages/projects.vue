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
  </div>
</template>
