module.exports = function (eleventyConfig) {
  // Pass images, CSS, and JS straight through to _site without processing
  eleventyConfig.addPassthroughCopy("src/assets");

  // Active nav helper — returns "active" if the page url starts with the given path
  eleventyConfig.addFilter("isActive", function (pageUrl, linkPath) {
    if (linkPath === "/" ) return pageUrl === "/" ? "active" : "";
    return pageUrl.startsWith(linkPath) ? "active" : "";
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_includes",
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
