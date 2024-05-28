<script setup lang="ts">
definePageMeta({
  layout: "default",
  title: "Projects",
});
useHead({
  title: "Projects",
});
</script>
<template>
  <div class="flex-container">
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
