module.exports = function (eleventyConfig) {
 
  eleventyConfig.addPassthroughCopy("./docs/style.css");
  eleventyConfig.addPassthroughCopy("./docs/images/");
  return {
      dir: {
        input: "docs",
      },
      htmlTemplateEngine: "njk",
  };
}