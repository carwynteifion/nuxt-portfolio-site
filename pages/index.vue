<script setup lang="ts">
import { ref } from "vue";
import emailjs from "@emailjs/browser";

const formRef: Ref<HTMLFormElement | null> = ref(null);

const sendEmail = () => {
  if (formRef.value) {
    emailjs
      .sendForm("contact_service", "contact_form", formRef.value, {
        publicKey: "OxWbN1P0UEvnxoSGF",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  } else {
    console.error("Form reference is null.");
  }
};

definePageMeta({
  layout: "default",
  title: "Home",
});

useHead({
  title: "Home",
});
</script>
<template>
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
          Get in touch with me about your project by using the contact form
          below, or by
          <NuxtLink to="mailto:hello@carwyncodes.dev">emailing me</NuxtLink>.
        </p>
      </div>
    </div>
    <div class="white-curved-border">
      <h3>Contact me</h3>
      <form ref="form" @submit.prevent="sendEmail">
        <label>Name</label><br />
        <input type="text" name="user_name" required /><br />
        <label>Email address</label><br />
        <input type="email" name="user_email" required /><br />
        <label>Your message</label><br />
        <textarea
          name="message"
          placeholder="Your enquiry here..."
          rows="4"
          cols="28"
          maxlength="250"
        ></textarea
        ><br />
        <div id="submit">
          <input id="submit-button" type="submit" value="Send" />
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
a {
  text-decoration: underline !important;
}

a:active,
a:hover {
  color: #f0f !important;
}

textarea {
  resize: none;
  margin-top: 5px;
  margin-bottom: 10px;
  font-size: 1rem;
  width: 97%;
}

#submit {
  text-align: center;
}

#submit,
#submit-button,
input,
textarea {
  font-family: monospace, sans-serif;
}

input {
  margin-top: 5px;
  margin-bottom: 10px;
  font-size: 1rem;
  width: 97%;
}

#submit-button {
  color: #fafafa;
  background: #000;
  border-radius: 5px;
  border: 1px solid #fafafa;
  font-size: 1.25rem;
  max-width: fit-content;
  padding: 5px 10px;
}
</style>
