module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addPassthroughCopy("./src/images/");
  eleventyConfig.addPassthroughCopy("./src/js/");

  eleventyConfig.addFilter("digits", function (value) {
    return value.replaceAll(/\D/g, "");
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
