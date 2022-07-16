module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addPassthroughCopy("./src/images/");
  eleventyConfig.addPassthroughCopy("./src/js/");
  eleventyConfig.addPassthroughCopy({ "./src/*.css": "css" });

  eleventyConfig.addFilter("digits", function (value) {
    return value.replaceAll(/\D/g, "");
  });

  eleventyConfig.setBrowserSyncConfig({
    ui: { port: 8081 },
    // ghostMode: { clicks: true, forms: true, scroll: true, location: true, },
    open: "external",
    reloadOnRestart: true,
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
