const CleanCSS = require('clean-css');
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('img');
  eleventyConfig.addPassthroughCopy('favicon.ico');

  eleventyConfig.addFilter('cssmin', function (code) {
    return new CleanCSS({}).minify(code).styles;
  });
  return {
    pathPrefix: '/mapsindoors.com/',
  };
};
