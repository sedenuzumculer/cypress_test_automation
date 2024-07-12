import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
    defaultCommandTimeout:6000,
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
  videosFolder:'cypress/videos',
  video: true,
});
