import { defineStore } from "pinia";
import { ref } from "vue";

export const useCredentialsStore = defineStore("credentials", () => {
  const data = ref({
    password: "",
    email: "",
    fullname: "",
  });

  // submit & save in local storage if all properties are found
  function submitData(values) {
    data.email = values.email;
    data.password = values.password;
    data.fullname = values.fullname;
    localStorage.setItem(
      "userData",
      JSON.stringify({
        password: values.password,
        email: values.email,
        fullname: values.fullname,
      })
    );
  }

  return {
    submitData,
  };
});
