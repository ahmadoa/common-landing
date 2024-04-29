import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomePage.vue";
import LoginView from "@/views/LoginPage.vue";
import SignUpView from "@/views/SignUpPage.vue";
import ForCompaniesView from "@/views/ForCompanies.vue";
import ExploreView from "@/views/ExplorePage.vue";
import TermsOfServiceView from "@/views/TermsOfService.vue";
import PrivacyPolicyView from "@/views/PrivacyPolicy.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/Login", component: LoginView },
  { path: "/SignUp", component: SignUpView },
  { path: "/ForCompanies", component: ForCompaniesView },
  { path: "/Explore", component: ExploreView },
  { path: "/terms-of-service", component: TermsOfServiceView },
  { path: "/privacy-policy", component: PrivacyPolicyView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
