import { defineStore } from "pinia";
import { ref } from "vue";

export const useCredentialsStore = defineStore("credentials", () => {
  // properties
  const password = ref("");
  const email = ref("");
  const fullname = ref("");
  const passwordIsStrong = ref(false);

  // submit & save in local storage if all properties are found
  function submitData() {
    if (
      password.value &&
      email.value &&
      fullname.value &&
      passwordIsStrong.value
    ) {
      localStorage.setItem(
        "userData",
        JSON.stringify({
          password: password.value,
          email: email.value,
          fullname: fullname.value,
        })
      );
    }
  }

  return {
    password,
    email,
    fullname,
    passwordIsStrong,
    submitData,
  };
});
