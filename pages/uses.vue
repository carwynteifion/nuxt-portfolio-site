<script setup lang="ts">
definePageMeta({
  layout: "default",
  title: "uses",
});
useHead({
  title: "Uses",
});

function stringDate(input: string | number | Date) {
  const startDate = new Date(input);
  const now = new Date();
  const years = now.getFullYear() - startDate.getFullYear();
  return `${years} years`;
}

let frontend = [
  {
    text: "Vue.js",
    icon: "logos:vue",
    yearStarted: "2023-09-11",
  },
  {
    text: "Nuxt.js",
    icon: "logos:nuxt-icon",
    yearStarted: "2023-09-11",
  },
  {
    text: "HTML",
    icon: "logos:html-5",
    yearStarted: "2021-05-01",
  },
  {
    text: "CSS",
    icon: "logos:css-3",
    yearStarted: "2021-05-01",
  },
  {
    text: "JavaScript",
    icon: "logos:javascript",
    yearStarted: "2021-05-01",
  },
];

let backend = [
  {
    text: "C#",
    icon: "logos:dotnet",
    yearStarted: "2023-09-11",
  },
  {
    text: "SQL",
    icon: "material-symbols:database",
    yearStarted: "2021-05-01",
  },
];
</script>
<template>
  <div class="flex-container">
    <header>
      <h3>Frontend</h3>
    </header>
  </div>
  <div>
    <section class="flex-container">
      <div v-for="item in frontend">
        <div class="white-curved-border">
          <div class="icon">
            <Icon :name="item.icon" />
          </div>
          <div class="text">
            <span>{{ item.text }}</span
            ><br />
            <span>{{ stringDate(item.yearStarted) }}</span>
          </div>
        </div>
      </div>
    </section>
    <div class="flex-container">
      <header>
        <h3>Backend</h3>
      </header>
    </div>
    <section class="flex-container">
      <div v-for="item in backend">
        <div class="white-curved-border">
          <div class="icon">
            <Icon :name="item.icon" />
          </div>
          <div class="text">
            <span>{{ item.text }}</span
            ><br />
            <span>{{ stringDate(item.yearStarted) }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.icon {
  font-size: 3rem;
}

.flex-container {
  text-align: center;
  flex-direction: row;
  flex-wrap: wrap;
}

.white-curved-border {
  margin: 10px 10px;
  padding: 5px 20px;
  min-width: 100px;
}
</style>
