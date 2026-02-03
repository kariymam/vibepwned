const pluginSass = require('eleventy-sass');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const collections = require('./collections.js')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginSass, {
    postcss: postcss([autoprefixer]),
    input: './src/css/*.sass',
    output: './_site/css',
  });
	Object.keys(collections).forEach((collectionName) => {
		eleventyConfig.addCollection(collectionName, collections[collectionName])
	})
  eleventyConfig.addPassthroughCopy('src/css/*.css');
  eleventyConfig.addPassthroughCopy('src/js');
  eleventyConfig.addPassthroughCopy('src/img');
  return {
    dir: {
      input: 'src',
    },
  };
};
