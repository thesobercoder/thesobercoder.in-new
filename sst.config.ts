/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "thesobercoder-in",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    const domain =
      {
        production: "thesobercoder.in",
        dev: "dev.thesobercoder.in",
      }[$app.stage] || $app.stage + ".dev.thesobercoder.in";

    new sst.aws.Astro("Website", {
      domain:
        $app.stage === "production"
          ? {
              name: domain,
              redirects: ["www.thesobercoder.in"],
            }
          : domain,
    });
  },
});
