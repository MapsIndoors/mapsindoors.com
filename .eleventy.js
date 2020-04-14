module.exports = function (eleventyConfig) {
  // Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy('img');

  // Copy `css/fonts/` to `_site/css/fonts`
  // If you use a subdirectory, it’ll copy using the same directory structure.
  eleventyConfig.addPassthroughCopy({
    'style.css': 'style/style.css',
  });
  eleventyConfig.addPassthroughCopy({
    'node_modules/@mapsindoors/midt/midt.css': 'style/midt.css',
  });
  eleventyConfig.addPassthroughCopy({
    'node_modules/@mapsindoors/midt/midt-helpers.css': 'style/midt-helpers.css',
  });
  eleventyConfig.addPassthroughCopy({
    'node_modules/@mapsindoors/css/buttons.css': 'style/buttons.css',
  });
  eleventyConfig.addPassthroughCopy({
    'node_modules/normalize.css/normalize.css': 'style/normalize.css',
  });
};
