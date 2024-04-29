<template>
  <div
    class="relative h-full flex items-center justify-center bg-gradient-to-b from-background to-background-Bottom"
  >
    <img
      src="@/assets/bgPath1.svg"
      class="absolute top-0 left-0 h-40 md:h-80"
    />
    <img
      src="@/assets/bgPath2.svg"
      class="absolute bottom-0 right-0 h-40 md:h-96"
    />
    <div class="flex flex-col items-center gap-10">
      <div class="flex flex-col gap-4 items-center">
        <div class="flex gap-10 items-center">
          <img src="@/assets/logo.svg" class="h-5 md:h-8 lg:h-10" />
          <span class="text-2xl lg:text-4xl text-teal-400">X</span>
          <img src="@/assets/usbLogo.svg" class="h-10 md:h-20 lg:h-28" />
        </div>
        <p
          class="w-10/12 md:w-5/12 sm:text-lg md:text-xl lg:text-3xl text-center text-blue-950 font-medium"
        >
          CommonShare & USB Certification make it easy for you to digitize your
          products and certificates.
        </p>
      </div>
      <div class="flex flex-col items-center gap-4">
        <p
          class="md:w-2/3 text-sm md:text-base text-center leading-tight text-blue-950"
        >
          Please enter the invitation password that you received from USB
          Certification.
        </p>
        <Form
          class="w-5/6 md:w-4/6 rounded-xl overflow-hidden flex flex-col bg-white"
        >
          <div class="w-full h-10 rounded-xl overflow-hidden flex bg-white">
            <Field
              type="text"
              name="password"
              class="w-2/3 h-full border-0 outline-none focus-visible:ring-0 px-3"
              placeholder="Enter Password"
              :rules="passwordStrength"
            />
            <Dialog>
              <DialogTrigger class="w-1/3" :disabled="!passwordIsStrong">
                <Button
                  :disabled="!passwordIsStrong"
                  class="bg-foreground text-lg w-full h-full rounded-x"
                  >Let’s go</Button
                >
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle class="text-center mt-3"
                    >Terms and Conditions</DialogTitle
                  >
                  <DialogDescription>
                    <div class="bg-zinc-300 mt-3 h-96 rounded-xl p-4">
                      <div
                        class="h-full overflow-y-auto px-10 py-5 bg-zinc-50 rounded-xl"
                      >
                        <ol class="list-decimal space-y-3 text-sm">
                          <li>
                            By allowing USB Certification to upload your
                            company's products, you agree to grant us permission
                            to display them on our website.
                          </li>
                          <li>
                            You also agree that USB Certification may upload
                            scope certificates related to your products and
                            facilities, as well as transaction certificates
                            related to your products.
                          </li>
                          <li>
                            You warrant and represent that all information
                            provided to USB Certification is accurate and
                            complete, and that you have the necessary rights and
                            permissions to upload such information.
                          </li>
                          <li>
                            USB Certification reserves the right to remove any
                            products, certificates or facilities from our
                            website that we, in our sole discretion, deem
                            inappropriate or objectionable.
                          </li>
                          <li>
                            You acknowledge that USB Certification is not
                            responsible for the accuracy or completeness of any
                            product or certificate posted on our website, and
                            that you use such information at your own risk.
                          </li>
                          <li>
                            By uploading products or certificates to USB
                            Certification, you agree to indemnify and hold
                            harmless USB Certification and its officers,
                            directors, employees, agents, and affiliates from
                            any and all claims, damages, liabilities, costs, and
                            expenses (including reasonable attorneys' fees)
                            arising out of or in connection with such products
                            or certificates.
                          </li>
                        </ol>
                      </div>
                    </div>
                    <div class="flex gap-5 mt-5">
                      <div class="grid w-full max-w-sm items-center gap-1">
                        <Label for="fullname"
                          >Full Name <span class="text-red-600">*</span></Label
                        >
                        <Field
                          name="fullname"
                          id="fullname"
                          :rules="validateFullname"
                          type="text"
                          placeholder="John Doe"
                          class="p-2 border rounded-xl"
                        />
                        <ErrorMessage
                          name="fullname"
                          class="bg-transparent text-xs text-red-600"
                        />
                      </div>
                      <div class="grid w-full max-w-sm items-center gap-1">
                        <Label for="email"
                          >Email Address
                          <span class="text-red-600">*</span></Label
                        >
                        <Field
                          id="email"
                          name="email"
                          :rules="validateEmail"
                          type="email"
                          placeholder="mail@mail.com"
                          class="p-2 border rounded-xl"
                        />
                        <ErrorMessage
                          name="email"
                          class="bg-transparent text-xs text-red-600"
                        />
                      </div>
                    </div>
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter class="w-full flex justify-between">
                  <DialogClose>
                    <Button
                      variant="outline"
                      class="text-foreground border-foreground rounded-xl"
                      >Cancel</Button
                    ></DialogClose
                  >
                  <Button
                    @click="submitData"
                    type="submit"
                    class="bg-foreground rounded-xl"
                    >Accept Terms & Get Started</Button
                  >
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <ErrorMessage name="password" as="div" v-slot="{ message }">
            <p class="text-red-600 text-xs bg-transparent">{{ message }}</p>
          </ErrorMessage>
        </Form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogClose,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useCredentialsStore } from "@/stores/credentials";
import { storeToRefs } from "pinia";
import { Form, Field, ErrorMessage } from "vee-validate";

const store = useCredentialsStore();
const { password, email, fullname, passwordIsStrong } = storeToRefs(store);
const { submitData } = store;

function passwordStrength(value) {
  password.value = value;
  const hasLower = /[a-z]/.test(value);
  const hasUpper = /[A-Z]/.test(value);
  const hasNumber = /[0-9]/.test(value);
  const hasSpecialChar = /[!@#$%^&*()]/.test(value);

  if (!hasLower || !hasUpper || !hasNumber || !hasSpecialChar) {
    return "Password must include a lowercase letter, uppercase letter, number, and special character.";
  }
  passwordIsStrong.value = !passwordIsStrong.value;
  return true;
}

function validateEmail(value) {
  if (!value) {
    return "This field is required";
  }

  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!regex.test(value)) {
    return "This field must be a valid email";
  }

  email.value = value;
  return true;
}

function validateFullname(value) {
  if (!value) {
    return "This field is required";
  }

  fullname.value = value;
  return true;
}
</script>

<style scoped></style>
