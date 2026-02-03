const header = 'Welcome to this wonderful example timeline.';
const footer = 'A footer goes here.';

// Page details
const pageTitle = 'Static timeline generator'; // The title of the page that shows in the browser tab
const pageDescription = 'A super fancy timeline'; // The description of the page for search engines
const pageAuthor = 'Jane Doe'; // Your name
const showMirrorLinks = true; // Whether to show links to the Wayback Machine and archive.is mirrors.

// DON'T EDIT BELOW THIS LINE! --------------------------------------------------------------------
const getFilters = (entries) => {
  const filters = new Set();
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    if (Object.prototype.hasOwnProperty.call(entry["data"], 'categories')) {
      for (var j = 0; j < entry["data"]["categories"].length; j++) {
        filters.add(entry["data"]["categories"][j]);
      }
    }
  }
  var filtersArray = [...filters];
  filtersArray.sort();
  return filtersArray;
};

const addCategoriesStringsToEntries = (entries) => {
  for (const entry of entries) {
    if (Object.prototype.hasOwnProperty.call(entry["data"], 'categories')) {
      entry["data"].categoriesString = entry["data"]["categories"].join(',');
    }
  }
  return entries;
};

module.exports = {
  header,
  footer,
  showMirrorLinks,
  entries: (collection) => addCategoriesStringsToEntries(collection),
  filters: (collection) => getFilters(collection),
  head: {
    title: pageTitle,
    description: pageDescription,
    author: pageAuthor,
  },
};
