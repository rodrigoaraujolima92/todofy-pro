import { defineStore } from "pinia";

export const useStore = defineStore("user", {
  state: () => {
    return {
      user: {
        name: null,
        token: null,
      },
    };
  },
  actions: {
    setUser() {
      this.user = {};
    },
  },
});
