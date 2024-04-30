<template>
  <nav class="flex justify-between items-center px-5 md:px-8">
    <router-link to="/">
      <img src="@/assets/logo.svg" alt="logo" class="h-5 md:h-8" />
    </router-link>
    <div v-if="isMobile">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <font-awesome-icon icon="bars" class="text-lg text-foreground" />
        </DropdownMenuTrigger>
        <DropdownMenuContent class="text-secondary-foreground">
          <DropdownMenuItem>
            <router-link to="/Login" active-class="active">Log In</router-link>
          </DropdownMenuItem>
          <DropdownMenuItem
            ><router-link to="/SignUp" active-class="active"
              >Sign Up</router-link
            ></DropdownMenuItem
          >
          <DropdownMenuItem
            ><router-link to="/ForCompanies" active-class="active"
              >For Companies</router-link
            ></DropdownMenuItem
          >
          <DropdownMenuItem
            ><router-link to="/Explore" active-class="active"
              >Explore</router-link
            ></DropdownMenuItem
          >
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
    <ul v-else class="flex gap-5 font-semibold">
      <li>
        <router-link to="/Login" active-class="active">Log In</router-link>
      </li>
      <li>
        <router-link to="/SignUp" active-class="active">Sign Up</router-link>
      </li>
      <li>
        <router-link to="/ForCompanies" active-class="active"
          >For Companies</router-link
        >
      </li>
      <li>
        <router-link to="/Explore" active-class="active">Explore</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@vueuse/core";

const isMobile = useMediaQuery("(max-width: 768px)");
</script>

<style scoped>
.active {
  @apply text-foreground font-bold;
}
</style>
