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
        <form class="w-5/6 md:w-4/6 flex flex-col">
          <div class="w-full h-10 flex">
            <Input
              v-bind="passwordAttrs"
              v-model="password"
              name="password"
              id="password"
              class="w-2/3 h-full border-0 outline-none rounded-r-none rounded-l-xl focus-visible:ring-0 px-3 bg-white"
              placeholder="Enter Password"
            />
            <Dialog>
              <DialogTrigger
                class="w-1/3"
                :disabled="errors.password || !password"
              >
                <Button
                  type="button"
                  :disabled="errors.password || !password"
                  class="bg-foreground text-lg w-full h-full rounded-l-none rounded-r-xl"
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
                        <Input
                          name="fullname"
                          id="fullname"
                          v-model="fullname"
                          v-bind="fullnameAttrs"
                          placeholder="John Doe"
                          class="p-2 border rounded-xl"
                        />
                        <div class="text-red-600 mt-1 text-sm">
                          {{ errors.fullname }}
                        </div>
                      </div>
                      <div class="grid w-full max-w-sm items-center gap-1">
                        <Label for="email">
                          Email Address
                          <span class="text-red-600">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          v-model="email"
                          v-bind="emailAttrs"
                          placeholder="mail@mail.com"
                          class="p-2 border rounded-xl"
                        />
                        <span class="text-red-600 mt-1 text-sm">
                          {{ errors.email }}
                        </span>
                      </div>
                    </div>
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter class="w-full flex justify-between">
                  <DialogClose>
                    <Button
                      type="reset"
                      variant="outline"
                      @click="
                        resetForm({
                          values: {
                            email: '',
                            fullname: '',
                            password: '',
                          },
                        })
                      "
                      class="text-foreground border-foreground rounded-xl"
                    >
                      Cancel
                    </Button></DialogClose
                  >

                  <Button
                    @click="onSubmit"
                    type="submit"
                    class="bg-foreground rounded-xl"
                    >Accept Terms & Get Started</Button
                  >
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <div class="text-red-600 text-sm">
            {{ errors.password }}
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
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
import { useForm } from "vee-validate";
import * as yup from "yup";

const store = useCredentialsStore();
const { submitData } = store;

const schema = yup.object({
  email: yup.string().required().email(),
  fullname: yup.string().required(),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Must be 8 characters or more")
    .matches(/[a-z]+/, "One lowercase character")
    .matches(/[A-Z]+/, "One uppercase character")
    .matches(/[@$!%*#?&]+/, "One special character")
    .matches(/\d+/, "One number"),
});

const { defineField, handleSubmit, resetForm, errors } = useForm({
  validationSchema: schema,
});

const [email, emailAttrs] = defineField("email");
const [password, passwordAttrs] = defineField("password");
const [fullname, fullnameAttrs] = defineField("fullname");

const onSubmit = handleSubmit(async (values) => {
  await submitData(values);
  resetForm();
});
</script>
