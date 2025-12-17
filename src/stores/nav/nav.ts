// stores/nav.ts
import { defineStore } from "pinia";

export const useNavStore = defineStore("nav", {
  state: () => {
    return {
      isNavOpen: true,
    };
  },
  actions: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
  },
});
