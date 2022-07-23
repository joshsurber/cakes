module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./images/");
  eleventyConfig.addPassthroughCopy({ "./*.css": "css" });
  eleventyConfig.addPassthroughCopy({ "./*.js": "js" });

  // I used this when I had the phone number in a variable.
  // No point since I doubt it'll change often
  // eleventyConfig.addFilter("digits", function (value) {
  //   return value.replaceAll(/\D/g, "");
  // });

  eleventyConfig.setBrowserSyncConfig({
    ui: { port: 8081 },
    // ghostMode: { clicks: true, forms: true, scroll: true, location: true, },
    open: "external",
    // reloadOnRestart: true,
  });

  // I started using non-default directories but why not just use 11ty as designed?
  // Keeping this here in case I find reason to change my mind...
  // return { dir: { input: "src", output: "public", }, };
};
