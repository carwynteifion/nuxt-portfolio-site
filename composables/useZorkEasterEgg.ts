import { onBeforeUnmount, onMounted, ref } from "vue";

export function useZorkEasterEgg() {
  const typedWord = ref("");
  const commandFeedback = ref("");
  const isGameOpen = ref(false);

  function clearCommandFeedback() {
    commandFeedback.value = "";
  }

  function clearInput() {
    typedWord.value = "";
    clearCommandFeedback();
  }

  function submitCommand() {
    if (typedWord.value.trim().toLowerCase() === "zork") {
      isGameOpen.value = true;
      clearInput();
    } else if (typedWord.value.trim()) {
      commandFeedback.value = "A hollow voice echoes: FOOL.";
      typedWord.value = "";
    }
  }

  function closeGame() {
    isGameOpen.value = false;
  }

  function handleInput() {
    if (typedWord.value.length > 64) {
      typedWord.value = typedWord.value.slice(0, 64);
    }
    clearCommandFeedback();
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.ctrlKey || event.metaKey || event.altKey) {
      return;
    }

    const target = event.target;
    if (
      target instanceof HTMLInputElement ||
      target instanceof HTMLTextAreaElement ||
      target instanceof HTMLSelectElement ||
      (target instanceof HTMLElement && target.isContentEditable)
    ) {
      return;
    }

    if (event.key === "Enter") {
      submitCommand();
      return;
    }

    if (event.key === "Backspace") {
      typedWord.value = typedWord.value.slice(0, -1);
      clearCommandFeedback();
      return;
    }

    if (event.key === "Escape") {
      clearInput();
      return;
    }

    if (event.key.length !== 1 || typedWord.value.length >= 64) {
      return;
    }

    typedWord.value = `${typedWord.value}${event.key}`;
    clearCommandFeedback();
  }

  onMounted(() => window.addEventListener("keydown", handleKeydown));
  onBeforeUnmount(() => window.removeEventListener("keydown", handleKeydown));

  return {
    typedWord,
    commandFeedback,
    isGameOpen,
    clearInput,
    closeGame,
    handleInput,
    submitCommand,
  };
}
