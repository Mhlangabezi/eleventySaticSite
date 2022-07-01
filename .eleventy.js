module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/style.css");
    eleventyConfig.addPassthroughCopy("./src/img/cover.PNG");
    eleventyConfig.addPassthroughCopy("./src/img/prison-break.png");
    
    return {
      dir: {
        input: "src",
        output: "public"
      },
    };
  };