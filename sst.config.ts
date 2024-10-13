/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "thesobercoder.in",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    new sst.aws.Astro("Website", {
      domain: {
        name: "thesobercoder.in",
        redirects: ["www.thesobercoder.in"],
      },
    });
  },
});
