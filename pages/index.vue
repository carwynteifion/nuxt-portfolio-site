<script setup>
import { ref } from "vue";

useHead({
  title: "Home",
});

definePageMeta({
  layout: "default",
  title: "Home",
});

const {
  typedWord,
  commandFeedback,
  isGameOpen,
  closeGame,
  handleInput,
  submitCommand,
} = useZorkEasterEgg();

const commandInput = ref(null);

function focusCommand() {
  commandInput.value?.focus();
}
</script>

<template>
  <div class="zork-input" role="status" aria-live="polite" @click="focusCommand">
    <label class="sr-only" for="zork-command">Terminal command</label>
    <span aria-hidden="true">&gt;</span>
    <span class="typed-command" aria-hidden="true">{{ typedWord }}</span>
    <span class="cursor" aria-hidden="true"></span>
    <input
      id="zork-command"
      ref="commandInput"
      v-model="typedWord"
      class="command-input"
      type="text"
      maxlength="64"
      autocomplete="off"
      autocapitalize="none"
      spellcheck="false"
      aria-label="Terminal command"
      @input="handleInput"
      @keydown.enter.prevent="submitCommand"
    />
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
  <div v-if="isGameOpen" class="game-overlay" role="dialog" aria-modal="true" aria-label="Zork">
    <div class="game-window">
      <button class="close-game" type="button" aria-label="Close Zork" @click="closeGame">
        [ close ]
      </button>
      <iframe
        class="game-frame"
        title="Zork I: The Great Underground Empire"
        src="https://iplayif.com/?story=https%3A%2F%2Feblong.com%2Finfocom%2Fgamefiles%2Fzork1-invclues-r52-s871125.z5"
      ></iframe>
    </div>
  </div>
</template>

<style scoped>
.zork-input {
  position: fixed;
  left: 1rem;
  bottom: 1rem;
  z-index: 10;
  display: flex;
  align-items: baseline;
  gap: 0.35em;
  color: #fafafa;
  font-family: monospace, sans-serif;
  font-size: 0.95rem;
  letter-spacing: 0.05em;
}

.typed-command {
  white-space: pre;
}

.command-input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1.5em;
  opacity: 0;
  cursor: text;
}

.cursor {
  display: inline-block;
  width: 0.6em;
  height: 1em;
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

.game-overlay {
  position: fixed;
  inset: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.9);
}

.game-window {
  position: relative;
  width: min(100%, 70rem);
  height: min(90vh, 52rem);
  background: #000;
}

.close-game {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 1;
  padding: 0.35rem 0.5rem;
  border: 1px solid #fafafa;
  background: #000;
  color: #fafafa;
  font: inherit;
  cursor: pointer;
}

.game-frame {
  width: 100%;
  height: 100%;
  border: 1px solid #fafafa;
  background: #fff;
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

@media (max-width: 600px) {
  .zork-input {
    right: 1rem;
    font-size: 0.85rem;
  }

  .game-overlay {
    padding: 0;
  }

  .game-window {
    width: 100%;
    height: 100%;
  }
}
</style>
