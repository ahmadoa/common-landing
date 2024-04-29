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
    console.log(values);
    data.email.value = values.email;
    data.password.value = values.password;
    data.fullname.value = values.fullname;
    localStorage.setItem(
      "userData",
      JSON.stringify({
        password: values.password.value,
        email: values.email.value,
        fullname: values.fullname.value,
      })
    );
  }

  return {
    data,
    submitData,
  };
});
