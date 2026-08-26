<script setup>
useHead({
  title: "Home",
});

definePageMeta({
  layout: "default",
  title: "Home",
});

const { typedWord, commandFeedback } = useZorkEasterEgg();
</script>

<template>
  <div class="zork-input" role="status" aria-live="polite">
    <span aria-hidden="true">&gt; {{ typedWord }}</span><span class="cursor" aria-hidden="true"></span>
    <span class="sr-only">Typing {{ typedWord }}</span>
    <p v-if="commandFeedback" class="command-feedback">{{ commandFeedback }}</p>
  </div>
  <div class="flex-container">
    <div class="white-curved-border">
      <div id="hello">
        <p>Hello! I'm Carwyn, and I code!</p>
      </div>
      <div>
        <p>
          I love developing websites and web apps that meet requirements simply
          and elegantly.
        </p>
      </div>
      <div>
        <p>
          My previous careers in music and finance give me the creative and
          analytical flair to bring your ideas to life.
        </p>
      </div>
      <div>
        <p>
          Get in touch with me about your project by emailing
          <strong>hello(at)carwyncodes(dot)dev</strong>.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.zork-input {
  position: fixed;
  left: 1rem;
  bottom: 1rem;
  z-index: 10;
  color: #fafafa;
  font-family: monospace, sans-serif;
  font-size: 0.95rem;
  letter-spacing: 0.05em;
}

.cursor {
  display: inline-block;
  width: 0.6em;
  height: 1em;
  margin-left: 0.15em;
  vertical-align: -0.15em;
  background: #fafafa;
  animation: blink 1s steps(1, end) infinite;
}

.command-feedback {
  margin: 0.4rem 0 0;
  color: #bbb;
  font-size: 0.85rem;
  letter-spacing: 0;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .cursor {
    animation: none;
  }
}
</style>
