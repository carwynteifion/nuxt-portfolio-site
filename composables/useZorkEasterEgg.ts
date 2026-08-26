import { onBeforeUnmount, onMounted, ref } from "vue";

const zorkUrl =
  "https://iplayif.com/?story=https%3A%2F%2Feblong.com%2Finfocom%2Fgamefiles%2Fzork1-invclues-r52-s871125.z5";

export function useZorkEasterEgg() {
  const typedWord = ref("");
  const commandFeedback = ref("");

  function clearCommandFeedback() {
    commandFeedback.value = "";
  }

  function launchZork() {
    window.open(zorkUrl, "_blank", "noopener,noreferrer");
    typedWord.value = "";
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
      if (typedWord.value.trim().toLowerCase() === "zork") {
        launchZork();
      } else if (typedWord.value.trim()) {
        commandFeedback.value = "A hollow voice echoes: FOOL.";
        typedWord.value = "";
      }
      return;
    }

    if (event.key === "Backspace") {
      typedWord.value = typedWord.value.slice(0, -1);
      clearCommandFeedback();
      return;
    }

    if (event.key === "Escape") {
      typedWord.value = "";
      clearCommandFeedback();
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

  return { typedWord, commandFeedback };
}
